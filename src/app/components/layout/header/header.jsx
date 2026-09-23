import './header.scss';
import logo from "../../../assets/images/icon/logo.png"
import dots from "../../../assets/images/catalog/dots.svg";
export default function header() {
    return (
        <header className="header">
            <div className="container ">
                <div className="header__content">
                    <div className="header__content__top">
                        <div className="header__content__top__left">
                            <a className="site-logo" href="/">
                                <img src={logo} alt="site-logotype" />
                            </a>
                            <form className="search">
                                <input id="search" className="search__input" type="text" placeholder="Tovar nomini kiriting" />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </form>
                        </div>
                        <div className="header__content__top__right">
                            <a className="header__content__top__right__tel" href="tel:998 98 700 00 21">
                                <i class="fa-solid fa-phone-volume"></i>
                                <span>+998 98 700 00 21</span>
                            </a>
                            <a className="header__content__top__right__tel" href="tel:998 98 700 00 21">
                                <i class="fa-solid fa-phone-volume"></i>
                                <span>+998 98 700 00 21</span>
                            </a>
                        </div>
                        <div className="cart">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span className="cart__count"></span>
                        </div>
                    </div>
                    <div className="header__content__actions">
                        <div className="header__content__actions__catalog">
                            <div className="header__content__actions__catalog__dots">
                                <img src={dots} alt="dots-image" />
                            </div>
                            <span className="header__content__actions__catalog__text">Katalog</span>
                        </div>
                        <form className="search">
                            <input id="search" className="search__input" type="text" placeholder="Tovar nomini kiriting" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </form>
                        <ul className="header__content__actions__list">
                            <li className="header__content__actions__item">Tuning xizmatlari</li>
                            <li className="header__content__actions__item">Tuning tovarlari</li>
                            <li className="header__content__actions__item">Biz haqimizda</li>
                            <li className="header__content__actions__item">Bog’lanish</li>
                        </ul>
                        <div className="cart">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <text className="cart__text">Savatcha</text>
                            <span className="cart__count"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
