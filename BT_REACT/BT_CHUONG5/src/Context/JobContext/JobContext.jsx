import { useContext, createContext, Children, useState } from "react";
import { jsx } from "react/jsx-runtime";

const JobContext = createContext();
JobContext.displayName = "JobContext"
const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([
        { id: 1, title: "Frontend Developer", company: "Tech Co", description: "Build UI with React" },
        { id: 2, title: "Backend Developer", company: "Data Inc", description: "Work with APIs and DB" },
        { id: 3, title: "FullStack Developer", company: "NNB", description: "Work with APIs and DB and UI web" }
    ])
    
  

    const [applications , setApplications] = useState([]) ;
    
    return (
        <JobContext.Provider value={{jobs ,setJobs , applications , setApplications}}>
                {children}
        </JobContext.Provider>
    )
}

export {
    JobContext , JobProvider
}