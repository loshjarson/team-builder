import React from "react";
import styled from 'styled-components'; 
import MemberCard from "./member-card";
import { CSSTransitionGroup } from 'react-transition-group'

const MemberList = styled.div`
    display: flex;
    color: black;
    margin: auto;
    width: 55rem;
    overflow-y: auto;
    height: 80vh;
    `


const TeamList = props => {
    const {teamMembers, newTeamMember, setNewTeamMember} = props;


    return(
        <MemberList>
            <CSSTransitionGroup transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300} className="Member-list">
            {teamMembers.map(member => (
                <MemberCard member={member} newTeamMember={newTeamMember} setNewTeamMember={setNewTeamMember}/>
            ))}
            </CSSTransitionGroup>
        </MemberList>
    )
}

export default TeamList