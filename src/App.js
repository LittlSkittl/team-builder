import { useState } from 'react';
import './App.css';

import Form from './components/Form';


function App() {
  const [values, setValues] = useState({name: '', email: '', role: ''})
  const [members, setMembers] = useState([])

  const onSubmit = () => {
    setMembers([values, ...members])
    setValues({name: '', email: '', role: ''})
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value})
  }


  return (
    <div className="App">
      <Form 
      values={values}
      change={onChange}
      submit={onSubmit}
      />
      {
        members.map(member => {
          return (
            <div className='team-container'>
              {member.email}, {member.name}, {member.role}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
