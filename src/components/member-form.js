import React, {useState} from 'react';
import MemberCard from './member-card';
import styled from 'styled-components'; 

const MFormConatiner = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    border: 2px dashed blue;
    border-radius: 10px;
    padding: 10px;
    width: 40%;
`

const MForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: auto 5px;
`

const Sbutton = styled.button`
    margin: 1rem 2rem 0rem;
    height: 25px;
    background-color: green;
    border-radius: 5px;
    border-color: lightgrey;
    font-weight: 800;
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
        if (value === "") {
            setNewName(event.target.value)
            setNewTeamMember(newTeamMember => ({...newTeamMember, [name]:"NAME"}))
        } else {
        setNewName(event.target.value)
        setNewTeamMember(newTeamMember => ({...newTeamMember, [name]:value}))
        }
    }

    const EmailHandler = event => {
        const {name, value} = event.target;
        
        if (value === "") {
            setNewEmail(event.target.value)
            setNewTeamMember(newTeamMember => ({...newTeamMember, [name]:"EMAIL"}))
        } else {
            setNewEmail(event.target.value)
            setNewTeamMember(newTeamMember => ({...newTeamMember, [name]:value}))
        }
    }

    const RoleHandler = event => {
        const {name, value} = event.target;
        if (value === "") {
            setNewRole(event.target.value)
            setNewTeamMember(newTeamMember => ({...newTeamMember, [name]:"ROLE"}))
        } else {
            setNewRole(event.target.value)
            setNewTeamMember(newTeamMember => ({...newTeamMember, [name]:value}))
        }
    }

    const SubmitHandler = event => {
        event.preventDefault()
        setTeamMembers([...teamMembers, newTeamMember])
        setNewName("")
        setNewEmail("")
        setNewRole("")
        setNewTeamMember({
            name:"NAME",
            role:"ROLE",
            email:"EMAIL"
          })
    }

    return(
        <MFormConatiner>
            <MemberCard member={newTeamMember}/>
            <MForm onSubmit={event => SubmitHandler(event)}>
                <label>
                    Name:&nbsp;&nbsp;&nbsp;
                    <input type="text" onChange={event => NameHandler(event)} value={newName} name="name" required/>
                </label>
                <br/>
                <label>
                    Role:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" onChange={event => RoleHandler(event)} value={newRole} name="role" required/>
                </label>
                <br/>
                <label>
                    Email:&nbsp;&nbsp;&nbsp;
                    <input type="text" onChange={event => EmailHandler(event)} value={newEmail} name="email" required/>
                </label>
                <Sbutton type="submit">ADD MEMBER</Sbutton>
            </MForm>
        </MFormConatiner>
    )
}

export default MemberForm