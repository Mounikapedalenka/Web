import React from "react";
class Fun extends React.Component{
    render(props){
        return(
            <h1>this is {this.props.name}</h1>
        );
    }
}
export default Fun;