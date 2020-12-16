import React from 'react';
import axios from "axios"

class AddUser extends React.Component {
    constructor() {
        super()
        this.state = {
            fullName:'',
            gender:'',         
            genderType:["Male", "Female", "Others"],
            email:'',
            date: new Date()
        }
    }
   // const [fullName, setfullName] = useState("")
    //const [email, setemail] = useState("")
    //const[genderType, setenderType] = useState(["Male", "Female", "Other"])

    changeHandle = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

     addNewUser =(e) => {
        e.preventDefault()
        const qdata = {name:this.state.fullName,
        gender:this.state.genderType,
        email:this.state.email,
        }
        console.log(qdata)
        axios.post(`https://gorest.co.in//public-api/users`, qdata)
        .then((res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className="adduser">
               <h1 className="hdng">Add New User</h1>
               <form onSubmit={this.addNewUser}>
                    <label> Full Name:</label>
                    <input type="text" required name="fullName" value={this.state.fullName} onChange ={this.changeHandle}/>
                    <br/><br/>
                    <label> Email:</label>
                    <input type="text" required name="email" value={this.state.email} onChange = {this.changeHandle}/>
                    <br/><br/>
                    <label> Gender:</label>
                    <select required name="gender" value={this.state.gender} onChange={this.changeHandle}>
                        <option value="0">Select</option>
                        {this.state.genderType.map((items,i) => {
                            return (
                            <option key={i}>{items}</option>
                            )
                        })}
                    </select>
                    <br/><br/>
                    <input type="submit" value="Add User"/>
               </form> 
            </div>
        );
    }

    
}

export default AddUser;