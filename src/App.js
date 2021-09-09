import './App.css';
import React, {useState} from 'react';
import styled from 'styled-components'
import TeamList from './components/team-list'
import MemberForm from './components/member-form'
import { CSSTransitionGroup } from 'react-transition-group'

const TeamNameInput = styled.input`
    border: none;
    background: none;
    color: black;
    outline: none;
    font-size: 30px;
    text-align: center;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  `

const Content = styled.div`
  height: 90%;
  display: flex;
`

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [newTeamMember, setNewTeamMember] = useState({
    name:"NAME",
    role:"ROLE",
    email:"EMAIL"
  })



  return (
    <div className="App">
      <header className="App-header">
        <TeamNameInput type="text" placeholder="Team Name" maxLength={61}/>
      </header>
      
      <Content>
        <TeamList teamMembers={teamMembers}/>
      <MemberForm newTeamMember={newTeamMember} setNewTeamMember={setNewTeamMember} teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
      </Content>
      
    </div>
  );
}

export default App;
