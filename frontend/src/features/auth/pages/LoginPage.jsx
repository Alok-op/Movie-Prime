import { useState } from "react"

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev, 
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.email || !formData.password) {
            setError('Both fields are required');
            return;
        }

        setError('');
        alert('Login successful!');
    }

    return (
        <div style={{maxWidth: '400px', margin: '0 auto', paddingTop: '50px'}}>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '10px'}}>
                    <label>Email: </label>
                    <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                </div>
                <div style={{marginBottom: '10px'}}>
                    <label>Password: </label>
                    <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;