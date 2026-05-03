"use client";

const rows: { criterio: string; arvo: string; interno: string; cadu: string }[] = [
  {
    criterio: "Visibilidade longitudinal por paciente",
    arvo: "Fragmentada / só faturamento",
    interno: "Depende do que foi construído",
    cadu: "Jornada unificada na rede",
  },
  {
    criterio: "Antifraude no momento da sessão",
    arvo: "Reativo / após pagamento",
    interno: "Variável",
    cadu: "Sinais em tempo real",
  },
  {
    criterio: "Comparar desempenho entre clínicas",
    arvo: "Limitado",
    interno: "Exige projeto próprio",
    cadu: "Rankings e outliers por paridade",
  },
  {
    criterio: "Evidência clínica por sessão",
    arvo: "Não estruturada",
    interno: "Dispersa em sistemas",
    cadu: "Registro mínimo rastreável",
  },
  {
    criterio: "Piloto sem trocar core da operadora",
    arvo: "Sim, mas sem visibilidade clínica",
    interno: "Alto custo e tempo",
    cadu: "Camada paralela, piloto guiado",
  },
];

export function PlanosComparacaoSection() {
  return (
    <section id="comparacao" className="section-dados">
      <div className="wrap">
        <div className="dados-head reveal">
          <p className="eyebrow">Comparativo</p>
          <h2 className="section-headline">Arvo · sistema interno · CADU</h2>
          <p className="dados-hint" style={{ maxWidth: "44rem" }}>
            Mesmo critério, três formas diferentes de enxergar risco e oportunidade na rede.
          </p>
          <p
            className="reveal"
            style={{
              marginTop: "1rem",
              maxWidth: "44rem",
              fontSize: "1rem",
              lineHeight: 1.65,
              fontWeight: 700,
              color: "var(--black)",
              padding: "1rem 1.15rem",
              borderRadius: 14,
              border: "1px solid color-mix(in oklab, var(--border) 90%, var(--black))",
              background: "var(--white)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            A Arvo audita contas depois que você pagou. O CADU confirma antes — com GPS, evolução e ranking de clínicas.
          </p>
        </div>

        <div className="reveal d1" style={{ marginTop: "2rem", overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
              lineHeight: 1.45,
              minWidth: "640px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.85rem 1rem",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text-2)",
                    fontWeight: 700,
                  }}
                >
                  Critério
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.85rem 1rem",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--black)",
                    fontWeight: 800,
                  }}
                >
                  Arvo
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.85rem 1rem",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--black)",
                    fontWeight: 800,
                  }}
                >
                  Sistema interno
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.85rem 1rem",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--red)",
                    fontWeight: 800,
                  }}
                >
                  CADU
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.criterio}>
                  <td
                    style={{
                      padding: "0.85rem 1rem",
                      borderBottom: "1px solid color-mix(in oklab, var(--border) 85%, transparent)",
                      fontWeight: 700,
                      color: "var(--black)",
                      verticalAlign: "top",
                    }}
                  >
                    {r.criterio}
                  </td>
                  <td
                    style={{
                      padding: "0.85rem 1rem",
                      borderBottom: "1px solid color-mix(in oklab, var(--border) 85%, transparent)",
                      color: "var(--text-2)",
                      verticalAlign: "top",
                    }}
                  >
                    {r.arvo}
                  </td>
                  <td
                    style={{
                      padding: "0.85rem 1rem",
                      borderBottom: "1px solid color-mix(in oklab, var(--border) 85%, transparent)",
                      color: "var(--text-2)",
                      verticalAlign: "top",
                    }}
                  >
                    {r.interno}
                  </td>
                  <td
                    style={{
                      padding: "0.85rem 1rem",
                      borderBottom: "1px solid color-mix(in oklab, var(--border) 85%, transparent)",
                      color: "var(--black)",
                      verticalAlign: "top",
                    }}
                  >
                    {r.cadu}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
