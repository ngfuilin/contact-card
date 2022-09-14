import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useParams, useLocation} from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Detail = () => {
  const {id} = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const data = JSON.parse("[".concat(JSON.stringify(users)).concat("]"))
 
  return (

    <div className="container">
          <div className='box_detail'>
                    
          <ul><p>-Name: {data[0].name} {id}</p>
              <p>-username: {data[0].username}</p>
              <FaEnvelope />{'  '} <a className="home-nav-links" href={`mailto:${data[0].email}`} target="_blank" rel="noopener noreferrer">{data[0].email}</a>
              <p><FaPhone />{'  '} <a className="home-nav-links" href="tel:PHONE_NUM">{data[0].phone}</a></p>
              <p>-company: </p>
              <p>-website: {data[0].website}</p>
             </ul> 
          </div>  
            
  </div>
  )
}

export default Detail;