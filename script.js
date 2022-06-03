const header = document.querySelector(".header");
const section_hero = document.querySelector(".section-hero");
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
  rootMargin: `-`${headerHeight}px`,
});
headerObserver.observe(section_hero);
