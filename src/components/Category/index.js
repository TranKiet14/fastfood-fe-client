import "./Category.scss"
function Category() {
    return (
        <a className="category" title="Bestseller" href="/">
            <span class="category__img">
                <img src="https://cdn.lotteria.vn/media/catalog/tmp/category/MENU_DAT_HANG_BESTSELLER.jpg" width="72" alt="Bestseller" loading="eager" />
            </span>
            <span class="category__txt">Bestseller</span>
        </a>
    )
}
export default Category