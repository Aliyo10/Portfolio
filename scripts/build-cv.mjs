// Génère public/cv-aliyo-moussa.pdf à partir de scripts/cv/cv.html
// en l'imprimant avec Chrome / Edge en mode headless (aucune dépendance npm).
//
// Usage : npm run cv
// Navigateur : variable CHROME_PATH, sinon emplacements Windows / macOS / Linux usuels.

import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "scripts", "cv", "cv.html");
const output = join(root, "public", "cv-aliyo-moussa.pdf");

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
  console.error("Aucun navigateur Chrome/Edge trouvé. Définissez CHROME_PATH.");
  process.exit(1);
}

// Profil temporaire : n'interfère pas avec un navigateur déjà ouvert.
const profile = mkdtempSync(join(tmpdir(), "cv-chrome-"));

try {
  const result = spawnSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      `--user-data-dir=${profile}`,
      "--no-pdf-header-footer",
      "--virtual-time-budget=15000",
      `--print-to-pdf=${output}`,
      pathToFileURL(source).href,
    ],
    { stdio: "inherit", timeout: 120_000 },
  );

  if (result.status !== 0 || !existsSync(output)) {
    console.error("La génération du PDF a échoué.");
    process.exit(result.status ?? 1);
  }

  console.log(`CV généré : ${output} (${Math.round(statSync(output).size / 1024)} Ko)`);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
