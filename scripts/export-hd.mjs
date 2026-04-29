#!/usr/bin/env node
/**
 * Exporta uma cópia “alta definição” do projeto (sem builds e deps),
 * concentrando tudo em exports/hd/ para arquivar/compartilhar.
 *
 * Nota: SVG já é escalável (HD por natureza).
 */
import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const outDir = path.join(projectRoot, "exports", "hd");

const EXCLUDE = new Set([
  ".git",
  ".next",
  "node_modules",
  "exports",
  ".vercel",
  ".DS_Store",
]);

function rmrf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function shouldExclude(rel) {
  const first = rel.split(path.sep)[0];
  return EXCLUDE.has(first);
}

function copyFile(src, dst) {
  ensureDir(path.dirname(dst));
  fs.copyFileSync(src, dst);
}

function copyDir(srcDir, dstDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const e of entries) {
    const src = path.join(srcDir, e.name);
    const dst = path.join(dstDir, e.name);
    if (e.isDirectory()) {
      ensureDir(dst);
      copyDir(src, dst);
    } else if (e.isFile()) {
      copyFile(src, dst);
    }
  }
}

function walkAndCopyProject() {
  const stack = [projectRoot];
  while (stack.length) {
    const cur = stack.pop();
    const rel = path.relative(projectRoot, cur);
    if (rel && shouldExclude(rel)) continue;

    const entries = fs.readdirSync(cur, { withFileTypes: true });
    for (const e of entries) {
      const src = path.join(cur, e.name);
      const relPath = path.relative(projectRoot, src);
      if (shouldExclude(relPath)) continue;

      const dst = path.join(outDir, relPath);
      if (e.isDirectory()) {
        ensureDir(dst);
        stack.push(src);
      } else if (e.isFile()) {
        copyFile(src, dst);
      }
    }
  }
}

rmrf(outDir);
ensureDir(outDir);

// Copia tudo relevante do projeto (código + public + configs).
walkAndCopyProject();

// Garante que public/ (assets) esteja completo (HD).
const publicSrc = path.join(projectRoot, "public");
const publicDst = path.join(outDir, "public");
if (fs.existsSync(publicSrc)) {
  rmrf(publicDst);
  ensureDir(publicDst);
  copyDir(publicSrc, publicDst);
}

fs.writeFileSync(
  path.join(outDir, "EXPORT_INFO.txt"),
  [
    "CADU — Export HD",
    `Gerado em: ${new Date().toISOString()}`,
    "",
    "Conteúdo:",
    "- Código-fonte e configs do projeto",
    "- Assets em /public (SVG = alta definição / escalável)",
    "",
    "Excluídos:",
    "- node_modules, .next, .git, exports",
    "",
  ].join("\n"),
  "utf8",
);

console.log(`Export concluído em: ${path.relative(projectRoot, outDir)}`);

