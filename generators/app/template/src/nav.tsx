import React from "react";
const style = require("./nav.scss");

export class Nav extends React.PureComponent<{}, {}> {
    render() {
        return <div className={style.nav} />;
    }
}