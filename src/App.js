import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
    </div>
  );
}

function LoadUsers(){
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  },[])
  return (
    <div>
      <h2>Total User {users.length}</h2>
      <div className='row'>
      {
        users.map(user => <User user={user} key={user.login.uuid}></User>)
      }
      </div>
    </div>
  )
}

const userStyle = {
  padding: '10px',
  margin: '12.5px 0'
}

function User(props){
  const {name, email, picture, location, phone} = props.user
  return (
    <div className='col-md-4'>
      <div style={userStyle} className='shadow bg-light'>
        <img src={picture.medium} alt="" />
        <h3 className='text-light bg-primary bg-gradient mt-3 py-2'>Name: {name.title} {name.first} {name.last}</h3>
        <h4 className='text-success'>Email: {email}</h4>
        <p>City: {location.city}</p>
        <p>State: {location.state}</p>
        <p>Country: {location.country}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  )
}
export default App;
