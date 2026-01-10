// PARA TEMAS DEL NAV EN SUS DROPDOWNS EN DESKTOP

const dropsMenuCache = new Map();

export const initToggleDesktopMenu = () => {
    const dropdownTriggers = Array.from(document.querySelectorAll('[data-droptrigger]')) as HTMLElement[];

    // PARA LOS DROPDOWNS
    dropdownTriggers.forEach((trigger) => {
        const idx = trigger.dataset.droptrigger;
        const dropContainer = document.querySelector(`[data-dropcontent="${idx}"]`);

        if (dropContainer && idx) {
            // guardar la referencia al nodo del DOM en el cache
            dropsMenuCache.set(idx, {
                trigger: trigger,
                content: dropContainer
            });

            //asignar el evento
            trigger.addEventListener('click', () => openDropMenu(idx));
            trigger.addEventListener('mouseenter', () => openDropMenu(idx));
        }
    });

    // Evento para cerrar al salir del área del menú (dropdown o box)
    document.querySelectorAll('#menuContainerDesktop').forEach(container => {
        container.addEventListener('mouseleave', closeAll);
    });

}

const openDropMenu = (idx: string) => {
    closeAll();
    let itemMenu = dropsMenuCache.get(idx);
    if (!itemMenu) return;

    itemMenu.content.classList.toggle(`hidden-drop`);
    itemMenu.content.classList.toggle(`visible-drop`);
}

function closeAll() {
    dropsMenuCache.forEach(item => {
        item.content.classList.remove('visible-drop');
        item.content.classList.add('hidden-drop');
    });
}


// INTERSECTION OBSEVER PARA ANIMACIONES AL SCROLLEAR EN EL HEADER
export const initHeaderScroll = () => {
    const header = document.querySelector('#headerContainer') as HTMLElement;
    if (window.scrollY > 250) {
        header.classList.remove('header-opacity');
        header.classList.add('header-color');
    } else if (window.scrollY < 250) {
        header.classList.add('header-opacity');
        header.classList.remove('header-color');
    }
};
