import React from 'react';

const Info = ({userDetails}) => {
    let props = userDetails
    debugger;
    return (

        <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            {props.display && <div id="info-content">
            {/* address: {streetAddress: "5268 Quis St", city: "Pittsburg", state: "SC", zip: "59428"}
description: "neque sit magna at et malesuada dolor etiam pulvinar sed et tincidunt non elementum non sed pharetra sapien hendrerit lorem libero dolor non tortor ac ac fringilla donec aliquam sollicitudin donec porttitor"
email: "KJokisch@pharetra.ly"
firstName: "Teryl"
id: 648
lastName: "Sweet"
phone: "(426)928-5453" */}
                <div><b>User selected:</b>{props.firstName} {props.lastName}</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        {props.description}
                    </textarea>

                </div>
                <div><b>Address:</b> {props.streetAddress}</div>
                <div><b>City:</b> {props.city}</div>
                <div><b>State:</b> {props.state}</div>
                <div><b>Zip:</b> {props.zip}</div>
            </div>}
            
        </div>
      );
}
 

export default Info;