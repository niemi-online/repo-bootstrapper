import React from "react";

export interface ProgressBarProps {
    steps: number;
    currentStep: number;
}

export class ProgressBar extends React.PureComponent<ProgressBarProps, {}> {
    render() {
        return <div className="progress"></div>
    }
}