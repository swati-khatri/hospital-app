import React from "react";
import { Link, NavLink } from "react-router-dom";


function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-steps">
        <li className="list-item">
          <NavLink to={"basic-detail"} style={{ textDecoration: "none" }}>
            Basic Details
          </NavLink>
        </li>
        <li>
          <NavLink to={'department-details'} style={{ textDecoration: 'none'}}>Departments</NavLink>
        </li>
        <li>Procedures</li>
        <li>Wards and Beds</li>
        <li>Doctors</li>
        <li>Amenities</li>
        <li>Insurance</li>
        <li>Admin</li>
        <li>Review Details</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
