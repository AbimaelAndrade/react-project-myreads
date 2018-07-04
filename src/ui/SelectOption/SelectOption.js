import React from 'react'
import PropTypes from 'prop-types'

const SelectOption = ({ options, selected, onChange }) =>
    (
        <select onChange={(e) => onChange(e) } value={selected }>
            { options.map((option, index) => {
                return (
                    <option 
                        key={index}
                        value={option.value} 
                        disabled={ option.disabled }
                    >
                    {option.name}
                    </option>
                )

            })}
        </select>
    )

SelectOption.defaultProps = {
    selected: 'none'
}

SelectOption.propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SelectOption

