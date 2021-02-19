import React from 'react'

export default function UserLanding(props) {
    return (
        <div>
            <h1 style={{color: 'white'}}>    USERLANDING</h1>
            <button onClick={props.signOut}>SIGN OUT</button>
        </div>
    )
}
