import NavbarComponent from './components/NavbarComponent'
import RouterComponent from './components/RouterComponent'

function App() {
  return (
    <div>
      <NavbarComponent/>
      <div className="container py-5">
        <RouterComponent/>
      </div>
    </div>
  )
}

export default App
