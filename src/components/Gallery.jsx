import React from "react";
import Zoom from 'react-medium-image-zoom'

const Gallery = () => {
     const data = [
          { imgelink: "https://i.imgur.com/1pkew7d.jpg" }
          { imgelink: "https://i.imgur.com/1LxzWIi.jpg" }
          { imgelink: "https://i.imgur.com/s5Ktb4Y.jpg" }
          { imgelink: "https://i.imgur.com/1DU1noL.jpg" }
          { imgelink: "https://i.imgur.com/M28wxsS.jpg" }
          { imgelink: "https://i.imgur.com/jWKixh8.jpg" }
          { imgelink: "https://i.imgur.com/BwwHV9r.jpg" }
          { imgelink: "https://i.imgur.com/N7mV7gO.jpg" }
          { imgelink: "https://i.imgur.com/DpfY0LM.jpg" }
          { imgelink: "https://i.postimg.cc/DyqM5ffz/5-7-24-1620-Little-Raven-1.jpg" },
          { imgelink: "https://i.postimg.cc/PrzSY6Kp/5-7-24-1620-Little-Raven-10.jpg" },
          { imgelink: "https://i.postimg.cc/T3dC9rHk/5-7-24-1620-Little-Raven-11.jpg" },
          { imgelink: "https://i.postimg.cc/FR4vWC5t/5-7-24-1620-Little-Raven-16.jpg" },
          { imgelink: "https://i.postimg.cc/GtgZCqNm/5-7-24-1620-Little-Raven-17.jpg" },
          { imgelink: "https://i.postimg.cc/HshgDkD9/5-7-24-1620-Little-Raven-18.jpg" },
          { imgelink: "https://i.postimg.cc/XNxWLgsh/5-7-24-1620-Little-Raven-19.jpg" },
          { imgelink: "https://i.postimg.cc/bwpF5Xd9/5-7-24-1620-Little-Raven-2.jpg" },
          { imgelink: "https://i.postimg.cc/Hsxgh7KL/5-7-24-1620-Little-Raven-20.jpg" },
          { imgelink: "https://i.postimg.cc/4yySBpdk/5-7-24-1620-Little-Raven-21.jpg" },
          { imgelink: "https://i.postimg.cc/sXwLYT34/5-7-24-1620-Little-Raven-22.jpg" },
          { imgelink: "https://i.postimg.cc/D0NYDmJW/5-7-24-1620-Little-Raven-23.jpg" },
          { imgelink: "https://i.postimg.cc/rFdH4G35/5-7-24-1620-Little-Raven-24.jpg" },
          { imgelink: "https://i.postimg.cc/hGnZNkj0/5-7-24-1620-Little-Raven-25.jpg" },
          { imgelink: "https://i.postimg.cc/SNwvf2b3/5-7-24-1620-Little-Raven-26.jpg" },
          { imgelink: "https://i.postimg.cc/25x9Y0LN/5-7-24-1620-Little-Raven-27.jpg" },
          { imgelink: "https://i.postimg.cc/sXD6g55Q/5-7-24-1620-Little-Raven-28.jpg" },
          { imgelink: "https://i.postimg.cc/tTSrZ7zr/5-7-24-1620-Little-Raven-29.jpg" },
          { imgelink: "https://i.postimg.cc/7Z9Q8B28/5-7-24-1620-Little-Raven-3.jpg" },
          { imgelink: "https://i.postimg.cc/Xvv1VwfZ/5-7-24-1620-Little-Raven-4.jpg" },
          { imgelink: "https://i.postimg.cc/FRdPSNnN/5-7-24-1620-Little-Raven-5.jpg" },
          { imgelink: "https://i.postimg.cc/MTC9bNhR/5-7-24-1620-Little-Raven-6.jpg" },
          { imgelink: "https://i.postimg.cc/7hSmBXkR/5-7-24-1620-Little-Raven-7.jpg" },
          { imgelink: "https://i.postimg.cc/wxNfTxmk/5-7-24-1620-Little-Raven-8.jpg" },
          { imgelink: "https://i.postimg.cc/FsQPftbX/5-7-24-1620-Little-Raven-9.jpg" },
          { imgelink: "https://i.postimg.cc/xd9g6Lxx/IMG-1106.jpg" },
          { imgelink: "https://i.postimg.cc/V66g8mcX/unnamed.jpg" },
          { imgelink: "https://i.postimg.cc/3N0Zk1NR/unnamed-1.jpg" },
          { imgelink: "https://i.postimg.cc/76fRNgbv/unnamed-10.jpg" },
          { imgelink: "https://i.postimg.cc/Kc3VkrdB/unnamed-11.jpg" },
          { imgelink: "https://i.postimg.cc/G2V5gHs4/unnamed-12.jpg" },
          { imgelink: "https://i.postimg.cc/7hzQFwgm/unnamed-13.jpg" },
          { imgelink: "https://i.postimg.cc/v81R7d61/unnamed-2.jpg" },
          { imgelink: "https://i.postimg.cc/WtRwgZq7/unnamed-3.jpg" },
          { imgelink: "https://i.postimg.cc/ry7BQYSf/unnamed-4.jpg" },
          { imgelink: "https://i.postimg.cc/CxgWVBrD/unnamed-5.jpg" },
          { imgelink: "https://i.postimg.cc/65RDSLct/unnamed-6.jpg" },
          { imgelink: "https://i.postimg.cc/qvxWBJWF/unnamed-7.jpg" },
          { imgelink: "https://i.postimg.cc/SKZ58ZS7/unnamed-8.jpg" },
          { imgelink: "https://i.postimg.cc/TP2FK863/unnamed-9.jpg" },
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
