import { NavLink } from "react-router-dom";
import { IMenuItem } from "./Menu";
import classes from "./Menu.Item.module.scss";

export interface IMenuItemProps extends IMenuItem {
  onClick: () => void;
}

export const MenuItem = (props: IMenuItemProps) => {
  return (
    <li className={`${classes.root} flex-grow`} onClick={props.onClick}>
      <NavLink
        to={props.link}
        className={`flex px-2 pt-2 pb-1.5 flex-grow items-center text-center lg:opacity-80 hover:opacity-100 lg:justify-center lg:flex-col lg:text-sm lg:px-0 lg:pt-0 lg:pb-1 ${classes.link}`}
        activeClassName={`border-indigo-600 lg:border-b-2 text-indigo-800 ${classes.active}`}
      >
        <div className="fill-current rounded-full h-7 w-7 mr-2 lg:mt-2.5 lg:mr-0 lg:p-1 lg:mb-1 lg:h-9 lg:w-9">
          {props.icon}
        </div>
        {props.label}
      </NavLink>
    </li>
  );
};
