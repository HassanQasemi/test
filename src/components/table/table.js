import React from 'react';
import TableHeader from './header/tableHeader';
import TableBody from './body/tableBody';



function Table() {
    return (
        <table className="table">
            <TableHeader />
            <TableBody />
            
        </table>
    )
}

export default Table
