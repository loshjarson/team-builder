import React from "react";
import styled from 'styled-components'; 
import MemberCard from "./member-card";

const MemberList = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    margin: auto;
    width: max-content;
    `


const TeamList = props => {
    const {teamMembers, newTeamMember, setNewTeamMember} = props;


    return(
        <MemberList>
            {teamMembers.map(member => (
                <MemberCard member={member} newTeamMember={newTeamMember} setNewTeamMember={setNewTeamMember}/>
            ))}
        </MemberList>
    )
}

export default TeamList