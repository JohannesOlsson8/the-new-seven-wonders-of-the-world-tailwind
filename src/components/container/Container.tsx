import classes from "./Container.module.scss";

export const Container: React.FC = (props) => {
  return (
    <>
      <div
        className={`h-screen flex flex-col bg-cover absolute z-20 w-full ${classes.gradient}`}
      >
        {props.children}
      </div>
    </>
  );
};
