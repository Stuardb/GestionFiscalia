import React from "react";

const Form = ({cFiscalia, createFiscalia}) => {

    const handleChange = e => {
        createFiscalia({
            ...cFiscalia,
            [e.target.name]: e.target.value
        })
    }

    let{nombre, ubicacion, telefono} = cFiscalia

    const handleSubmit = () => {
        //Validar los datos.
        if(nombre === '' || ubicacion === '' || telefono === ''){
            alert("Ingresa todos los campos.")
            return
        }
        //Consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cFiscalia)
        }
        fetch('http://localhost:4000/fiscalias', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        //Reiniciar estado
        createFiscalia({
            nombre: '',
            ubicacion: '',
            telefono: ''
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="ubicacion" className="form-label">Ubicación</label>
                <input value={ubicacion} name="ubicacion" onChange={handleChange} type="text" id="ubicacion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input value={telefono} name="telefono" onChange={handleChange} type="text" id="telefono" className="form-control"/>
            </div>
            <button className="btn btn-primary">Crear</button>
        </form>
    );
}

export default Form;