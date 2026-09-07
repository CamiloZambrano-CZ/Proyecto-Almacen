import { useEffect, useState } from "react"
import { Form } from "./components/form"
import { Table } from "./components/table"
import { Resumen } from "./components/resumen"
import {
    actualizarProducto,
    crearProducto,
    eliminarProducto,
    suscribirProductos,
} from "./firebase/productosService"

const inicial = {
    nombre: "",
    categoria: "",
    marca: "",
    precio: "",
    cantidad: "",
}

export const FormApp = () => {
    const [info, setInfo] = useState([])
    const [cargando, setCargando] = useState(true)
    const [productoEditando, setProductoEditando] = useState(null)

    useEffect(() => {
        const unsubscribe = suscribirProductos((productos) => {
            setInfo(productos)
            setCargando(false)
        })
        return () => unsubscribe()
    }, [])

    const guardarInfo = async (valores) => {
        if (productoEditando) {
            await actualizarProducto(productoEditando.id, valores)
            setProductoEditando(null)
        } else {
            await crearProducto(valores)
        }
    }

    const editarInfo = (producto) => setProductoEditando(producto)
    const cancelarEdicion = () => setProductoEditando(null)
    const borrarInfo = async (id) => {
        await eliminarProducto(id)
        if (productoEditando?.id === id) setProductoEditando(null)
    }

    return (
        <div className="app-container">
            {/* Header / Barra Principal */}
            <header className="app-header">
                <div className="header-brand">
                    <span className="brand-badge">TechStore Inventory</span>
                    <div className="header-brand-title">
                        <svg className="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        <h1>Almacén de Componentes para Computadores</h1>
                    </div>
                </div>
                <div className="header-status">
                    <span className="status-dot"></span>
                    <span>Firestore Cloud Conectado</span>
                </div>
            </header>

            {/* Panel de Métricas / Resumen de Inventario */}
            <Resumen info={info} />

            {/* Área Principal de Trabajo (Formulario + Tabla de Inventario) */}
            <div className="main-layout">
                {/* Panel de Registro y Edición */}
                <aside className="panel">
                    <div className="panel-header">
                        <h2 className="panel-title">
                            {productoEditando ? "Editar Componente" : "Nuevo Componente"}
                        </h2>
                        <span className="panel-badge">
                            {productoEditando ? "ID: " + productoEditando.id.slice(0, 5) + "..." : "Entrada de Stock"}
                        </span>
                    </div>
                    <div className="panel-body">
                        <Form
                            key={productoEditando?.id ?? "nuevo"}
                            inicial={productoEditando ?? inicial}
                            guardarInfo={guardarInfo}
                            enEdicion={Boolean(productoEditando)}
                            cancelarEdicion={cancelarEdicion}
                        />
                    </div>
                </aside>

                {/* Panel del Listado de Productos */}
                <main className="panel">
                    <div className="panel-header">
                        <h2 className="panel-title">Listado de Inventario</h2>
                        <span className="panel-badge">{info.length} ítems en almacén</span>
                    </div>
                    <div className="panel-body">
                        {cargando ? (
                            <div className="loading-state">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <p>Sincronizando inventario con la nube...</p>
                            </div>
                        ) : (
                            <Table info={info} editarInfo={editarInfo} borrarInfo={borrarInfo} />
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}