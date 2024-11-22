import React from 'react';
class Test3 extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor:"red"}
    }
    // static getDerivedStateFromProps(props,state){
    //     return{favoritecolor:"blue"};
    // }
    changecolor=()=>{
        this.setstate({favoritecolor:"yellow"})
    }
    render(){
        return(
            <>
            <h1>my favoritecolor={this.state.favoritecolor}</h1>
            <button type="button" onclick={this.changecolor}>click to change</button>
            </>
        )
    }
}
export default Test3;