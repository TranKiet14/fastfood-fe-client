import './Footer.scss';
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="subscrible-form">
                            <p className="logo-ft">
                                <img src="https://www.lotteria.vn/grs-static/images/lotteria_logo.svg" alt="" />
                            </p>
                            <h3>Đăng ký nhận thông tin khuyến mãi</h3>
                            <form className="form-content">
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Nhập email" className="form-control" />
                                    <button type="submit" className="btn" title="Gửi ngay">Gửi ngay →</button>
                                </div>
                            </form>
                        </div>
                        <div className="footer__right-content">
                            <div className="f-menu">
                                <div className="item">
                                    <h3>Thông tin</h3>
                                    <ul>
                                        <li>
                                            <a href="/">Tin tức</a>
                                        </li>
                                        <li>
                                            <a href="/">Khuyến mãi</a>
                                        </li>
                                        <li>
                                            <a href="/">Tuyển dụng</a>
                                        </li>
                                        <li>
                                            <a href="/">Nhượng quyền</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <h3>Hỗ trợ</h3>
                                    <ul>
                                        <li>
                                            <a href="/">Điều khoản sử dụng</a>
                                        </li>
                                        <li>
                                            <a href="/">Chính sách bảo mật</a>
                                        </li>
                                        <li>
                                            <a href="/">Chính sách giao hàng</a>
                                        </li>
                                        <li>
                                            <a href="/">Chăm sóc khách hàng</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <h3>Theo dõi</h3>
                                    <ul>
                                        <li>
                                            <a href="/" className="icon-fb">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="/" className="icon-ins">Instagram</a>
                                        </li>
                                        <li>
                                            <a href="/" className="icon-zalo">Zalo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <div className="copy-right">
                <strong>© 2024 Copy Right By Tran Kiet</strong>
            </div>
        </>
    )
}
export default Footer