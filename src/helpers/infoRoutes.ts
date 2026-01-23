import { routes, type RouterI, type SubRoutes } from "@utils/constants/routes";

export const getRouteDataService = (basePath: RouterI['basePath'], serviceNamePath: string) => { //serviceNamePath => routes -> path (no subroutes)
    if (!routes || routes?.length == 0 || serviceNamePath == '' || !serviceNamePath || !basePath) {
        console.error('getRouteDataService fail');
        return [];
    };


    const serviceRoutes = routes.find(route => basePath == route.basePath);

    if (!serviceRoutes || serviceRoutes.routes.length == 0) {
        return [];
    }
    const subRoutesNames = serviceRoutes.routes.find(route => route.path == `/${serviceNamePath}`)?.subRoutes;
    return subRoutesNames;

};

export const makeTabsServicesNames = (subRoutes: SubRoutes[] | []) => {
    const tabsFormatNames = subRoutes?.map(e => {
        return {
            label: e.name,
            active: false
        };
    });

    return tabsFormatNames;
};