import './App.css';
import React, {useState} from 'react';
import styled from 'styled-components'
import TeamList from './components/team-list'

const TeamNameInput = styled.input`
    border: none;
    background: none;
    color: black;
    outline: none;
    font-size: 30px;
    text-align: center;
    margin: 2rem 0;
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
  const [newTeamMember, setNewTeamMember] = useState({})



  return (
    <div className="App">
      <header className="App-header">
        <TeamNameInput type="text" placeholder="Team Name"/>
      </header>
      <div>
      <TeamList teamMembers={teamMembers} newTeamMember={newTeamMember} setNewTeamMember={setNewTeamMember}/>
      </div>
    </div>
  );
}

export default App;
