import React from 'react'
import { Link } from 'react-router-dom'

const Expired = () => {

    const errStyle ={
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: '45vh'
    }

    const red = {
        color: 'red'
    }

return (
    <div style={errStyle} >
    
        <div style={red} > Ooopss..  Go To <Link to='/'>Main Page</Link> </div>

    </div>
)
}

export default Expired