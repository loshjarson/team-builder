import './App.css';
import React, {useState} from 'react';
import styled from 'styled-components'
import TeamList from './components/team-list'
import MemberForm from './components/member-form'

const TeamNameInput = styled.input`
    border: none;
    background: none;
    color: black;
    outline: none;
    font-size: 30px;
    text-align: center;
    margin: 2rem 0;
  `

const Content = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
`

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    name: "Susan",
    email: "meme",
    role: "pres"
  },{
    name: "Mary",
    role: "ass",
    email: "hi"  
  }])
  const [newTeamMember, setNewTeamMember] = useState({
    name:"NAME",
    role:"ROLE",
    email:"EMAIL"
  })



  return (
    <div className="App">
      <header className="App-header">
        <TeamNameInput type="text" placeholder="Team Name"/>
      </header>
      <Content>
      <TeamList teamMembers={teamMembers}/>
      <MemberForm newTeamMember={newTeamMember} setNewTeamMember={setNewTeamMember} teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
      </Content>
    </div>
  );
}

export default App;
