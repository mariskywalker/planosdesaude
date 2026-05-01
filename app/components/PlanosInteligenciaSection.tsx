"use client";

import OportunidadeChart from "./OportunidadeChart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const brl = (n: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(n);

const brlCompact = (n: number) => brl(n);

const CHART_COLORS = {
  primary: "#E8351A",
  secondary: "#2DB07A",
  tertiary: "#F5A623",
  muted: "#ABABAB",
  blue: "#3B82F6",
  violet: "#8B5CF6",
  pink: "#EC4899",
};

const altaData = [
  { mes: "Jan", evolucao: 38, suporte: 100 },
  { mes: "Fev", evolucao: 48, suporte: 100 },
  { mes: "Mar", evolucao: 61, suporte: 100 },
  { mes: "Abr", evolucao: 72, suporte: 85 },
  { mes: "Mai", evolucao: 78, suporte: 75 },
  { mes: "Jun", evolucao: 82, suporte: 70 },
];

const CLINICA_COLORS = [CHART_COLORS.secondary, CHART_COLORS.primary, CHART_COLORS.tertiary, CHART_COLORS.blue, CHART_COLORS.violet];

const performanceClinicasData = [
  { clinica: "Clínica A", custo: 2900, evolucao: 78, fill: CLINICA_COLORS[0] },
  { clinica: "Clínica B", custo: 4700, evolucao: 34, fill: CLINICA_COLORS[1] },
  { clinica: "Clínica C", custo: 3200, evolucao: 72, fill: CLINICA_COLORS[2] },
  { clinica: "Clínica D", custo: 4100, evolucao: 49, fill: CLINICA_COLORS[3] },
  { clinica: "Clínica E", custo: 2800, evolucao: 81, fill: CLINICA_COLORS[4] },
];

const aderenciaData = [
  { terapia: "ABA", prescrito: 20, realizado: 13 },
  { terapia: "Fono", prescrito: 8, realizado: 6 },
  { terapia: "TO", prescrito: 10, realizado: 7 },
  { terapia: "Psico", prescrito: 6, realizado: 5 },
];

const operacionalData = [
  { status: "Com evidência", valor: 10350 },
  { status: "Sem evidência", valor: 1650 },
];

const PIE_COLORS = [CHART_COLORS.secondary, CHART_COLORS.primary];

const CHART_W_SEC = 520;
const CHART_H_SEC = 180;
const MARGIN_SEC = { top: 16, right: 24, bottom: 24, left: 24 } as const;

