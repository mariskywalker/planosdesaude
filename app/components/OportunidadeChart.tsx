"use client";

import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { tema: "Aderência terapêutica", valor: 399000 },
  { tema: "Performance clínicas", valor: 216000 },
  { tema: "Rastreabilidade", valor: 231000 },
  { tema: "Fraude", valor: 128000 },
  { tema: "Ajuste de suporte", valor: 56700 },
];

type MarginDef = { top: number; right: number; bottom: number; left: number };

type OportunidadeChartProps = {
  width?: number;
  height?: number;
  margin?: MarginDef;
};

export default function OportunidadeChart({ width = 520, height = 200, margin: marginProp }: OportunidadeChartProps) {
  const margin: MarginDef =
    marginProp ??
    (height >= 240
      ? { top: 16, right: 36, bottom: 32, left: 52 }
      : { top: 16, right: 32, bottom: 28, left: 48 });

  return (
    <BarChart width={width} height={height} data={data} layout="vertical" margin={margin}>
      <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" horizontal={false} />
      <XAxis
        type="number"
        tick={{ fill: "#888888", fontSize: 11 }}
        axisLine={false}
        tickLine={false}
        tickFormatter={(v) => `R$ ${(Number(v) / 1000).toFixed(0)}k`}
      />
      <YAxis
        type="category"
        dataKey="tema"
        width={150}
        tick={{ fill: "#575750", fontSize: 11 }}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip
        formatter={(value) => [`R$ ${Number(value ?? 0).toLocaleString("pt-BR")}`, ""]}
        contentStyle={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", fontSize: 12 }}
      />
      <Bar dataKey="valor" radius={[0, 8, 8, 0]} maxBarSize={22}>
        {data.map((d) => (
          <Cell
            key={d.tema}
            fill={
              d.tema === "Aderência terapêutica"
                ? "#E8351A"
                : d.tema === "Performance clínicas"
                  ? "#F5A623"
                  : d.tema === "Rastreabilidade"
                    ? "#3B82F6"
                    : d.tema === "Fraude"
                      ? "#8B5CF6"
                      : "#2DB07A"
            }
          />
        ))}
      </Bar>
    </BarChart>
  );
}
