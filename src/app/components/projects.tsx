import Image from "next/image";
import HighlightArea from "./hightlightarea";

const example_data ={
    title: "Div Ann",
    description: "App to show annual dividend earnings for a user's entire stock portfolio."
}


export default function Projects({title, description}: {title: string, description: string}) {
  return (
    <div id="recent-work" className="container mx-auto">
        <div>
            <h2 className="mb-5 ml-15 text-3xl font-bold">Recent Work</h2>
            <HighlightArea projArea={true} title={example_data.title} description={example_data.description} />
            <HighlightArea projArea={true} title={example_data.title} description={example_data.description} />
            <HighlightArea projArea={true} title={example_data.title} description={example_data.description} />
        </div>
    </div>
  )
}