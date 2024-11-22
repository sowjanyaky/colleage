class Parent1 extends React.Component {
    render() {
      const value=3;
      return (
        <div>
          <Child1 Message="message from child"/>
          <Child1 value={value}/>
        </div>
      )
    }
  }
  const Child1=(props)=>{
      return(
          <>
          <h1>{props.Message}</h1>
          <h1>{props.value}</h1>
  
          </>
      )
  }
  export default Parent1;