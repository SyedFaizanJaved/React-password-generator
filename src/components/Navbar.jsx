import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa"; // Import icons

const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-slate-800 text-white">
            <div className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-0">
                <span className="text-green-400">{"<"}</span>
                Pass<span className="text-green-400">OP/{" > "}</span>
            </div>
            <div className="space-y-2 md:space-x-2 md:space-y-0 font-bold flex flex-col md:flex-row">
                <button className="flex items-center space-x-2 px-3 py-2 bg-green-700 rounded-full text-sm md:text-base">
                    <FaGithub /> {/* GitHub icon */}
                    <span>Login with GitHub</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 rounded-full text-sm md:text-base">
                    <FaFacebook /> {/* Facebook icon */}
                    <span>Login with Facebook</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 bg-red-600 rounded-full text-sm md:text-base">
                    <FaGoogle /> {/* Google icon */}
                    <span>Login with Google</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
