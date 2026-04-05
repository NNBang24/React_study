import { useContext, useState } from "react"
import { JobContext } from "../../Context/JobContext/JobContext";
import { useParams } from "react-router-dom";

function JobApplicationForm () {
    const [name , setName] = useState('') ;
    const [email , setEmail ] = useState('') ;
    const { setApplications } = useContext(JobContext) ;
    const {id} = useParams() ;
    const handleSubmit = (e) => {
        e.preventDefault();

        setApplications(prev => [
            ...prev,
            { jobId: id, name, email }
        ]);

        alert("Application submitted successfully!");
        navigate("/jobs");
    };
    return (
        <>
            <form onSubmit={handleSubmit} style={{display :'flex' , flexDirection :'column' , width:"300px", gap : "20px" , marginTop : "50px"}}>
                <input placeholder="Name" onChange={e => setName(e.target.value)} />
                <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <button type="submit">Apply</button>
            </form>
        </>
    )
}
export default JobApplicationForm;