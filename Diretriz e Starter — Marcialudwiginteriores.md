## Direção técnica recomendada

Para esse caso, a melhor abordagem é **site estático com atualização editorial baseada no Instagram**, e não uma página dependente do embed do Instagram como fonte principal.

### Por quê
- **SEO melhor**: conteúdo próprio indexável, com texto, estrutura semântica e Schema.org.
- **Performance melhor**: evita carregar um embed pesado como elemento central.
- **Manutenção simples**: atualização por cópia da última publicação para um arquivo `posts.json`.
- **Controle de marca**: você decide quais posts entram no destaque.

### Regra prática
- Use o Instagram como **prova social e canal de descoberta**.
- Use o site como **base de recomendação por busca**.
- Mantenha a home **curta**, visual e objetiva.
- Atualize manualmente as **3 últimas publicações** ou a última publicação em destaque.

---

## Estrutura sugerida

```text
marcialudwiginteriores/
├─ index.html
├─ sitemap.xml
├─ robots.txt
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ main.js
│  └─ img/
│     ├─ hero.jpg
│     ├─ project-1.jpg
│     ├─ project-2.jpg
│     ├─ project-3.jpg
│     └─ og-cover.jpg
└─ data/
   └─ posts.json
```

---

## index.html

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Marcialudwig Interiores: projetos de interiores com foco em funcionalidade, estética e execução precisa. Veja projetos, últimas publicações e fale no WhatsApp." />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="https://SEU-DOMINIO-AQUI/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Marcialudwig Interiores" />
  <meta property="og:description" content="Projetos de interiores, portfólio e atendimento direto via WhatsApp." />
  <meta property="og:image" content="https://SEU-DOMINIO-AQUI/assets/img/og-cover.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  <title>Marcialudwig Interiores</title>
  <link rel="stylesheet" href="assets/css/styles.css" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marcialudwig Interiores",
    "image": "https://SEU-DOMINIO-AQUI/assets/img/og-cover.jpg",
    "url": "https://SEU-DOMINIO-AQUI/",
    "telephone": "+55XXXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RUA / BAIRRO",
      "addressLocality": "CIDADE",
      "addressRegion": "UF",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.instagram.com/marcialudwiginteriores/"
    ],
    "description": "Projetos de interiores com foco em funcionalidade, estética e atendimento direto ao cliente."
  }
  </script>
</head>
<body>
  <header class="hero">
    <nav class="topbar" aria-label="Navegação principal">
      <a class="brand" href="#inicio">Marcialudwig Interiores</a>
      <div class="nav-links">
        <a href="#projetos">Projetos</a>
        <a href="#instagram">Instagram</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>

    <section id="inicio" class="hero-content">
      <div class="hero-copy">
        <p class="eyebrow">Design de interiores</p>
        <h1>Projetos com estética, função e execução precisa.</h1>
        <p class="lead">
          Soluções para ambientes residenciais e comerciais, com foco em resultado visual,
          conforto de uso e clareza na tomada de decisão.
        </p>
        <div class="cta-row">
          <a class="btn primary" href="https://wa.me/55SEUNUMERO" target="_blank" rel="noopener">Falar no WhatsApp</a>
          <a class="btn secondary" href="#projetos">Ver projetos</a>
        </div>
      </div>
      <figure class="hero-media">
        <img src="assets/img/hero.jpg" alt="Ambiente assinado pela Marcialudwig Interiores" loading="eager" />
      </figure>
    </section>
  </header>

  <main>
    <section class="section" aria-labelledby="projetos-title">
      <div class="section-head">
        <p class="eyebrow">Portfólio</p>
        <h2 id="projetos-title">Pastas de projetos</h2>
        <p>Seleção curta para navegação rápida. Cada card leva para uma pasta temática ou álbum específico.</p>
      </div>

      <div class="carousel" id="projetos">
        <a class="project-card" href="#" aria-label="Abrir projeto Cozinhas">
          <img src="assets/img/project-1.jpg" alt="Projeto de cozinha" loading="lazy" />
          <span>Cozinhas</span>
        </a>
        <a class="project-card" href="#" aria-label="Abrir projeto Salas">
          <img src="assets/img/project-2.jpg" alt="Projeto de sala" loading="lazy" />
          <span>Salas</span>
        </a>
        <a class="project-card" href="#" aria-label="Abrir projeto Comerciais">
          <img src="assets/img/project-3.jpg" alt="Projeto comercial" loading="lazy" />
          <span>Comerciais</span>
        </a>
      </div>
    </section>

    <section class="section" aria-labelledby="instagram-title">
      <div class="section-head">
        <p class="eyebrow">Instagram</p>
        <h2 id="instagram-title">Últimas publicações</h2>
        <p>
          O site usa a última publicação como destaque visual, com atualização por cópia da postagem para conteúdo local indexável.
        </p>
      </div>

      <div class="featured-post">
        <a id="featuredLink" class="featured-media" href="#" target="_blank" rel="noopener">
          <img id="featuredImage" src="assets/img/hero.jpg" alt="Última publicação do Instagram" loading="lazy" />
        </a>
        <div class="featured-copy">
          <h3 id="featuredTitle">Carregando publicação...</h3>
          <p id="featuredCaption"></p>
          <p id="featuredMeta" class="meta"></p>
          <a id="featuredButton" class="btn primary" href="#" target="_blank" rel="noopener">Ver no Instagram</a>
        </div>
      </div>

      <div class="post-grid" id="postGrid" aria-live="polite"></div>
    </section>

    <section class="section subtle" aria-labelledby="sobre-title">
      <div class="section-head">
        <p class="eyebrow">Visibilidade em busca</p>
        <h2 id="sobre-title">Texto curto para recomendação por pesquisa</h2>
      </div>
      <div class="copy-grid">
        <article>
          <h3>O que fazemos</h3>
          <p>Projetos de interiores com foco em organização, materialidade, iluminação e coerência visual.</p>
        </article>
        <article>
          <h3>Como trabalhamos</h3>
          <p>Diagnóstico do ambiente, definição de prioridades, proposta técnica e acompanhamento objetivo.</p>
        </article>
        <article>
          <h3>Para quem</h3>
          <p>Clientes que querem decisão prática, estética consistente e comunicação direta pelo WhatsApp.</p>
        </article>
      </div>
    </section>

    <section id="contato" class="section contact-section">
      <div>
        <p class="eyebrow">Contato</p>
        <h2>Gostei dos seus projetos, pode me falar mais?</h2>
        <p>Atendimento direto para orçamento, dúvidas e briefing inicial.</p>
      </div>
      <a class="btn whatsapp" href="https://wa.me/55SEUNUMERO?text=Gostei%20dos%20seus%20projetos,%20pode%20me%20falar%20mais?" target="_blank" rel="noopener">
        Falar no WhatsApp
      </a>
    </section>
  </main>

  <a class="floating-whatsapp" href="https://wa.me/55SEUNUMERO?text=Gostei%20dos%20seus%20projetos,%20pode%20me%20falar%20mais?" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
    WhatsApp
  </a>

  <script src="assets/js/main.js" defer></script>
