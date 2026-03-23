import {useContext} from "react";
import AppContext, {AppProvider} from "./AppContext";
import './App.css'
import {FireButton} from "./AnimatedButton.jsx";
import {Home} from "./HomeContext.jsx";
import {Projects} from "./ProjectContext.jsx";
import {Experience} from "./ExperienceContext.jsx";
import {About} from "./AboutContext.jsx";

function Navbar() {
    const {setCurrentPage} = useContext(AppContext);

    return (<nav>
        <div className="flex flex-wrap items-center gap-1 px-2 py-1">
            <h2 className="text-xl md:text-[28px] pr-3 md:pr-10">Kristian Howard Jr</h2>
            <FireButton onClick={() => setCurrentPage("home")} className="text-base md:text-3xl font-bold px-3 py-2 md:px-9 md:py-6 rounded-lg text-white">Home</FireButton>
            <FireButton onClick={() => setCurrentPage("experience")} className="text-base md:text-3xl font-bold px-3 py-2 md:px-9 md:py-6 rounded-lg text-white">Experience</FireButton>
            <FireButton onClick={() => setCurrentPage("projects")} className="text-base md:text-3xl font-bold px-3 py-2 md:px-9 md:py-6 rounded-lg text-white">Projects</FireButton>
        </div>
    </nav>);
}


function MainLayout() {
    const {currentPage} = useContext(AppContext);

    return (<div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
            <Navbar/>
            <div className="flex justify-center px-3 md:px-0 w-full">
                {currentPage === "home" && <Home/>}
                {currentPage === "experience" && <Experience/>}
                {currentPage === "projects" && <Projects/>}
            </div>
        </div>
    </div>);
}

function App() {
    return (<AppProvider>
        <MainLayout/>
    </AppProvider>)
}

export default App
