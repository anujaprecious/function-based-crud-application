import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Update = () => {
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const Navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[]);
    const handleUpdate=(e)=>{
        e.preventDefault();
        console.log("Id...",id)
        axios.put(`https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app/${id}`,
        {
            name:name,
            email:email,
        }
        ).then(()=>{
            Navigate("/read");
        });

    };


  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
         Update
        </button>
       <Link to="/read">
       <button className="btn btn-secondary mx-2">Back</button>
       </Link>
      </form>
    </>
  );
};

export default Update;
