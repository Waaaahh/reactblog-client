import React, { useState } from 'react'
import axios from 'axios'

const PostCreate = () => {
    const [title, setTitle] = useState('')
    const onSubmit= async (event) => {
        event.preventDefault()

        await axios.post('http://localhost:4000/posts', {
            title
        })

        setTitle('')

        
    }
    return <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Title</label>
                <input className='form-control' />
            </div>
            <button className='btn btn-primary' type='submit'>submit</button>
        </form>
    </div>;
}

export default PostCreate