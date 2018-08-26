import * as React from "react";
import { findDOMNode } from "react-dom";
import { renderIntoDocument, Simulate } from "react-dom/test-utils";
import { App } from "../src/app";

describe("App", () => {
  let app;

  beforeEach(() => {
    app = renderIntoDocument(<App />);
  });
  it("slogan", () => {
    const appDOM = findDOMNode(app) as Element;
    const node = appDOM.querySelector("h1");
    expect(node.innerHTML.trim()).toBe("Hail Hydra");
  });

  it("show secret", () => {
    const appDOM = findDOMNode(app) as Element;
    const node = appDOM.querySelector("h1");
    const button = appDOM.querySelector("button");
    Simulate.click(button);

    expect(node.innerHTML.trim()).toBe("Hale Hydra");
  });
});
