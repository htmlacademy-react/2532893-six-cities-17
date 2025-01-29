

export const SMALL_FAVORITE_BUTTON_WIDTH = '18';
export const SMALL_FAVORITE_BUTTON_HEIGHT = '19';
export const BIG_FAVORITE_BUTTON_WIDTH = '31';
export const BIG_FAVORITE_BUTTON_HEIGHT = '33';

export const favoriteButtonClassNames = {
  placeCardButton: 'place-card',
  offerPageButton: 'offer',
};

type SizeButtonType = {
  width: string;
  height: string;
}

export const favoriteButtonCommonClassNames = '__bookmark-button button';
export const favoriteButtonCommonSVGClassNames = '__bookmark-icon';

export const chooseSizeButton = (classNames: string) => {
  const sizeButton: SizeButtonType = {
    width: '18',
    height: '19',
  };
  if (classNames === favoriteButtonClassNames.placeCardButton){
    sizeButton.width = 'SMALL_FAVORITE_BUTTON_WIDTH';
    sizeButton.height = 'SMALL_FAVORITE_BUTTON_HEIGHT';
  } else {
    sizeButton.width = 'BIG_FAVORITE_BUTTON_WIDTH';
    sizeButton.height = 'BIG_FAVORITE_BUTTON_HEIGHT';
  }

  return sizeButton;
};
