import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
function BlogDetail() {
    const { id } = useParams();

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/blogs')
    }
    return (
        <>
            <NavBar />
            <h1>Blog Detail - ID : {id} </h1>
            <button style={{ width : "150px"  ,margin:"0 auto"}} onClick={handleBack}>Back to Blog  List</button>
        </>
    )
}
export default BlogDetail