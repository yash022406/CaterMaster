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
import FoodItem from "./Components/FoodItem/FoodItem";
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/food-item-category" element={<FoodItemCategory />} />
        <Route path="/food-items" element={<FoodItem />} />
      </Route>
      {/* <Navbar />
      <Dashboard /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
