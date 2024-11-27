// noinspection JSDeprecatedSymbols


type TabsItemPropsType = {
  name: string;
}

export default function TabsItem({name}: TabsItemPropsType):JSX.Element{
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
