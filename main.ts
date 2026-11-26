// Make the Judge Laugh in One Line — u-email-baru-make-the-judge-laugh-in-one-line-791ccb21
// One funny line, 200 characters or fewer, on any topic. The judge weighs,
// most important first: a joke a stranger gets in one read; surprise (setup
// then break); tightness (every word earns its place, laugh lands at the end);
// freshness; clean reading out loud.
//
// The line: a cook follows the recipe exactly — the obedient setup — and the
// recipe, an object that cannot sue, sues anyway. The laugh lands on the
// last two words, "restraining order", with nothing explained.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I followed the recipe exactly. The recipe has now filed a restraining order.";

// Gate guard: the competition accepts 1–200 characters, exactly one line.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be one line of 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

// Post-write read-back: the file on disk must be byte-identical to the line.
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line");
}
