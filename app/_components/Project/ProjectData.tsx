import {Project, ProjectCard} from './ProjectCard'

const projectData: Project[] = [
    {
        name: "Portfolio",
        description: <p className={"text-center"}>
            Découvrez mon portfolio, conçu entièrement avec{" "}
            <span className="text-primary">Next.js</span>. Il offre un aperçu de mes compétences
            et présente quelques-uns de mes projets les plus significatifs. Explorez mon travail
            et plongez dans mon univers professionnel grâce à cette plateforme dynamique et interactive.
        </p>,
        image: "/portfolio.png",
        gitLink: "https://github.com/Galland-Mael/portfolio",
        technologies: ["Next.js", "Vercel", "TypeScript"]
    },
    {
        name: "Messenger",
        description: <p className={"text-center"}>
           Messenger est une application<span className="text-primary"> Vue.js</span>
            qui implément un système de messagerie instantané avec les  <span className="text-primary"> Socket</span>.
            Il est possible après une connexion de discuter avec d&apos;autres utilisateurs via des groupe ou de simple discussion.
        </p>,
        gitLink: "https://github.com/BUT-BOURG-2023-24/tp-messenger-matteo-mael",
        image: "/messenger.png",

        technologies: ["Vue.js", "Typescript", "Node.js", "Socket.io"]
    },
    {
        name: "MyMix",
        description: <p className={"text-center"}>
            Realisation d&apos;un back office avec <span className="text-primary"> Spring Boot</span>.
            Ce back office permet de gérer des vidéo projecteur et de paramétrer des presets de couleurs.
        </p>,
        image: "/myMix.jpg",
        gitLink: "https://github.com/Galland-Mael/back-office",
        technologies: ["Spring Boot", "Flyway"]
    }
    ]
export const ProjectData = () => {

    return (
        <div>
            {projectData.map((project) => (
                <ProjectCard key={project.name} name={project.name} description={project.description} image={project.image} gitLink={project.gitLink} technologies={project.technologies}/>
            ))}
        </div>
    )
}