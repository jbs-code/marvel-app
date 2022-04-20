import gsap from "gsap";

export const gsapMarvelApp = () => {
    const tl = gsap.timeline();
    tl.fromTo(".container", { opacity: 0, y: -200 }, { duration: 1, opacity: 1, y: 0 });
    tl.fromTo(".form-search", { opacity: 0 }, { duration: 1, opacity: 1 });
}

export const gsapCardHero = () => {
    const tl = gsap.timeline();
    tl.fromTo(".card-img", { opacity: 0, x: -100 }, { duration: 1, opacity: 1, x: 0 });
    tl.fromTo(".card-description", { opacity: 0 }, { duration: 1, opacity: 1 });
}