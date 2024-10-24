import React from "react";






class MyComponent extends React.Component{
    state = {
        name :'fejhg',
        acb:'ok'
    }

    handOnChangeNam = (event)=>{
        this.setState({
            name: event.target.value    
        })

    }
    render (){
        return(
        <div>
            <input value={this.state.name}
            type="text" 
            onChange={(event)=> this.handOnChangeNam(event)}
            />
            hello is {this.state.name}
        </div>
        )
    }
}

export default MyComponent;