import React, {Fragment, useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import FiscaliasList from "./components/FiscaliasList";
import Form from "./components/Form"

function App() {

  const [cFiscalia, createFiscalia] = useState({
    nombre: '',
    ubicacion: '',
    telefono: ''
  })

  const [Fiscalia, setFiscalia] = useState([])

  const [listUpdated, setlistUpdated] = useState(false)

  useEffect(() => {
    const getFiscalias = () => {
      fetch('http://localhost:4000/fiscalias')
      .then(res => res.json())
      .then(res => setFiscalia(res))
    }
    getFiscalias()
    setlistUpdated(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand="MP ADMIN"/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: "center"}}>Lista de Fiscalias</h2>
            <FiscaliasList cFiscalia={cFiscalia} createFiscalia={createFiscalia} Fiscalia={Fiscalia} setlistUpdated={setlistUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: "center"}}>Nueva Fiscalia</h2>
            <Form cFiscalia={cFiscalia} createFiscalia={createFiscalia}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
