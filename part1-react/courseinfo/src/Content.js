const Content = (props) => {
    console.log(props)
    return (
    <p> 
        {props.part1}
        {props.exercises1}
        {props.part2}
        {props.exercises2}
        {props.part3}
        {props.exercises3}
    </p>
    )
  }

  export default Content