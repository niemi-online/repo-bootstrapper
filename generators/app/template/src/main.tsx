import "antd/dist/antd.css";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { App } from "./app";
import rootReducer from "./reducers";

const rootEl = document.getElementById("root");
const store = createStore(rootReducer);

render(<Provider store={store}><App /></Provider>, rootEl);
