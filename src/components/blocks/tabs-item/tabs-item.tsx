import {ReactNode} from 'react';

type TabsItemPropsType = {
  name: string;
};

export default function TabsItem({name}: TabsItemPropsType):ReactNode{
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item"
        href="#"
      >
        <span>{name}</span>
      </a>
    </li>
  );
}
