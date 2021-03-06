import { useContext, useEffect } from "react";
import { Background } from "../../utils/BackgroundContext";
import { ReactComponent as ActiveImageIcon } from "../../icons/check.svg";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

export interface IImages {
  images: IImage[];
}

export interface IImage {
  srcPrev: string;
  srcFull: string;
  srcMobile: string;
  alt: string;
}

const container = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Images = (props: IImages) => {
  const context = useContext(Background);
  const { returnValue, setActiveImage } = context;
  const desktop = useMediaQuery("only screen and (min-width: 550px)");

  useEffect(() => {
    setActiveImage(
      desktop ? props.images[0].srcFull : props.images[0].srcMobile,
      props.images[0].alt
    );
    // No need to ever run this useEffect more after render
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex absolute bottom-36 w-full px-4 justify-between sm:px-8 md:justify-start lg:justify-end lg:static lg:w-auto lg:px-0 lg:mx-20 xl:mx-44"
      >
        {props.images.map((x: IImage) => (
          <motion.button
            variants={item}
            aria-label={`Click to enlarge this image of ${x.alt}`}
            aria-pressed={
              desktop ? returnValue === x.srcFull : returnValue === x.srcMobile
            }
            key={x.alt}
            style={{
              backgroundImage: `url(${x.srcPrev})`,
              backgroundSize: "cover",
            }}
            onClick={() =>
              setActiveImage(desktop ? x.srcFull : x.srcMobile, x.alt)
            }
            className={`flex h-24 w-1/4 mt-4 border-2 rounded shadow-md sm:w-32 md:mr-2 lg:mr-0 lg:mx-0 lg:ml-2 focus:border-indigo-400 focus:outline-none ${
              returnValue === x.srcFull ? "border-indigo-300" : ""
            }`}
          >
            {returnValue === x.srcFull && (
              <div
                aria-hidden="true"
                className=" bg-indigo-50 rounded-full justify-self-start place-self-start m-1 p-0.5 border border-indigo-600"
              >
                <ActiveImageIcon className="w-3 h-3 text-indigo-600" />
              </div>
            )}
          </motion.button>
        ))}
      </motion.div>
    </>
  );
};
