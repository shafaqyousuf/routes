import React from 'react'

const Table = ({ title, col, dataSource }) => {
    return (
        <div>
            <h1>{title}</h1>
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        {col && Array.isArray(col) && col.length > 0 ? col.map((x, i) => <th key={i}>{x.displayName}</th>) : null}
                    </tr>
                </thead>
                <tbody>
                    {dataSource && Array.isArray(dataSource) && dataSource.length > 0 ? dataSource.map((x, i) => (
                        <tr key={i}>
                            {col.map((e, y) => (<td key={y}>{x[e.key]}</td>)
                        )}</tr>
                    )) : null}
                </tbody>
            </table>
        </div>
    )
}
export default Table;
