import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h6>{props.title}</h6>
            </div>
            <div className="card-body">
                <img src={props.imageUrl} className="card-img-top" alt={props.altImage} />
            </div>
            <div className="card-footer">
                <p className="text-muted">{props.imageDesc}</p>
            </div>
        </div>
    )
}
