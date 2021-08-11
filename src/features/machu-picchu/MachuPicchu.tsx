import { IImage } from "../../components/images/Images";
import { Wonder } from "../../components/wonder/Wonder";
import imgPrev1 from "./images/machu-picchu-1-prev.jpg";
import imgPrev2 from "./images/machu-picchu-2-prev.jpg";
import imgPrev3 from "./images/machu-picchu-3-prev.jpg";
import imgFull1 from "./images/machu-picchu-1-full.jpg";
import imgFull2 from "./images/machu-picchu-2-full.jpg";
import imgFull3 from "./images/machu-picchu-3-full.jpg";
import imgMobile1 from "./images/machu-picchu-1-mobile.jpg";
import imgMobile2 from "./images/machu-picchu-2-mobile.jpg";
import imgMobile3 from "./images/machu-picchu-3-mobile.jpg";

export const MachuPicchu = () => {
  const images: IImage[] = [
    {
      srcFull: imgFull1,
      srcPrev: imgPrev1,
      srcMobile: imgMobile1,
      alt: "Machu Picchu overview",
    },
    {
      srcFull: imgFull2,
      srcPrev: imgPrev2,
      srcMobile: imgMobile2,
      alt: "Machu Picchu courtyard",
    },
    {
      srcFull: imgFull3,
      srcPrev: imgPrev3,
      srcMobile: imgMobile3,
      alt: "Machu Picchu courtyard close up",
    },
  ];

  return (
    <Wonder
      title="Machu Picchu"
      visitorsPerYear="1.5 million"
      country="Peru"
      founded="AD 1450"
      images={images}
    />
  );
};
