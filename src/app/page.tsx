import Image from "next/image";
import Projects from "./components/projects";
import WorkExp from "./components/workexp";
import Intro from "./components/intro";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="transistion-area">
        <Image className="transistion-img" src="/phone-hello.png" alt="transistion image" width={550} height={550} />
      </div>
      <Projects title="Div Ann" description="A dividend calc app" />
      <WorkExp title="Div Ann" description="A dividend calc app" />
    </>
  );
}
