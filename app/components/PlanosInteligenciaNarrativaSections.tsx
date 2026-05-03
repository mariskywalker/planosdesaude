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

const oQueEnxerga = [
  {
    title: "Pertinência clínica",
    body: "Ver se intensidade e mix fazem sentido para o perfil, suporte disponível e evolução observada.",
  },
  {
    title: "Aderência ao plano",
    body: "Comparar o prescrito com o que foi executado, sessão a sessão.",
  },
  {
    title: "Evolução incompatível com volume",
    body: "Identificar muitas sessões com pouca progressão mensurável.",
  },
  {
    title: "Rastreabilidade mínima por sessão",
    body: "Objetivo, intervenção, resposta e próximo passo registrados de forma estruturada.",
  },
  {
    title: "Padrão entre clínicas",
    body: "Comparar pares parecidos para achar outliers de custo, frequência e resultado.",
  },
  {
    title: "Alta, manutenção ou intensificação",
    body: "Sinais de evolução sustentável, estagnação prolongada ou necessidade de mais suporte.",
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

export function PlanosOQueEnxergarSection() {
  return (
    <section id="agentes-clinicos" className="section-dados">
      <div className="wrap">
        <div className="dados-head reveal">
          <p className="eyebrow">Agentes clínicos</p>
          <h2 className="section-headline">O que você passa a enxergar</h2>
        </div>
        <div className="dados-grid dados-grid-agentes">
          {oQueEnxerga.map((a, i) => (
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
