
type OfferMarkPropsType = {
  status: string;
  className: string;
}

export function OfferMark({status, className}: OfferMarkPropsType){
  return (
    <div className={`${className}__mark`}>
      <span>{status}</span>
    </div>
  );
}
