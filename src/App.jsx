import React from "react"
import Dashboard from "./Components/Dashboard/Dashboard"
import Navbar from "./Components/Navbar/Navbar"
import Layout from "./Components/Layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import FoodItemCategory from "./Components/FoodItem/FoodItemCategory";
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/food-item-category" element={<FoodItemCategory />} />
      </Route>
      {/* <Navbar />
      <Dashboard /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
