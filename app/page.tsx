'use client'
import { useEffect, useState } from "react";
import AboutCard from "../components/home/AboutCard";
import { DefaultGoTo, HeadGoTo } from "../components/home/GoTo";
import Intro from "../components/home/Intro";
import { getExperiences } from "@/api/experience";
import { experienceProps } from "@/components/home/ExperienceCard";

export default function Home() {

  const [experiences, setExperiences] = useState<experienceProps[]>([])

  useEffect(
    () => {
      const fetch = async () => {
      const { status, response } = await getExperiences();

      if (status == 200) {
        setExperiences(response);
      }
    };

    fetch();
    }, []
  )
  return (
    <div className="flex md:flex-row flex-col p-10">
      <HeadGoTo />
      <AboutCard />
      <Intro experiences={experiences}/>
      <DefaultGoTo />
    </div>
  );
}