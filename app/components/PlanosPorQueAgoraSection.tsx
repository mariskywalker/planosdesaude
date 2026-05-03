"use client";

export function PlanosPorQueAgoraSection() {
  return (
    <section id="por-que-agora" className="section-valor">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: "52rem" }}>
          <p className="eyebrow">Por que agora</p>
          <h2 className="section-headline">O problema está acelerando</h2>
        </div>

        <div className="valor-grid" style={{ marginTop: "2.25rem" }}>
          {[
            "Diagnósticos de TEA crescendo 15–20% ao ano",
            "Judicialização ultrapassando bilhões por ano",
            "Open Health exigindo interoperabilidade",
            "Custo por paciente até 5x maior que a média",
          ].map((t, i) => (
            <div key={t} className={`valor-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
              {t}
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: "2.25rem" }}>
          <p className="section-body" style={{ margin: 0, maxWidth: "52rem" }}>
            Sem visibilidade clínica, o custo cresce sem controle.
          </p>
        </div>
      </div>
    </section>
  );
}
