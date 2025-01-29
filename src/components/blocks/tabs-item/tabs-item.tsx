// noinspection JSDeprecatedSymbols

import {useAppDispatch} from '../../../utility/hooks.ts';
import {changeActiveCity} from '../../../store/offers-process/offers-process.ts';

type TabsItemPropsType = {
  isActive: boolean;
  name: string;
}

export function TabsItem({isActive, name}: TabsItemPropsType):JSX.Element{

  const dispatch = useAppDispatch();
  return (
    <li className="locations__item"
      onClick={() => dispatch(changeActiveCity(name))}
    >
      <a className={isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item '}
        href="#"
      >
        <span>{name}</span>
      </a>
    </li>
  );
}
