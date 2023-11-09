export enum RouteNamesEnum {
    HOME = '/',
    ABOUT = '/about'
}

export interface IRoute {
    path: string;
    name: string;
}

export const routes: IRoute[] = [
    {
        path: RouteNamesEnum.HOME,
        name: 'Home'
    },
    {
        path: RouteNamesEnum.ABOUT,
        name: 'About'
    }
]