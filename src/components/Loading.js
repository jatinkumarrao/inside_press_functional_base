import React from 'react'
import load from './loader_image.gif'
const loading = () => {

    return (
        <div className="text-center">
            <img src={load} alt="loading" />
        </div >
    )

}
export default loading;
