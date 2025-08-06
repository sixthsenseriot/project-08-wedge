import SideNavbar from "../layout/SideNavbar";
import PostList from "../components/PostList";

import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="HomePage">
            <SideNavbar />
            <PostList />
        </div>
    );
};

export default HomePage;
