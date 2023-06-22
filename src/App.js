import { Route, Routes } from "react-router-dom";
import { AddGuest } from "./pages/AddGuest";
import { AddProperty } from "./pages/AddProperty";
import { DateComponent } from "./pages/DateComponent";
import { Header } from "./pages/Header";
import { HeaderDemo } from "./pages/HeaderDemo";
import { Login } from "./pages/Login";
import { PropertyDetail } from "./pages/PropertyDetail";
import Register from "./pages/RegisterDraft";
import { ViewGuest } from "./pages/ViewGuest";
// import TabPage from "./pages/TabPage";
import ViewProperty from "./pages/ViewProperty";
// import { RegisterDemo } from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path='/auth/register' Component={Register}/>
      {/* <Route path='/auth/registerdemo' Component={RegisterDemo}/> */}
      <Route path='/auth/login' Component={Login}/>
      <Route path='/addproperty' Component={AddProperty}/>
      <Route path='/viewproperty' Component={ViewProperty}/>
      {/* <Route path="/viewproperty/:id" Component={PropertyDetail}/> */}
        {/* <Route path="add-guest" Component={AddGuest}/> */}
      {/* </Route> */}
      <Route path="/header" Component={Header}/>
      <Route path="/header-demo" Component={HeaderDemo}/>
      {/* <Route path="/tabpage" Component={TabPage} /> */}
      {/* <Route path="/nesttab" Component={NestTab} /> */}
      {/* nested tab */}
      <Route path="/viewproperty/:id" Component={PropertyDetail}>
        <Route path="add-guest" Component={AddGuest} />
        <Route path="view-guest" Component={ViewGuest} />
      </Route>
      <Route path="/date" Component={DateComponent}/>
      {/* <Route path="/courses" element={<Courses />}>
        <Route path="search" element={<Search />} />
        <Route path="list" element={<List/>}/>
      </Route> */}
    </Routes>
  );
}

export default App;
