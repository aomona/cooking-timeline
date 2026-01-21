import MenuCard from "./menuCard";
import { MenuCardProps } from "./menuCard";

type MenuCardsProps = {
  menus: MenuCardProps[];
};

export default function MenuCards({ menus }: MenuCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-4">
      {menus.map((menu) => (
        <MenuCard {...menu} key={menu.name} />
      ))}
    </div>
  );
}
