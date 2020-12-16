import React, {Component} from 'react';
//import Panel from 'react-bootstrap/lib/Panel'
//import Button from 'react-bootstrap/lib/Button'
//import CustomerDetails from './CustomerDetails'
import axios from 'axios'

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      customerList:[]
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData =() => {
    axios.get('https://gorest.co.in//public-api/users')
    .then(response => {
      console.log(response)
      this.setState({customerList: response.data.data})
    })
  }


  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (
      <div>
        <div>
          <table id="dataTable">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Created Date</th>
              <th>Updated Date</th>
            </tr>
            {console.log(this.state.customerList)}
            {this.state.customerList.map((items,i) => {
              return(
                <tr>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.gender}</td>
                  <td>{items.created_at}</td>
                  <td>{items.updated_at}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    )
  }

}
