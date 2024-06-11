import "./Header.scss"
function Header() {
    return (
        <>
            <section className="sticky-header">
                <div className="container">
                    <div className="header-content">
                        <h1 className="logo">
                            <a title="Lotteria" href="/">
                                <img src="https://www.lotteria.vn/grs-static/images/lotteria_logo.svg" alt="Lotteria" />
                            </a>
                        </h1>
                        <nav className="top-nav">
                            <ul>
                                <li >
                                    <a title="BESTSELLER" href="/">BESTSELLER</a>
                                </li>
                                <li>
                                    <a title="Đặt hàng" href="/">Đặt hàng</a>
                                </li>
                                <li>
                                    <a title="Khuyến mãi" href="/">Khuyến mãi</a>
                                </li>
                                <li>
                                    <a title="Cửa hàng" href="/">Cửa hàng</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="right-content">
                            <ul>
                                <li>
                                    <a href="/">
                                        <span className="icon-account">
                                            <img src="https://www.lotteria.vn/grs-static/images/icon-myaccount.svg" alt="" />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon-account">
                                            <img src="https://www.lotteria.vn/grs-static/images/icon-notification.svg" alt="" />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span className="icon-account">
                                            <img src="https://www.lotteria.vn/grs-static/images/icon-cart.svg" alt="" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin-header"></div>
        </>
    )
}
export default Header