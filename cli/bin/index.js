#!/usr/bin/env node

/**
 * Subhash Ketagoda — Interactive Developer CLI Card
 * Zero external dependencies for instant <300ms execution anywhere via:
 *   npx subhash-ketagoda
 */

const { exec } = require("child_process");

// ANSI color sequences
const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  orange: "\x1b[38;2;255;138;0m",
  amber: "\x1b[38;2;255;173;66m",
  gold: "\x1b[38;2;255;200;100m",
  white: "\x1b[38;2;255;255;255m",
  gray: "\x1b[38;2;140;145;155m",
  darkGray: "\x1b[38;2;80;85;95m",
  emerald: "\x1b[38;2;52;211;153m",
  cyan: "\x1b[38;2;56;189;248m",
};

// Handle optional CLI arguments (e.g. npx subhash-ketagoda --web)
const args = process.argv.slice(2);
if (args.includes("--web") || args.includes("-w")) {
  openUrl("https://subhashketagoda.com");
  process.exit(0);
} else if (args.includes("--github") || args.includes("-g")) {
  openUrl("https://github.com/Subashketagoda");
  process.exit(0);
} else if (args.includes("--email") || args.includes("-e")) {
  openUrl("mailto:contact@subhashketagoda.com");
  process.exit(0);
}

function openUrl(url) {
  const start = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";
  exec(`${start} ${url}`);
  console.log(`\n  ${c.emerald}✔ Opening ${url}...${c.reset}\n`);
}

// Helper to strip ANSI codes and calculate real visual width
function getVisualLength(str) {
  return str.replace(/\x1b\[[0-9;]*m/g, "").length;
}

const BOX_WIDTH = 70;

function formatRow(content = "") {
  const visualLen = getVisualLength(content);
  const padding = Math.max(0, BOX_WIDTH - visualLen);
  return `  ${c.orange}│${c.reset}  ${content}${" ".repeat(padding)}${c.orange}│${c.reset}`;
}

const lines = [
  "",
  `  ${c.orange}╭${"─".repeat(BOX_WIDTH + 2)}╮${c.reset}`,
  formatRow(""),
  formatRow(`${c.bold}${c.white}SUBHASH KETAGODA${c.reset}  ${c.gray}/${c.reset}  ${c.amber}@subashketagoda${c.reset}`),
  formatRow(`${c.dim}${c.white}Full-Stack Developer & Software Engineer${c.reset}`),
  formatRow(""),
  formatRow(`${c.orange}${c.bold}Status:${c.reset}       ${c.emerald}●${c.reset} ${c.white}Available for Select Opportunities & Custom Projects${c.reset}`),
  formatRow(`${c.orange}${c.bold}Focus:${c.reset}        ${c.gray}Next.js • React • Node.js • TypeScript • Cloud Engines${c.reset}`),
  formatRow(`${c.orange}${c.bold}Studio:${c.reset}       ${c.white}69 Studio${c.reset} ${c.gray}(Founder & Lead Architect)${c.reset}`),
  formatRow(""),
  formatRow(`${c.orange}${c.bold}Website:${c.reset}      ${c.cyan}https://subhashketagoda.com${c.reset}`),
  formatRow(`${c.orange}${c.bold}GitHub:${c.reset}       ${c.white}https://github.com/Subashketagoda${c.reset}`),
  formatRow(`${c.orange}${c.bold}LinkedIn:${c.reset}     ${c.white}https://linkedin.com/in/subhash-ketagoda${c.reset}`),
  formatRow(`${c.orange}${c.bold}Email:${c.reset}        ${c.amber}contact@subhashketagoda.com${c.reset}`),
  formatRow(""),
  formatRow(`${c.orange}${c.bold}Card:${c.reset}         ${c.gray}$${c.reset} ${c.amber}npx subhash-ketagoda${c.reset}`),
  formatRow(""),
  formatRow(`${c.darkGray}Quick Commands:${c.reset}`),
  formatRow(`${c.gray}• Open Portfolio:${c.reset}    ${c.dim}npx subhash-ketagoda --web${c.reset}`),
  formatRow(`${c.gray}• View Repositories:${c.reset} ${c.dim}npx subhash-ketagoda --github${c.reset}`),
  formatRow(""),
  `  ${c.orange}╰${"─".repeat(BOX_WIDTH + 2)}╯${c.reset}`,
  "",
];

console.log(lines.join("\n"));
