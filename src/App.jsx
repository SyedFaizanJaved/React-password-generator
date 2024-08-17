import { useState, useEffect } from 'react';
import axios from 'axios';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    const [passwords, setPasswords] = useState([]);

    const fetchPasswords = async () => {
        const response = await axios.get('http://localhost:5000/passwords');
        setPasswords(response.data);
    };

    useEffect(() => {
        fetchPasswords();
    }, []);

    return (
        <>
        <div className=' bg-green-100'>
            <Navbar />
            <div className="max-w-6xl mx-auto p-4 min-h-[81.2vh]">
                <h1 className="text-3xl font-bold  text-center"><span className='text-green-400'>{"<"}</span>Pass<span className='text-green-400'>OP/{">"}</span></h1>
                <h1 className="text-xl  mb-4 text-center">Your Own Password Manager</h1>
                <PasswordForm fetchPasswords={fetchPasswords} />
                <PasswordList passwords={passwords} fetchPasswords={fetchPasswords} />
            </div>
            <Footer/>
        </div>
            </>
    );
};

export default App;
