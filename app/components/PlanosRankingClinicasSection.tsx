"use client";

export function PlanosRankingClinicasSection() {
  return (
    <section id="ranking-clinicas" className="section-valor">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: "52rem" }}>
          <p className="eyebrow">Rede</p>
          <h2 className="section-headline">Quais clínicas realmente entregam resultado?</h2>
          <p className="section-body" style={{ marginTop: "1rem", maxWidth: "52rem" }}>
            Hoje você paga por volume. Com o CADU, você passa a pagar por evolução.
          </p>
        </div>

        <div className="valor-grid" style={{ marginTop: "2.25rem" }}>
          <div className="valor-card reveal">
            <strong style={{ color: "var(--black)" }}>Clínica A</strong>
            <div style={{ marginTop: "0.6rem" }}>
              Custo médio: R$ 2.900
              <br />
              Evolução: 78%
            </div>
          </div>

          <div className="valor-card reveal d1">
            <strong style={{ color: "var(--black)" }}>Clínica B</strong>
            <div style={{ marginTop: "0.6rem" }}>
              Custo médio: R$ 4.700
              <br />
              Evolução: 34%
            </div>
          </div>

          <div className="valor-card reveal d2">
            <strong style={{ color: "var(--black)" }}>Decisão</strong>
            <div style={{ marginTop: "0.6rem" }}>Para onde você direcionaria as próximas 100 crianças?</div>
          </div>
        </div>
      </div>
    </section>
  );
}
