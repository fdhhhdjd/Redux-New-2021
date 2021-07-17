import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/reducers/TodoSlice'
const TodoForm = () => {
    const [title,setTitle]=useState('')
    const changTitle=(e)=>{
        setTitle(e.target.value)
    }
    //khai bao dispatch
    const dispatch=useDispatch()
    const Onsubmit=(e)=>{
        e.preventDefault()
        //day action di
        dispatch(addTodo(title))
        setTitle('')
    }
    return (
        <div>
            <form action="" onSubmit={Onsubmit}>
                <input type="text" value={title} onChange={changTitle}/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TodoForm
