import Link from "next/link";
import projects from "./projects.json";
import Image from "next/image";

type Project = {
    title: string;
    full_description: string;
    short_description: string;
    link: string | string[];
    image?: string;
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="flex flex-row border-2 border-gray-400 p-5 rounded-lg">
            <div className="mr-5">
                {project.image && (
                    <Image src={`/assets${project.image}`} alt={project.title} width={200} height={200} className="w-16 h-16 md:w-32 md:h-32 object-cover mr-5 rounded-lg"/>
                )}
            </div>
            <div>
                <div className="text-lg font-bold">{project.title}</div>
                <div className="text-sm">{project.short_description}</div>
                {Array.isArray(project.link) ? (
                    project.link.map((link, index) => (
                        <div key={index}>
                            <Link href={link} className="text-blue-500 hover:underline">
                                View Project {index + 1}
                            </Link>
                        </div>
                    ))
                ) : (
                <Link href={project.link} className="text-blue-500 hover:underline">
                    View Project
                </Link>
                )}
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div className="flex flex-col p-10">
            <div className="text-lg md:text-2xl w-full border-b-2 border-gray-400 pb-2 mb-5 font-bold">
                Projects
            </div>
            
            <div className="font-italic">
                Here are some of my projects. More projects can be found on my <Link href="https://github.com/MHEN007" className="text-blue-500 hover:underline">Github page</Link>.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </div>
    )
}