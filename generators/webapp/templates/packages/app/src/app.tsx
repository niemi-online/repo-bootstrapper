import React from "react";
import { ConnectedOrderBox } from "./containers/connectedorderbox";
import { Nav } from "./nav";
import "./app.scss";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Nav />
        <div className="center">
          <div className="column">
            <ConnectedOrderBox />
          </div>
        </div>
      </div>
    );
  }
}
