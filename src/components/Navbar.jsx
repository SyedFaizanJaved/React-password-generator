import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa"; // Import icons

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center p-4 bg-slate-800 text-white">
            <div className="text-3xl font-bold  text-center">
                <span className="text-green-400">{"<"}</span>
                Pass<span className="text-green-400">OP/{" > "}</span>
            </div>
            <div className="space-x-2 font-bold flex">
                <button className="flex items-center space-x-2 px-2 py-2 bg-green-700 rounded-full">
                    <FaGithub /> {/* GitHub icon */}
                    <span>Login with GitHub</span>
                </button>
                <button className="flex items-center space-x-2 px-2 py-2 bg-blue-600 rounded-full">
                    <FaFacebook /> {/* Facebook icon */}
                    <span>Login with Facebook</span>
                </button>
                <button className="flex items-center space-x-2 px-2 py-2 bg-red-600 rounded-full">
                    <FaGoogle /> {/* Google icon */}
                    <span>Login with Google</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
