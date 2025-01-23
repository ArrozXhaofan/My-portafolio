import { ExpModel } from "@/app/Components";

export class ExpReposotory {

    allData: ExpModel[]

    constructor() {
        this.allData = this.getAllData()
    }

    getAllData(): ExpModel[] {
        const data: ExpModel[] = [
            {
                empresa: 'DarkSam S.A.C 2',
                description: 'Creacion y maquetacion de un sistema eccomerce para aplicaciones dispositivos iOS y el sistema de servicio tecnico.',
                cargo: 'iOS Developer',
                subTasks: [
                    { name: 'Diseño UI/UX con Figma', time: '1mes' },
                    { name: 'Desarrollo de las Apps', time: '2mes' },
                    { name: 'Analytics con Firebase', time: '1mes' },

                ]

            },
            {
                empresa: 'VuelaItalia Viaggi',
                description: 'Me desempeñe como desarrollador web y creacion de modelo de negocio para esta nueva agencia de viajes con sede en Milan.',
                cargo: 'Web Developer',
                subTasks: [
                    { name: 'Diseño UI con Figma', time: '1mes' },
                    { name: 'Desarrollo de la web', time: '3meses' },
                    { name: 'Creacion de base de datos', time: '1mes' }
                ]

            },
            {
                empresa: 'Milanopost Express',
                description: 'Encargado de diseñar la pagina web y darle mantenimiento con nuevo contenido y funcionalidades para el usuario.',
                cargo: 'Front End Dev',
                subTasks: [
                    { name: 'Creacion de imagenes', time: '1mes' },
                    { name: 'Desarrollo de la UI', time: '2meses' },
                    { name: 'Mantenimiento de la web', time: '2mes' }
                ]

            },
            {
                empresa: 'DarkSam S.A.C',
                description: 'Responsable de crear todas las paginas web de cada marca de la empresa para uso del cliente, de igual forma hacer sistemas para servicio tecnico y asegurar un buen desempeño en el programa de garantias, creacion de un sistema de ventas para web y creacion de la base de datos de toda la empresa.',
                cargo: 'Software enginner',
                subTasks: [
                    { name: 'Diseño con Figma', time: '1mes' },
                    { name: 'Desarrollo de webs', time: '6meses' },
                    { name: 'Mantenimiento de la web', time: '4meses' },
                    { name: 'Creacion de la base datos', time: '1mes' },
                    { name: 'Sistema de servicio tecnico', time: '3meses' },
                    { name: 'Sistema de ventas', time: '3meses' },
                ]

            }
        ]
        return data
    }

}