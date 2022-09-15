import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

export const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      {users.map((data, i) => {
        return ( 
        <div className='box'>
          <div className='circle'>{data.name.substring(0,1)}</div>
          <h4 className='h4'>{data.name}</h4>
          <p><small>@{data.username}</small></p>
          <a href = {`${data.website}`} className="a">{data.website}</a>
          <br />
          <Link to={{pathname: `/detail/${data.id}`}}
                    >
            <button className='btn'>MORE DETAIL</button>
          </Link>
        </div>
        )
      })}
      
    </div>
  )
};

export default Home;