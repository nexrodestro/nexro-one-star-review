// One-star review of an everyday essential — one line, UTF-8, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "One star. The blanket covers everything except my feet, every single night.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
