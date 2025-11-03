import { useState } from "react";
import { useNavigate } from "react-router";
import './styles.css';
import * as usersAPI from "../../utilities/users-api"

export default function RegisterPage({ setUser }) {
    const navigate = useNavigate();
    const initialState = { username: "", password: "", confirmPassword: "", email: "" }
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({ username: '', password: '', email: '', confirmPassword: '' });
    let disabledSubmitBtn = Object.values(errors).every(val => val === "") && Object.values(formData).every(val => val !== "") ? false : true

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
        checkErrors(evt);
    }

    function checkErrors({ target }) {
        const updateErrors = { ...errors }

        if (target.name === 'username') {
            updateErrors.username = target.value.length < 3 ? 'Your username must be at least three characters long.' : "";
        }
        if (target.name === 'password') {
            updateErrors.password = target.value.length < 3 ? "Your password must be at least three characters long." : "";
        }
        if (target.name === 'confirmPassword') {
            updateErrors.confirmPassword = target.value !== formData.password ? "Your passwords must match." : "";
        }
        if (target.name === 'email') {
            updateErrors.email = !target.value.includes("@") ? "Your password must be a real email / include the '@' symbol." : "";
        }

        setErrors(updateErrors);
    };

    async function handleSubmit(evt) {
        try {
            evt.preventDefault()
            const newUser = await usersAPI.register(formData);
            setUser(newUser);
            setFormData(initialState)
            navigate("/plants")
        } catch (err) {
            console.log(err);
            setUser(null);
        }
    }

    return (<>
        <section>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="id_username">Username:</label>
                    <input type="text" value={formData.username} name="username" minLength="3" maxLength="150" onChange={handleChange} />
                    <br />
                    {errors.username && <p>{errors.username}</p>}
                </p>

                <p>
                    <label htmlFor="id_email">Email:</label>
                    <input type="text" value={formData.email} name="email" minLength="3" maxLength="150" onChange={handleChange} />
                    <br />
                    {errors.email && <p>{errors.email}</p>}
                </p>
                <p>
                    <label htmlFor="id_password1">Password:</label>
                    <input type="password" value={formData.password} name="password" minLength="3" onChange={handleChange} />
                    <br />
                    {errors.password && <p>{errors.password}</p>}
                </p>
                <p>
                    <label htmlFor="id_password2">Password confirmation:</label>
                    <input type="password" value={formData.confirmPassword} name="confirmPassword" onChange={handleChange} />
                    <br />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </p>
                <button type="submit" disabled={disabledSubmitBtn} >Sign up</button>
            </form>
        </section>
    </>)
}