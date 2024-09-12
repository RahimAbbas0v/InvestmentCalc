import React from "react";

const Inputs = ({ handleChange, data }) => {
  console.log(data);
  
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label htmlFor="">Initial Investment</label>
            <input type="text" onChange={(e)=>handleChange("initialInvestment",e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Annual Investment</label>
            <input type="text" onChange={(e)=>handleChange("annualInvestment",e.target.value)} />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label htmlFor="">Expected return</label>
            <input type="text" onChange={(e)=>handleChange("expectedReturn",e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Duration</label>
            <input type="text" onChange={(e)=>handleChange("duration",e.target.value)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inputs;
