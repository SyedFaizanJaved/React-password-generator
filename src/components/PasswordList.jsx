/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import { FaEdit, FaTrash, FaCopy } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const PasswordList = ({ passwords, fetchPasswords }) => {
    const [editingPassword, setEditingPassword] = useState(null);
    const [newDetails, setNewDetails] = useState({ website: '', username: '', password: '' });

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/passwords/${id}`);
            fetchPasswords();
            toast.success('Password deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete password.');
        }
    };

    const handleEdit = (password) => {
        setEditingPassword(password);
        setNewDetails({ website: password.website, username: password.username, password: password.password });
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/passwords/${editingPassword._id}`, newDetails);
            setEditingPassword(null);
            fetchPasswords();
            toast.success('Password updated successfully!');
        } catch (error) {
            toast.error('Failed to update password.');
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.info('Copied to clipboard');
    };

    return (
        <>
            <ToastContainer />
            <h1 className='font-bold text-2xl'>Your Passwords</h1>
            {passwords.length === 0 ? (
                <p>No Passwords to show</p>
            ) : (
                <table className="min-w-full divide-y divide-grey-600 mt-6 text-center">
                    <thead className="bg-green-600 text-white text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase tracking-wider">
                                Website
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase tracking-wider">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase tracking-wider">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-green-200 divide-y divide-gray-400">
                        {passwords.map((password) => (
                            <tr key={password._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {password.website}
                                    <FaCopy className="inline ml-2 cursor-pointer" onClick={() => handleCopy(password.website)} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {password.username}
                                    <FaCopy className="inline ml-2 cursor-pointer" onClick={() => handleCopy(password.username)} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {password.password}
                                    <FaCopy className="inline ml-2 cursor-pointer" onClick={() => handleCopy(password.password)} />
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap flex justify-center">
                                    <button onClick={() => handleEdit(password)} className="px-2 py-1 bg-blue-500 text-white rounded mr-2 flex items-center">
                                        <FaEdit className="mr-1" /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(password._id)} className="px-2 py-1 bg-red-500 text-white rounded flex items-center">
                                        <FaTrash className="mr-1" /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {editingPassword && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Password</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Website</label>
                            <input
                                type="text"
                                value={newDetails.website}
                                onChange={(e) => setNewDetails({ ...newDetails, website: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                value={newDetails.username}
                                onChange={(e) => setNewDetails({ ...newDetails, username: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="text"
                                value={newDetails.password}
                                onChange={(e) => setNewDetails({ ...newDetails, password: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button onClick={() => setEditingPassword(null)} className="px-4 py-2 bg-gray-500 text-white rounded mr-2">
                                Cancel
                            </button>
                            <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PasswordList;
