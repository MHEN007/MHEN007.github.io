type experienceProps = {
    title: string;
    duration: string;
    description: string;
}

export default function ExperienceCard({experience}: {experience: experienceProps}) {
    return (
        <div>
            <div className="text-md md:text-xl font-bold">{experience.title}</div>
            <div className="text-xs md:text-md italic">{experience.duration}</div>
            <div className="text-xs md:text-md">{experience.description}</div>
        </div>
    )
}