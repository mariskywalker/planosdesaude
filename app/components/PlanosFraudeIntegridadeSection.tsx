"use client";

export function PlanosFraudeIntegridadeSection() {
  return (
    <section id="fraude-integridade" className="section-setor bg-[var(--bg-alt)] py-16 md:py-24">
      <div className="wrap">
        <div className="dados-head reveal">
          <p className="eyebrow">Fraude e integridade clínica</p>
          <h2 className="section-headline">O CADU não analisa apenas o pagamento</h2>
          <p className="section-body" style={{ marginTop: "1rem", maxWidth: "52rem" }}>
            Soluções antifraude olham sobretudo para <strong style={{ color: "var(--black)" }}>faturamento</strong>. O CADU olha para{" "}
            <strong style={{ color: "var(--black)" }}>coerência clínica</strong>: execução do plano, evidência nas sessões e evolução real.
          </p>

          <p className="section-body" style={{ marginTop: "0.85rem", maxWidth: "52rem" }}>
            <strong style={{ color: "var(--black)" }}>O problema não está apenas no faturamento.</strong> Está na ausência de leitura clínica sobre o cuidado —
            quando não dá para sustentar decisão com evidência longitudinal.
          </p>

          <div className="section-body" style={{ marginTop: "1.15rem", maxWidth: "52rem" }}>
            <p style={{ margin: 0, color: "var(--text-2)" }}>
              Hoje, operadoras pagam milhares de sessões sem conseguir responder três perguntas básicas:
            </p>
            <ul style={{ marginTop: "0.75rem" }}>
              <li>Esse cuidado faz sentido clínico?</li>
              <li>Está sendo executado como prescrito?</li>
              <li>Está gerando evolução real?</li>
            </ul>
            <p style={{ marginTop: "0.75rem", marginBottom: 0, color: "var(--black)", fontWeight: 800 }}>
              Sem essas respostas, o custo cresce — e o controle desaparece.
            </p>
          </div>

          <div className="section-body" style={{ marginTop: "1.25rem", maxWidth: "52rem" }}>
            <p style={{ margin: 0, fontWeight: 700, color: "var(--black)" }}>O que o CADU identifica na prática:</p>
            <ul style={{ marginTop: "0.75rem" }}>
              <li>Clínicas com alto volume e baixa evolução</li>
              <li>Sessões sem evidência clínica estruturada</li>
              <li>Planos terapêuticos que não estão sendo executados</li>
              <li>Padrões fora da média da rede</li>
              <li>Casos que já poderiam ter alta — mas continuam consumindo recurso</li>
            </ul>
          </div>

          <div className="section-body" style={{ marginTop: "1.25rem", maxWidth: "52rem" }}>
            <p style={{ margin: 0, fontWeight: 700, color: "var(--black)" }}>Na prática, isso significa:</p>
            <ul style={{ marginTop: "0.75rem" }}>
              <li>Redução de desperdício</li>
              <li>Rebalanceamento da rede credenciada</li>
              <li>Melhor alocação de suporte terapêutico</li>
              <li>E milhões recuperados em eficiência</li>
            </ul>
          </div>

          <div
            className="reveal"
            style={{
              marginTop: "1.5rem",
              maxWidth: "52rem",
              borderRadius: 18,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.9)",
              padding: "1.25rem 1.25rem",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-2)" }}>
              Seu maior ativo
            </div>
            <div style={{ marginTop: 6, fontSize: 28, fontWeight: 900, color: "var(--black)", lineHeight: 1.1 }}>
              R$ 12 milhões/ano
            </div>
            <div style={{ marginTop: 8, color: "var(--text-2)", lineHeight: 1.6 }}>
              Esse tipo de perda não é exceção. É o padrão em carteiras sem visibilidade clínica estruturada.
            </div>
          </div>

          <div className="section-body reveal" style={{ marginTop: "1.35rem", maxWidth: "52rem" }}>
            <p style={{ margin: 0, fontWeight: 800, color: "var(--black)" }}>Isso já está acontecendo hoje.</p>
            <p style={{ marginTop: "0.65rem", marginBottom: 0, color: "var(--text-2)" }}>
              A diferença é que, na maioria das operadoras, ainda não está visível.
              <br />
              O CADU torna isso mensurável — e acionável.
            </p>
          </div>
        </div>

        <div className="dados-grid dados-grid-agentes">
          {[
            {
              title: "Evolução incompatível",
              body: "Volume alto sem linha clínica que sustente progresso — dinheiro rodando sem resultado proporcional.",
            },
            {
              title: "Aderência ao plano",
              body: "Plano prescrito na papelada e execução real divergentes — pagamento por sessões que não refletem o que foi combinado clinicamente.",
            },
            {
              title: "Rastreabilidade",
              body: "Sessões sem evidência estruturada (objetivo, intervenção, resposta e próximo passo) — auditoria chega tarde porque não há material.",
            },
            {
              title: "Padrão de rede",
              body: "Outliers claros quando você compara ‘parecidos’ — custo/frequência que não fecha com resultado.",
            },
            {
              title: "Consistência operacional",
              body: "Agenda vs presença vs terapeuta vs paciente vs faturamento — inconsistências que viram custo silencioso.",
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

