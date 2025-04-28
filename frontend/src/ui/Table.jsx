import React from 'react'

function Table({ children }) {
    return (
        <div className="bg-secondary-0 overflow-x-auto">
            <table>
                {children}
            </table>
        </div>
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
        <tr className="title-row">
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