import React from 'react';

const Tournament = () => {

  return(
    <div className="inner-container" id="tournament">
      <h1>2019 Lake Tahoe Lacrosse Tournament</h1>

      <div>
        
        <p>Dates: Friday, July 19th - July 21st</p>
        
        <a href="http://maps.google.com/?q=Incline Village, NV" className="blue">
          <p>Location: Incline Village, NV</p>
        </a>

        <p>Fields:
          
          <a href="http://maps.google.com/?q=Incline High School, Village Boulevard, Incline Village, NV" className="blue">
            <p>Incline High School</p>
          </a>

          <a href="http://maps.google.com/?q=Village Green, Lakeshore Boulevard, Incline Village, NV" className="blue">
            <p>Village Green</p>
          </a>
        </p>

      </div>
    </div>
  )
}

export default Tournament;