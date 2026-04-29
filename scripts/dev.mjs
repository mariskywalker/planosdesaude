#!/usr/bin/env node
/**
 * Inicia o Next com -H 0.0.0.0 e mostra o URL para abrir noutro dispositivo na mesma Wi‑Fi.
 * Sem `shell: true` (Node deprecia) e, se 3000 estiver ocupada, tenta 3001…3020.
 */
import { spawn } from "node:child_process";
import net from "node:net";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = join(projectRoot, "node_modules", "next", "dist", "bin", "next");

function isIPv4(a) {
  return a.family === "IPv4" || a.family === 4;
}

function pickLanAddress() {
  let ifaces;
  try {
    ifaces = os.networkInterfaces();
  } catch {
    return "127.0.0.1";
  }
  const candidates = [];
  for (const addrs of Object.values(ifaces)) {
    if (!addrs) continue;
    for (const a of addrs) {
      if (!isIPv4(a) || a.internal) continue;
      const ip = a.address;
      if (ip.startsWith("169.254.")) continue;
      candidates.push(ip);
    }
  }
  const score = (ip) => {
    if (ip.startsWith("192.168.")) return 3;
    if (ip.startsWith("10.")) return 2;
    if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(ip)) return 2;
    return 1;
  };
  candidates.sort((a, b) => score(b) - score(a));
  return candidates[0] ?? "127.0.0.1";
}

/** true se a porta puder ser usada (nada a escutar) */
function isPortFree(port) {
  return new Promise((resolve) => {
    const s = net.createServer();
    s.once("error", () => resolve(false));
    s.listen(port, () => {
      s.close(() => resolve(true));
    });
  });
}

async function pickPort() {
  const fromEnv = process.env.PORT;
  if (fromEnv != null && fromEnv !== "") {
    const p = Number.parseInt(fromEnv, 10);
    if (!Number.isNaN(p) && p > 0) {
      if (await isPortFree(p)) return p;
      console.error(
        `\n  \x1b[33mA porta ${p} (PORT) está em uso. Liberta-a ou escolhe outra:\x1b[0m  PORT=3001 npm run dev\n`,
      );
      process.exit(1);
    }
  }
  for (let p = 3000; p <= 3020; p++) {
    if (await isPortFree(p)) return p;
  }
  console.error("\n  \x1b[33mNão há portas livres entre 3000 e 3020.\x1b[0m\n");
  process.exit(1);
}

const port = await pickPort();
const ip = pickLanAddress();

console.log("");
console.log("  \x1b[1mCADU – servidor de desenvolvimento\x1b[0m");
if (port !== 3000) {
  console.log(
    `  \x1b[90m(Porta 3000 ocupada — a usar :${port}. Para libertar 3000: lsof -i :3000)\x1b[0m`,
  );
  console.log("");
}
console.log("");
console.log("  Noutro PC ou telemóvel (mesma Wi‑Fi), abre no browser:");
console.log(`  \x1b[36m  http://${ip}:${port}\x1b[0m`);
console.log("");
console.log("  Nesta máquina:");
console.log(`  \x1b[90m  http://127.0.0.1:${port}\x1b[0m`);
console.log("");
if (ip === "127.0.0.1") {
  console.log("  \x1b[33m(Aviso: não detetei IP de rede. Liga o Wi‑Fi.)\x1b[0m");
  console.log("");
}

if (!existsSync(nextBin)) {
  console.error("  \x1b[31mFalta node_modules. Corre: npm install\x1b[0m\n");
  process.exit(1);
}

const child = spawn(process.execPath, [nextBin, "dev", "-H", "0.0.0.0", "-p", String(port)], {
  cwd: projectRoot,
  stdio: "inherit",
  env: { ...process.env, PORT: String(port) },
});

child.on("close", (code) => process.exit(code ?? 0));
