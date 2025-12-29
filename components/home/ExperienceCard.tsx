export type experienceProps = {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}

export default function ExperienceCard({experience}: {experience: experienceProps}) {
    return (
        <div>
            <div className="text-md md:text-xl font-bold">{experience.title} at {experience.company}</div>
            <div className="text-xs md:text-md italic">{experience.startDate}-{experience.endDate}</div>
            <div className="text-xs md:text-md">{experience.description}</div>
        </div>
    )
}