import { Button, Col, ConfigProvider, Row, Steps, Switch } from 'antd';
import "./Checkout.scss"
function Checkout() {
    return (
        <>
            <section className="sticky-header">
                <div className="container">
                    <div className="header-checkout-content">
                        <h1 className="logo">
                            <a title="Lotteria" href="/">
                                <img src="https://www.lotteria.vn/grs-static/images/lotteria_logo.svg" alt="Lotteria" />
                            </a>
                        </h1>
                        <ConfigProvider
                            theme={{
                                token: {
                                    Steps: {
                                        /* here is your component tokens */
                                        colorPrimary: "red",
                                        colorPrimaryBorder: "red",
                                    },
                                },
                            }}
                        >
                            <Steps
                                style={{ marginTop: '20px', width: '50%' }}
                                current={0}
                                items={[
                                    {
                                        title: 'Giỏ hàng',
                                    },
                                    {
                                        title: 'Thanh toán',
                                    },
                                ]}
                                labelPlacement="vertical"
                            />
                        </ConfigProvider>
                    </div>
                </div>
            </section>
            <div className="margin-header"></div>
            <main>
                <div className="container">
                    <Row style={{ marginTop: "120px" }} gutter={[20, 20]}>
                        <Col span={16}>
                            <div className='cart-content'>
                                <h2 className='cart-content__title'>
                                    Giỏ hàng của bạn
                                    <a className='add-more' href='/'>+ Thêm món ăn</a>
                                    <span>(2 sản phẩm)</span>
                                </h2>
                                <div className='cart-list'>
                                    <div className='cart-row'>
                                        <button className='btn-delete'></button>
                                        <div className='field-img'>
                                            <a href="/">
                                                <img src="https://cdn.lotteria.vn/media/catalog/product/cache/7519c4b08d36a80a7631ac53889db3b4/v/a/value_shrimp_4.png" alt="/" />
                                            </a>
                                        </div>
                                        <div className='field-info'>
                                            <h3>
                                                <a href="/">Value Burger Tôm</a>
                                            </h3>
                                            <div className='field-price'>88.000 ₫</div>
                                        </div>
                                        <div class="qty sm-type">
                                            <div class="q-inner">
                                                <button class="btn-minute" type="button">-</button>
                                                <span class="number">1</span>
                                                <button class="btn-plus" type="button">+</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="order-notes">
                                    <p>
                                        <strong>Ghi chú cho đơn hàng</strong>
                                    </p>
                                    <div class="form-group">
                                        <input type="text" placeholder="Vui lòng thêm lưu ý cho cửa hàng" class="form-control" name="" value="" />
                                    </div>
                                </div>
                                <div class="order-notes">
                                    <p>
                                        <strong>Tùy chọn</strong>
                                    </p>
                                    <Row gutter={[20, 20]}>
                                        <Col span={10}>
                                            <div className='note-item'>
                                                <ConfigProvider
                                                    theme={{
                                                        token: {
                                                            colorPrimary: "#ff5b6a"
                                                        },
                                                    }}
                                                >
                                                    <Switch />
                                                </ConfigProvider>
                                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>Lấy dụng cụ ăn uống</div>
                                            </div>
                                        </Col>
                                        <Col span={7}>
                                            <div className='note-item'>
                                                <ConfigProvider
                                                    theme={{
                                                        token: {
                                                            colorPrimary: "#ff5b6a"
                                                        },
                                                    }}
                                                >
                                                    <Switch />
                                                </ConfigProvider>
                                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>Lấy tương cà</div>
                                            </div>
                                        </Col>
                                        <Col span={7}>
                                            <div className='note-item'>
                                                <ConfigProvider
                                                    theme={{
                                                        token: {
                                                            colorPrimary: "#ff5b6a"
                                                        },
                                                    }}
                                                >
                                                    <Switch />
                                                </ConfigProvider>
                                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>Lấy tương ớt</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div class="cart-right">
                                <div class="box-border">
                                    <div class="delivery-to">
                                        <a href="/" class="btn-change-add"> </a>
                                        <span class="lbl">Giao hàng đến</span>
                                        <div class="add">C1 D'capitale, Trung Hoà, Cầu Giấy, Hà Nội, Việt Nam
                                        </div>
                                        <div class="store-name">Cửa hàng: HN TRẦN DUY HƯNG</div>
                                    </div>
                                    <div class="note-time">
                                        Thời gian tiếp nhận đơn hàng trực tuyến từ 08:00 đến 21:30 hằng ngày
                                    </div>
                                </div>
                                <div class="box-border">
                                    <div class="sub-total">
                                        <div class="lbl">Tạm tính</div>
                                        <div class="price">566.000 ₫</div>
                                    </div>
                                    <div class="total">
                                        <div class="lbl">Tổng cộng</div>
                                        <div class="price">566.000 ₫</div>
                                    </div>
                                    <div class="btn-payment">
                                        <button>Tiếp tục</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </main>
        </>
    )
}
export default Checkout