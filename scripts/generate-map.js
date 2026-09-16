const fs = require('fs');

async function generate() {
  console.log('Fetching Natural Earth GeoJSON...');
  const res = await fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson');
  const data = await res.json();

  // Width and Height tuned to match the card aspect ratio (~1.4)
  const width = 1000;
  const height = 700;

  // Miller cylindrical projection calibrated for best aesthetic world layout
  function miller(lon, lat) {
    const x = (lon + 180) * (width / 360);
    // Bound latitude between -56 and +82
    const clampedLat = Math.max(-56, Math.min(82, lat));
    const latRad = clampedLat * (Math.PI / 180);
    const yVal = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * latRad));
    
    const maxM = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * (82 * Math.PI / 180)));
    const minM = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * (-56 * Math.PI / 180)));
    const y = height * (1 - (yVal - minM) / (maxM - minM));
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  }

  function coordsToPath(coords) {
    return coords.map(ring => {
      let d = '';
      for (let i = 0; i < ring.length; i++) {
        const [lon, lat] = ring[i];
        if (lat < -56) continue;
        const [x, y] = miller(lon, lat);
        d += (d === '' ? 'M' : 'L') + x + ' ' + y;
      }
      return d ? d + 'Z' : '';
    }).filter(Boolean).join(' ');
  }

  let paths = [];
  let lkPath = '';

  for (const f of data.features) {
    if (f.properties.CONTINENT === 'Antarctica') continue;
    const isLK = f.properties.NAME === 'Sri Lanka' || f.properties.SOVEREIGNT === 'Sri Lanka';
    const type = f.geometry.type;
    let d = '';
    if (type === 'Polygon') {
      d = coordsToPath(f.geometry.coordinates);
    } else if (type === 'MultiPolygon') {
      d = f.geometry.coordinates.map(coordsToPath).filter(Boolean).join(' ');
    }
    if (d) {
      if (isLK) {
        lkPath = d;
      } else {
        paths.push(d);
      }
    }
  }

  const colombo = miller(79.8612, 6.9271);
  const cx = colombo[0];
  const cy = colombo[1];
  console.log(`Colombo precise coords in 1000x700: x=${cx}, y=${cy}`);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
  <defs>
    <filter id="lkGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#ff8a00" flood-opacity="0.9"/>
    </filter>
    <filter id="beaconGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="3.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <radialGradient id="cardAura" cx="${cx / width * 100}%" cy="${cy / height * 100}%" r="35%">
      <stop offset="0%" stop-color="#ff8a00" stop-opacity="0.12"/>
      <stop offset="50%" stop-color="#ff8a00" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#ff8a00" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Ambient Radar Aura centered on Sri Lanka -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#cardAura)" />

  <!-- High-Tech Navigator Coordinates Grid -->
  <g stroke="rgba(255, 255, 255, 0.08)" stroke-width="0.9" stroke-dasharray="4 6" fill="none">
    <line x1="0" y1="${height * 0.2}" x2="${width}" y2="${height * 0.2}" />
    <line x1="0" y1="${height * 0.4}" x2="${width}" y2="${height * 0.4}" />
    <line x1="0" y1="${height * 0.6}" x2="${width}" y2="${height * 0.6}" />
    <line x1="0" y1="${height * 0.8}" x2="${width}" y2="${height * 0.8}" />
    <line x1="${width * 0.15}" y1="0" x2="${width * 0.15}" y2="${height}" />
    <line x1="${width * 0.3}" y1="0" x2="${width * 0.3}" y2="${height}" />
    <line x1="${width * 0.5}" y1="0" x2="${width * 0.5}" y2="${height}" />
    <line x1="${width * 0.7}" y1="0" x2="${width * 0.7}" y2="${height}" />
    <line x1="${width * 0.85}" y1="0" x2="${width * 0.85}" y2="${height}" />
  </g>

  <!-- Global Continents / Countries: High-definition, clear contrast -->
  <g fill="#243048" stroke="#3d4f73" stroke-width="1.2" stroke-linejoin="round">
    ${paths.map(p => `<path d="${p}" />`).join('\n    ')}
  </g>

  <!-- Sri Lanka highlighted in luminous glowing orange -->
  <g fill="#ff8a00" stroke="#ffedd5" stroke-width="1.8" filter="url(#lkGlow)">
    <path d="${lkPath}" />
  </g>

  <!-- Animated Radar Beacon directly on Colombo, Sri Lanka -->
  <g transform="translate(${cx}, ${cy})">
    <!-- Pulsing Radar Wave 1 -->
    <circle cx="0" cy="0" r="6" fill="none" stroke="#ff8a00" stroke-width="2.2" opacity="0.9">
      <animate attributeName="r" values="5;32" dur="2.2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.95;0" dur="2.2s" repeatCount="indefinite" />
      <animate attributeName="stroke-width" values="2.2;0.5" dur="2.2s" repeatCount="indefinite" />
    </circle>
    
    <!-- Pulsing Radar Wave 2 -->
    <circle cx="0" cy="0" r="4" fill="none" stroke="#fbbf24" stroke-width="2" opacity="1">
      <animate attributeName="r" values="3;20" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
      <animate attributeName="stroke-width" values="2;0.4" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
    </circle>

    <!-- Glowing Core Dot -->
    <circle cx="0" cy="0" r="6" fill="#ea580c" filter="url(#beaconGlow)" />
    <circle cx="0" cy="0" r="4" fill="#ff8a00" stroke="#ffffff" stroke-width="1.5" />
    <circle cx="0" cy="0" r="1.5" fill="#ffffff" />

    <!-- High-Tech Tag -->
    <g transform="translate(12, -14)">
      <rect x="0" y="0" width="88" height="24" rx="5" fill="#080c14" fill-opacity="0.95" stroke="#ff8a00" stroke-width="1.2" />
      <circle cx="9" cy="12" r="3.5" fill="#ff8a00">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <text x="18" y="15.5" fill="#fb923c" font-family="monospace, ui-monospace, sans-serif" font-size="10" font-weight="700" letter-spacing="0.6">COLOMBO, LK</text>
    </g>
  </g>
</svg>`;

  fs.writeFileSync('public/images/world-map.svg', svg);
  console.log('Saved public/images/world-map.svg! File size:', svg.length);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
