import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Navigate, Route, Routes  } from "react-router-dom";
import Products from "./components/Products";
import DetailsPage from "./components/DetailsPage";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
         <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<DetailsPage/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
          <Route path="/*" element={<Navigate to="/notfound"/>}/>

         </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;
