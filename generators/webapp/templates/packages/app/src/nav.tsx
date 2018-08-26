import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
const style = require("./nav.scss");

export class Nav extends React.PureComponent<{}, {}> {
    render() {
        return (
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>App</Navbar.Heading>
                    <Navbar.Divider />
                    <Button className="bp3-minimal" icon="home" text="Home" />
                    <Button className="bp3-minimal" icon="document" text="Files" />
                </Navbar.Group>
            </Navbar>
        );
    }
}