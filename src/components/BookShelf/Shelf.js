import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Shelf extends Component {
    
    render(){
        const { title, children } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                    { children }
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default Shelf