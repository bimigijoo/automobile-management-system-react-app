import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AddCar from "./pages/AddCar";
import ViewCars from "./pages/ViewCars";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/view-cars" element={<ViewCars />} />
      </Routes>
    </>
  );
}

export default App;