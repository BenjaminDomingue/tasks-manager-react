import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, SetText] = useState('')
    const [day, SetDay] = useState('')
    const [reminder, SetReminder] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        SetText('')
        SetDay('')
        SetReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(event) => SetText(event.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(event) => SetDay(event.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(event) => SetReminder(event.currentTarget.checked)}/>
            </div>

            <input className="btn btn-block" type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask
