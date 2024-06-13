import React from "react";
import Zoom from 'react-medium-image-zoom'

const Gallery = () => {
     const data = [
          { imgelink: "https://i.imgur.com/8KXCokB.jpg" },
          { imgelink: "https://i.imgur.com/OfNhTPx.jpg" },
          { imgelink: "https://i.imgur.com/LBP1yif.jpg" },
          { imgelink: "https://i.imgur.com/PPsRCKe.jpg" },
          { imgelink: "https://i.imgur.com/8O4qmR3.jpg" },
          { imgelink: "https://i.imgur.com/i4xzafz.jpg" },
          { imgelink: "https://i.imgur.com/c4AdLNy.jpg" },
          { imgelink: "https://i.imgur.com/v6SICgV.jpg" },
          { imgelink: "https://i.imgur.com/KJa0Kou.jpg" },
          { imgelink: "https://i.imgur.com/W0ggKCz.jpg" },
          { imgelink: "https://i.imgur.com/JHmOrvc.jpg" },
          { imgelink: "https://i.imgur.com/ylqdWU3.jpg" },
          { imgelink: "https://i.imgur.com/nD9ScUQ.jpg" },
          { imgelink: "https://i.imgur.com/j1aNsIK.jpg" },
          { imgelink: "https://i.imgur.com/RC7JzAU.jpg" },
          { imgelink: "https://i.imgur.com/NSbXbN8.jpg" },
          { imgelink: "https://i.imgur.com/Hy4SUTo.jpg" },
          { imgelink: "https://i.imgur.com/PK2ZgFH.jpg" },
          { imgelink: "https://i.imgur.com/UnGEao7.jpg" },
          { imgelink: "https://i.imgur.com/m8QeyME.jpg" },
          { imgelink: "https://i.imgur.com/GrCPFdA.jpg" },
          { imgelink: "https://i.imgur.com/4lVcpeb.jpg" },
          { imgelink: "https://i.imgur.com/zlJh5lG.jpg" },
          { imgelink: "https://i.imgur.com/jC4hStM.jpg" },
          { imgelink: "https://i.imgur.com/7KjYmEN.jpg" },
          { imgelink: "https://i.imgur.com/P4EH9xe.jpg" },
          { imgelink: "https://i.imgur.com/fof5mud.jpg" },
          { imgelink: "https://i.imgur.com/tbl013M.jpg" },
          { imgelink: "https://i.imgur.com/QRGfUw8.jpg" },
          { imgelink: "https://i.imgur.com/G35TpsI.jpg" },
          { imgelink: "https://i.imgur.com/awKdi8B.jpg" },
          { imgelink: "https://i.imgur.com/M1xb0mm.jpg" },
          { imgelink: "https://i.imgur.com/TfK2NMR.jpg" },
          { imgelink: "https://i.imgur.com/Xub3TH5.jpg" },
          { imgelink: "https://i.imgur.com/tzl184D.jpg" },
          { imgelink: "https://i.imgur.com/6P1jJ3o.jpg" },
          { imgelink: "https://i.imgur.com/ZXDOGnR.jpg" },
          { imgelink: "https://i.imgur.com/M2xfXbi.jpg" },
     ];


     return (
          <div className="flex flex-col items-center justify-center p-10 w-full font-rale">
               <h4 className="flex py-4 mb-10 text-7xl">See Our Work</h4>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full md:grid-cols-3">
                    {data.map(({ imgelink }, index) => (
                         <div key={index}>
                                  
                              <img
                                   className="h-full w-full max-w-full rounded-lg object-cover object-center"
                                   src={imgelink}
                                   alt="gallery-photo"
                                   loading="lazy"
                                   
                              />
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default Gallery;
