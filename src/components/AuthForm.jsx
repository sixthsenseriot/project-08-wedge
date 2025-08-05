import React, { useState } from "react";
import { supabase } from "../client";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (isLogin) {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) setMessage(error.message);
            else setMessage("Logged in!");
        } else {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) setMessage(error.message);
            else setMessage("Check your email to confirm your account!");
        }
    };

    return (
        <div
            className="auth-form"
            style={{ maxWidth: "400px", margin: "auto", padding: "2em" }}
        >
            <h2>{isLogin ? "Login" : "Create Account"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        width: "100%",
                        padding: "0.5em",
                        marginBottom: "1em",
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        width: "100%",
                        padding: "0.5em",
                        marginBottom: "1em",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "0.7em",
                        marginBottom: "1em",
                    }}
                >
                    {isLogin ? "Login" : "Sign Up"}
                </button>
            </form>
            <button
                onClick={() => setIsLogin(!isLogin)}
                style={{ width: "100%", padding: "0.5em" }}
            >
                {isLogin
                    ? "Need an account? Sign up"
                    : "Have an account? Log in"}
            </button>
            {message && (
                <p style={{ marginTop: "1em", color: "red" }}>{message}</p>
            )}
        </div>
    );
};

export default AuthForm;
