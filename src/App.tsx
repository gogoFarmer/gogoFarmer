import { Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Box w="100vw">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
