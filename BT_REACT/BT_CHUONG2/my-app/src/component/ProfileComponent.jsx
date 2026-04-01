import React, { use } from "react";
import '../css/Profile.css'
function UserProfileComponent  ({user}) {
    return (
        <>
            <div className="profile-card">
                <div className="profile-header">
                    <img src={user.img} alt={`${user.fullname} Avatar`} className="profile-avatar" />
                    <h2 className="profile-name">{user.fullname}</h2>
                    <p className="profile-title"> {user.title}</p>
                </div>
                <div className="profile-body"> 
                    <h3 className="section-title"> Tiểu sử</h3>
                    <p className="profile-bio">{user.bio}</p>
                    <h3 className="section-skill">Kỹ năng nổi bật</h3>
                    <div className="skill-tags">
                            {user.skills.map((skill , index)=> (
                                <span className="skill-tag" key={index}>{skill}</span>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserProfileComponent