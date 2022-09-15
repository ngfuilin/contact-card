import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import { FaPhone, FaEnvelope, FaUser, FaGlobe, FaMapMarkerAlt, FaBuilding, FaUserTag} from "react-icons/fa";

const Detail = () => {

  const {id} = useParams();
  const [users, setUsers] = useState({});
 
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
    }, []);

  const jsonObj = JSON.parse(JSON.stringify(users))

  return (
  
    <div className="container">
      <div className='box_detail'>
        <ul><FaUser/><span className="a" style={{fontSize: "20px"}}>{jsonObj.name}</span>
        <p><FaUserTag style={{color: "navy"}}/><span className="a" style={{fontSize: "14px", fontWeight: "normal"}}>Username: {jsonObj.username}</span></p>
          <FaEnvelope style={{color: "navy"}}/><a className="home-nav-links a" href={`mailto:${jsonObj.email}`} target="_blank" rel="noopener noreferrer">{jsonObj.email}</a>
            <p><FaPhone /><a className="home-nav-links a" href="tel:PHONE_NUM">{jsonObj.phone}</a></p>
            <p><FaBuilding/><span className="a">{jsonObj.company? jsonObj.company.name : '...' }</span></p>
            <p><FaGlobe /><a href= {`http://${jsonObj.website}`}  target="_blank" rel="noopener noreferrer" className="a">http://{jsonObj.website}</a></p>
            <FaMapMarkerAlt style={{color: "navy"}}/><span className="a">Address:</span>
              <li className='li'>{ jsonObj.address? jsonObj.address.street : '...' }</li>
              <li className='li'>{ jsonObj.address? jsonObj.address.suite : '...' }</li>
              <li className='li'>{ jsonObj.address? jsonObj.address.city : '...' }</li>
              <li className='li'>{ jsonObj.address? jsonObj.address.zipcode : '...' }</li>
        </ul> 
      </div>     
  </div>
 
  )
}

export default Detail;