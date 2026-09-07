export const Resumen = ({ info }) => {
    const totalProductos = info.length
    const totalStock = info.reduce((acc, item) => acc + (Number(item.cantidad) || 0), 0)
    const valorInventario = info.reduce((acc, item) => acc + ((Number(item.precio) || 0) * (Number(item.cantidad) || 0)), 0)

    return (
        <section className="resumen-section">
            <div className="resumen-grid">
                {/* Tarjeta 1: Total Productos */}
                <div className="stat-card stat-card-products">
                    <div className="stat-icon-wrapper">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Modelos Registrados</span>
                        <span className="stat-value">{totalProductos}</span>
                    </div>
                </div>

                {/* Tarjeta 2: Stock Total */}
                <div className="stat-card stat-card-stock">
                    <div className="stat-icon-wrapper">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Unidades en Stock</span>
                        <span className="stat-value">{totalStock.toLocaleString()}</span>
                    </div>
                </div>

                {/* Tarjeta 3: Valor Total Inventario */}
                <div className="stat-card stat-card-value">
                    <div className="stat-icon-wrapper">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Valor Total Estimado</span>
                        <span className="stat-value">${valorInventario.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
