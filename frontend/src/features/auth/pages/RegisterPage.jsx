const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '', 
        email: '',
        password: ''
    })

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.name
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name || !formData.username || !formData.email || !formData.password) {
            alert("All fields are required!");
            return;
        }

        setSubmitted(true);
    }

    return (
        <div style={{maxWidth: '400px', margin: '0 auto'}}>
            <h2>Register</h2>
            {submitted && <p style={{color: 'green'}}>Form submitted successfully</p>}

            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '10px'}}>
                    <label>Name: </label>
                    <input type="text" name="name" value={formData.name} onchange={handleChange} placeholder="Enter name" />
                </div>
                <div style={{marginBottom: '10px'}}>
                    <label>Username: </label>
                    <input type="text" name="username" value={formData.username} onchange={handleChange} placeholder="Enter username" />
                </div>
                <div style={{marginBottom: '10px'}}>
                    <label>Eamil: </label>
                    <input type="email" name="email" value={formData.email} onchange={handleChange} placeholder="Enter email" />
                </div>
                <div style={{marginBottom: '10px'}}>
                    <label>Password: </label>
                    <input type="password" name="password" value={formData.password} onchange={handleChange} placeholder="Enter password" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterPage;