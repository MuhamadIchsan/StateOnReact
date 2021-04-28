import FunctionComponent from './components/FunctionComponent'
import HomeComponent from './components/HomeComponent'
import ListComponent from './components/ListComponent'
import Card from './components/Card'
import UsersComponent from './components/UsersComponent'
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
