import experiences from "../../experiences/experiences.json";
import ExperienceCard from "./ExperienceCard";

export function Header ({title}: {title: string}) {
    return (
      <div className="text-lg md:text-xl w-full border-b-2 border-gray-400 pb-2 mb-5 font-bold">
        {title}
      </div>
    )
}

function Skills ({skills}: {skills: string[]}) {
    return (
      <div className="flex flex-row flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm md:text-md">
            {skill}
          </div>
        ))}
      </div>
    )
}

export default function Intro() {
  const skills = ["Python", "SQL", "Javascript", "Java", "Go", "PostgreSQL", "LaTeX", "MySQL", "NextJS", "FastAPI", "PyTorch", "Machine Learning", "Database Modelling", "Full Stack Development"];
    return (
      <div className="flex flex-col sm:mt-5 w-full md:w-[50%] mt-10 md:mt-0 gap-10">
        <div id="about">
          <Header title="Welcome to My Homepage!" />
          <div className="text-sm md:text-lg">
            Hello! I&apos;m Matthew Mahendra, but you can call me Mahen. I&apos;m a consultant in IT and a software engineer. I graduated from Bandung Institute of Technology in Informatics Engineering/Computer Science with Cum Laude.
            I am experienced in programming languages such as Python, SQL, Javascript, Java, Go, and basic bash programming. I have experience in full stack website development, creating machine learning models, database modeling and development, and currently developing a machine learning model to predict query workload performance in a DBMS as my final project. I have experiences in team work and coordination as the coordinator of teaching assistants in a college course.
          </div>
        </div>

        <div id="skills">
          <Header title="Tech Stack & Skills" />
          <Skills skills={skills} />
        </div>

        <div id="experiences">
          <Header title="Experiences" />

          <div className="flex flex-col gap-7">
            {experiences.map((experience, index) => (
              <ExperienceCard experience={experience} key={index} />
            ))}
          </div>
        </div>
      </div>
    )
}