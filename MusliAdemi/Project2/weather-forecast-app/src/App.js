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
                <Route exact component={CityNotFound} />
            </Switch>
        </div>
    );
};

export default App;


// Write a shell script called backup.sh which will copy all.txt files
// into a directory called backup. If the destination directory does
// not exist, the script needs to create it.