import { connect } from "react-redux";
import { OrderBox } from "@<%= org %>/<%= name %>-commons";
import { increment, decrement } from "../actions";

const mapStateToProps = state => ({
    step: state.order.step
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
})

console.log("Loading OrderBox component");
console.log(OrderBox);

export const ConnectedOrderBox = connect(mapStateToProps, mapDispatchToProps)(OrderBox);
