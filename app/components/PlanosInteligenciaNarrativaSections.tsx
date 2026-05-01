const pilares = [
  {
    title: "Inteligência clínica",
    body: "Detecta padrões atípicos em jornada, sessão, evolução e suporte.",
  },
  {
    title: "Economia com qualidade",
    body: "Reduz desperdício sem cortar cuidado necessário.",
  },
  {
    title: "Integração com a rede",
    body: "Funciona junto com clínicas, terapeutas, planos e sistemas existentes.",
  },
] as const;

const agentes = [
  {
    title: "Agente de Pertinência Clínica",
    body: "Avalia se a carga terapêutica faz sentido para o perfil, suporte e evolução da criança.",
  },
  {
    title: "Agente de Aderência ao Plano",
    body: "Compara plano prescrito vs. execução real.",
  },
  {
    title: "Agente de Evolução Incompatível",
    body: "Detecta casos com alto volume de sessões e baixa evolução.",
  },
  {
    title: "Agente de Rastreabilidade",
    body: "Verifica se cada sessão tem evidência mínima: Objetivo, intervenção, resposta e próximo passo.",
  },
  {
    title: "Agente de Padrão de Rede",
    body: "Compara clínicas semelhantes para identificar outliers de custo, frequência e resultado.",
  },
  {
    title: "Agente de Alta ou Ajuste de Suporte",
    body: "Sinaliza crianças com evolução sustentada, estagnação ou necessidade de intensificação.",
  },
] as const;

export function PlanosInteligenciaPilaresSection() {
  return (
    <section id="inteligencia-pilares" className="section-setor">
      <div className="wrap">
        <div className="dados-head reveal">
          <p className="eyebrow">Capacidades</p>
          <h2 className="section-headline">Inteligência, economia e integração</h2>
        </div>
        <div className="dados-grid">
          {pilares.map((p, i) => (
            <div key={p.title} className={`dados-card reveal${i > 0 ? ` d${Math.min(i, 2)}` : ""}`}>
              <h3 className="dados-card-title">{p.title}</h3>
              <p className="dados-card-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlanosAgentesClinicosSection() {
  return (
    <section id="agentes-clinicos" className="section-dados">
      <div className="wrap">
        <div className="dados-head reveal">
          <p className="eyebrow">Automação assistida</p>
          <h2 className="section-headline">Agentes clínicos</h2>
        </div>
        <div className="dados-grid dados-grid-agentes">
          {agentes.map((a, i) => (
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
