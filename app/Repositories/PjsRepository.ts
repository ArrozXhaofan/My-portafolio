import { ProjectModel } from "@/models";


export class PjtRepository {

    allProyects: ProjectModel[]

    constructor() {
        this.allProyects = this.getData()
    }

    getData(): ProjectModel[] {

        const data: ProjectModel[] = [
            {
                title: 'MotoUI',
                description: 'Proyecto donde busque crear una apliacion para los fanaticos de las motos, donde el usuario podra der y escuchar el sonido de las motos mas iconicas en la actulidad, esto usando AVKit para los autos y MapKit para para ver las algunos eventos de motos.',
                githubRepository: 'https://github.com/ArrozXhaofan/NewMotoUI',
                imgLeft:'/proyects/p41.png',
                imgCenter: '/proyects/p4.png',
                imgRight:'/proyects/p42.png',
                reverse: false
            },
            {
                title: 'RickCloud',
                description: 'En este proyecto consolide mis habilidades en la parsistencia de datos, guardando la informacion de un API a base datos externas como Firebase y el disco del dispositivo para guardarla informacion, con un login que requiere que el usuario se acceda poder ejecutar funciones en la nube.',
                githubRepository: 'https://github.com/ArrozXhaofan/cloudrm',
                imgLeft:'/proyects/p21.png',
                imgCenter: '/proyects/p2.png',
                imgRight:'/proyects/p22.png',
                reverse: true
            },
            {
                title: 'AuthTest',
                description: 'Para buscar consolidarme en la creacion de logins y accesos implemente una pequeño proyecto con ayuda del SKD de FirebaseAuth y el SDK de Facebook, implemente una capa de seguriadad para el usuario y restrigir el acceso a datos, con metedos de Correo, Acceder con una cuenta de Facebook o con datos briometricos como FaceID o TouchID.',
                githubRepository: 'https://github.com/ArrozXhaofan/AuthWithSwiftUI',
                imgLeft:'/proyects/p61.png',
                imgCenter: '/proyects/p6.png',
                imgRight:'/proyects/p62.png',
                reverse: false
            },
            {
                title: 'ImcUI',
                description: 'Pequeño proyecto personal que busca de una manera rapida hallar el IMC(Indice de Masa Corporal) de una persona con su peso y su altura de manera dinamica y sencilla, implenteare una base de datos de los usuarios para guardar sus progresos mas adelante.',
                githubRepository: 'https://github.com/ArrozXhaofan/imcUI',
                imgLeft:'/proyects/p51.png',
                imgCenter: '/proyects/p5.png',
                imgRight:'/proyects/p52.png',
                reverse: true
            },
        ]
        return data
    }


}