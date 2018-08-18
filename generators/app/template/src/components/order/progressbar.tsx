import React from "react";
const style = require('./progressbar.scss');

interface ProgressBarProps {
    steps: number;
    currentStep: number;
}

export class ProgressBar extends React.PureComponent<ProgressBarProps, {}> {
    render() {
        return <div className={style.progress}></div>
    }
}