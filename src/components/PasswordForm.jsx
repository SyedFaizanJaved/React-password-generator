/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash, FaSave } from 'react-icons/fa'; // Import the icons
import { toast, ToastContainer } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const PasswordForm = ({ fetchPasswords }) => {
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/passwords', { website, username, password });
            fetchPasswords();
            setWebsite('');
            setUsername('');
            setPassword('');
            toast.success('Password saved successfully!');
        } catch (error) {
            toast.error('Failed to save password.');
        }
    };

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-center ">
                <input
                    type="text"
                    placeholder="Enter Website URL"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    required
                    className="w-full p-2 border border-green-600 rounded-full"
                />
                <div className='flex flex-row w-full gap-2'>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="p-2 w-full border border-green-600 rounded-full"
                    />
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"} // Toggle input type based on state
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="p-2 w-full border border-green-600 rounded-full"
                        />
                        <div
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                </div>
                <button type="submit" className="px-4 py-2 space-y-4 bg-green-500 font-bold text-white rounded-full flex items-center gap-2">
                    <FaSave /> 
                    Save Password
                </button>
            </form>
        </>
    );
};

export default PasswordForm;
