
import {
  chooseSizeButton,
  favoriteButtonCommonClassNames,
  favoriteButtonCommonSVGClassNames
} from '../../../data/favorite-button-data.ts';

type FavoriteButtonPropsType = {
    className: string;
}

export function FavoriteButton({className}: FavoriteButtonPropsType): JSX.Element {
  const buttonClassName = chooseSizeButton(className);

  return (
    <button className={`${className}${favoriteButtonCommonClassNames}`}
      type="button"
    >
      <svg className={`${className}${favoriteButtonCommonSVGClassNames}`}
        width={buttonClassName.width}
        height={buttonClassName.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
