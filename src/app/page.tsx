import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="intro-area" className="">
        <div className="name-area">
          <h3 className="name">Adam Hussain</h3>
          <h5 className="motto">Code that clicks. Design that sticks.</h5>
        </div>
        <div className="portrait-area">
          <Image className="portrait" src="/self-portrait.jpg" alt="self-portrait" width={300} height={300} />
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </>
  );
}
