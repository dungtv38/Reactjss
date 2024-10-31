import React from "react"; 
import ChildComponet from "./ChildComponet";
class MyComponent extends React.Component {     
    state = {         
        firstName: '',         
        lastName: ''   ,
        arryjob:[
            {id:'12e',namr : 'rjn3f'},
            {id:'12',namr : 'rjn3f'},
            {id:'123e',namr : 'rjn23f'},
            {id:'12e3',namr : 'rjn4f'}
        ] 
    };      

    handleChange = (event) => {         
        this.setState({ [event.target.name]: event.target.value });     
    };      

    handleSubmit = (event) => {         
        event.preventDefault(); // Prevent the default form submission         
        // You can handle form submission logic here         
        console.log("Submitted:", this.state);     
    };      

    render() {         
        return (             
            <>                 
                <form onSubmit={this.handleSubmit}>                     
                    <label htmlFor="fname">First name:</label><br />                     
                    <input                         
                        type="text"                         
                        name="firstName"  // Thêm thuộc tính name ở đây                        
                        value={this.state.firstName}                         
                        onChange={this.handleChange}                     
                    /><br />                     
                    <label htmlFor="lname">Last name:</label><br />                     
                    <input                         
                        type="text"                         
                        name="lastName"  // Thêm thuộc tính name ở đây                        
                        value={this.state.lastName}                         
                        onChange={this.handleChange}                     
                    /><br /><br />                     
                    <input type="submit" value="Submit" />                 
                </form>   
                <ChildComponet
                arryjob = {this.state.arryjob}
                    />          
            </>         
        );     
    } 
} 

export default MyComponent;
