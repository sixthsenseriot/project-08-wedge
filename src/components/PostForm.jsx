import { useState } from "react";

import {
    createExperiencePost,
    createProjectPost,
    createShowTellPost,
    createInterviewPost,
    createQuestionsAnswersPost,
} from "../api/create";

import "./PostForm.css";

const PostForm = () => {
    const [postCategory, setPostCategory] = useState("experience");
    const [experiencePost, setExperiencePost] = useState({
        organization: "",
        role: "",
        employment_type: "",
        location: "",
        work_location_type: "",
        skills: "",
        content: "",
    });
    const [projectPost, setProjectPost] = useState({
        organization: "",
        role: "",
        employment_type: "",
        location: "",
        work_location_type: "",
        skills: "",
        content: "",
    });
    const [showTellPost, setShowTellPost] = useState({
        title: "",
        skills: "",
        content: "",
    });
    const [interviewPost, setInterviewPost] = useState({
        organization: "",
        role: "",
        employment_type: "",
        location: "",
        work_location_type: "",
        content: "",
        question: "",
        answer: "",
    });
    const [questionsAnswersPost, setQuestionsAnswersPost] = useState({
        question_title: "",
        content: "",
    });

    const handleChangeCategory = (event) => {
        setPostCategory(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (postCategory === "experience") {
                const payload = {
                    ...experiencePost,
                    skills: experiencePost.skills,
                    content: experiencePost.content,
                };
                await createExperiencePost(payload);
                alert("Post created!");
            }
            if (postCategory === "project") {
                const payload = {
                    ...projectPost,
                    skills: projectPost.skills,
                    content: projectPost.content,
                };
                await createProjectPost(payload);
                alert("Post created!");
            }
            if (postCategory === "show-tell") {
                const payload = {
                    ...showTellPost,
                    skills: showTellPost.skills,
                    content: showTellPost.content,
                };
                await createShowTellPost(payload);
                alert("Post created!");
            }
            if (postCategory === "interview") {
                const payload = {
                    ...interviewPost,
                    content: interviewPost.content,
                };
                await createInterviewPost(payload);
                alert("Post created!");
            }
            if (postCategory === "questions-answers") {
                const payload = {
                    ...questionsAnswersPost,
                    content: questionsAnswersPost.content,
                };
                await createQuestionsAnswersPost(payload);
                alert("Post created!");
            }
        } catch (err) {
            console.error(err);
            alert("Failed to create post");
        }
    };

    return (
        <div className="PostForm">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Post Category *
                    <br />
                    <select
                        value={postCategory}
                        onChange={handleChangeCategory}
                    >
                        <option value="experience">Experience</option>
                        <option value="project">Project</option>
                        <option value="show-tell">Show & Tell</option>
                        <option value="interview">Interview</option>
                        <option value="questions-answers">
                            Questions & Answers
                        </option>
                    </select>
                    {/* ======================================================================== */}
                    {/* === EXPERIENCE Form Selection === */}
                    {postCategory === "experience" && (
                        <div className="experience-container">
                            <div className="row-container">
                                <label>
                                    Company or Organization *
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Microsoft"
                                        value={experiencePost.organization}
                                        onChange={(e) =>
                                            setExperiencePost({
                                                ...experiencePost,
                                                organization: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                                <label>
                                    Title / Role *
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Software Engineer"
                                        value={experiencePost.role}
                                        onChange={(e) =>
                                            setExperiencePost({
                                                ...experiencePost,
                                                role: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                            </div>
                            <div className="row-container">
                                <label>
                                    Employment Type *
                                    <br />
                                    <select
                                        value={experiencePost.employment_type}
                                        onChange={(e) =>
                                            setExperiencePost({
                                                ...experiencePost,
                                                employment_type: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="" disabled>
                                            Please Select
                                        </option>
                                        <option value="internship">
                                            Internship
                                        </option>
                                        <option value="contract">
                                            Contract
                                        </option>
                                        <option value="full-time">
                                            Full-time
                                        </option>
                                        <option value="part-time">
                                            Part-time
                                        </option>
                                        <option value="self-employed">
                                            Self-employed
                                        </option>
                                        <option value="freelance">
                                            Freelance
                                        </option>
                                        <option value="apprenticeship">
                                            Apprenticeship
                                        </option>
                                        <option value="seasonal">
                                            Seasonal
                                        </option>
                                    </select>
                                </label>
                                <label>
                                    Location *
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Houston, TX"
                                        value={experiencePost.location}
                                        onChange={(e) =>
                                            setExperiencePost({
                                                ...experiencePost,
                                                location: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                            </div>
                            <label>
                                Work Location Type *
                                <br />
                                <select
                                    value={experiencePost.work_location_type}
                                    onChange={(e) =>
                                        setExperiencePost({
                                            ...experiencePost,
                                            work_location_type: e.target.value,
                                        })
                                    }
                                >
                                    <option value="" disabled>
                                        Please Select
                                    </option>
                                    <option value="onsite">Onsite</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="remote">Remote</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Skills *
                                <br />
                                <input
                                    type="text"
                                    placeholder="Add Skill"
                                    value={experiencePost.skills}
                                    onChange={(e) =>
                                        setExperiencePost({
                                            ...experiencePost,
                                            skills: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <br />
                            <textarea
                                id="multiline-input"
                                rows={5}
                                cols={50}
                                value={experiencePost.content}
                                onChange={(e) =>
                                    setExperiencePost({
                                        ...experiencePost,
                                        content: e.target.value,
                                    })
                                }
                            />
                        </div>
                    )}
                    {/* ======================================================================== */}
                    {/* === PROJECT Form Selection === */}
                    {postCategory === "project" && (
                        <div className="project-container">
                            <div className="row-container">
                                <label>
                                    Company or Organization *
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Microsoft"
                                        value={projectPost.organization}
                                        onChange={(e) =>
                                            setProjectPost({
                                                ...projectPost,
                                                organization: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                                <label>
                                    Title / Role *
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Software Engineer"
                                        value={projectPost.role}
                                        onChange={(e) =>
                                            setProjectPost({
                                                ...projectPost,
                                                role: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                            </div>
                            <div className="row-container">
                                <label>
                                    Employment Type *
                                    <br />
                                    <select
                                        value={projectPost.employment_type}
                                        onChange={(e) =>
                                            setProjectPost({
                                                ...projectPost,
                                                employment_type: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="" disabled>
                                            Please Select
                                        </option>
                                        <option value="internship">
                                            Internship
                                        </option>
                                        <option value="contract">
                                            Contract
                                        </option>
                                        <option value="full-time">
                                            Full-time
                                        </option>
                                        <option value="part-time">
                                            Part-time
                                        </option>
                                        <option value="self-employed">
                                            Self-employed
                                        </option>
                                        <option value="freelance">
                                            Freelance
                                        </option>
                                        <option value="apprenticeship">
                                            Apprenticeship
                                        </option>
                                        <option value="seasonal">
                                            Seasonal
                                        </option>
                                    </select>
                                </label>
                                <label>
                                    Location *
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Houston, TX"
                                        value={projectPost.location}
                                        onChange={(e) =>
                                            setProjectPost({
                                                ...projectPost,
                                                location: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                            </div>
                            <label>
                                Work Location Type *
                                <br />
                                <select
                                    value={projectPost.work_location_type}
                                    onChange={(e) =>
                                        setProjectPost({
                                            ...projectPost,
                                            work_location_type: e.target.value,
                                        })
                                    }
                                >
                                    <option value="" disabled>
                                        Please Select
                                    </option>
                                    <option value="onsite">Onsite</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="remote">Remote</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Skills *
                                <br />
                                <input
                                    type="text"
                                    placeholder="Add Skill"
                                    value={projectPost.skills}
                                    onChange={(e) =>
                                        setProjectPost({
                                            ...projectPost,
                                            skills: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <br />
                            <textarea
                                id="multiline-input"
                                rows={5}
                                cols={50}
                                value={projectPost.content}
                                onChange={(e) =>
                                    setProjectPost({
                                        ...projectPost,
                                        content: e.target.value,
                                    })
                                }
                            />
                        </div>
                    )}
                    {/* ======================================================================== */}
                    {/* === SHOW & TELL Form Selection === */}
                    {postCategory === "show-tell" && (
                        <div className="show-tell-container">
                            <label>
                                Title *
                                <br />
                                <input
                                    type="text"
                                    placeholder="Ex: Weather App"
                                    value={showTellPost.title}
                                    onChange={(e) =>
                                        setShowTellPost({
                                            ...showTellPost,
                                            title: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <br />
                            <label>
                                Skills *
                                <br />
                                <input
                                    type="text"
                                    placeholder="Add Skill"
                                    value={showTellPost.skills}
                                    onChange={(e) =>
                                        setShowTellPost({
                                            ...showTellPost,
                                            skills: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <br />
                            <textarea
                                id="multiline-input"
                                rows={5}
                                cols={50}
                                value={showTellPost.content}
                                onChange={(e) =>
                                    setShowTellPost({
                                        ...showTellPost,
                                        content: e.target.value,
                                    })
                                }
                            />
                        </div>
                    )}
                    {/* ======================================================================== */}
                    {/* === INTERVIEW Form Selection === */}
                    {postCategory === "interview" && (
                        <div className="interview">
                            <div className="row-container">
                                <label>
                                    Company or Organization *
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Microsoft"
                                        value={interviewPost.organization}
                                        onChange={(e) =>
                                            setInterviewPost({
                                                ...interviewPost,
                                                organization: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                                <label>
                                    Title / Role *
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Software Engineer"
                                        value={interviewPost.role}
                                        onChange={(e) =>
                                            setInterviewPost({
                                                ...interviewPost,
                                                role: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                            </div>
                            <div className="row-container">
                                <label>
                                    Employment Type *
                                    <br />
                                    <select
                                        value={interviewPost.employment_type}
                                        onChange={(e) =>
                                            setInterviewPost({
                                                ...interviewPost,
                                                employment_type: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="" disabled>
                                            Please Select
                                        </option>
                                        <option value="internship">
                                            Internship
                                        </option>
                                        <option value="contract">
                                            Contract
                                        </option>
                                        <option value="full-time">
                                            Full-time
                                        </option>
                                        <option value="part-time">
                                            Part-time
                                        </option>
                                        <option value="self-employed">
                                            Self-employed
                                        </option>
                                        <option value="freelance">
                                            Freelance
                                        </option>
                                        <option value="apprenticeship">
                                            Apprenticeship
                                        </option>
                                        <option value="seasonal">
                                            Seasonal
                                        </option>
                                    </select>
                                </label>
                                <label>
                                    Location *
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Houston, TX"
                                        value={interviewPost.location}
                                        onChange={(e) =>
                                            setInterviewPost({
                                                ...interviewPost,
                                                location: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                            </div>
                            <label>
                                Work Location Type *
                                <br />
                                <select
                                    value={interviewPost.work_location_type}
                                    onChange={(e) =>
                                        setInterviewPost({
                                            ...interviewPost,
                                            work_location_type: e.target.value,
                                        })
                                    }
                                >
                                    <option value="" disabled>
                                        Please Select
                                    </option>
                                    <option value="onsite">Onsite</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="remote">Remote</option>
                                </select>
                            </label>
                            <br />
                            <textarea
                                id="multiline-input"
                                rows={5}
                                cols={50}
                                value={interviewPost.content}
                                onChange={(e) =>
                                    setInterviewPost({
                                        ...interviewPost,
                                        content: e.target.value,
                                    })
                                }
                            />
                            <br />
                            <div className="row-container">
                                <label>
                                    Question
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: Tell me about yourself"
                                        value={interviewPost.question}
                                        onChange={(e) =>
                                            setInterviewPost({
                                                ...interviewPost,
                                                question: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                                <label>
                                    Answer (Optional)
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Ex: I am a Computer Science student at..."
                                        value={interviewPost.answer}
                                        onChange={(e) =>
                                            setInterviewPost({
                                                ...interviewPost,
                                                answer: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                            </div>
                        </div>
                    )}
                    {/* ======================================================================== */}
                    {/* === QUESTIONS & ANSWERS Form Selection === */}
                    {postCategory === "questions-answers" && (
                        <div>
                            <label>
                                Question Title *
                                <br />
                                <input
                                    type="text"
                                    placeholder="Ex: What tech stack does Microsoft use?"
                                    value={questionsAnswersPost.question_title}
                                    onChange={(e) =>
                                        setQuestionsAnswersPost({
                                            ...questionsAnswersPost,
                                            question_title: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <br />
                            <textarea
                                id="multiline-input"
                                rows={5}
                                cols={50}
                                value={questionsAnswersPost.content}
                                onChange={(e) =>
                                    setQuestionsAnswersPost({
                                        ...questionsAnswersPost,
                                        content: e.target.value,
                                    })
                                }
                            />
                        </div>
                    )}
                </label>
                <button type="submit">Submit Post</button>
            </form>
        </div>
    );
};

export default PostForm;
