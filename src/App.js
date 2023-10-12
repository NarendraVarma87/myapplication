import './App.css'
import Data from './Header/Data'
import Header from './Header/Header'

function App() {
  const newData = Data.map((next) => {return <Header key={next.id} name={next.name} age={next.age} skills={next.skills} salary={next.salary}/>})
  return(
    <div className="sss">
      {newData}
    </div>
  )
}
export default App;