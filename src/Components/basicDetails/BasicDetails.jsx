import React, { useState } from "react";
import "./BasicDetails.css";
import axios from "axios"
const BasicDetails = () => {
  const [basicdetails, setBasicDetails] = useState({
    hospitalName: "",
    emailAddress: "",
    phoneNumber: "",
    hospitalCategory: [],
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
  });

  const saveChanges = async (e) => {
    try{

      e.preventDefault()
      console.log("basicdetails of hospital", basicdetails);
      const response = await axios.post(`http://localhost:5000/basic-details`, {basicDetails: basicdetails})
      console.log("res=====", response)
    } catch(err){
      console.log("=====err", err)
    }
  };

  return (
    <div className="basic-details-page">
      <h3>Basic Details</h3>
      <form className="basic-details-form">
        <div className="form-row">
          {/* Hospital Name */}
          <div className="form-group">
            <label>Hospital Name</label>
            <input
              type="text"
              placeholder="Enter hospital name"
              value={basicdetails.hospitalName}
              onChange={(e) =>
                setBasicDetails({ ...basicdetails, hospitalName: e.target.value })
              }
            />
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={basicdetails.emailAddress}
              onChange={(e) =>
                setBasicDetails({ ...basicdetails, emailAddress: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-row">
          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={basicdetails.phoneNumber}
              onChange={(e) =>
                setBasicDetails({
                  ...basicdetails,
                  phoneNumber: e.target.value,
                })
              }
            />
          </div>

          {/* Hospital Category (Multiple Select) */}
          <div className="form-group">
            <label>Hospital Category</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  value="basicdetails.hospitalCategory"
                  onChange={(e) =>
                    setBasicDetails({
                      ...basicdetails,
                      hospitalCategory: e.target.value,
                    })
                  }
                />
                General
              </label>
              <label>
                <input
                  type="checkbox"
                  value="basicdetails.hospitalCategory"
                  onChange={(e) =>
                    setBasicDetails({
                      ...basicdetails,
                      hospitalCategory: e.target.value,
                    })
                  }
                />
                Specialized
              </label>
              <label>
                <input
                  type="checkbox"
                  value="basicdetails.hospitalCategory"
                  onChange={(e) =>
                    setBasicDetails({
                      ...basicdetails,
                      hospitalCategory: e.target.value,
                    })
                  }
                />
                Emergency
              </label>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <h3>Address</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              placeholder="Enter street address"
              value={basicdetails.address.street}
              onChange={(e) =>
                setBasicDetails({
                  ...basicdetails,
                  address: { ...basicdetails.address, street: e.target.value },
                })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter city"
              value={basicdetails.address.city}
              onChange={(e) =>
                setBasicDetails({
                  ...basicdetails,
                  address: { ...basicdetails.address, city: e.target.value },
                })
              }
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              placeholder="Enter state"
              value={basicdetails.address.state}
              onChange={(e) =>
                setBasicDetails({
                  ...basicdetails,
                  address: {
                    ...basicdetails.address,
                    state: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              placeholder="Enter country"
              value={basicdetails.address.country}
              onChange={(e) =>
                setBasicDetails({
                  ...basicdetails,
                  address: {
                    ...basicdetails.address,
                    country: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            placeholder="Enter pincode"
            value={basicdetails.address.pincode}
            onChange={(e) =>
              setBasicDetails({
                ...basicdetails,
                address: {
                  ...basicdetails.address,
                  pincode: e.target.value,
                },
              })
            }
          />
        </div>

        {/* Submit Button */}
        <div className="primary-btn">
          <button type="submit" className="submit-btn" onClick={saveChanges}>
            Save And Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
