// Subettini Crochê — interações do site

// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Cabeçalho muda ao rolar a página
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menu do celular
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", aberto);
  toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Animação suave dos elementos ao aparecerem na tela
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Destaca no menu a seção que está sendo vista
const links = [...document.querySelectorAll(".nav a:not(.btn)")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) =>
          l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

// Filtro das peças
const filtros = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filtros.forEach((botao) =>
  botao.addEventListener("click", () => {
    filtros.forEach((b) => b.classList.remove("is-active"));
    botao.classList.add("is-active");
    const cat = botao.dataset.filter;
    cards.forEach((card) => {
      const mostrar = cat === "todos" || card.dataset.cat === cat;
      card.classList.toggle("is-hidden", !mostrar);
      if (mostrar) card.classList.add("is-visible");
    });
  })
);
