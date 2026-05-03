import { ScrollEffects } from "./components/ScrollEffects";
import {
  PlanosInteligenciaPilaresSection,
  PlanosOQueEnxergarSection,
} from "./components/PlanosInteligenciaNarrativaSections";
import { PlanosComparacaoSection } from "./components/PlanosComparacaoSection";
import { PlanosInteligenciaSection } from "./components/PlanosInteligenciaSection";

export default function Home() {
  return (
    <>
      <ScrollEffects />

      <nav>
        <a href="https://cadu.health" className="nav-brand">
          <span className="nav-wordmark">CADU</span>
          <span className="nav-slash">/</span>
          <span className="nav-context">Saúde Suplementar</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#problema">O problema</a>
          </li>
          <li>
            <a href="#custos-risco">Custos e risco</a>
          </li>
          <li>
            <a href="#inteligencia-pilares">Capacidades</a>
          </li>
          <li>
            <a href="#inteligencia-clinica">Indicadores</a>
          </li>
          <li>
            <a href="#fraude-controle">Fraude e controle</a>
          </li>
          <li>
            <a href="#solucao">Camada CADU</a>
          </li>
          <li>
            <a href="#agentes-clinicos">Agentes clínicos</a>
          </li>
          <li>
            <a href="#execucao">Execução</a>
          </li>
          <li>
            <a href="#governanca-lgpd">Governança</a>
          </li>
          <li>
            <a href="#piloto">Piloto</a>
          </li>
        </ul>

        <a href="#proximo" className="nav-cta">
          Contato
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </nav>

      <section id="hero">
        <div className="blobs">
          <div className="blob hero-blob-orange" />
          <div className="blob hero-blob-pink" />
          <div className="blob hero-blob-blue" />
        </div>

        <div className="wrap">
          <div className="hero-brand-stage" aria-hidden="true">
            <div className="hero-brand enter-1">CADU</div>
          </div>

          <div className="hero-scrollspace" data-hero-scrollspace />
        </div>
      </section>

      <section id="hero-content" className="hero-content">
        <div className="wrap">
          <div className="hero-main">
            <div className="hero-left">
              <div className="hero-inline-brand" aria-hidden="true">
                CADU
              </div>

              <div className="pill-tag reveal">
                <span className="pill-dot" />
                CADU / Saúde Suplementar
              </div>

              <h1 className="hero-headline reveal d1">
                O custo não está no tratamento.
                <br />
                Está na falta de visibilidade.
              </h1>

              <p className="hero-body reveal d2" style={{ marginTop: "1rem", maxWidth: "42rem" }}>
                CADU é a infraestrutura de dados e coordenação do cuidado em neurodesenvolvimento para operadoras de saúde
                suplementar.
              </p>

              <div className="hero-btns reveal d3" style={{ flexWrap: "wrap", rowGap: "8px" }}>
                <a
                  href="mailto:contato@cadu.health?subject=Piloto%20CADU%20-%20operadora%20parceira"
                  className="btn-red"
                >
                  Iniciar piloto com minha operadora
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
                <a
                  href="mailto:contato@cadu.health?subject=Proposta%20t%C3%A9cnica%20CADU"
                  className="btn-ghost"
                >
                  Ver proposta técnica
                </a>
                <a
                  href="mailto:contato@cadu.health?subject=Contato%20-%20CADU%20Sa%C3%BAde%20Suplementar"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--text-2)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Falar com a equipe
                </a>
              </div>

              <p
                className="reveal d3"
                style={{
                  marginTop: "1.25rem",
                  maxWidth: "40rem",
                  fontSize: "0.8125rem",
                  lineHeight: 1.55,
                  color: "var(--text-2)",
                }}
              >
                Desenvolvido a partir da Clínica Casa do Urso — ambiente clínico real com dados estruturados desde 2023.
              </p>

              <div className="hero-stats reveal d4">
                <div>
                  <span className="stat-num">
                    2<sup>mi</sup>
                  </span>
                  <span className="stat-label">Alta frequência de terapias sem visibilidade longitudinal</span>
                </div>
                <div>
                  <span className="stat-num">
                    18<sup>m</sup>
                  </span>
                  <span className="stat-label">Baixa visibilidade sobre evolução clínica real</span>
                </div>
                <div>
                  <span className="stat-num">
                    60<sup>%</sup>
                  </span>
                  <span className="stat-label">Custo elevado por paciente sem previsibilidade</span>
                </div>
                <div>
                  <span className="stat-num">
                    24<sup>h</sup>
                  </span>
                  <span className="stat-label">Risco constante de fraude e duplicidade de atendimento</span>
                </div>
              </div>

              <p
                className="reveal"
                style={{
                  marginTop: "1.25rem",
                  maxWidth: "42rem",
                  fontSize: "0.8125rem",
                  lineHeight: 1.55,
                  color: "var(--text-3)",
                  fontStyle: "italic",
                }}
              >
                Baseado em dados reais da nossa clínica + benchmarks de mercado.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Visibilidade da jornada completa do paciente
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Redução de atendimentos redundantes
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Integração entre prestadores e operadora
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Monitoramento de evolução clínica
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Base de decisão para auditoria e regulação
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Detecção de inconsistências e fraudes
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Acompanhamento em tempo real
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Eficiência operacional
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Visibilidade da jornada completa do paciente
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Redução de atendimentos redundantes
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Integração entre prestadores e operadora
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Monitoramento de evolução clínica
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Base de decisão para auditoria e regulação
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Detecção de inconsistências e fraudes
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Acompanhamento em tempo real
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Eficiência operacional
          </div>
        </div>
      </div>

      <section id="problema">
        <div className="blobs">
          <div className="blob problema-blob" />
        </div>

        <div className="wrap">
          <div className="problema-grid">
            <div className="reveal">
              <p className="eyebrow">O problema</p>
              <h2 className="section-headline">
                A operadora paga.
                <br />
                Mas não consegue ver.
              </h2>
              <p className="section-body">
                Hoje, o cuidado em neurodesenvolvimento acontece em múltiplos prestadores, sem integração de dados.
              </p>
              <p className="section-body problema-structural">
                Isso não é um problema clínico.
                <br />
                É um problema de <span className="problema-structural-accent">gestão e informação.</span>
              </p>
              <ul className="urgencia-list" style={{ marginTop: "1rem" }}>
                <li>Falta de acompanhamento da evolução real do paciente</li>
                <li>Impossibilidade de validar a efetividade do tratamento</li>
                <li>Falta de visibilidade sobre duplicidade de atendimentos</li>
                <li>Falha na identificação de padrões de desperdício</li>
                <li>Reação tardia a desvios de custo</li>
              </ul>
            </div>

            <div className="issue-cards reveal d2">
              <div className="issue-card">
                <div className="issue-icon orange">🧩</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Fragmentação entre prestadores</div>
                  <div className="issue-desc">
                    Clínicas operam isoladas, sem compartilhamento de dados.
                  </div>
                </div>
                <div className="issue-badge">Crítico</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon pink">📋</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Baixa visibilidade clínica</div>
                  <div className="issue-desc">
                    A operadora não enxerga evolução, apenas faturamento.
                  </div>
                </div>
                <div className="issue-badge">Crítico</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon blue">⏱️</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Duplicidade e sobreposição de atendimentos</div>
                  <div className="issue-desc">
                    Sessões redundantes sem coordenação.
                  </div>
                </div>
                <div className="issue-badge">Urgente</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon red">🏛️</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Auditoria reativa</div>
                  <div className="issue-desc">
                    Problemas são identificados tarde, quando o custo já ocorreu.
                  </div>
                </div>
                <div className="issue-badge">Urgente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="custos-risco" className="section-setor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Custos e risco</p>
            <h2 className="section-headline">O modelo atual gera</h2>
          </div>

          <div className="setor-grid" style={{ marginTop: "2.25rem" }}>
            {[
              "Aumento progressivo de custo por paciente",
              "Baixa previsibilidade financeira",
              "Dificuldade de controle de rede credenciada",
              "Risco de fraude assistencial",
              "Ineficiência na alocação de recursos",
            ].map((t, i) => (
              <div key={t} className={`setor-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: "2.25rem" }}>
            <p className="section-body" style={{ margin: 0, maxWidth: "44rem" }}>
              Sem dados estruturados, não há gestão. Sem gestão, o custo escala sem controle.
            </p>
          </div>
        </div>
      </section>

      <section id="por-que-agora" className="section-setor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Por que agora</p>
          </div>

          <div className="setor-grid" style={{ marginTop: "2.25rem" }}>
            {[
              "Diagnósticos de TEA +15–20%/ano",
              "R$ 2B+ em judicialização",
              "Open Health chegando",
              "Custo per capita TEA = 3–5× maior",
            ].map((t, i) => (
              <div key={t} className={`setor-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlanosInteligenciaPilaresSection />

      <PlanosInteligenciaSection />

      <PlanosComparacaoSection />

      <section id="fraude-controle" className="section-arch">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Fraude e controle</p>
            <h2 className="section-headline">Visibilidade reduz fraude.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "46rem" }}>
              A ausência de dados integrados abre espaço para inconsistências e fraude assistencial. O CADU permite validação
              de presença e atendimento, registro estruturado de sessões, cruzamento de dados entre prestadores,
              identificação de padrões anômalos e rastreabilidade da jornada do paciente.
            </p>
          </div>

          <div className="setor-grid" style={{ marginTop: "2.25rem" }}>
            {[
              "Uso de geolocalização para validação de atendimento",
              "Confirmação de presença por paciente/família",
              "Consistência entre agenda, execução e faturamento",
            ].map((t, i) => (
              <div key={t} className={`setor-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>

          <div className="valor-grid" style={{ marginTop: "1.1rem" }}>
            {["Menos fraude", "Menos desperdício", "Mais controle"].map((t, i) => (
              <div key={t} className={`valor-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucao">
        <div className="wrap">
          <div className="solucao-intro reveal">
            <p className="solucao-lead">
              O cuidado existe.
              <br />
              O problema é que ele não é mensurável.
            </p>
            <p className="section-body solucao-vacuo">
              O CADU não substitui sistemas da operadora nem dos prestadores.
            </p>
            <p className="eyebrow">Infraestrutura de dados e coordenação do cuidado</p>
            <h2 className="section-headline">O CADU permite</h2>
            <p className="section-body">
              Registro longitudinal por paciente, troca de informação entre prestadores, leitura de evolução clínica e
              indicadores assistenciais e financeiros — com controle de acesso, consentimento e governança de dados.
            </p>
          </div>

          <div className="solucao-grid">
            <div className="sol-card reveal">
              <span className="sol-num">01</span>
              <span className="sol-icon">🗂️</span>
              <div className="sol-title">Registro longitudinal por paciente</div>
              <div className="sol-body">
                Histórico longitudinal com leitura para auditoria e equipe assistencial autorizada.
              </div>
              <span className="sol-tag">Continuidade</span>
            </div>

            <div className="sol-card reveal d1">
              <span className="sol-num">02</span>
              <span className="sol-icon">🤝</span>
              <div className="sol-title">Integração entre prestadores</div>
              <div className="sol-body">
                Dados circulam entre prestadores e operadora com perfis, trilhas e regras de acesso.
              </div>
              <span className="sol-tag">Rede de cuidado</span>
            </div>

            <div className="sol-card reveal d2">
              <span className="sol-num">03</span>
              <span className="sol-icon">🤱</span>
              <div className="sol-title">Acompanhamento longitudinal</div>
              <div className="sol-body">
                Monitoramento de evolução clínica e sinais de desvio de percurso, com registro estruturado.
              </div>
              <span className="sol-tag">Evolução clínica</span>
            </div>

            <div className="sol-card reveal">
              <span className="sol-num">04</span>
              <span className="sol-icon">🔍</span>
              <div className="sol-title">Alinhamento do cuidado</div>
              <div className="sol-body">
                Plano terapêutico, agenda e execução visíveis entre prestadores e operadora.
              </div>
              <span className="sol-tag">Operação</span>
            </div>

            <div className="sol-card reveal d1">
              <span className="sol-num">05</span>
              <span className="sol-icon">📊</span>
              <div className="sol-title">Indicadores assistenciais e financeiros</div>
              <div className="sol-body">
                Base de decisão para auditoria, regulação e gestão de custo por paciente, com rastreabilidade.
              </div>
              <span className="sol-tag">Gestão</span>
            </div>

            <div className="sol-card reveal d2">
              <span className="sol-num">06</span>
              <span className="sol-icon">🔗</span>
              <div className="sol-title">Interoperabilidade com sistemas existentes</div>
              <div className="sol-body">
                Integração progressiva para reduzir fricção, sem ruptura operacional.
              </div>
              <span className="sol-tag">Dados e sistemas</span>
            </div>
          </div>

          <div className="solucao-axioms reveal d1">
            <div>Sem substituição de sistemas.</div>
            <div>Sem ruptura operacional.</div>
            <div>Apenas visibilidade.</div>
          </div>
        </div>
      </section>

      <PlanosOQueEnxergarSection />

      <section id="execucao" className="section-setor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Execução</p>
            <h2 className="section-headline">Implementação rápida, sem ruptura operacional</h2>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              O CADU pode ser implementado em paralelo à operação existente, sem substituição de sistemas.
            </p>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              A entrada ocorre por piloto com rede selecionada, integração progressiva com prestadores, acompanhamento de
              pacientes ativos e geração de dados desde o início — sem necessidade de transformação estrutural inicial.
            </p>
          </div>

          <div className="setor-grid setor-grid-execucao" style={{ marginTop: "2.25rem" }}>
            {[
              "Piloto com rede selecionada",
              "Integração progressiva com prestadores",
              "Acompanhamento de pacientes ativos",
              "Geração de dados desde o início",
            ].map((t, i) => (
              <div key={t} className={`setor-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cuidado" className="section-arch">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Arquitetura de cuidado</p>
            <h2 className="section-headline">Paciente → Prestadores → Operadora</h2>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              O CADU atua como camada de dados, comunicação e acompanhamento longitudinal, permitindo leitura integrada da
              jornada.
            </p>
          </div>

          <div className="arch-panel reveal d1">
            <div className="arch-chain">
              <span className="arch-node">Paciente</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Prestadores</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Operadora</span>
            </div>

            <div className="arch-hub">
              <div className="arch-hub-title">CADU</div>
              <p className="arch-hub-desc">Camada de dados, comunicação e acompanhamento longitudinal</p>
            </div>

            <div className="arch-chain">
              <span className="arch-node">Rede credenciada</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Auditoria</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Gestão</span>
            </div>
          </div>
        </div>
      </section>

      <section id="dados" className="section-dados">
        <div className="wrap">
          <div className="dados-head reveal">
            <p className="eyebrow">Arquitetura de dados</p>
            <h2 className="section-headline">Dados estruturados para cuidado e gestão.</h2>
            <p className="dados-hint">
              Controle por perfil, auditoria de acesso, registro de eventos e integração com sistemas existentes.
            </p>
          </div>

          <div className="dados-grid">
            <div className="dados-card reveal">
              <h3 className="dados-card-title">Dados clínicos</h3>
              <p className="dados-card-body">Diagnóstico, terapias, evolução, comorbidades e medicação.</p>
            </div>
            <div className="dados-card reveal d1">
              <h3 className="dados-card-title">Dados de sessões e frequência</h3>
              <p className="dados-card-body">Sessões realizadas, frequência, prestador, agenda, presença e trilha.</p>
            </div>
            <div className="dados-card reveal d2">
              <h3 className="dados-card-title">Dados comportamentais</h3>
              <p className="dados-card-body">Rotina, crises, comunicação e funcionalidade (conforme protocolo).</p>
            </div>
            <div className="dados-card reveal">
              <h3 className="dados-card-title">Dados de evolução</h3>
              <p className="dados-card-body">Registros estruturados de evolução e aderência ao plano terapêutico.</p>
            </div>
            <div className="dados-card reveal d1">
              <h3 className="dados-card-title">Dados administrativos e faturamento</h3>
              <p className="dados-card-body">Autorização, cobrança, regras, auditoria, inconsistências e rastreabilidade.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="governanca-lgpd" className="section-arch">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "48rem" }}>
            <p className="eyebrow">Governança e conformidade</p>
            <h2 className="section-headline">Governança de dados e conformidade</h2>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              O CADU opera em conformidade com a LGPD e as diretrizes do CFM e CFP para dados clínicos sensíveis.
            </p>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              Dados de pacientes são anonimizados e agregados para fins de gestão e auditoria. O acesso é controlado por
              perfil com trilha de auditoria. Consentimento é coletado e registrado na entrada do paciente na plataforma.
              Nenhum dado identificável é compartilhado com a operadora sem base legal e consentimento explícito.
            </p>
            <p className="section-body" style={{ marginTop: "1rem", marginBottom: 0 }}>
              A governança é estruturada para suportar auditorias da ANS e processos internos de compliance.
            </p>
          </div>
        </div>
      </section>

      <section id="piloto" className="section-piloto-ppp">
        <div className="blobs" aria-hidden="true">
          <div className="blob piloto-blob" />
        </div>
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Piloto</p>
            <h2 className="section-headline">Piloto de 90 dias com dados reais</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "44rem" }}>
              Em noventa dias você mede visibilidade da jornada, redução de duplicidade, alinhamento na rede,
              inconsistências detectadas e ganho de eficiência — sem obrigação de trocar sistemas core.
            </p>
          </div>

          <div className="piloto-ppp-grid">
            <div>
              <ol className="piloto-ppp-steps">
                {[
                  ["Visibilidade da jornada", "Leitura integrada do percurso do paciente em rede selecionada."],
                  ["Redução de duplicidade", "Identificação e redução de sobreposição de sessões e atendimentos."],
                  ["Melhoria no alinhamento", "Mesma rede, com execução e aderência mais visíveis para a operadora."],
                  ["Inconsistências detectadas", "Sinais e padrões anômalos para auditoria e intervenção precoce."],
                ].map(([title, desc], idx) => (
                  <li key={title} className={`reveal${idx > 0 ? ` d${Math.min(idx, 3)}` : ""}`}>
                    <span className="piloto-ppp-n">{idx + 1}</span>
                    <div>
                      <div className="step-title">{title}</div>
                      <p className="step-desc">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="pilot-indicators reveal d2">
              <p className="pilot-indicators-title">Indicadores</p>
              <ul className="pilot-indicators-list">
                <li>Custo por paciente</li>
                <li>Frequência de sessões</li>
                <li>Redução de redundância</li>
                <li>Aderência ao plano terapêutico</li>
                <li>Evolução clínica</li>
                <li>Eventos inconsistentes detectados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="viabilidade" className="section-valor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Viabilidade</p>
            <h2 className="section-headline">Modelo de implementação</h2>
          </div>
          <div className="valor-grid valor-grid-viabilidade" style={{ marginTop: "2.25rem" }}>
            {[
              "Piloto inicial",
              "Expansão por rede",
              "Contratação baseada em resultado",
              "Modelo SaaS para operadora",
            ].map((t, i) => (
              <div key={t} className={`valor-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="para-operadora" className="section-valor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Para a operadora</p>
            <h2 className="section-headline">Por que implementar</h2>
          </div>
          <div className="valor-grid">
            {[
              "Maior controle sobre custo assistencial",
              "Visibilidade real da jornada do paciente",
              "Redução de fraude e inconsistências",
              "Melhoria da eficiência da rede credenciada",
              "Base de decisão para auditoria e regulação",
              "Previsibilidade financeira",
            ].map((t, i) => (
              <div key={t} className={`valor-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proximo" className="section-proximo">
        <div className="blobs" aria-hidden="true">
          <div className="blob cta-blob" />
        </div>

        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="cta-eyebrow reveal">Contato</p>

          <h2 className="cta-headline reveal d1">
            Piloto de 90 dias
          </h2>

          <p className="cta-sub reveal d2">
            Rede selecionada, indicadores desde o primeiro mês e leitura clínica e financeira comparável — sem troca de
            core.
          </p>

          <div className="cta-btns reveal d3" style={{ flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="mailto:contato@cadu.health?subject=Piloto%20CADU%20-%20operadora%20parceira"
              className="btn-white"
            >
              Iniciar piloto com minha operadora
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="mailto:contato@cadu.health?subject=Proposta%20t%C3%A9cnica%20CADU" className="btn-outline">
              Ver proposta técnica
            </a>
            <a
              href="mailto:contato@cadu.health?subject=Contato%20-%20CADU%20Sa%C3%BAde%20Suplementar"
              className="btn-outline"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-left">CADU — Dados e visibilidade para gestão do neurodesenvolvimento</div>
        <div className="footer-right">Saúde Suplementar · Dados · Auditoria · Eficiência · Controle</div>
      </footer>
    </>
  );
}
