export const Table = ({ info, editarInfo, borrarInfo }) => {
    const eliminar = (id) => {
        var op = window.confirm('¿Esta seguro de eliminar el registro?')
        if(op){
            borrarInfo(id)
        }
    }
    return (
        <div className="table-responsive-wrapper">
            <table className="tech-table">
                <thead>
                    <tr>
                        <th>Componente</th>
                        <th>Categoría</th>
                        <th>Marca</th>
                        <th>Precio Unitario</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {info.length === 0 ? (
                        <tr>
                            <td colSpan={6} className="empty-table-state">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                                <p>No hay componentes registrados en el inventario del almacén.</p>
                            </td>
                        </tr>
                    ) : (
                        info.map((item) => {
                            const cant = Number(item.cantidad) || 0
                            const stockClass = cant <= 0 ? 'stock-empty' : cant <= 5 ? 'stock-low' : 'stock-high'
                            const stockLabel = cant <= 0 ? 'Sin Stock (0)' : cant <= 5 ? `Bajo (${cant})` : `Disponible (${cant})`

                            return (
                                <tr key={item.id}>
                                    <td>
                                        <div className="td-product-name">{item.nombre}</div>
                                    </td>
                                    <td>
                                        <span className="badge-tag">{item.categoria}</span>
                                    </td>
                                    <td>{item.marca}</td>
                                    <td>
                                        <span className="td-price">${Number(item.precio || 0).toLocaleString()}</span>
                                    </td>
                                    <td>
                                        <span className={`stock-indicator ${stockClass}`}>
                                            {stockLabel}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-btn-group">
                                            <button 
                                                type="button"
                                                className="btn-action btn-edit" 
                                                onClick={() => editarInfo(item)}
                                                title="Editar producto"
                                            >
                                                Editar
                                            </button>
                                            <button 
                                                type="button"
                                                className="btn-action btn-delete" 
                                                onClick={() => eliminar(item.id)}
                                                title="Eliminar producto"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
} 