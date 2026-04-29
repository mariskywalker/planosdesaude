import "server-only";
import fs from "node:fs";
import path from "node:path";

function loadAndAnnotateSvg(): string {
  const svgPath = path.join(process.cwd(), "public", "cenario-atual.svg");
  let svg = fs.readFileSync(svgPath, "utf8");

  // Add classes to the main "puzzle piece" groups so we can animate them individually.
  // These filters come from the exported Figma SVG and are stable identifiers.
  svg = svg.replace(
    /<g\s+filter="url\(#filter2_iii_2007_195\)"/g,
    '<g filter="url(#filter2_iii_2007_195)" class="ca-piece ca-piece-1"',
  );
  svg = svg.replace(
    /<g\s+filter="url\(#filter3_dii_2007_195\)"/g,
    '<g filter="url(#filter3_dii_2007_195)" class="ca-piece ca-piece-2"',
  );
  svg = svg.replace(
    /<g\s+filter="url\(#filter4_dii_2007_195\)"/g,
    '<g filter="url(#filter4_dii_2007_195)" class="ca-piece ca-piece-3"',
  );
  svg = svg.replace(
    /<g\s+filter="url\(#filter5_iii_2007_195\)"/g,
    '<g filter="url(#filter5_iii_2007_195)" class="ca-piece ca-piece-4"',
  );

  // Mark a couple of arrow elements (optional subtle motion).
  svg = svg.replace(
    /<path d="M894\.846 395\.898[\s\S]*?stroke-width="1\.20692"\/>/g,
    (m) => m.replace("<path ", '<path class="ca-arrow ca-arrow-1" '),
  );
  svg = svg.replace(
    /<path d="M526\.516 117\.052[\s\S]*?stroke-width="1\.20692"\/>/g,
    (m) => m.replace("<path ", '<path class="ca-arrow ca-arrow-2" '),
  );

  // Ensure the root <svg> has a class hook.
  svg = svg.replace(/<svg\b/, '<svg class="ca-svg"');

  return svg;
}

export function CenarioAtualWidgetGraphic() {
  const svg = loadAndAnnotateSvg();

  return (
    <div
      className="ca-wrap"
      // SVG is local (public/) and treated as trusted project asset.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

