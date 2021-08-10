import { IMenuItem } from "./Menu";
import { ReactComponent as ChichenItzaIcon } from "../../icons/chichen-itza.svg";
import { ReactComponent as TajMahalIcon } from "../../icons/taj-mahal.svg";
import { ReactComponent as PetraIcon } from "../../icons/petra.svg";
import { ReactComponent as GreatWallOfChinaIcon } from "../../icons/great-wall-of-china.svg";
import { ReactComponent as ChristTheReedemerIcon } from "../../icons/christ-the-redeemer.svg";
import { ReactComponent as ColosseumIcon } from "../../icons/colosseum.svg";
import { ReactComponent as MachuPicchuIcon } from "../../icons/machu-picchu.svg";

export const MenuItemsData: IMenuItem[] = [
  {
    label: "Chichen Itza",
    icon: <ChichenItzaIcon />,
    link: "chichenitza",
  },
  {
    label: "Christ the Redeemer",
    icon: <ChristTheReedemerIcon />,
    link: "christtheredeemer",
  },
  {
    label: "Colosseum",
    icon: <ColosseumIcon />,
    link: "colosseum",
  },
  {
    label: "Great Wall of China",
    icon: <GreatWallOfChinaIcon />,
    link: "greatwallofchina",
  },
  {
    label: "Machu Picchu",
    icon: <MachuPicchuIcon />,
    link: "machupicchu",
  },
  {
    label: "Petra",
    icon: <PetraIcon />,
    link: "petra",
  },
  {
    label: "Taj Mahal",
    icon: <TajMahalIcon />,
    link: "tajmahal",
  },
];
