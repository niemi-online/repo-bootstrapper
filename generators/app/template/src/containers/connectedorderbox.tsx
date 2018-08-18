import { connect } from "react-redux";
import OrderBox from "../components/order"
import { increment, decrement } from "../actions";

const mapStateToProps = state => ({
    step: state.order.step
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderBox);