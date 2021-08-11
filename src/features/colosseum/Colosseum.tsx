import { IImage } from "../../components/images/Images";
import { Wonder } from "../../components/wonder/Wonder";
import imgPrev1 from "./images/colosseum-1-prev.jpg";
import imgPrev2 from "./images/colosseum-2-prev.jpg";
import imgPrev3 from "./images/colosseum-3-prev.jpg";
import imgFull1 from "./images/colosseum-1-full.jpg";
import imgFull2 from "./images/colosseum-2-full.jpg";
import imgFull3 from "./images/colosseum-3-full.jpg";
import imgMobile1 from "./images/colosseum-1-mobile.jpg";
import imgMobile2 from "./images/colosseum-2-mobile.jpg";
import imgMobile3 from "./images/colosseum-3-mobile.jpg";

export const Colosseum = () => {
  const images: IImage[] = [
    {
      srcFull: imgFull1,
      srcPrev: imgPrev1,
      srcMobile: imgFull1,
      alt: "Colosseum from outside",
    },
    {
      srcFull: imgFull2,
      srcPrev: imgPrev2,
      srcMobile: imgFull1,
      alt: "Close up Colosseum from outside",
    },
    {
      srcFull: imgFull3,
      srcPrev: imgPrev3,
      srcMobile: imgFull1,
      alt: "Colosseum inside",
    },
  ];

  return (
    <Wonder
      title="Colosseum"
      visitorsPerYear="4 million"
      country="Italy"
      founded="AD 80"
      images={images}
    />
  );
};
