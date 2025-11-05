import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as usersAPI from "../../utilities/users-api";




// # ================================================================================================================= #
// #                                                  Login Page                                                       #
// # ================================================================================================================= #
export default function LoginPage({ user, setUser }) {
    const initialState = { username: "", password: "" };
    const [formData, setFormData] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


// # ================================================================================================================= #
// #                                                  handleChange                                                     #
// # ================================================================================================================= #
    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
        setErrorMessage("");
    }



// # ================================================================================================================= #
// #                                                    handleLogin                                                    #
// # ================================================================================================================= #
    async function handleLogin(evt) {
        try {
            evt.preventDefault();
            const loggedInUser = await usersAPI.login(formData);
            if (loggedInUser) {
                setUser(loggedInUser);
                setFormData(initialState);
                navigate("/plants");
            }
        } catch (err) {
            console.log(err);
            setUser(null);
            setErrorMessage("Incorrect username or password. Please try again.");
        }
    }



    return (
        <>
            {!user && (
                <section className="login-page">
                    <div className="login-container">
                        <div className="login-card">
                            <h1 className="login-title">Welcome to Plant 🌱</h1>
                            <p className="login-subtitle">
                                Sign in to manage your plants, set reminders, and support a greener Riyadh.
                            </p>

                            <form onSubmit={handleLogin} className="login-form">
                                <div className="input-group">
                                    <label htmlFor="id_username">Username</label>
                                    <input
                                        value={formData.username}
                                        type="text"
                                        name="username"
                                        required
                                        id="id_username"
                                        placeholder="Enter your username"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="id_password">Password</label>
                                    <input
                                        value={formData.password}
                                        type="password"
                                        name="password"
                                        required
                                        id="id_password"
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                    />
                                </div>

                                {errorMessage && (
                                    <p className="error-message">{errorMessage}</p>
                                )}

                                <button type="submit" className="login-btn">
                                    Log In
                                </button>
                            </form>

                            <p className="register-link">
                                Don’t have an account yet?{" "}
                                <a href="/register">Create one now</a> and start your green journey.
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
