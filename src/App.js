import FunctionComponent from './components/FunctionComponent'
import HomeComponent from './components/HomeComponent'
import ListComponent from './components/ListComponent'
import Card from './components/Card'
import UsersComponent from './components/UsersComponent'

function App() {
  return (
    <div>
      <div className="container py-5">
        <h4 className="text-center">LATIHAN REACT</h4>
        <h5 className="text-center">Belajar State</h5>
        
        <br />
        <HomeComponent />
        <ListComponent />
      </div>
      <hr/>
      <div className="container py-5">
        <h6 className="text-center">Reusable components</h6>
          <div className="row justify-content-center">
              <div className="col-md-4">
                <Card 
                imageUrl=" https://images.unsplash.com/photo-1619109509627-bcb351ab1d9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 " 
                title="Monyet" 
                imageDesc="Gambar monyet lagi duduk"
                altImage="Gambar monyet"
                />
              </div>
          </div>
          <hr/>
          <UsersComponent/>
      </div>

    </div>
  )
}

export default App
