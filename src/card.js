import React from 'react';
const Card = (props) => {

    return (
     
      <tr key={props.keys}  className="data-row"
      onClick={() => props.selected(props.keys)}
      >
         {/* 
        address: {streetAddress: "5268 Quis St", city: "Pittsburg", state: "SC", zip: "59428"}
description: "neque sit magna at et malesuada dolor etiam pulvinar sed et tincidunt non elementum non sed pharetra sapien hendrerit lorem libero dolor non tortor ac ac fringilla donec aliquam sollicitudin donec porttitor"
email: "KJokisch@pharetra.ly"
firstName: "Teryl"
id: 648
lastName: "Sweet"
phone: "(426)928-5453" */}
      <td className="column1">{props.data.id}</td>
      <td className="column2">{props.data.firstName}</td>
      <td className="column3">{props.data.lastName}</td>
      <td className="column4">{props.data.email}</td>
      <td className="column5">{props.data.phone}</td>
  </tr>
      
    )
}
 
export default Card;