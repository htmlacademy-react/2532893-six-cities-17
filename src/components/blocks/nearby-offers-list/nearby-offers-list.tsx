// noinspection JSDeprecatedSymbols

// noinspection JSDeprecatedSymbols;

export type ChildrenOnlyType = {
  children: JSX.Element;
}

export function NearbyOffersList({children}: ChildrenOnlyType): JSX.Element{
  return (
    <>
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {children}
      </div>
    </>
  );
}
