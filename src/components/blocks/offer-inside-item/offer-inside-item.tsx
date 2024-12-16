
export type offerInsidePropType = {
  offerInsideProp: string;
}

export function OfferInsideItem(props: offerInsidePropType){
  const {offerInsideProp} = props;

  return (
    <li className="offer__inside-item">
      {offerInsideProp}
    </li>
  );
}
