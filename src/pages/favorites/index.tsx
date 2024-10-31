function Favorites() {
  const listings = [
    {
      id: 1,
      city: 'Amsterdam',
      price: 180,
      image: 'img/apartment-small-03.jpg',
      title: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment',
      premium: true,
      rating: 100,
    },
  ];

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {listings.map((listing) => (
              <li key={listing.id} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{listing.city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <article className="favorites__card place-card">
                    {listing.premium && (
                      <div className="place-card__mark">
                        <span>Premium</span>
                      </div>
                    )}
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img
                          className="place-card__image"
                          src={listing.image}
                          width="150"
                          height="110"
                          alt="Place image"
                        />
                      </a>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{listing.price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button
                          className="place-card__bookmark-button place-card__bookmark-button--active button"
                          type="button"
                        >
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark" />
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: `${listing.rating}%` }} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">{listing.title}</a>
                      </h2>
                      <p className="place-card__type">{listing.type}</p>
                    </div>
                  </article>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
