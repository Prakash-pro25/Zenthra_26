import { Routes, Route } from "react-router-dom";

import Home from "./home";
 import Event from "./EventDetails";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/event" element={<Event />} />
   
    </Routes>
  );
}

export default App;