import image from '../../../assets/images/catalog/image.png';
import './Intro.scss';

export default function Intro() {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__content">
                    <h2 className="intro__content__title">Rullar katalogi</h2>
                    <div className="intro__content__catalog">
                        <form className="filter">
                            <div className="filter__button">
                                <button className="filter__button__btn">
                                    <i className="fa-solid fa-sliders"></i> Filterlash
                                </button>
                            </div>
                            <div className="filter__el">
                                <div className="filter__search">
                                    <input type="text" className="filter__search__inp" placeholder="Qidiruv" />
                                </div>
                                <div className="filter__el__wrap">
                                    <details open className="filter__group">
                                        <summary className="filter__group__summary">
                                            Kategoriya <i className="fa-solid fa-chevron-down"></i>
                                        </summary>
                                        <div className="filter__group__content">
                                            <label className="type__label">
                                                <input type="checkbox" className="type__label__inp" defaultChecked />
                                                <span className="type__label__text">Rul</span>
                                                <span className="type__count">(1450)</span>
                                            </label>
                                            <label className="type__label">
                                                <input type="checkbox" className="type__label__inp" />
                                                <span className="type__label__text">Bar</span>
                                            </label>
                                            <label className="type__label">
                                                <input type="checkbox" className="type__label__inp" />
                                                <span className="type__label__text">Fara</span>
                                            </label>
                                            <label className="type__label">
                                                <input type="checkbox" className="type__label__inp" />
                                                <span className="type__label__text">Chexol&Polik</span>
                                            </label>
                                            <label className="type__label">
                                                <input type="checkbox" className="type__label__inp" />
                                                <span className="type__label__text">Tonirovka</span>
                                            </label>
                                            <button type="button" className="filter__more">
                                                Barchasini ko'rish
                                            </button>
                                        </div>
                                    </details>

                                    <details open className="filter__group">
                                        <summary className="filter__group__summary">
                                            Brend <i className="fa-solid fa-chevron-down"></i>
                                        </summary>
                                        <div className="filter__group__content">
                                            {['Charmho', 'Magic Car', 'Kumho', 'Chevrolet', 'EA'].map((brand) => (
                                                <label key={brand} className="type__label">
                                                    <input type="checkbox" className="type__label__inp" />
                                                    <span className="type__label__text">{brand}</span>
                                                </label>
                                            ))}
                                            <button type="button" className="filter__more">
                                                Barchasini ko'rish
                                            </button>
                                        </div>
                                    </details>

                                    <details open className="filter__group">
                                        <summary className="filter__group__summary">
                                            Summani tanlang <i className="fa-solid fa-chevron-down"></i>
                                        </summary>
                                        <div className="price">
                                            <input type="number" className="price__inp" placeholder="10$ dan" />
                                            <input type="number" className="price__inp" placeholder="1200$ gacha" />
                                        </div>
                                    </details>

                                    <details open className="filter__group">
                                        <summary className="filter__group__summary">
                                            Avtomobil rusumi <i className="fa-solid fa-chevron-down"></i>
                                        </summary>
                                        <div className="filter__group__content">
                                            {['Chevrolet', 'Kia', 'BYD', 'Isuzi', 'Daewoo'].map((car) => (
                                                <label key={car} className="type__label">
                                                    <input type="checkbox" className="type__label__inp" />
                                                    <span className="type__label__text">{car}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </details>
                                </div>
                                <div className="filter__actions">
                                    <button type="submit" className="filter__btn filter__btn--submit">
                                        Filterlash
                                    </button>
                                    <button type="reset" className="filter__btn filter__btn--reset">
                                        Filterni bekor qilish
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="intro__content__catalog__cards">
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                            <div className="intro__content__catalog__card">
                                <div className="intro__content__catalog__card__image">
                                    <img className="intro__content__catalog__card__image__img" src={image} alt="Malibu rul" />
                                </div>
                                <div className="intro__content__catalog__card__info">
                                    <h3 className="intro__content__catalog__card__info__title">
                                        Malibu rul SUPER 3000 X1 5W-40 GM Uzbekistan
                                    </h3>
                                    <div className="intro__content__catalog__card__info__bottom">
                                        <p className="intro__content__catalog__card__info__price">
                                            235$ <del className="old">250$</del>
                                        </p>
                                        <div className="intro__content__catalog__card__info__cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <button className="intro__content__catalog__card__info__btn">Savatchaga olish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
