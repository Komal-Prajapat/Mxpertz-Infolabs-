import React from 'react';
import './home.css'; 

const Home = () => {
  return (
    <div>
      <div className="container1">
        {/* Your container content */}
      </div>

      <div className="homedata">
        <h3>Science Diction Stories</h3>
        <button className="custom-button btn1">
          <i className="bi bi-plus-circle"></i> NEW
        </button>
        <button className="custom-button btn2">
          <i className="bi bi-hourglass-split"></i> In Progress
        </button>
        <button className="custom-button btn3">
          <i className="bi bi-check-circle"></i> Completed
        </button>
        <button className="custom-button btn4">
          <i className="bi bi-x-circle"></i> Clear All
        </button>
      </div>
    </div>
  )
}

export default Home;
