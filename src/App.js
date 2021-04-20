import FunctionComponent from './components/FunctionComponent'
import HomeComponent from './components/HomeComponent'
import ListComponent from './components/ListComponent'

function App() {
  return (
    <div>
      <div className="container p-5">
        <h4 className="text-center">LATIHAN REACT</h4>
        <h5 className="text-center">Belajar State</h5>
        
        <br />
        <HomeComponent />
        <ListComponent />
      </div>
    </div>
  )
}

export default App
