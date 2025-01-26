
type OfferImageType = {
  imageSRC: string;
}

export function OfferImage({imageSRC}: OfferImageType): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image"
        src={imageSRC}
        alt="Photo studio"
      />
    </div>
  );
}
