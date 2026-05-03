"use client";

export function PlanosTracaoSection() {
  return (
    <section id="tracao" className="section-valor">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: "52rem" }}>
          <p className="eyebrow">Tração</p>
          <h2 className="section-headline">Nascemos de uma clínica real</h2>
          <p className="section-body" style={{ marginTop: "1rem" }}>
            Não construímos o CADU em um laboratório.
            <br />
            Construímos operando nossa própria clínica em São Paulo.
          </p>
        </div>

        <div className="valor-grid" style={{ marginTop: "2.25rem" }}>
          {[
            "104 famílias ativas por mês",
            "12 terapeutas",
            "18+ meses de operação",
            "Milhares de sessões registradas",
          ].map((t, i) => (
            <div key={t} className={`valor-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
              {t}
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: "2.25rem" }}>
          <p className="section-body" style={{ margin: 0, maxWidth: "52rem" }}>
            Cada funcionalidade do CADU nasceu de uma dor real no cuidado.
          </p>
        </div>
      </div>
    </section>
  );
}
