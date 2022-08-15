import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import StravaApi from "./service/strava";

const strava = new StravaApi();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App strava={strava} />);
