// import './App.css'
import CryptocurrencyCards from './Card'
import Graph from './Graph'
import SideNavBar from './Navbar'
import Navbar from './Navbar'
import './add.css'

function App() {

  return (
    <>
      <div className='heading'>
        <h2>Hello, <span style={{ color: 'rgb(155,204,90)' }}>Brooklyn Simmons</span></h2>
        <h3>Welcome to  <span style={{ color: 'rgb(40,167,40)' }}>Spot trading!</span></h3>
      </div>
      <SideNavBar />
      <Graph />
      <CryptocurrencyCards />
    </>
  )
}

export default App
