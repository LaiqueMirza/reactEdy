import React from 'react';
const Card = (props) => {

    return (
      
      <tr key={props.index}  className="data-row"
      onClick={() => props.selected()}
      >
      <td className="column1">{props.data.id}</td>
      <td className="column2">{props.data.firstName}</td>
      <td className="column3">{props.data.lastName}</td>
      <td className="column4">{props.data.email}</td>
      <td className="column5">{props.data.phone}</td>
  </tr>
      
    )
}
 
export default Card;