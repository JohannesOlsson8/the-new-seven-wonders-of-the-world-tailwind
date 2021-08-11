import { IImage } from "../../components/images/Images";
import { Wonder } from "../../components/wonder/Wonder";
import imgPrev1 from "./images/chichen-itza-1-prev.jpg";
import imgPrev2 from "./images/chichen-itza-2-prev.jpg";
import imgPrev3 from "./images/chichen-itza-3-prev.jpg";
import imgMobile1 from "./images/chichen-itza-1-mobile.jpg";
import imgMobile2 from "./images/chichen-itza-2-mobile.jpg";
import imgMobile3 from "./images/chichen-itza-3-mobile.jpg";
import imgFull1 from "./images/chichen-itza-1-full.jpg";
import imgFull2 from "./images/chichen-itza-2-full.jpg";
import imgFull3 from "./images/chichen-itza-3-full.jpg";

export const ChichenItza = () => {
  const images: IImage[] = [
    {
      srcFull: imgFull1,
      srcMobile: imgMobile1,
      srcPrev: imgPrev1,
      alt: "Temple of Kukulcán sideviewd",
    },
    {
      srcFull: imgFull2,
      srcMobile: imgMobile2,
      srcPrev: imgPrev2,
      alt: "Temple of Kukulcán top",
    },
    {
      srcFull: imgFull3,
      srcMobile: imgMobile3,
      srcPrev: imgPrev3,
      alt: "Serpent sculpture at the base of Kukulcán",
    },
  ];

  return (
    <Wonder
      title="Chichen Itza"
      visitorsPerYear="2 million"
      country="Mexcio"
      founded="AD 600"
      images={images}
    />
  );
};
