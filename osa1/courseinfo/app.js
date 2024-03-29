const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = ({parts}) => {
    const [part1, part2, part3] = parts
    console.log(part1)
    return (
      <div>
        <p>{part1.name} {part1.exercises}</p>
        <p>{part2.name} {part2.exercises}</p>
        <p>{part3.name} {part3.exercises}</p>
      </div>
    )

}

const Total = ({parts}) => {
  return (
    <div>
      <p>
        Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  )
}

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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
