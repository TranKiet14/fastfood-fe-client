import { Row, Col } from 'antd'
import FoodItem from "../../components/FoodItem"
function Foods() {
    return (
        <>
            <Row gutter={[20, 20]}>
                <Col span={6}>
                    <FoodItem />
                </Col>
                <Col span={6}>
                    <FoodItem />
                </Col>
                <Col span={6}>
                    <FoodItem />
                </Col>
                <Col span={6}>
                    <FoodItem />
                </Col>
                <Col span={6}>
                    <FoodItem />
                </Col>
            </Row>
        </>
    )
}
export default Foods