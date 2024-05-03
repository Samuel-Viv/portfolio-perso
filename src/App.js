import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "../src/page/Home";
import All from "../src/page/All";
import ProjectDetail from "./page/PorjectDetail";
//data
import projectsData from "./component/projectsData.json"

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/All" element={<All />}></Route>
        <Route path="/project/:id" element={<ProjectDetail projectsData={projectsData} />} />
      </Routes>
    </div>
  );
}

export default App;
