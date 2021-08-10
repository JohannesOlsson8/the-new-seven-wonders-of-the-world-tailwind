import React, { createContext, useReducer } from "react";
import { Container } from "../components/container/Container";

export const initialValues = {
  returnValue: "",
  alt: "",
  setActiveImage: (img: string, alt: string) => {},
};

export const Background = createContext(initialValues);

type State = {
  returnValue: string;
};

type IImage = {
  image: string;
  alt: string;
};

function reducer(state: State, action: IImage) {
  return { returnValue: action.image, alt: action.alt };
}

export const BackgroundProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <Background.Provider
      value={{
        returnValue: state.returnValue,
        alt: state.alt,
        setActiveImage: (img: string, alt: string) =>
          dispatch({ image: img, alt: alt }),
      }}
    >
      <div className="h-screen relative">
        <div className="absolute z-10 flex justify-center overflow-hidden left-0 right-0">
          <img
            src={state.returnValue}
            alt={state.alt}
            className="h-screen max-w-none object-cover w-auto"
            style={{
              maxWidth: "100vw",
              maxHeight: "100vh",
            }}
          />
        </div>
        <Container>{children}</Container>
      </div>
    </Background.Provider>
  );
};
