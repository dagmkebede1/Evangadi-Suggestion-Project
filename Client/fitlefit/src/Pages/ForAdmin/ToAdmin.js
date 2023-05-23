import React from 'react';
import './ForAdmin.css';
function ToAdmin() {
  return (
        
    <div className="display_body ">
    <div className="my-3 d-md-flex d-sm-none justify-content-between container showAkafii">
      <div className="showss mx-4">
        <a href="/showStaffSuggestion">Show staff suggestions</a>
      </div>
      <div className="showss mx-4">
        <a href="/showStudentQuestions">Show student questions</a>
      </div>
      <div className="showss mx-4">
        <a className='' href="/Notification">Send Notification</a>
      </div>
    </div>
    </div>

  );
}

export default ToAdmin;
