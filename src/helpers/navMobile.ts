export const initToggleMobileMenu= () => {
    const mobileMenuToggle  = document.getElementById('mobileMenuToggle');
    // const closeToggleMobileMenu = document.getElementById('closeMobileMenu');
    const navMenu:HTMLElement | null = document.getElementById('navMenu');

    if (!navMenu) return;

    mobileMenuToggle?.addEventListener('click', () => showHideMobileMenu(navMenu))
    // closeToggleMobileMenu?.addEventListener('click', () => showHideMobileMenu(navMenu))

}

const showHideMobileMenu = (navMenu: HTMLElement) => {
        navMenu.classList.toggle('hidden-menu');
        navMenu.classList.toggle('visible-menu');
        document.body.classList.toggle('t-overflowY-hidden');
}