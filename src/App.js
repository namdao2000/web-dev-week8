import { Route, Routes } from "react-router-dom";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