</body>
</html>
```

---

## assets/css/styles.css

```css
:root {
  --bg: #0f0f10;
  --panel: #17181b;
  --text: #f3f4f6;
  --muted: #b6bcc7;
  --line: rgba(255,255,255,.08);
  --accent: #d7b98e;
  --accent-2: #ffffff;
  --shadow: 0 20px 60px rgba(0,0,0,.28);
  --radius: 20px;
  --max: 1120px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

.hero {
  background: linear-gradient(180deg, rgba(255,255,255,.04), transparent 30%);
  border-bottom: 1px solid var(--line);
}
.topbar,
.hero-content,
.section,
.contact-section {
  width: min(var(--max), calc(100% - 32px));
  margin: 0 auto;
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}
.brand { font-weight: 700; letter-spacing: .02em; }
.nav-links { display: flex; gap: 18px; color: var(--muted); }
.hero-content {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 28px;
  padding: 48px 0 64px;
  align-items: center;
}
.eyebrow {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: .14em;
  font-size: .78rem;
  color: var(--accent);
}
h1, h2, h3 { line-height: 1.1; margin: 0; }
h1 { font-size: clamp(2.2rem, 5vw, 4.7rem); max-width: 10ch; }
h2 { font-size: clamp(1.6rem, 3vw, 2.6rem); }
.lead, .section-head p, .featured-copy p, .copy-grid p { color: var(--muted); }
.lead { font-size: 1.06rem; max-width: 60ch; }
.cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  border-radius: 999px;
  border: 1px solid var(--line);
  font-weight: 600;
}
.primary { background: var(--accent); color: #111; border-color: transparent; }
.secondary, .whatsapp { background: transparent; }
.hero-media img,
.featured-media img,
.project-card img {
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.section { padding: 74px 0; }
.section-head { margin-bottom: 24px; max-width: 70ch; }
.carousel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.project-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: var(--panel);
}
.project-card span {
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 8px 12px;
  background: rgba(0,0,0,.55);
  backdrop-filter: blur(10px);
  border-radius: 999px;
}
.featured-post {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  align-items: center;
  padding: 18px;
  border: 1px solid var(--line);
  background: var(--panel);
  border-radius: calc(var(--radius) + 4px);
}
.featured-copy { padding: 10px; }
.meta { font-size: .92rem; }
.post-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.post-card {
  padding: 14px;
  border-radius: var(--radius);
  background: var(--panel);
  border: 1px solid var(--line);
}
.post-card img { border-radius: 14px; margin-bottom: 12px; }
.subtle { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.copy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.copy-grid article {
  padding: 18px;
  border-radius: var(--radius);
  background: rgba(255,255,255,.03);
  border: 1px solid var(--line);
}
.contact-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 40px 0 86px;
}
.floating-whatsapp {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 50;
  padding: 14px 18px;
  border-radius: 999px;
  background: #25d366;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 16px 40px rgba(0,0,0,.28);
}

@media (max-width: 900px) {
  .hero-content,
  .featured-post,
  .contact-section,
  .carousel,
  .post-grid,
  .copy-grid {
    grid-template-columns: 1fr;
  }
  .topbar { gap: 12px; flex-direction: column; align-items: flex-start; }
}
```

---

## assets/js/main.js

```javascript
async function loadPosts() {
  const featuredImage = document.getElementById('featuredImage');
  const featuredTitle = document.getElementById('featuredTitle');
  const featuredCaption = document.getElementById('featuredCaption');
  const featuredMeta = document.getElementById('featuredMeta');
  const featuredLink = document.getElementById('featuredLink');
  const featuredButton = document.getElementById('featuredButton');
  const postGrid = document.getElementById('postGrid');

  try {
    const response = await fetch('./data/posts.json', { cache: 'no-store' });
    const posts = await response.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error('Nenhuma publicação encontrada.');
    }

    const [latest, ...others] = posts;

    featuredImage.src = latest.image;
    featuredImage.alt = latest.alt || latest.title || 'Publicação do Instagram';
    featuredTitle.textContent = latest.title || 'Última publicação';
    featuredCaption.textContent = latest.caption || '';
    featuredMeta.textContent = latest.date ? `Publicado em ${latest.date}` : '';
    featuredLink.href = latest.url || '#';
    featuredButton.href = latest.url || '#';

    postGrid.innerHTML = posts.slice(0, 3).map(post => `
      <article class="post-card">
        <a href="${post.url || '#'}" target="_blank" rel="noopener">
          <img src="${post.image}" alt="${post.alt || post.title || 'Publicação'}" loading="lazy" />
          <h3>${post.title || 'Publicação'}</h3>
          <p>${post.caption || ''}</p>
        </a>
      </article>
    `).join('');

    document.title = `${latest.title || 'Marcialudwig Interiores'} | Marcialudwig Interiores`;
  } catch (error) {
    console.warn(error);
    featuredTitle.textContent = 'Última publicação indisponível';
    featuredCaption.textContent = 'Atualize o arquivo data/posts.json com a referência da nova publicação.';
    featuredMeta.textContent = '';
  }
}

