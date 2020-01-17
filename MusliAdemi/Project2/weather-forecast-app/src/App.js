import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CityWeather from "./components/pages/CityWeather";
import CityNotFound from "./components/pages/CityNotFound";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                    exact
                    path="/forecast/:cityName"
                    component={CityWeather}
                />
                <Route exact path="" component={CityNotFound} />
            </Switch>
        </div>
    );
};

export default App;
