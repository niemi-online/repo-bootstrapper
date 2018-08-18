import React from "react";
import Button from "antd/lib/button";
import { ProgressBar } from "./progressbar";
const style = require("./orderbox.scss");

const totalSteps = 4;

interface OrderBoxProps {
    step: number;
    increment: ()=>void;
    decrement: ()=>void;
}

export class OrderBox extends React.Component<OrderBoxProps, {}> {

  render() {
    return (
      <div className={style.box}>
        <ProgressBar steps={totalSteps} currentStep={this.props.step} />
        <div className={style.content}>
            Step: {this.props.step}
            <Button onClick={this.props.increment}>Next</Button>
        </div>
      </div>
    );
  }
}
