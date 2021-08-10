import { IImage, Images } from "../images/Images";
import { InformationList } from "../information-list/InformationList";
import { InformationItem } from "../information-list/InformationList.Item";
import { ReactComponent as UsersIcon } from "./icons/users.svg";
import { ReactComponent as ToolsIcon } from "./icons/tools.svg";
import { ReactComponent as FlagIcon } from "./icons/flag.svg";
import { ReactComponent as ArrowRightIcon } from "../../icons/arrow-right.svg";
import { NavLink, useLocation } from "react-router-dom";
import { MenuItemsData } from "../menu/MenuItemsData";

export interface IWonder {
  images: IImage[];
  title: string;
  visitorsPerYear: string;
  country: string;
  founded: string;
}

export const Wonder = (props: IWonder) => {
  const location = useLocation();

  const index = MenuItemsData.findIndex(function (x) {
    return `/${x.link}` === location.pathname;
  });

  function getNextLink() {
    if (MenuItemsData.length - 1 === index) {
      return MenuItemsData[0].link;
    } else {
      return MenuItemsData[index + 1].link;
    }
  }

  function getNextTitle() {
    if (MenuItemsData.length - 1 === index) {
      return MenuItemsData[0].label;
    } else {
      return MenuItemsData[index + 1].label;
    }
  }

  return (
    <>
      <Images images={props.images} />
      <div className="mt-auto lg:mb-3 lg:mx-20 xl:mx-44">
        <div className="flex flex-col justify-between w-full lg:flex-row lg:w-auto xl:items-end">
          <h1 className="hidden text-5xl font-bold text-white lg:block">
            {props.title}
          </h1>
          <InformationList>
            <InformationItem
              icon={<ToolsIcon />}
              label="Founded"
              value={props.founded}
            />
            <InformationItem
              icon={<FlagIcon />}
              label="Country"
              value={props.country}
            />
            <InformationItem
              icon={<UsersIcon />}
              label="Visitors per year"
              value={props.visitorsPerYear}
            />
          </InformationList>
        </div>
      </div>
      <NavLink
        to={getNextLink()}
        className="z-20 px-4 bg-gray-100 w-full py-4 flex justify-between sm:px-8 lg:hidden"
      >
        <span>Next: {getNextTitle()}</span>
        <ArrowRightIcon />
      </NavLink>
    </>
  );
};
