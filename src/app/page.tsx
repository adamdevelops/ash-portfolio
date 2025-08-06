import Image from "next/image";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <div id="intro-area" className="">
        <div className="name-area">
          <h3 className="name">Adam Hussain</h3>
          <h5 className="motto">Code that clicks. Design that sticks.</h5>
        </div>
        <div className="portrait-area">
          <Image className="portrait" src="/self-portrait.jpg" alt="self portrait" width={300} height={300} />
        </div>
      </div>
      <div className="transistion-area">
        <Image className="transistion-img" src="/phone-hello.png" alt="transistion image" width={550} height={550} />
      </div>
      <Projects title="Div Ann" description="A dividend calc app" />
    </>
  );
}
