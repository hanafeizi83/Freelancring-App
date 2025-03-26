import React from 'react'

function Table({ children }) {
    return (
        <table>
            {children}
        </table>
    )
}

export default Table

function TableBody({ children }) {
    return <tbody>
        {children}
    </tbody>
}

function TableHeader({ children }) {
    return <thead>
        <tr>
            {children}
        </tr>
    </thead>
}

function TableRow({ children }) {
    return <tr>
        {children}
    </tr>

}

Table.Body = TableBody;
Table.Header = TableHeader;
Table.Row = TableRow;