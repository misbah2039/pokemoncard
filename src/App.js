import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, MainHeader} from "./component"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route
            index
            element={<Home />}
          />
          <Route path="/about/:id" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
