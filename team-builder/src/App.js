import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Members from './components/Members';

function App() {
  const [teamMembers, setTeamMembers] = useState([{name: "", email: "", role: ""}]);
  const newMember = (newAddedMemberData) => {
    setTeamMembers([ ...teamMembers, newAddedMemberData ])
  }

  return (
    <div>
      <form newMember={newMember} />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
