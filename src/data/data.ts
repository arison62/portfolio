import jsImg from '../assets/logo-javascript.svg'
import tsImg from '../assets/typescript.svg'
import nodeImg from '../assets/nodejs-icon.svg'
import htmlImg from '../assets/html.svg'
import cssImg from '../assets/css.svg'
import reactImg from '../assets/react.svg'
import expressImg from '../assets/express.svg'
import mongoImg from '../assets/mongodb-icon.svg'
import tailImg from '../assets/tailwindcss.svg'
import flutterImg from '../assets/flutter.svg'
import fireImg from '../assets/firebase.svg'
import jessquizzImg from '../assets/design.png'
import webImg from '../assets/whatsapp.png'



export type Data = {
    name : string
    image: string
    level : number | undefined
}

export type Project = {
    name : string
    image: string
    techs: string[]
    desc: string 
    completed: boolean
}

export const projects: Project[] = [
    {
        name : 'Jessquiz',
        image: jessquizzImg,
        techs: ['Flutter', 'Gemini AI'],
        desc : 'A quizz mobile app build with Flutter that use Gemini API for genarating questions.',
        completed: true
        
    },
    {
        name : 'Comming soon!',
        image: webImg,
        techs : ['React', 'Express', 'SockeIO'],
        desc: 'Stay tuned to see my next project.',
        completed: false
    }
]

export const skills : Data[] = [
   
    {
        name : 'JavaScript',
        image: jsImg,
        level : 60
    },
    {
        name : 'TypeScript',
        image : tsImg,
        level : 40
    },
    {
        name : 'HTML',
        image: htmlImg,
        level: 85
    },{
        name : 'CSS',
        image: cssImg,
        level: 70
    },
    {
        name: 'Tailwindcss',
        image: tailImg,
        level: 50
    },
    
    {
        name : 'Nodejs',
        image : nodeImg,
        level: 40
    },
   
    {
        name: 'ReactJs',
        image: reactImg,
        level: 60
    },
    {
        name: 'Express',
        image : expressImg,
        level: 50
    },{
        name: 'MongoDB',
        image : mongoImg,
        level: 40
    },
    {
        name: 'Flutter',
        image: flutterImg,
        level: 55
    },
    {
        name : 'FireBase',
        image: fireImg,
        level: 30
    }
   
]




