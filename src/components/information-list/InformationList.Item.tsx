interface IInformationItem {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

export const InformationItem = (props: IInformationItem) => (
  <li className="flex items-center text-black md:ml-9  lg:text-white">
    <div className="mr-3 fill-current transform scale-110 hidden sm:block">
      {props.icon}
    </div>
    <div className="flex flex-col">
      <p className="text-sm">{props.label}</p>
      <h2 className="font-bold">{props.value}</h2>
    </div>
  </li>
);
