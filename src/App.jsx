
import { Outlet } from 'react-router-dom'
import Footer from './Componentes/Footer/Footer'
import Navber from './Componentes/Navber/Navber'

function App() {

  return (
    <>
      <Navber />
      <div className='min-h-screen container mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
