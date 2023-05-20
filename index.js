import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./CreateStudent";

import Student from "./Studetn";

import Update from "./Update";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<Student />}></Route>{" "}
          <Route path="/create" element={<Create />}></Route>{" "}
          <Route path="/update/:id" element={<Update />}></Route>{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}
export default App;



