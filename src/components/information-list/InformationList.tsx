export const InformationList: React.FC = (props) => (
  <ul className="flex justify-between px-4 mt-2 pt-16 pb-6 bg-white sm:px-8 md:justify-end lg:justify-start lg:px-0 lg:pb-0 lg:pt-0 lg:bg-transparent xl:mt-0">
    {props.children}
  </ul>
);
