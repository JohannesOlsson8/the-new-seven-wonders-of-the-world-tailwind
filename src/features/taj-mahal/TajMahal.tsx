import { IImage } from "../../components/images/Images";
import { Wonder } from "../../components/wonder/Wonder";
import imgPrev1 from "./images/taj-mahal-1-prev.jpg";
import imgPrev2 from "./images/taj-mahal-2-prev.jpg";
import imgPrev3 from "./images/taj-mahal-3-prev.jpg";
import imgFull1 from "./images/taj-mahal-1-full.jpg";
import imgFull2 from "./images/taj-mahal-2-full.jpg";
import imgFull3 from "./images/taj-mahal-3-full.jpg";

export const TajMahal = () => {
  const images: IImage[] = [
    {
      srcFull: imgFull1,
      srcPrev: imgPrev1,
      alt: "Taj Mahal from the south side",
    },
    {
      srcFull: imgFull2,
      srcPrev: imgPrev2,
      alt: "Taj Mahal from river",
    },
    {
      srcFull: imgFull3,
      srcPrev: imgPrev3,
      alt: "Close up on the details of Taj Mahal",
    },
  ];

  return (
    <Wonder
      title="Taj Mahal"
      visitorsPerYear="7 to 8 million"
      country="India"
      founded="AD 1648"
      images={images}
    />
  );
};