function ChartCard({
  title,
  subtitle,
  children,
  className,
  variant = "secondary",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "secondary" | "hero";
}) {
  const shell =
    variant === "hero"
      ? "rounded-2xl border border-gray-100 shadow-sm bg-transparent p-6 md:p-8 "
      : "rounded-2xl border border-gray-100 shadow-sm bg-transparent p-5 ";

  const headerMb = variant === "hero" ? "mb-6" : "mb-4";

  return (
    <div className={shell + (className ?? "")}>
      <div className={`${headerMb} space-y-1`}>
        <h4 className="text-xs font-medium leading-normal text-gray-500">{title}</h4>
        {subtitle ? <p className="text-xs leading-relaxed text-gray-400">{subtitle}</p> : null}
      </div>
      <div className="rounded-xl bg-transparent px-3 pb-2 pt-4 md:px-4 md:pb-3">
        <div className="w-full overflow-x-auto">
          {variant === "hero" ? (
            <div className="flex w-full justify-center">{children}</div>
          ) : (
            <div className="mx-auto w-[520px] max-w-full">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PlanosInteligenciaSection() {
  return (
    <section id="inteligencia-clinica" className="section-setor bg-[var(--bg-alt)] py-16 md:py-24">
      <div className="wrap">
        <header className="reveal mb-12 max-w-[48rem]">
          <p className="eyebrow text-[var(--red)]">Inteligência clínica</p>
          <h2 className="section-headline mt-2">Indicadores em uma carteira simulada</h2>
          <p className="section-body mt-4 text-[var(--text-2)]">
            Visualizações ilustrativas a partir dos pressupostos abaixo — úteis para ancorar conversas sobre risco,
            oportunidade e priorização com a operadora.
          </p>
        </header>

        <div className="space-y-24">
          {/* 1 — Fraude / anomalias */}
          <section>
            <div className="flex flex-col gap-6">
              <div className="space-y-3 text-sm text-gray-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Padrões atípicos de custo</h3>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-900">Pacientes analisados:</strong> 1.000
                  </li>
                  <li>
                    <strong className="text-gray-900">Casos com padrão atípico:</strong> 8% = 80 pacientes
                  </li>
                  <li>
                    <strong className="text-gray-900">Custo médio mensal (atípico):</strong> {brl(4800)}
                  </li>
                  <li>
                    <strong className="text-gray-900">Custo esperado (perfil semelhante):</strong> {brl(3200)}
                  </li>
                  <li>
                    <strong className="text-gray-900">Diferença mensal:</strong> {brl(1600)} por paciente
                  </li>
                  <li className="pt-2 text-gray-900">
                    <strong>Impacto mensal potencial:</strong> 80 × {brl(1600)} ={" "}
                    <span className="font-medium text-red-500">{brl(128_000)}/mês</span>
                  </li>
                  <li>
                    <strong>Impacto anual:</strong> {brl(1_536_000)}/ano
                  </li>
                </ul>
              </div>
              <ChartCard title="Custo esperado vs. observado (R$ / mês)">
                <BarChart
                  width={CHART_W_SEC}
                  height={CHART_H_SEC}
                  data={[
                    { name: "Custo esperado", valor: 3200 },
                    { name: "Custo observado", valor: 4800 },
                  ]}
                  margin={{ ...MARGIN_SEC }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: "#888888", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis
                    tick={{ fill: "#888888", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    width={56}
                    tickFormatter={(v) => `R$ ${(Number(v) / 1000).toFixed(1)}k`}
                  />
                  <Tooltip
                    formatter={(value) => [brlCompact(Number(value ?? 0)), ""]}
                    contentStyle={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", fontSize: 12 }}
                  />
                  <Bar dataKey="valor" radius={[8, 8, 0, 0]} maxBarSize={48}>
                    <Cell fill={CHART_COLORS.secondary} />
                    <Cell fill={CHART_COLORS.primary} />
                  </Bar>
                </BarChart>
              </ChartCard>
            </div>
          </section>

          {/* 2 — Alta evolução / redução de suporte */}
          <section>
            <div className="flex flex-col gap-6">
              <div className="space-y-3 text-sm text-gray-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Evolução consistente e ajuste de suporte</h3>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-900">Pacientes com evolução consistente:</strong> 18% = 180 crianças
                  </li>
                  <li>
                    <strong className="text-gray-900">Elegíveis para redução gradual de suporte:</strong> 35% desses =
                    63 crianças
                  </li>
                  <li>
                    <strong className="text-gray-900">Redução média possível:</strong> {brl(900)}/mês por criança
                  </li>
                  <li className="pt-2">
                    <strong>Economia mensal:</strong> 63 × {brl(900)} ={" "}
                    <span className="font-medium text-emerald-600">{brl(56_700)}/mês</span>
                  </li>
                  <li>
                    <strong>Economia anual:</strong> {brl(680_400)}/ano
                  </li>
                </ul>
              </div>
              <ChartCard
                title="Evolução clínica (%) vs. intensidade de suporte (%)"
                subtitle="Comparação entre evolução (indicador composto) e intensidade de suporte ao longo do tempo."
              >
                <LineChart width={CHART_W_SEC} height={CHART_H_SEC} data={altaData} margin={{ ...MARGIN_SEC }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
                  <XAxis dataKey="mes" tick={{ fill: "#888888", fontSize: 11 }} axisLine={false} tickLine={false} dy={6} />
                  <YAxis domain={[0, 100]} tick={{ fill: "#888888", fontSize: 11 }} axisLine={false} tickLine={false} width={28} />
                  <Tooltip
                    formatter={(value, name) => [`${Number(value ?? 0)}%`, name === "evolucao" ? "Evolução" : "Suporte"]}
                    contentStyle={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", fontSize: 12 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="evolucao"
                    name="Evolução"
                    stroke="#12B3A8"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "#12B3A8", stroke: "#12B3A8", strokeWidth: 2 }}
                    activeDot={{ r: 4, fill: "#12B3A8", stroke: "#12B3A8", strokeWidth: 2 }}
                  />
                  <Line type="monotone" dataKey="suporte" name="Suporte" stroke="rgba(18,179,168,0.25)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartCard>
            </div>
          </section>

          {/* 3 — Performance por clínica */}
          <section>
            <div className="flex flex-col gap-6">
              <div className="space-y-3 text-sm text-gray-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Dispersão custo × evolução</h3>
                <p>
                  <strong className="text-gray-900">Clínica A:</strong> Custo médio {brl(2900)}, evolução média 78%.
                  <br />
                  <strong className="text-gray-900">Clínica B:</strong> Custo médio {brl(4700)}, evolução média 34%.
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong>Diferença de custo:</strong> {brl(1800)} por criança/mês (Referência ilustrativa A vs. médias de
                    rede)
                  </li>
                  <li>
                    Se 120 crianças estão em clínicas de baixa performance: 120 × {brl(1800)} ={" "}
                    <span className="font-medium text-amber-600">{brl(216_000)}/mês</span>
                    {" "}
                    Como oportunidade mensal estimada.
                  </li>
                  <li>
                    <strong>Impacto anual:</strong> {brl(2_592_000)}/ano
                  </li>
                </ul>
              </div>
              <ChartCard title="Custo médio mensal (R$) × evolução média (%)">
                <ScatterChart width={CHART_W_SEC} height={CHART_H_SEC} margin={{ ...MARGIN_SEC }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                  <XAxis
                    type="number"
                    dataKey="custo"
                    name="Custo"
                    tickFormatter={(v) => `${v / 1000}k`}
                    domain={["dataMin - 200", "dataMax + 200"]}
                    tick={{ fill: "#575750", fontSize: 10 }}
                  />
                  <YAxis
                    type="number"
                    dataKey="evolucao"
                    name="Evolução"
                    domain={[0, 100]}
                    unit="%"
                    tick={{ fill: "#575750", fontSize: 10 }}
                  />
                  <Tooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    formatter={(value, name) => {
                      const v = Number(value ?? 0);
                      if (name === "custo") return [brl(v), "Custo médio"];
                      return [`${v}%`, "Evolução"];
                    }}
                    labelFormatter={(_, payload) => payload?.[0]?.payload?.clinica ?? ""}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid rgba(0,0,0,0.08)",
                      fontSize: 12,
                    }}
                  />
                  <Scatter
                    name="Clínicas"
                    data={performanceClinicasData}
                    fill={CHART_COLORS.blue}
                    shape={(props: {
                      cx?: number;
                      cy?: number;
                      payload?: { fill?: string; clinica?: string };
                    }) => {
                      const { cx = 0, cy = 0, payload } = props;
                      const fill = payload?.fill ?? CHART_COLORS.blue;
                      return <circle cx={cx} cy={cy} r={6} fill={fill} stroke="#fff" strokeWidth={2} />;
                    }}
                  />
                </ScatterChart>
              </ChartCard>
            </div>
          </section>

          {/* 4 — Aderência */}
          <section>
            <div className="flex flex-col gap-6">
              <div className="space-y-3 text-sm text-gray-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Aderência terapêutica (horas / semana)</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Plano prescrito:</strong> 20 h/semana · <strong>Execução real média:</strong> 13 h/semana
                  </li>
                  <li>
                    <strong>Gap:</strong> 7 h/semana ·{" "}
                    <strong>Custo referência (hora não executada / pouco rastreável):</strong> {brl(95)}/h
                  </li>
                  <li>
                    <strong>Impacto semanal por criança (ex.):</strong> 7 × {brl(95)} = {brl(665)}
                  </li>
                  <li className="pt-2">
                    Em 150 crianças com gap relevante: 150 × {brl(665)} ={" "}
                    <span className="font-medium text-gray-900">{brl(99_750)}/semana</span>
                  </li>
                  <li>
                    <strong>Impacto mensal (aprox.):</strong> {brl(399_000)}/mês
                  </li>
                </ul>
              </div>
              <ChartCard title="Prescrito vs. realizado por terapia (h/semana)">
                <BarChart width={CHART_W_SEC} height={CHART_H_SEC} data={aderenciaData} margin={{ ...MARGIN_SEC }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
                  <XAxis dataKey="terapia" tick={{ fill: "#575750", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#575750", fontSize: 11 }} domain={[0, "dataMax + 4"]} />
                  <Tooltip
                    formatter={(value) => [`${Number(value ?? 0)} h`, ""]}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid rgba(0,0,0,0.08)",
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="prescrito" name="Prescrito" fill={CHART_COLORS.tertiary} radius={[4, 4, 0, 0]} maxBarSize={24} />
                  <Bar dataKey="realizado" name="Realizado" fill={CHART_COLORS.secondary} radius={[4, 4, 0, 0]} maxBarSize={24} />
                </BarChart>
              </ChartCard>
            </div>
          </section>

          {/* 5 — Operacional */}
          <section>
            <div className="flex flex-col gap-6">
              <div className="space-y-3 text-sm text-gray-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Rastreabilidade de sessões</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Sessões previstas no mês:</strong> 12.000
                  </li>
                  <li>
                    <strong>Sessões registradas:</strong> 10.350
                  </li>
                  <li>
                    <strong>Sem evidência estruturada:</strong> 1.650 (13,75% sem rastreabilidade clara)
                  </li>
                  <li>
                    <strong>Custo médio por sessão:</strong> {brl(140)}
                  </li>
                  <li className="pt-2">
                    Valor sem rastreabilidade clara: 1.650 × {brl(140)} ={" "}
                    <span className="font-medium text-gray-900">{brl(231_000)}/mês</span>
                  </li>
                </ul>
              </div>
              <ChartCard title="Distribuição: sessões registradas">
                <PieChart width={CHART_W_SEC} height={CHART_H_SEC}>
                  <Pie
                    data={operacionalData}
                    dataKey="valor"
                    nameKey="status"
                    cx="50%"
                    cy="50%"
                    innerRadius={32}
                    outerRadius={52}
                    paddingAngle={2}
                    label={(props: { name?: string; percent?: number }) =>
                      `${props.name ?? ""}: ${((props.percent ?? 0) * 100).toFixed(1)}%`
                    }
                  >
                    {operacionalData.map((_, i) => (
                      <Cell key={operacionalData[i].status} fill={PIE_COLORS[i % PIE_COLORS.length]} stroke="#fff" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [Number(value ?? 0).toLocaleString("pt-BR"), "Sessões"]}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid rgba(0,0,0,0.08)",
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                </PieChart>
              </ChartCard>
            </div>
          </section>

          {/* Consolidação — resumo executivo */}
          <section>
            <div className="mx-auto flex max-w-6xl flex-col gap-8">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1fr_0.9fr]">
                  <div className="min-w-0 space-y-8">
                    <h3 className="text-lg font-semibold text-gray-900 md:text-xl">Consolidação de oportunidade mensal</h3>
                    <ul>
                      <li className="flex justify-between gap-4 border-b border-gray-100 py-1.5">
                        <span className="text-sm text-gray-700">Fraude / anomalias</span>
                        <span className="text-sm font-semibold text-gray-900">{brl(128_000)}/mês</span>
                      </li>
                      <li className="flex justify-between gap-4 border-b border-gray-100 py-1.5">
                        <span className="text-sm text-gray-700">Ajuste de suporte</span>
                        <span className="text-sm font-semibold text-gray-900">{brl(56_700)}/mês</span>
                      </li>
                      <li className="flex justify-between gap-4 border-b border-gray-100 py-1.5">
                        <span className="text-sm text-gray-700">Performance de clínicas</span>
                        <span className="text-sm font-semibold text-gray-900">{brl(216_000)}/mês</span>
                      </li>
                      <li className="flex justify-between gap-4 border-b border-gray-100 py-1.5">
                        <span className="text-sm text-gray-700">Aderência terapêutica</span>
                        <span className="text-sm font-semibold text-gray-900">{brl(399_000)}/mês</span>
                      </li>
                      <li className="flex justify-between gap-4 border-b border-gray-100 py-1.5">
                        <span className="text-sm text-gray-700">Visibilidade operacional</span>
                        <span className="text-sm font-semibold text-gray-900">{brl(231_000)}/mês</span>
                      </li>
                    </ul>
                    <div className="rounded-2xl bg-red-50 p-5">
                      <p className="text-xs uppercase tracking-wide text-red-500">Total mensal estimado</p>
                      <p className="text-2xl font-bold text-red-500 md:text-3xl">{brl(1_030_700)}/mês</p>
                      <p className="mt-1 text-sm text-gray-900">{brl(12_368_400)}/ano</p>
                    </div>
                  </div>

                  <div className="min-w-0 rounded-2xl bg-gray-50 p-5">
                    <h4 className="mb-4 text-sm font-semibold text-gray-900">Oportunidade por tema</h4>
                    <div className="flex w-full justify-center overflow-x-auto">
                      <OportunidadeChart
                        width={400}
                        height={185}
                        margin={{ top: 8, right: 12, bottom: 20, left: 82 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
                Em uma carteira simulada de 1.000 crianças, pequenas ineficiências clínicas e operacionais podem representar
                mais de{" "}
                <strong className="font-semibold text-gray-900">R$ 12 milhões por ano</strong> em risco, desperdício ou oportunidade
                de otimização.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
