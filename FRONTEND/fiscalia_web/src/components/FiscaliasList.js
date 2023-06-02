import React from "react";

const FiscaliasList = ({cFiscalia, createFiscalia, Fiscalia, setlistUpdated}) => {
    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:4000/fiscalias/' + id, requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setlistUpdated(true)
    }

    let{nombre, ubicacion, telefono} = cFiscalia    
    const handleUpdate = id => {
        if(nombre === '' || ubicacion === '' || telefono === ''){
            alert("Ingresa todos los campos.")
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cFiscalia)            
        }
        fetch('http://localhost:4000/fiscalias/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //Reiniciar estado
        createFiscalia({
            nombre: '',
            ubicacion: '',
            telefono: ''
        })
        setlistUpdated(true)        
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Ubicacion</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {Fiscalia.map(Fiscalia => (
                    <tr key={Fiscalia.id}>                
                        <td>{Fiscalia.id}</td>
                        <td>{Fiscalia.nombre}</td>
                        <td>{Fiscalia.ubicacion}</td>
                        <td>{Fiscalia.telefono}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(Fiscalia.id)} className="btn btn-danger">Eliminar</button>
                            </div>    
                        </td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(Fiscalia.id)} className="btn btn-warning">Editar</button>
                            </div>    
                        </td>                  
                    </tr>
                ))}                
            </tbody>
        </table>
    );
}

export default FiscaliasList;