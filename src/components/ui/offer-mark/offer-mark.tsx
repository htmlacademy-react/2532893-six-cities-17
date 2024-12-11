
type OfferMarkPropsType = {
  status: string;
}

export function OfferMark({status}: OfferMarkPropsType){
  return (
    <div className="place-card__mark">
      <span>{status}</span>
    </div>
  );
}
