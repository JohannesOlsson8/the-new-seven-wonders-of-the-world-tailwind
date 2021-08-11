import { IImage } from "../../components/images/Images";
import { Wonder } from "../../components/wonder/Wonder";
import imgPrev1 from "./images/petra-1-prev.jpg";
import imgPrev2 from "./images/petra-2-prev.jpg";
import imgPrev3 from "./images/petra-3-prev.jpg";
import imgFull1 from "./images/petra-1-full.jpg";
import imgFull2 from "./images/petra-2-full.jpg";
import imgFull3 from "./images/petra-3-full.jpg";
import imgMobile1 from "./images/petra-1-mobile.jpg";
import imgMobile2 from "./images/petra-2-mobile.jpg";
import imgMobile3 from "./images/petra-3-mobile.jpg";

export const Petra = () => {
  const images: IImage[] = [
    {
      srcFull: imgFull1,
      srcPrev: imgPrev1,
      srcMobile: imgMobile1,
      alt: "Al-Khazneh overview in Petra",
    },
    {
      srcFull: imgFull2,
      srcPrev: imgPrev2,
      srcMobile: imgMobile2,
      alt: "Close on Al-Khazneh in Petra",
    },
    {
      srcFull: imgFull3,
      srcPrev: imgPrev3,
      srcMobile: imgMobile3,
      alt: "Accommodation in Petra",
    },
  ];

  return (
    <Wonder
      title="Petra"
      visitorsPerYear="1 million"
      country="Jordan"
      founded="312 BC"
      images={images}
    />
  );
};
