import React, {useState} from 'react';
import MemberCard from './member-card';
import styled from 'styled-components'; 

const MForm = styled.div`
        bottom: 0px;
        display: flex;
        flex-direction: column;
        margin: auto;
        border: 2px dashed blue;
        border-radius: 10px;
        padding: 10px;

    `

const MemberForm = props => {
    const {newTeamMember, setNewTeamMember, teamMembers, setTeamMembers} = props;
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newRole, setNewRole] = useState("");


    
    // const AddMemberHandler = (event) => {
        
    // }

    const NameHandler = event => {
        const {name, value} = event.target;
        setNewName(event.target.value)
        setNewTeamMember(newTeamMember => ({...newTeamMember, [name]:value}))
    }

    const EmailHandler = event => {
        const {name, value} = event.target;
        setNewEmail(event.target.value)
        setNewTeamMember(newTeamMember => ({...newTeamMember, [name]:value}))
    }

    const RoleHandler = event => {
        const {name, value} = event.target;
        setNewRole(event.target.value)
        setNewTeamMember(newTeamMember => ({...newTeamMember, [name]:value}))
    }

    const SubmitHandler = event => {
        event.preventDefault()
        setTeamMembers([...teamMembers, newTeamMember])
        setNewName("")
        setNewEmail("")
        setNewRole("")
    }

    return(
        <MForm>
            <MemberCard member={newTeamMember}/>
            <form onSubmit={event => SubmitHandler(event)}>
                <label>
                    Name:
                    <input type="text" onChange={event => NameHandler(event)} value={newName} name="name" required/>
                </label>
                <label>
                    Email:
                    <input type="text" onChange={event => EmailHandler(event)} value={newEmail} name="email" required/>
                </label>
                <label>
                    Role:
                    <input type="text" onChange={event => RoleHandler(event)} value={newRole} name="role" required/>
                </label>
                <button type="submit"/>
            </form>
        </MForm>
    )
}

export default MemberForm