loadPosts();
```

---

## data/posts.json

```json
[
  {
    "title": "Ambiente integrado com foco em circulação",
    "caption": "Projeto com layout racional, iluminação equilibrada e composição funcional.",
    "date": "2026-07-06",
    "image": "assets/img/project-1.jpg",
    "alt": "Ambiente integrado assinado pela Marcialudwig Interiores",
    "url": "https://www.instagram.com/marcialudwiginteriores/"
  },
  {
    "title": "Sala com leitura leve e materialidade neutra",
    "caption": "Texturas contidas, foco em conforto visual e uso cotidiano.",
    "date": "2026-06-28",
    "image": "assets/img/project-2.jpg",
    "alt": "Sala decorada com composição neutra",
    "url": "https://www.instagram.com/marcialudwiginteriores/"
  },
  {
    "title": "Projeto comercial com identidade clara",
    "caption": "Estrutura visual direta para reforço de marca e experiência do cliente.",
    "date": "2026-06-20",
    "image": "assets/img/project-3.jpg",
    "alt": "Espaço comercial projetado pela Marcialudwig Interiores",
    "url": "https://www.instagram.com/marcialudwiginteriores/"
  }
]
```

---

## sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://SEU-DOMINIO-AQUI/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://SEU-DOMINIO-AQUI/sitemap.xml
```

---

## Fluxo de atualização recomendado

1. Publicar no Instagram.
2. Copiar a imagem principal da publicação para `assets/img/`.
3. Atualizar `data/posts.json` com:
   - título curto
   - legenda resumida
   - data
   - URL do post
   - texto alternativo
4. Subir o commit para o GitHub Pages.

---

## Melhor ideia técnica, se quiser melhorar ainda mais

Em vez de usar embed como peça central:
- usar **cards locais** com a última publicação espelhada;
- manter um **link visível para o Instagram**;
- adicionar **texto editorial curto** baseado no post;
- permitir troca das 3 últimas publicações por JSON;
- deixar o botão do WhatsApp sempre fixo.

Isso preserva SEO, velocidade e controle de conteúdo.

---

## Ponto crítico

Se quiser atualização automática real a partir do Instagram, isso normalmente exige:
- processo externo de sincronização,
- API/integração autorizada,
- ou rotina manual assistida.

Para GitHub Pages puro, o modelo acima é o mais estável.

**Autorrevisão:** a estrutura está consistente para site estático; o ponto frágil é a atualização automática do Instagram, que não deve ser assumida sem integração externa.