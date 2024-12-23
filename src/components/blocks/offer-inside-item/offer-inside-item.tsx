
type OfferInsideItemType = {
  value: string;
}

export function OfferInsideItem({value}: OfferInsideItemType){
  return (
    <li className="offer__inside-item">
      {value}
    </li>
  );
}
