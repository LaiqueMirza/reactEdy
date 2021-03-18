import axios from 'axios';
import Card from './card';
import React, { Component, } from 'react';
import './App.css';
const url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showLoader:true
    }
  }

componentDidMount() {
  axios.get(url).then(res => 
    this.setState({data: res.data})
  )
}

render() {
  console.log(this.state.data)
  let { data } = this.state
  
  return (
    <div>
    
                           
                            
    <main>

        <div id="table-section">

            <form action="/">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                <input type="text" placeholder="Enter something" name="search-box" id="search-box" value="" />
            </form>

            <div id="table-wrapper">

                <div id="table-headers">
                    <table>
                        <thead>
                            <tr>
                                <th className="column1">Id</th>
                                <th className="column2">FirstName</th>
                                <th className="column3">LastName</th>
                                <th className="column4">Email</th>
                                <th className="column5">Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div id="table-data">
                    <table>
                        <tbody>
                            
                        {data.map((card, index) => <Card
                              data={card}
                              key={index}
                            //   selected={
                            //       (data) =>

                            //   }
                            />)}

                        </tbody>
                    </table>
                </div>

            </div>

        </div>



        <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            <div id="info-content">
                <div><b>User selected:</b> Marcellin Shrestha</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                    </textarea>
                </div>
                <div><b>Address:</b> 6480 Nec Ct</div>
                <div><b>City:</b> Dinwiddie</div>
                <div><b>State:</b> NV</div>
                <div><b>Zip:</b> 91295</div>
            </div>
        </div>

    </main>

</div>
    );
}
}

export default App;
