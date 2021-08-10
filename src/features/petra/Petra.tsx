import { IImage } from "../../components/images/Images";
import { Wonder } from "../../components/wonder/Wonder";
import imgPrev1 from "./images/petra-1-prev.jpg";
import imgPrev2 from "./images/petra-2-prev.jpg";
import imgPrev3 from "./images/petra-3-prev.jpg";
import imgFull1 from "./images/petra-1-full.jpg";
import imgFull2 from "./images/petra-2-full.jpg";
import imgFull3 from "./images/petra-3-full.jpg";

export const Petra = () => {
  const images: IImage[] = [
    {
      srcFull: imgFull1,
      srcPrev: imgPrev1,
      alt: "Al-Khazneh overview in Petra",
    },
    {
      srcFull: imgFull2,
      srcPrev: imgPrev2,
      alt: "Close on Al-Khazneh in Petra",
    },
    {
      srcFull: imgFull3,
      srcPrev: imgPrev3,
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
