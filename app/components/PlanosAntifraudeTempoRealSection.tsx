"use client";

export function PlanosAntifraudeTempoRealSection() {
  return (
    <section id="antifraude-tempo-real" className="section-setor">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: "52rem" }}>
          <p className="eyebrow">Antifraude</p>
          <h2 className="section-headline">Antifraude em tempo real, não auditoria posterior</h2>
          <p className="section-body" style={{ marginTop: "1rem" }}>
            A maioria das operadoras identifica problemas depois que já pagou.
            <br />
            O CADU identifica antes.
          </p>
        </div>

        <div className="setor-grid" style={{ marginTop: "2.25rem" }}>
          {[
            "Check-in com GPS confirma presença da criança",
            "No horário correto",
            "Com o terapeuta certo",
            "Dados registrados em tempo real",
          ].map((t, i) => (
            <div key={t} className={`setor-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
              {t}
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: "2.25rem" }}>
          <p className="section-body" style={{ margin: 0, maxWidth: "52rem" }}>
            <strong style={{ color: "var(--black)" }}>Sessão fantasma não passa.</strong> Inconsistência é detectada na hora.
          </p>
        </div>
      </div>
    </section>
  );
}
