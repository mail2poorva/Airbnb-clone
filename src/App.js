import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/home";
import Header from "./Home/header";
import Footer from "./Home/Footer";
import SearchPage from "./Home/SearchPage";
function App() {
  return (
    <>
      <div className="appName">
        <Router>
          <Header />

          <Switch>
            {/* /search */}
            <Route path="/search">
              <SearchPage />
            </Route>
            {/* / */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>

      {/*  Home */}

      {/*    Header    */}

      {/*    Banner     */}
      {/* Search  */}

      {/*    Cards     */}

      {/*    Footer    */}

      {/* Search Page */}
      {/* ... */}
    </>
  );
}

export default App;
