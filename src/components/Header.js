import Button from './Button'

const Header = ({ title, onToggleAddTask, showAddTask }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red': 'green'} text={showAddTask ? 'Close' : 'Add'} onToggleAddTask={onToggleAddTask}/>
        </header>
    )
}

export default Header
