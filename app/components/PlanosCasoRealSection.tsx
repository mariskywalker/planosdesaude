"use client";

export function PlanosCasoRealSection() {
  return (
    <section id="caso-real" className="section-setor">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: "52rem" }}>
          <p className="eyebrow">Caso real</p>
          <h2 className="section-headline">Um exemplo real</h2>
        </div>

        <div className="dados-grid" style={{ marginTop: "2.25rem" }}>
          <div className="dados-card reveal">
            <h3 className="dados-card-title">O que encontramos</h3>
            <p className="dados-card-body">
              Identificamos uma criança em tratamento há mais de 12 meses sem evolução mensurável.
              Ajustamos o plano terapêutico e a equipe.
            </p>
          </div>
          <div className="dados-card reveal d1">
            <h3 className="dados-card-title">Em 3 meses</h3>
            <p className="dados-card-body">Houve evolução significativa.</p>
          </div>
          <div className="dados-card reveal d2">
            <h3 className="dados-card-title">O ponto cego</h3>
            <p className="dados-card-body">Esse tipo de situação não é visível hoje para operadoras.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
