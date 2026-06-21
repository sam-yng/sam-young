import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const required = [
	"AGENTS.md",
	"docs/DESIGN.md",
	"docs/CONTENT.md",
	"docs/ARCHITECTURE.md",
];
const errors = [];

for (const file of required) {
	if (!existsSync(join(root, file)))
		errors.push(`missing required file: ${file}`);
}

const agentsPath = join(root, "AGENTS.md");
if (existsSync(agentsPath)) {
	const lineCount = readFileSync(agentsPath, "utf8").split("\n").length;
	if (lineCount > 120) {
		errors.push(
			`AGENTS.md is ${lineCount} lines; keep the map at or below 120`,
		);
	}
}

function walk(directory) {
	if (!existsSync(directory)) return [];
	return readdirSync(directory).flatMap((entry) => {
		const path = join(directory, entry);
		return statSync(path).isDirectory() ? walk(path) : [path];
	});
}

const markdownFiles = [
	join(root, "AGENTS.md"),
	join(root, "README.md"),
	...walk(join(root, "docs")),
	...walk(join(root, ".agents", "skills")),
].filter((file) => extname(file) === ".md" && existsSync(file));

for (const file of markdownFiles) {
	const lines = readFileSync(file, "utf8").split("\n");
	let inFence = false;

	lines.forEach((line, index) => {
		if (line.trimStart().startsWith("```")) {
			inFence = !inFence;
			return;
		}
		if (inFence) return;

		for (const match of line.matchAll(/(?<!!)\[[^\]]+\]\(([^)]+)\)/g)) {
			const target = match[1].trim().replace(/^<|>$/g, "").split("#")[0];
			if (!target || /^(https?:|mailto:|tel:)/.test(target)) continue;

			const resolved = resolve(dirname(file), decodeURIComponent(target));
			if (!existsSync(resolved)) {
				errors.push(
					`${relative(root, file)}:${index + 1} has missing link target ${target}`,
				);
			}
		}
	});
}

if (errors.length) {
	console.error("Documentation checks failed:\n");
	for (const error of errors) console.error(`- ${error}`);
	process.exit(1);
}

console.log(`Documentation checks passed (${markdownFiles.length} files).`);
