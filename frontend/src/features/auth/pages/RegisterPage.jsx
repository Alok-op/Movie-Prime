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

        if (!formData.name || !formData.username || !formData.email || !formData.password) {
            alert("All fields are required!");
            return;
        }

        setSubmitted(true);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

                {submitted && (
                    <p className="text-green-600 mb-4 text-center font-medium">Form submitted successfully!</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;