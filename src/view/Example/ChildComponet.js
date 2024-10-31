import React from "react"; 

class ChildComponet extends React.Component {     
    state = {         
        firstName: '',         
        lastName: ''     
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
        
            console.log(this.props);

            let {arrjob=[]} = this.props;
        return (             
            <>                 
              <div className="haha">
                {
                    arrjob.map((item,index) =>{
                        return(
                            <div key={item.id}>
                                {item.namr}
                            </div>
                        )
                    })
                }
              </div>
            </>         
        );     
    } 
} 

// const ChildComponet = ()=>{
//     return(
//         <div>
//             hi
//         </div>
//     )
// }

export default ChildComponet;
