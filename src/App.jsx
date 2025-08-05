import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import HeroSection from "./components/HeroSection";
import AuthPage from "./pages/AuthPage";

import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/auth" element={<AuthPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
