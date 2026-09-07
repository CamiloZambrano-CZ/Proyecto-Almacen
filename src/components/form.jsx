import { useState } from "react"

export const Form = ({ inicial, guardarInfo, enEdicion, cancelarEdicion }) => {
    //hook useState que permite cambiar el estado de los elementos
    const [valores, setValores] = useState(inicial)
    const { nombre, categoria, marca, precio, cantidad } = valores
    const cambio = ({ target }) => {
        setValores({
            //operador spread, indivualiza la lista
            ...valores,
            [target.name]: target.value
        })
    }
    const guardar = async (e) => {
        e.preventDefault()
        //validar contra espacios en blanco
        if(nombre.trim() == '' || categoria.trim() == '' || marca.trim() == '' || String(precio).trim() == '' || String(cantidad).trim() == '')
            return alert('Completa los campos')
        //validar que precio y cantidad sean números válidos y positivos
        if(isNaN(precio) || Number(precio) < 0 || isNaN(cantidad) || Number(cantidad) < 0)
            return alert('El precio y la cantidad deben ser valores numéricos válidos')
        await guardarInfo({
            ...valores,
            precio: Number(precio),
            cantidad: Number(cantidad)
        })
        reset()
    }
    const reset = () => setValores(inicial)
    return (
        <form className="tech-form" onSubmit={guardar}>
            <div className="form-field">
                <label className="form-label" htmlFor="nombre">
                    Nombre del Componente <span className="req">*</span>
                </label>
                <input 
                    className="form-input"
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    placeholder="ej. Memoria RAM DDR5 32GB" 
                    value={nombre} 
                    onChange={cambio} 
                />
            </div>
            <div className="form-field">
                <label className="form-label" htmlFor="categoria">
                    Categoría <span className="req">*</span>
                </label>
                <input 
                    className="form-input"
                    type="text" 
                    id="categoria" 
                    name="categoria" 
                    placeholder="ej. Memoria RAM, Procesador, GPU" 
                    value={categoria} 
                    onChange={cambio} 
                />
            </div>
            <div className="form-field">
                <label className="form-label" htmlFor="marca">
                    Marca / Fabricante <span className="req">*</span>
                </label>
                <input 
                    className="form-input"
                    type="text" 
                    id="marca" 
                    name="marca" 
                    placeholder="ej. Corsair, Kingston, Intel, AMD" 
                    value={marca} 
                    onChange={cambio} 
                />
            </div>
            <div className="form-field">
                <label className="form-label" htmlFor="precio">
                    Precio Unitario ($) <span className="req">*</span>
                </label>
                <input 
                    className="form-input"
                    type="number" 
                    id="precio" 
                    name="precio" 
                    min="0" 
                    step="any" 
                    placeholder="ej. 85000" 
                    value={precio} 
                    onChange={cambio} 
                />
            </div>
            <div className="form-field">
                <label className="form-label" htmlFor="cantidad">
                    Stock Disponible <span className="req">*</span>
                </label>
                <input 
                    className="form-input"
                    type="number" 
                    id="cantidad" 
                    name="cantidad" 
                    min="0" 
                    step="1" 
                    placeholder="ej. 15" 
                    value={cantidad} 
                    onChange={cambio} 
                />
            </div>
            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {enEdicion ? 'Actualizar Componente' : 'Registrar Componente'}
                </button>
                {enEdicion && (
                    <button type="button" className="btn btn-secondary" onClick={cancelarEdicion}>
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    )
}