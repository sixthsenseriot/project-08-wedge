import SideNavbar from "../layout/SideNavbar";
import PostList from "../components/PostList";

import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="HomePage">
            <SideNavbar />
            <div className="post-list-container">
                <PostList />
            </div>
        </div>
    );
};

export default HomePage;
