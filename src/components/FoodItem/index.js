function FoodItem() {
    return (
        <div className="highlight-products_item">
            <a className="highlight-products_item-img" href="/">
                <img src="https://cdn.lotteria.vn/media/catalog/product/m/e/menu_menu_copy.jpg" alt="ảnh" />
            </a>
            <div className="highlight-products_item-header">
                <a className="highlight-products_item-title" href="/">
                    Mua 3 nhận 5
                </a>
                <div className="highlight-products_item-icon"></div>
            </div>
            <div className="highlight-products_info">
                <p className="price">
                    109.000 ₫
                </p>
                <p className="discount-f">
                    <span className="price-old">160.000 ₫</span>
                </p>
            </div>
            <div className="addtocart">
                <button className="btn-add-to-cart">Thêm vào giỏ hàng</button>
            </div>
        </div>
    )
}
export default FoodItem