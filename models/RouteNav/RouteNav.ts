
export interface RouteNav {
    title: string 
    path: string

}

export function getRoutesNav() : RouteNav[] {

    const data = [
        {title: 'Inicio', path: '/'},
        {title: 'Habilidades', path: '/habilidades'},
        {title: 'Proyectos', path: '/proyectos'},
        {title: 'Experiencia', path: '/experiencia'},
        {title: 'Sobre mi', path: '/me'},
    ]

    return data

}