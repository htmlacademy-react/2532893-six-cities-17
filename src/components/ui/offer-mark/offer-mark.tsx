
type OfferMarkPropsType = {
  status: string;
}

export default function OfferMark({status}: OfferMarkPropsType){
  return (
    <div className="offer__mark">
      <span>{status}</span>
    </div>
  );
}
