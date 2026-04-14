import {useContext, useState } from "react"
import { JobContext } from "../../../Context/JobContext/JobContext";
import { useNavigate } from "react-router-dom";

function AddJob() {
    const [title, setTitle] = useState('') ;
    const [company, setCompany ]= useState('');
    const [description, setDescription] = useState('');

    const {jobs , setJobs} = useContext(JobContext);
    const navigate = useNavigate() ;
    const handleSubmit = (e) =>{
        e.preventDefault();

        const newJob = {
            id : jobs.length + 1 ,
            title : title ,
            company : company ,
            description : description
        }
        console.log("New Job:", newJob);  
        console.log("Jobs trước:", jobs); 
        setJobs([...jobs ,newJob ]) ;
        console.log("Jobs sau:", [...jobs, newJob]); 
        navigate('/admin/jobs')
    }

    return (
        <>
            <div style={{ width: "300px"  , margin : '0 auto'} } >
                <h1 style={{ display: "flex" ,justifyContent: "center" }}>Form Add Job</h1>
                <div style={{ border : "1px solid"  ,padding : "20px"}} >
                    <form 
                    action="" style={{ display: 'flex', flexDirection: "column", gap: "10px" }} 
                    onSubmit={handleSubmit}
                    >
                        <input type="text" placeholder="title" onChange={e => setTitle(e.target.value)} />
                        <input type="text" placeholder="company" onChange={e => setCompany(e.target.value)}/>
                        <input type="text" placeholder="description" onChange={e => setDescription(e.target.value)} />
                        <button 
                        style={{width :"100px" , display :"flex" , justifyContent : "center" , margin : "0 auto" ,backgroundColor : "black" , color :"white"}}
                        >
                            add </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddJob