import React from "react";
import "./App.css";
import Box from "@mui/material/Box";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
import PersistentDrawerLeft from "./components/SideBar";

import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        {/* <Header /> */}
        <PersistentDrawerLeft />
        <Switch>
          {/* <Main open={open}> */}
          <Route exact path="/" component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route> 404 Not Found</Route>
          {/* </Main> */}
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
