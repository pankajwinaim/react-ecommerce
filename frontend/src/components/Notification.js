import React from 'react'

export default function Notification(props) {
    const { msg } = props;
    return (
        <div class="alert alert-success fs-2" style={{ position: 'absolute', right: '10px', top: '10px', width: '50%' }} role="alert">
            <h4>{msg}</h4>
        </div>
    )
}
