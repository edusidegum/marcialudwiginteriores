// assets/js/main.js
// Marcia Ludwig Interiores - Script principal
// Atualiza dinamicamente a seção "Do Instagram" no index.html
// com o post mais recente proveniente de data/posts.json.
//
// Estrutura esperada de data/posts.json:
// {
//   "updatedAt": "2026-07-06",
//   "posts": [ { ... } ]
// }
//
// Carregado com `defer`, portanto o DOM já está disponível.
// Sem dependências externas. Apenas navegadores modernos (ES6+).

(() => {
  // URL relativa do arquivo de dados e URL de fallback do Instagram.
  const POSTS_URL = "data/posts.json";
  const INSTAGRAM_FALLBACK_URL = "https://www.instagram.com/marcialudwiginteriores/";

  /**
   * Atualiza os elementos da seção "Do Instagram" com os dados do post.
   * @param {Object} post - Objeto do post mais recente.
   */
  const updateInstagramSection = (post) => {
    const img = document.getElementById("ig-img");
    const imgLink = document.getElementById("ig-img-link");
    const titleText = document.getElementById("ig-title-text");
    const excerpt = document.getElementById("ig-excerpt");
    const date = document.getElementById("ig-date");
    const cta = document.getElementById("ig-cta");

    // Atualiza a imagem (src e alt).
    if (img) {
      img.src = post.image;
      img.alt = post.alt || "";
    }

    // Atualiza o link que envolve a imagem.
    if (imgLink) {
      imgLink.href = post.url || INSTAGRAM_FALLBACK_URL;
    }

    // Atualiza o título (h3).
    if (titleText) {
      titleText.textContent = post.title || "";
    }

    // Atualiza o resumo (p.ig-excerpt).
    if (excerpt) {
      excerpt.textContent = post.excerpt || "";
    }

    // Atualiza a data de publicação (span.ig-date).
    if (date) {
      date.textContent = `Publicado em ${post.date || ""}`.trim();
    }

    // Atualiza o botão "Ver no Instagram".
    if (cta) {
      cta.href = post.url || INSTAGRAM_FALLBACK_URL;
    }
  };

  /**
   * Busca o JSON de posts e atualiza a seção "Do Instagram".
   * Em caso de falha ou dados inválidos, faz fallback silencioso
   * mantendo os valores estáticos presentes no HTML.
   */
  const loadLatestInstagramPost = async () => {
    try {
      // 1. Busca o arquivo data/posts.json via fetch.
      const response = await fetch(POSTS_URL, { cache: "no-cache" });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
      }

      // 2. Converte a resposta em objeto JavaScript.
      // O JSON.parse retorna um OBJETO com a propriedade "posts" (array).
      const postsData = await response.json();

      // 3. Valida que postsData.posts é realmente um array.
      const posts = postsData?.posts;
      if (!Array.isArray(posts) || posts.length === 0) {
        // 6. Se posts estiver vazio ou ausente, fallback silencioso.
        console.warn("[main.js] Nenhum post disponível em data/posts.json.");
        return;
      }

      // 4. Pega o post mais recente (primeiro do array).
      const latest = posts[0];

      // 5. Atualiza dinamicamente a seção "Do Instagram".
      updateInstagramSection(latest);
    } catch (error) {
      // 5. Se fetch falhar (rede, JSON inválido, etc.), fallback silencioso.
      // Os valores estáticos do HTML permanecem visíveis.
      console.warn("[main.js] Falha ao carregar data/posts.json:", error);
    }
  };

  // Inicia o carregamento do post mais recente.
  loadLatestInstagramPost();
})();
