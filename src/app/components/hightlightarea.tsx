import Image from "next/image";


export default function HighlightArea({title, description}: {title: string, description: string}) {
  return (
    <div className="highlight-area flex flex-row justify-center mb-10">
        <div className="description max-w-sm mr-25">
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="">{description}</p>
        </div>
        <div className="media">
            <Image src="/microprocessor.jpg" alt="screenshot of project" width={300} height={300} />
        </div>
    </div>
  )
}
