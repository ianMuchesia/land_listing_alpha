
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Dashboard from './scenes/dashboard'
import Customers from './scenes/customers'
import Settings from './scenes/settings'
import Properties from './scenes/properties'
import Requests from './scenes/requests'

function App() {

  return (
    <>
      <BrowserRouter>
      <Sidebar/>
      <div id="content">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/properties" element={<Properties/>}/>
        <Route path="/requests" element={<Requests/>}/>

      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
