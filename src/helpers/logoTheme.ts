import { tellMeTheme } from "./siteTheme";

export const checkLogo = () => {
    const allLogos = document.querySelectorAll('#logoSite');

    if(!allLogos) return;

    allLogos.forEach((logo) => {
        const imgLogo = logo as HTMLImageElement;
        const currentTheme = tellMeTheme();
        imgLogo.src = `/img/${currentTheme == 'light' ? 'logo-white.png' : 'logo-black.png'}`;
    });
}


export const changeLogoByTheme = () => {
    const allLogos = document.querySelectorAll('#logoSite');

    if(!allLogos) return;

    allLogos.forEach((logo) => {
        const imgLogo = logo as HTMLImageElement;
        const currentTheme = tellMeTheme();
        imgLogo.src = `/img/${currentTheme == 'light' ? 'logo-white.png' : 'logo-black.png'}`;
    });
}

