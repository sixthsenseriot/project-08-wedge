import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/MainPageNavbar";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";

import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
