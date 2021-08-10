import React, { useState } from "react";
import { ReactComponent as OpenMenuIcon } from "../../icons/menu.svg";
import { ReactComponent as CloseMenuIcon } from "../../icons/close.svg";
import { useMediaQuery } from "@react-hook/media-query";
import { MenuItem } from "./Menu.Item";
import { useLocation } from "react-router-dom";
import { MenuItemsData } from "./MenuItemsData";

export interface IMenuItem {
  label: string;
  icon: React.ReactNode;
  link: string;
}

export const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const desktop = useMediaQuery("only screen and (min-width: 1024px)");
  const location = useLocation();

  const MenuItems = () => (
    <>
      {MenuItemsData.map((x: IMenuItem) => (
        <React.Fragment key={x.label}>
          <MenuItem
            label={x.label}
            icon={x.icon}
            onClick={() => setOpen(false)}
            link={x.link}
          />
        </React.Fragment>
      ))}
    </>
  );

  function getTitle() {
    return MenuItemsData.find(
      (x: IMenuItem) => `/${x.link}` === location.pathname
    )?.label;
  }

  return (
    <>
      {!desktop && (
        <div className="absolute top-4 flex left-4 right-4">
          <h1 className="bg-white rounded px-3 flex-grow flex items-center shadow-md font-semibold">
            {getTitle()}
          </h1>
          <button
            onClick={() => setOpen(!open)}
            className=" bg-white rounded p-1.5 ml-4 shadow-md"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseMenuIcon /> : <OpenMenuIcon />}
          </button>
        </div>
      )}

      {desktop && (
        <nav className="rounded bg-white shadow-md mb-6 lg:mx-20 xl:mx-44">
          <ul className="justify-between flex flex-row">
            <MenuItems />
          </ul>
        </nav>
      )}
      {open && !desktop && (
        <nav className="w-full top-16 absolute shadow-md">
          <ol className="justify-between rounded mx-4 bg-white flex flex-col">
            <MenuItems />
          </ol>
        </nav>
      )}
    </>
  );
};
