import { useEffect, useState } from "react";

import {
    getExperiencePosts,
    getProjectPosts,
    getShowTellPosts,
    getInterviewPosts,
    getQuestionsAnswersPosts,
} from "../api/read";

import "./PostList.css";

const PostList = () => {
    const [experiencePosts, setExperiencePosts] = useState([]);
    const [projectPosts, setProjectPosts] = useState([]);
    const [showTellPosts, setShowTellPosts] = useState([]);
    const [interviewPosts, setInterviewPosts] = useState([]);
    const [qaPosts, setQaPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const [experience, project, showTell, interview, qa] =
                    await Promise.all([
                        getExperiencePosts(),
                        getProjectPosts(),
                        getShowTellPosts(),
                        getInterviewPosts(),
                        getQuestionsAnswersPosts(),
                    ]);

                setExperiencePosts(experience);
                setProjectPosts(project);
                setShowTellPosts(showTell);
                setInterviewPosts(interview);
                setQaPosts(qa);
            } catch (err) {
                console.error("Error fetching posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, []);

    if (loading) return <p>Loading posts...</p>;

    return (
        <div className="post-list">
            <h2>Experience Posts</h2>
            {experiencePosts.map((post) => (
                <PostCard key={post.id} post={post} category="experience" />
            ))}

            <h2>Project Posts</h2>
            {projectPosts.map((post) => (
                <PostCard key={post.id} post={post} category="project" />
            ))}

            <h2>Show & Tell Posts</h2>
            {showTellPosts.map((post) => (
                <PostCard key={post.id} post={post} category="show-tell" />
            ))}

            <h2>Interview Posts</h2>
            {interviewPosts.map((post) => (
                <PostCard key={post.id} post={post} category="interview" />
            ))}

            <h2>Q&A Posts</h2>
            {qaPosts.map((post) => (
                <PostCard key={post.id} post={post} category="qa" />
            ))}
        </div>
    );
};

const PostCard = ({ post, category }) => {
    return (
        <div className="post-card">
            <h3>{category.toUpperCase()}</h3>
            {post.title && <h4>{post.title}</h4>}
            {post.organization && (
                <p>
                    <strong>Organization:</strong> {post.organization}
                </p>
            )}
            {post.role && (
                <p>
                    <strong>Role:</strong> {post.role}
                </p>
            )}
            {post.location && (
                <p>
                    <strong>Location:</strong> {post.location}
                </p>
            )}
            {post.employment_type && (
                <p>
                    <strong>Type:</strong> {post.employment_type}
                </p>
            )}
            {post.work_location_type && (
                <p>
                    <strong>Work Location:</strong> {post.work_location_type}
                </p>
            )}
            {post.skills && (
                <p>
                    <strong>Skills:</strong>{" "}
                    {Array.isArray(post.skills)
                        ? post.skills.join(", ")
                        : post.skills}
                </p>
            )}
            {post.question && (
                <p>
                    <strong>Q:</strong> {post.question}
                </p>
            )}
            {post.answer && (
                <p>
                    <strong>A:</strong> {post.answer}
                </p>
            )}
            {post.question_title && (
                <p>
                    <strong>Question:</strong> {post.question_title}
                </p>
            )}
            {post.content && (
                <p>
                    <strong>Content:</strong> {post.content}
                </p>
            )}
        </div>
    );
};

export default PostList;
