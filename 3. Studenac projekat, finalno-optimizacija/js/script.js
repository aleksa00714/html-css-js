///////////////////////////////////////////////////////////
// Azuriranje godine u copyrightu
const godinaEl = document.querySelector(".godina");
const trenutnaGodina = new Date().getFullYear();
godinaEl.textContent = trenutnaGodina;

///////////////////////////////////////////////////////////
// Navigacija za telefone
const btnNavEl = document.querySelector(".btn-mob-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Zatvaranje navigacije za telefone nakon sto se klikne link

const allLinks = document.querySelectorAll(".navigation-main-link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// STICKY NAVIGACIJA

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// KALENDAR

///////////////////////////////////////////////////////////
// APLIKACIJA ZA VREMENSKU PROGNOZU API
