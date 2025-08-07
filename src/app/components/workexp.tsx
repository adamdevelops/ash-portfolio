import Image from "next/image";
import HighlightArea from "./hightlightarea";

const example_data = [
    {
        title: "Beacon Hill",
        description: "Developed and maintained patient-facing features across 100+ applications using TypeScript, React, Angular, Spring Boot, and Node.js. Built clean, scalable, and maintainable fullstack code, contributing to an improved digital healthcare experience. Designed backend services and APIs deployed to AWS and Azure SQL; implemented CI/CD pipelines with Jenkins and Azure DevOps.Collaborated with product managers, designers, and engineers in Agile sprints to deliver user-centric solutions with empathetic UX.Participated in code reviews, improved system reliability, and maintained documentation for smooth cross-team handoffs",
        media: "/beaconhill-360p.mp4"
    },
    {
        title: "Cognizant",
        description: "Developed and maintained patient-facing features across 100+ applications using TypeScript, React, Angular, Spring Boot, and Node.js. Built clean, scalable, and maintainable fullstack code, contributing to an improved digital healthcare experience. Designed backend services and APIs deployed to AWS and Azure SQL; implemented CI/CD pipelines with Jenkins and Azure DevOps.Collaborated with product managers, designers, and engineers in Agile sprints to deliver user-centric solutions with empathetic UX.Participated in code reviews, improved system reliability, and maintained documentation for smooth cross-team handoffs",
        media: "/duke.mp4"
    }
]

export default function WorkExp({title, description}: {title: string, description: string}) {
    return(
        <div id="work-exp" className="container mx-auto">
            <div>
                <h2 className="mb-5 mr-15 text-3xl font-bold text-right">Career Experience</h2>
                <HighlightArea projArea={false} media={example_data[0].media} title={example_data[0].title} description={example_data[0].description} />
                <HighlightArea projArea={false} media={example_data[1].media} title={example_data[1].title} description={example_data[1].description} />
                <HighlightArea projArea={false} media={example_data[0].media} title={example_data[0].title} description={example_data[0].description} />
            </div>
        </div>
    )
}
