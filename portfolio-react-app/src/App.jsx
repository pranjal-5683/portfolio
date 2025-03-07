import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-row gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <Skills />
        </>
    );
}

export default App;
