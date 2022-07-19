const header = document.querySelector(".header");
const sectionHero = document.querySelector(".section-hero");
const sectionAbout = document.querySelector(".section-about");
const actionBtn = document.querySelector("#action-button");
const headerHeight = header.getBoundingClientRect().height;

const stickyHeader = (entries) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(sectionHero);

actionBtn.addEventListener("click", (e) => {
  const s1coords = sectionAbout.getBoundingClientRect();
  console.log(s1coords);
});
