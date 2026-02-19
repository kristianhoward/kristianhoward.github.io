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
        <div>
            <h2 className="inline text-[28px] pr-10">Kristian Howard Jr</h2>
            <FireButton onClick={() => setCurrentPage("home")} className="text-3xl font-bold px-9 py-6 rounded-lg text-white">Home</FireButton>
            <FireButton onClick={() => setCurrentPage("experience")} className="text-3xl font-bold px-9 py-6 rounded-lg text-white">Experience</FireButton>
            <FireButton onClick={() => setCurrentPage("projects")} className="text-3xl font-bold px-9 py-6 rounded-lg text-white">Projects</FireButton>
        </div>
    </nav>);
}


function MainLayout() {
    const {currentPage} = useContext(AppContext);

    return (<div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
            <Navbar/>
            <div className="flex justify-center">
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
