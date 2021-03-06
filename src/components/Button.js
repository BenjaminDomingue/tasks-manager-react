import PropTypes from 'prop-types'

const Button = ({ color, text, onToggleAddTask }) => {
    return (
    <button
        onClick={onToggleAddTask}
        className='btn' 
        style={{ backgroundColor: color }}
    >
    {text}
    </button>)
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
