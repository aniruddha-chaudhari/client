import React from 'react'
import Sidebar from './components/sidebar'
import { LifeBuoy,Receipt,Boxes,Package,UserCircle,BarChart3,LayoutDashboard,Settings} from 'lucide-react'
import { Sidebaritem } from './components/sidebar'


const App = () => {
  return (
    <main className='App'>
      <Sidebar>
<Sidebaritem
  icon={<LayoutDashboard size={20} />}
  text="Dashboard"
  alert
  />
  <Sidebaritem icon={<BarChart3 size={20}/>} text="Analytics" active/>
  <Sidebaritem icon={<UserCircle size={20}/>} text="Users" />
  <Sidebaritem icon={<Boxes size={20}/>} text="Inventory" />  
  <Sidebaritem icon={<Package size={20}/>} text="Orders" alert/>  
  <Sidebaritem icon={<Receipt size={20}/>} text="Billings" />
  <hr className='my-3'/>  
  <Sidebaritem icon={<Settings size={20}/>} text="Settings" />
  <Sidebaritem icon={<LifeBuoy size={20}/>} text="Support" />
     </Sidebar>

    </main>
  )
}

export default App