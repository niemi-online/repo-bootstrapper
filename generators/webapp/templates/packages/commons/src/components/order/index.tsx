import React from "react";
import { ProgressBar } from "../progress";
import { Button } from "@blueprintjs/core";

const totalSteps = 4;

export interface OrderBoxProps {
    step: number;
    increment: ()=>void;
    decrement: ()=>void;
}

export class OrderBox extends React.Component<OrderBoxProps, {}> {

  render() {
    return (
      <div className="box">
        <ProgressBar steps={totalSteps} currentStep={this.props.step} />
        <div className="content">
            Step: {this.props.step}
            <Button onClick={this.props.increment}>Next</Button>
        </div>
      </div>
    );
  }
}
