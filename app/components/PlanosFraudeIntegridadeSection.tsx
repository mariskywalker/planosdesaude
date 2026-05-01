"use client";

export function PlanosFraudeIntegridadeSection() {
  return (
    <section id="fraude-integridade" className="section-setor bg-[var(--bg-alt)] py-16 md:py-24">
      <div className="wrap">
        <div className="dados-head reveal">
          <p className="eyebrow">Fraude e integridade clínica</p>
          <h2 className="section-headline">O CADU não analisa apenas o pagamento</h2>
          <p className="section-body" style={{ marginTop: "1rem", maxWidth: "44rem" }}>
            Enquanto soluções antifraude tradicionais analisam o faturamento, o CADU analisa a coerência clínica por trás do cuidado.
          </p>
        </div>

        <div className="dados-grid dados-grid-agentes">
          {[
            {
              title: "Evolução incompatível",
              body: "Detecta alto volume de sessões com baixa evolução clínica.",
            },
            {
              title: "Aderência ao plano",
              body: "Compara plano prescrito, sessões executadas e evolução registrada.",
            },
            {
              title: "Rastreabilidade",
              body: "Verifica se cada atendimento tem evidência mínima: objetivo, intervenção, resposta e próximo passo.",
            },
            {
              title: "Padrão de rede",
              body: "Compara clínicas semelhantes para identificar outliers de custo, frequência e resultado.",
            },
            {
              title: "Consistência operacional",
              body: "Cruza agenda, presença, terapeuta, paciente e faturamento.",
            },
          ].map((a, i) => (
            <div key={a.title} className={`dados-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
              <h3 className="dados-card-title">{a.title}</h3>
              <p className="dados-card-body">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

