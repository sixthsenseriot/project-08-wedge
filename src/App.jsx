import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/MainPageNavbar";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";

import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/post" element={<PostPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
