import AboutCard from "./components/home/AboutCard";
import { DefaultGoTo, HeadGoTo } from "./components/home/GoTo";
import Intro from "./components/home/Intro";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col p-10">
      <HeadGoTo />
      <AboutCard />
      <Intro />
      <DefaultGoTo />
    </div>
  );
}