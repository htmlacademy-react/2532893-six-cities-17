// noinspection JSDeprecatedSymbols

import {useAppDispatch} from '../../../utility/hooks.ts';
import {changeCity} from '../../../store/action.ts';

type TabsItemPropsType = {
  name: string;
  isActive: boolean;
}

export function TabsItem({name, isActive}: TabsItemPropsType):JSX.Element{
  const dispatch = useAppDispatch();
  return (
    <li className="locations__item"
      onClick={() => dispatch(changeCity(name))}
    >
      <a className={isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item '}
        href="#"
      >
        <span>{name}</span>
      </a>
    </li>
  );
}
