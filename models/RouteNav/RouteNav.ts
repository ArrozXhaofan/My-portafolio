
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
        {title: 'Contacto', path: '/contacto'},
        {title: 'Sobre mi', path: '/about'}
    ]

    return data

}