import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3 AM Excuse — a hardware wallet refuses to sign at 3 AM.
// One line, under 200 characters, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The joke's angle: the wallet is a worker with a shift, not a gadget
// with a dead battery. Its keys clocked out at midnight, its screen is
// already in pajamas, and the punchline turns the hour itself into the
// bouncer — nothing here works at 3 PM, when the sun is already up.
const LINE =
  "3 AM? My keys are off the clock, my screen's in pajamas, and I don't sign anything that couldn't wait for sunrise — come back when the sun does.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
