import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router,  Route } from "react-router-dom";
import {Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/search" element={<SearchPage /> }>
           
           
          </Route>
          <Route path="/" element={<Home />}>
           
          </Route>

        </Routes>
       
      </Router>

    </div>
  );
}

export default App;
