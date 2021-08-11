import { IImage } from "../../components/images/Images";
import { Wonder } from "../../components/wonder/Wonder";
import imgPrev1 from "./images/great-wall-of-china-1-prev.jpg";
import imgPrev2 from "./images/great-wall-of-china-2-prev.jpg";
import imgPrev3 from "./images/great-wall-of-china-3-prev.jpg";
import imgMobile1 from "./images/great-wall-of-china-1-mobile.jpg";
import imgMobile2 from "./images/great-wall-of-china-2-mobile.jpg";
import imgMobile3 from "./images/great-wall-of-china-3-mobile.jpg";
import imgFull1 from "./images/great-wall-of-china-1-full.jpg";
import imgFull2 from "./images/great-wall-of-china-2-full.jpg";
import imgFull3 from "./images/great-wall-of-china-3-full.jpg";

export const GreatWallOfChina = () => {
  const images: IImage[] = [
    {
      srcFull: imgFull1,
      srcMobile: imgMobile1,
      srcPrev: imgPrev1,
      alt: "Great Wall of China",
    },
    {
      srcFull: imgFull2,
      srcMobile: imgMobile2,
      srcPrev: imgPrev2,
      alt: "Great Wall of China close up",
    },
    {
      srcFull: imgFull3,
      srcMobile: imgMobile3,
      srcPrev: imgPrev3,
      alt: "Great Wall of China overview",
    },
  ];

  return (
    <Wonder
      title="Great Wall of China"
      visitorsPerYear="10 million"
      country="China"
      founded="700 BC"
      images={images}
    />
  );
};
