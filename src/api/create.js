import { supabase } from "../client";

export const createExperiencePost = async (post) => {
    const { data, error } = await supabase
        .from("experience_posts")
        .insert([post]);

    if (error) throw error;
    return data;
};

export const createProjectPost = async (post) => {
    const { data, error } = await supabase.from("project_posts").insert([post]);

    if (error) throw error;
    return data;
};

export const createShowTellPost = async (post) => {
    const { data, error } = await supabase
        .from("show_tell_posts")
        .insert([post]);

    if (error) throw error;
    return data;
};

export const createInterviewPost = async (post) => {
    const { data, error } = await supabase
        .from("interview_posts")
        .insert([post]);

    if (error) throw error;
    return data;
};

export const createQuestionsAnswersPost = async (post) => {
    const { data, error } = await supabase
        .from("questions_answers_posts")
        .insert([post]);

    if (error) throw error;
    return data;
};
