import { useState } from "react";
import { useNavigate } from "react-router";
import "./styles.css";
import * as usersAPI from "../../utilities/users-api";




// # ================================================================================================================= #
// #                                                Register Page                                                      #
// # ================================================================================================================= #
export default function RegisterPage({ setUser }) {
    const navigate = useNavigate();
    const initialState = { username: "", password: "", confirmPassword: "", email: "" };
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({ username: '', password: '', email: '', confirmPassword: '' });
    const [serverError, setServerError] = useState("");


// # ================================================================================================================= #
// #                              Disable the submit button if the user let the inputs blank                           #
// # ================================================================================================================= #
    const disabledSubmitBtn =
        Object.values(errors).some(val => val !== "") ||
        Object.values(formData).some(val => val === "");



// # ================================================================================================================= #
// #                                                   handleChange                                                    #
// # ================================================================================================================= #
    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
        checkErrors(evt);
        setServerError("");
    }




// # ================================================================================================================= #
// #                                                     Validations                                                   #
// # ================================================================================================================= #
    function checkErrors({ target }) {
        const updateErrors = { ...errors };

        if (target.name === 'username') {
            updateErrors.username =
                target.value.length < 3 ? 'Username must be at least 3 characters long.' : "";
        }
        if (target.name === 'password') {
            updateErrors.password =
                target.value.length < 6 ? "Password must be at least 6 characters long." : "";
        }
        if (target.name === 'confirmPassword') {
            updateErrors.confirmPassword =
                target.value !== formData.password ? "Passwords do not match." : "";
        }
        if (target.name === 'email') {
            updateErrors.email =
                !target.value.includes("@") ? "Please enter a valid email address." : "";
        }

        setErrors(updateErrors);
    }




// # ================================================================================================================= #
// #                                                   handleSubmit                                                    #
// # ================================================================================================================= #
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newUser = await usersAPI.register(formData);
            setUser(newUser);
            setFormData(initialState);
            navigate("/plants");
        } catch (err) {
            console.log(err);
            setServerError("Registration failed. Please try again.");
            setUser(null);
        }
    }

    return (
        <section className="register-page">
            <div className="register-container">
                <div className="register-card">
                    <h1 className="register-title">Join Plant 🌿</h1>
                    <p className="register-subtitle">
                        Create your account and help grow a greener, cleaner Riyadh.
                    </p>

                    <form className="register-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="id_username">Username</label>
                            <input
                                type="text"
                                value={formData.username}
                                name="username"
                                id="id_username"
                                onChange={handleChange}
                                placeholder="Enter your username"
                            />
                            {errors.username && <p className="error-message">{errors.username}</p>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="id_email">Email</label>
                            <input
                                type="text"
                                value={formData.email}
                                name="email"
                                id="id_email"
                                onChange={handleChange}
                                placeholder="Enter your email address"
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="id_password1">Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                name="password"
                                id="id_password1"
                                onChange={handleChange}
                                placeholder="Create a password"
                            />
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="id_password2">Confirm Password</label>
                            <input
                                type="password"
                                value={formData.confirmPassword}
                                name="confirmPassword"
                                id="id_password2"
                                onChange={handleChange}
                                placeholder="Re-enter your password"
                            />
                            {errors.confirmPassword && (
                                <p className="error-message">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {serverError && <p className="error-message">{serverError}</p>}

                        <button
                            type="submit"
                            className="register-btn"
                            disabled={disabledSubmitBtn}
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="login-link">
                        Already part of the journey? <a href="/login">Log in here</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
