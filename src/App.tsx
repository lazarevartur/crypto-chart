import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@pages/HomePage";
import DetailPage from "@pages/DetailPage";

import { Navbar } from "@components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="coin/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
