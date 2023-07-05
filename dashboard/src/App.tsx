
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Dashboard from './scenes/dashboard'
import Customers from './scenes/customers'
import Settings from './scenes/settings'
import Properties from './scenes/properties'

function App() {

  return (
    <>
      <BrowserRouter>
      <Sidebar/>
      <section id="content">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/properties" element={<Properties/>}/>
      </Routes>
      </section>
      </BrowserRouter>
    </>
  )
}

export default App
