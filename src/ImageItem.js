import React, { Component } from 'react'

export default class ImageItem extends Component {
    render () {
        return <li> 
            <h2>{this.props.animal.title}</h2>
            <div>
                <img
                    alt={this.props.animal.title}
                    src={this.props.animal.url}/>
            </div>
            <div className='description'>
                <p>{this.props.animal.description}</p>
                <p>Horn Count: {this.props.animal.horns}</p>
            </div>
        </li>
    }
};