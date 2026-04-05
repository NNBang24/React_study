import { useContext } from "react";
import { useParams } from "react-router-dom"
import { JobContext } from "../../Context/JobContext/JobContext";
import JobApplicationForm from "../../components/JobApplicationForm/JobApplicationForm";

function JobDetail() {
    const { id } = useParams();
    const { jobs } = useContext(JobContext);

    const job = jobs.find(job => {
        return job.id === parseInt(id);
    })
    if (!job) return <h2>Job Not Found</h2>
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                <h2>{job.title}</h2>
                <p>Company : {job.company}</p>
                <p>Description : {job.description}</p>

               <h3>App now</h3>
                <JobApplicationForm />
            </div>
        </>
    )
}

export default JobDetail 