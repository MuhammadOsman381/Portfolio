import { FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import profilePic from "../assets/mo.jpeg";
import "../App.css";

const Home = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return (
        <section
            id="home"
            className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-700"
                }  lg:h-[80vh] flex items-center justify-center  p-6 `}
        >
            <div className=" max-w-screen-2xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Hi, I’m Osman <span className="wave">👋</span>
                    </h1>
                    <p
                        className={` ${isDarkMode ? "text-gray-300" : "text-gray-600"
                            } text-sm sm:text-base`}
                    >
                        I’m a passionate full stack developer with expertise in{" "}
                        <span className="text-indigo-400">React.js</span> and{" "}
                        <span className="text-indigo-400">Node.js</span>, and a little
                        understanding of{" "}
                        <span className="text-indigo-400">Machine Learning</span>. With over
                        1 year of experience in web development, I have worked on building
                        efficient, user-friendly, and visually appealing digital solutions.
                        I enjoy solving complex problems, continuously learning new
                        technologies, and delivering impactful projects that meet both user
                        and business needs.
                    </p>
                    <div
                        className={`mt-6 flex flex-col sm:flex-row items-center gap-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-indigo-400" />
                            <span>Multan, Pakistan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                            <span>Available for new projects</span>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center md:justify-start gap-4 text-gray-500">
                        <a
                            href="https://github.com/MuhammadOsman381"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-600 transition"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-osman-920a81307/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-600 transition"
                        >
                            <BsLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative">
                    <div
                        className={`w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg ${isDarkMode ? "shadow-gray-800" : "shadow-gray-400"
                            }`}
                    >
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
