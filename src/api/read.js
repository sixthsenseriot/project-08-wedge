import { supabase } from "../client";

export const getExperiencePosts = async () => {
    const { data, error } = await supabase.from("experience_posts").select("*");
    if (error) throw error;
    return data;
};

export const getProjectPosts = async () => {
    const { data, error } = await supabase.from("project_posts").select("*");
    if (error) throw error;
    return data;
};

export const getShowTellPosts = async () => {
    const { data, error } = await supabase.from("show_tell_posts").select("*");
    if (error) throw error;
    return data;
};

export const getInterviewPosts = async () => {
    const { data, error } = await supabase.from("interview_posts").select("*");
    if (error) throw error;
    return data;
};

export const getQuestionsAnswersPosts = async () => {
    const { data, error } = await supabase
        .from("questions_answers_posts")
        .select("*");
    if (error) throw error;
    return data;
};
