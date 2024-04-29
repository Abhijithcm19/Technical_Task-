import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SavedImages from "./pages/SavedImages";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-images" element={<SavedImages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
