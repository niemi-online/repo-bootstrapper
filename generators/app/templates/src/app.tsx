import React from "react";
import Button from "antd/lib/button";
import ConnectedOrderBox from "./containers/connectedorderbox";
import { Nav } from "./nav";
const style = require("./app.scss");

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className={style.app}>
        <Nav />
        <div className={style.center}>
          <div className={style.column}>
            <ConnectedOrderBox />
          </div>
        </div>
      </div>
    );
  }
}
