import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function Loader({width = 80 , height =80}) {
    return (
        <ThreeDots
            height={height}
            width={width}
            color="rgb(var(--color-primary-800))"
            radius="9"
            wrapperClass='flex items-center justify-center'
        />
    )
}

export default Loader
