import { useContext } from "react"
import { JobContext } from "../../../Context/JobContext/JobContext";


function JobManager () {
    const {jobs} = useContext(JobContext) ;
    return (
        <>
            <div>
                <ul>
                    {jobs.map(job => (
                        <li key={job.id}>
                            <p>{job.title} - {job.company}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default JobManager