import Image from "next/image";


export default function HighlightArea({projArea, title, description}: {projArea: boolean, title: string, description: string}) {

    const areaDiv = (projArea: boolean) =>  {
        if(projArea){
            return(
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
        } else{
            return(
                <div className="highlight-area flex flex-row justify-center mb-10">
                    <div className="media">
                        <video autoPlay loop muted className="rounded-md w-full max-w-xl" src="/duke.mp4" width={300} height={300} />
                    </div>
                    <div className="description max-w-sm ml-25">
                        <h3 className="text-2xl font-bold mb-3">{title}</h3>
                        <p className="">{description}</p>
                    </div>
                </div>
            )
        }
    }

//     const areaDiv = (projArea: boolean) => {
//     if (projArea) {
//       return (
//         <div className="highlight-area flex flex-row justify-center mb-10">
//           <div className="description max-w-sm mr-25">
//             <h3 className="text-2xl font-bold mb-3">{title}</h3>
//             <p>{description}</p>
//           </div>
//           <div className="media">
//             <Image
//               src="/microprocessor.jpg"
//               alt="screenshot of project"
//               width={300}
//               height={300}
//             />
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="highlight-area flex flex-row justify-center mb-10">
//           <div className="media">
//             <Image
//               src="/microprocessor.jpg"
//               alt="screenshot of project"
//               width={300}
//               height={300}
//             />
//           </div>
//           <div className="description max-w-sm ml-25">
//             <h3 className="text-2xl font-bold mb-3">{title}</h3>
//             <p>{description}</p>
//           </div>
//         </div>
//       );
//     }
//   };
    
    return (
        <div>
            {areaDiv(projArea)}
        </div>
        
    )
}
