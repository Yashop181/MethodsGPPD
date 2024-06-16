import { Link,Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div>
      <Link to="/item">Item</Link>
      <Link to="/itemform">ItemForm</Link>
      <Link to="itemlist">ItemList</Link>

      <Outlet/>
    </div>
  )
}

export default Layout

