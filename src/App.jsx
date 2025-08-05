import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import BookmarksPage from "./pages/BookmarksPage";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import SettingsPage from "./pages/SettingsPage";

import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/bookmarks" element={<BookmarksPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/post" element={<PostPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
