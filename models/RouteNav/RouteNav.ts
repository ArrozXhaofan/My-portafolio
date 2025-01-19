
export interface RouteNav {
    title: string 
    path: string

}

export function getRoutesNav() : RouteNav[] {

    const data = [
        {title: 'Home', path: '/'},
        {title: 'Proyectos', path: '/proyectos'},
        {title: 'Habilidades', path: '/habilidades'},
        {title: 'Experiencia', path: '/experiencia'},
        {title: 'Contacto', path: '/contacto'},
        {title: 'Sobre mi', path: '/about'}
    ]

    return data

}