const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  
  
  const Part = (prop) => {
    return (
      <p>
        {prop.part} {prop.exercise}
      </p>

    )
  }

  const Header = (prop) => {
    console.log(prop.course.name)
    return (
      <h1>
        {prop.course.name}
      </h1>
    )
  }

  const Content = (prop) => {
    console.log(prop.part.parts[0].name)
    console.log(prop.part.parts[0].exercises)
    return (
      <div>
        <Part part={prop.part.parts[0].name} exercise={prop.part.parts[0].exercises} />
        <Part part={prop.part.parts[1].name} exercise={prop.part.parts[1].exercises} />
        <Part part={prop.part.parts[2].name} exercise={prop.part.parts[2].exercises} />
      </div>
    )
  }

  const Total = (prop) => {
    return (
      <p>
        Number of exercises {prop.exercises.parts[0].exercises+prop.exercises.parts[1].exercises+prop.exercises.parts[2].exercises}
      </p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course} />
      <Total exercises={course} />
    </div>
  )

}
export default App  