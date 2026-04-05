import { useContext } from "react"
import { JobContext } from "../../Context/JobContext/JobContext"
import { Link } from "react-router-dom";

function JobList() {
    const { jobs } = useContext(JobContext)
    return (
        <>
            <div>
                <h2 style={{ margin: "0 auto", display: "flex", justifyContent: "center", marginTop: "50px" }}>Job Listings (Coming Soon)</h2>
                <ul>
                    {jobs.map(job => (
                        <li key={job.id}>
                            <p>Company : {job.company}</p>
                            <p>Job : <Link to={`/jobs/${job.id}`}> {job.title} </Link></p>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default JobList