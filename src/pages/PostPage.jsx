import SideNavbar from "../layout/SideNavbar";
import PostForm from "../components/PostForm";

import "./PostPage.css";

const PostPage = () => {
    return (
        <div className="PostPage">
            <SideNavbar />
            <PostForm />
        </div>
    );
};

export default PostPage;
