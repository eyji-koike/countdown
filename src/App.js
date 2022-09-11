import Layout from "./components/layout";
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>} path={"/"}/>
      </Routes>
    </>
  );
}

export default App;
