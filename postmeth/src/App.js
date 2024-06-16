import { Routes,Route } from "react-router-dom"
import Item from "./components/Item"
import ItemForm from "./components/ItemForm"
import ItemList from "./components/ItemList"
import Layout from "./components/Layout"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Item/>} />
        <Route path="/item" element={<Item/>} />
        <Route path="/itemform" element={<ItemForm/>} />
        <Route path="/itemlist" element={<ItemList/>} />
        




        </Route>
      </Routes>
    </div>
  )
}

export default App
