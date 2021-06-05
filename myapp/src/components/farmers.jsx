import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {getFarmers} from "../action/farmers_actions";
//import { deleteMovie } from "../action/movies_actions";

const Farmers = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    console.log("inside useEffect");
    dispatch(getFarmers());
  });
  
  const fs=useSelector((state)=>state.farmers[0]);

  return (
    <div>
      <table className="table mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email Id</th>
            <th>Contact No</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {fs.map((farmer) => (
            <tr key={farmer.userId}>
              <td>{farmer.name}</td>
              <td>{farmer.emailId}</td>
              <td>{farmer.contactNumber}</td>
              <td>
                <button className="btn btn-secondary mr-2">Update</button>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(farmer.userId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Farmers;