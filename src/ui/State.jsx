import React from 'react'

const colors = {
    purple: { bg: 'bg-purple', text: 'text-purple' , color:'border-b-purple'},
    pink: { bg: 'bg-pink', text: 'text-pink', color:'border-b-pink' },
    green: { bg: 'bg-green', text: 'text-green', color:'border-b-green' }
}


function State({ label, value, img , color}) {
    console.log(colors[color].color);
    return (
        <div className={`flex items-center gap-4 bg-secondary-0 p-2 rounded-lg border-b-4 shadow-2xl shadow-secondary-0 ${colors[color].color}`}>
            <div className={`w-24 h-24 rounded-full  p-5 flex items-center justify-center ${colors[color].bg}`}>
                <img src={`/images/${img}`} alt={value} />
            </div>
            <div>
                <h4 className={`font-bold ${colors[color].text} text-[2rem]`}>{value}</h4>
                <h2 className={`font-bold text-[1.2rem] ${colors[color].text} opacity-60`}>{label}</h2>
            </div>
        </div>
    )
}

export default State
