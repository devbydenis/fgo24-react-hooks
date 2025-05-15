import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setData(data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="grid grid-cols-3 gap-3 p-10">
      {
        data.map(item => {
          return (
            <Card 
              key={item.id}
              name={item.name}
              image={item.image}
            />
          )
        })
      }
    </div>
  )
}

function Card(props) {
  return (
    <section className="flex flex-col items-center">
      <img src={props.image} alt={props.name} className="rounded"/>
      <p>{props.name}</p>
    </section>
  )
}

export default App