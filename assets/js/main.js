(async function () {
  const instagramImage = document.getElementById("instagram-image");
  const instagramLink = document.getElementById("instagram-link");
  const instagramTitle = document.getElementById("instagram-title");
  const instagramExcerpt = document.getElementById("instagram-excerpt");
  const instagramDate = document.getElementById("instagram-date");
  const instagramCta = document.getElementById("instagram-cta");

  const fallbackInstagram = "https://www.instagram.com/marcialudwiginteriores/";

  try {
    const response = await fetch("data/posts.json", { cache: "no-store" });

    if (!response.ok) throw new Error("Falha ao carregar posts.json");

    const data = await response.json();
    const posts = Array.isArray(data.posts) ? data.posts : [];

    if (!posts.length) return;

    const latest = posts[0];

    if (latest.image) instagramImage.src = latest.image;
    if (latest.alt) instagramImage.alt = latest.alt;
    instagramLink.href = latest.url || fallbackInstagram;

    instagramTitle.textContent = latest.title || "Projeto em destaque";
    instagramExcerpt.textContent = latest.excerpt || "";
    instagramDate.textContent = latest.date ? `Publicado em ${latest.date}` : "Publicação recente";
    instagramCta.href = latest.url || fallbackInstagram;
  } catch (error) {
    console.warn("Instagram local data could not be loaded:", error);
    instagramLink.href = fallbackInstagram;
    instagramCta.href = fallbackInstagram;
    instagramDate.textContent = "Instagram indisponível no momento";
  }
})();
