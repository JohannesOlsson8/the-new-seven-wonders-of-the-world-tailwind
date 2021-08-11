import { IImage } from "../../components/images/Images";
import { Wonder } from "../../components/wonder/Wonder";
import imgPrev1 from "./images/christ-the-redeemer-1-prev.jpg";
import imgPrev2 from "./images/christ-the-redeemer-2-prev.jpg";
import imgPrev3 from "./images/christ-the-redeemer-3-prev.jpg";
import imgMobile1 from "./images/christ-the-redeemer-1-mobile.jpg";
import imgMobile2 from "./images/christ-the-redeemer-2-mobile.jpg";
import imgMobile3 from "./images/christ-the-redeemer-3-mobile.jpg";
import imgFull1 from "./images/christ-the-redeemer-1-full.jpg";
import imgFull2 from "./images/christ-the-redeemer-2-full.jpg";
import imgFull3 from "./images/christ-the-redeemer-3-full.jpg";

export const ChristTheRedeemer = () => {
  const images: IImage[] = [
    {
      srcFull: imgFull1,
      srcPrev: imgPrev1,
      srcMobile: imgMobile1,
      alt: "Christ the Redeemer with Rio de Janeiro in the background",
    },
    {
      srcFull: imgFull2,
      srcMobile: imgMobile2,
      srcPrev: imgPrev2,
      alt: "Close up on Christ the Redeemer",
    },
    {
      srcFull: imgFull3,
      srcMobile: imgMobile3,
      srcPrev: imgPrev3,
      alt: "Christ the Redeemers face",
    },
  ];

  return (
    <Wonder
      title="Christ the Redeemer"
      visitorsPerYear="2 million"
      country="Brazil"
      founded="AD 1931"
      images={images}
    />
  );
};
