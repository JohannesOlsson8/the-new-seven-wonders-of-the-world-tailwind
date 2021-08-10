import { IImage } from "../../components/images/Images";
import { Wonder } from "../../components/wonder/Wonder";
import imgPrev1 from "./images/great-wall-of-china-1-prev.jpg";
import imgPrev2 from "./images/great-wall-of-china-2-prev.jpg";
import imgPrev3 from "./images/great-wall-of-china-3-prev.jpg";
import imgFull1 from "./images/great-wall-of-china-1-full.jpg";
import imgFull2 from "./images/great-wall-of-china-2-full.jpg";
import imgFull3 from "./images/great-wall-of-china-3-full.jpg";

export const GreatWallOfChina = () => {
  const images: IImage[] = [
    {
      srcFull: imgFull1,
      srcPrev: imgPrev1,
      alt: "Great Wall of China",
    },
    {
      srcFull: imgFull2,
      srcPrev: imgPrev2,
      alt: "Great Wall of China close up",
    },
    {
      srcFull: imgFull3,
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
