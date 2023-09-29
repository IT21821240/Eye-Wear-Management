import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListSupplier from './Component/ListSupplier'
import Navbar from './Component/Navbar'
import AddSupplier from './Component/AddSupplier'
import Editstud from './Component/Editstud'
import ViewSupplier from './Component/ViewSupplier'

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ListSupplier/>}/>

                <Route path="/add" element={<AddSupplier/>}/>

                <Route path="/edit/:id" element={<AddSupplier/>}/>

                <Route path="/view/:id" element={<ViewSupplier/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
