// assets/js/main.js
// Marcia Ludwig Interiores
// Atualiza dinamicamente a seção "Do Instagram" com o post mais recente.
// Carregado com defer, portanto o DOM já está disponível.

(() => {
  "use strict";

  // URL relativa do JSON com os posts do Instagram.
  const POSTS_URL = "data/posts.json";

  // URL de fallback do Instagram (caso o JSON não esteja disponível).
  const INSTAGRAM_FALLBACK_URL = "https://www.instagram.com/marcialudwiginteriores/";

  /**
   * Atualiza os elementos da seção "Do Instagram" com os dados do post.
   * @param {Object} post - Objeto do post mais recente.
   */
  const updateInstagramSection = (post) => {
    const {
      image,
      alt,
      url,
      title,
      excerpt,
      date,
    } = post;

    // Imagem do post
    const img = document.getElementById("ig-img");
    if (img && image) {
      img.src = image;
      img.alt = alt || "Post do Instagram";
    }

    // Link que envolve a imagem
    const imgLink = document.getElementById("ig-img-link");
    if (imgLink && url) {
      imgLink.href = url;
    }

    // Título do post (h3)
    const titleText = document.getElementById("ig-title-text");
    if (titleText && title) {
      titleText.textContent = title;
    }

    // Resumo do post (p.ig-excerpt)
    const excerptEl = document.getElementById("ig-excerpt");
    if (excerptEl && excerpt) {
      excerptEl.textContent = excerpt;
    }

    // Data de publicação (span.ig-date)
    const dateEl = document.getElementById("ig-date");
    if (dateEl && date) {
      dateEl.textContent = `Publicado em ${date}`;
    }

    // Botão "Ver no Instagram"
    const cta = document.getElementById("ig-cta");
    if (cta && url) {
      cta.href = url;
    }
  };

  /**
   * Função principal assíncrona: busca o JSON e atualiza a seção.
   * Em caso de erro, mantém os valores estáticos do HTML.
   */
  const initInstagramSection = async () => {
    try {
      // Busca o arquivo JSON de posts
      const response = await fetch(POSTS_URL, { cache: "no-cache" });

      if (!response.ok) {
        throw new Error(`Falha ao carregar posts: ${response.status} ${response.statusText}`);
      }

      const posts = await response.json();

      // Valida que o retorno é um array
      if (!Array.isArray(posts)) {
        throw new Error("Formato inválido: esperado um array de posts.");
      }

      // Se o array estiver vazio, faz fallback silencioso
      if (posts.length === 0) {
        console.warn("Nenhum post encontrado em data/posts.json. Mantendo conteúdo estático.");
        return;
      }

      // Pega o post mais recente (primeiro item do array)
      const latest = posts[0];

      // Atualiza a seção "Do Instagram" no DOM
      updateInstagramSection(latest);
    } catch (error) {
      // Fallback silencioso: apenas avisa no console e mantém o HTML estático
      console.warn("Não foi possível carregar o post do Instagram:", error.message);
    }
  };

  // Inicializa a seção de forma assíncrona
  initInstagramSection();
})();
