
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Parts = (props) => {
    console.log(props)
  return  <p>
        {props.parts} {props.exercises}
  </p>
}

const Content = (props) => {
  console.log(props)
  return <div>

      <Parts part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Parts part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Parts part={props.parts[2].name} exercises={props.parts[2].exercises}/>

  </div>

}

const Total = (props) => {
  console.log(props)
  return <div>
    Total amonut: 
    <Parts exercises={props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}/>
    
  </div>


}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>

      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
      ...
   
    </div>
  )
}

export default App