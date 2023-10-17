import SalesExecutiveDashBoard from "./SalesExecutiveDashBoard";
import axios from "axios";
import React, { useState, useEffect } from "react";

function ViewLeaveSE() {
  var user = JSON.parse(localStorage.getItem("SEInfo"));
  const [leaves, setLeaves] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function get() {
      axios
        .get(`http://localhost:8070/leave/getEid/${user.sid}`)
        .then((res) => {
          console.log(res.data);
          setLeaves(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    get();
  }, []);
  return (
    <>
      <div>
        <SalesExecutiveDashBoard></SalesExecutiveDashBoard>
        <div className="mt-5">
          <div className="container">
            <div className="add_btn mt-2 mb-2">
              <br />
              <br />
              <h2 style={{ marginLeft: "200px" }}>My leaves</h2>
            </div>
            <br />
            <br />

            <table className="table">
              <thead>
                <tr className="table-dark">
                <th scope="col">Reason</th>
                  <th scope="col">Days</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {leaves

.filter(
  (l) => 
l.reason.toLowerCase().includes(query)
 )

.map((e) => (
                
                
                  <tbody>
                    <tr>
                      <td>{e.reason}</td>
                      <td>{e.days}</td>
                      <td>{e.startdate.toString().slice(0,10)}</td>
                      <td>{e.enddate.toString().slice(0,10)}</td>
                      
                      <td>{e.status}</td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default ViewLeaveSE;