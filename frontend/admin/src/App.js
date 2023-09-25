import './App.css';
import Login from './Components/Employee/Login'
import SignUp from "./Components/Employee/SignUp";
import AdminHome from "./Components/Employee/AdminHome";
import AllSalesExecutive  from "./Components/Employee/AllSalesExecutives";
import AddSalesExecutive from "./Components/Employee/AddSalesExecutives";
import AddDeliveryDriver from "./Components/Employee/AddDeliveryDriver";
import UpdateSalesExecutive from "./Components/Employee/UpdateSalesExecutive";
import AllDeliveryDriver from "./Components/Employee/AllDeliveryDrivers";
import UpdateDeliveryDriver from "./Components/Employee/UpdateDeliveryDriver";
import SalesExecutiveReport from "./Components/Employee/SalesExecutiveReport";
import DeliveryDriverReport from "./Components/Employee/DeliveryDriverReport";
import SalesExecutiveHome from "./Components/SalesExecutive/SalesExecutiveHome";
import DeliveryDriverHome from "./Components/DeliveryDriver/DeliveryDriverHome";
import ViewProfileDD from "./Components/DeliveryDriver/DeliveryDriverViewProfile";
import ViewProfileSE from "./Components/SalesExecutive/SalesExecutiveViewProfile";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
        <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/adhome" element={<AdminHome />} />
        <Route exact path="/addse" element={<AddSalesExecutive />} />
        <Route exact path="/adddd" element={<AddDeliveryDriver />} />
        <Route exact path="/allse" element={<AllSalesExecutive />}/>
        <Route
            exact
            path="/updatese/:id"
            element={<UpdateSalesExecutive />}
          />
          <Route exact path="/alldd" element={<AllDeliveryDriver />} />
          <Route
            exact
            path="/updatedd/:id"
            element={<UpdateDeliveryDriver />}
          />
        <Route exact path="/reportse" element={<SalesExecutiveReport />}/>
        <Route exact path="/reportdd" element={<DeliveryDriverReport />} />
        <Route exact path="/sehome" element={<SalesExecutiveHome />} />
        <Route exact path="/ddhome" element={<DeliveryDriverHome />} />
        <Route exact path="/viewse" element={<ViewProfileSE />} />
        <Route exact path="/viewdd" element={<ViewProfileDD />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
