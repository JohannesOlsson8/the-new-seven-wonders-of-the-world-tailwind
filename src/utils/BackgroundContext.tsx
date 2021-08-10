import React, { createContext, useReducer } from "react";
import { Container } from "../components/container/Container";

export const initialValues = {
  returnValue: "true",
  setActiveImage: (img: string) => {},
};

export const Background = createContext(initialValues);

type State = {
  returnValue: string;
};

type IImage = {
  image: string;
};

function reducer(state: State, action: IImage) {
  return { returnValue: action.image };
}

export const BackgroundProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <Background.Provider
      value={{
        returnValue: state.returnValue,
        setActiveImage: (img: string) => dispatch({ image: img }),
      }}
    >
      <div
        className="h-screen bg-cover bg-top"
        style={{
          backgroundImage: `url(${state.returnValue})`,
        }}
      >
        <Container>{children}</Container>
      </div>
    </Background.Provider>
  );
};
