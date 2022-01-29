import {useState, useContext} from 'react'
import { MyContext } from './App'
import './AddingTag.css'
const AddingTag = ({ student }) => {
    const {tags, setTags} = useContext(MyContext)
    const [tagsInput, setTagsInput] = useState("")

    const onEnter = (e) => {
        if (e.code === 'Enter' && tagsInput) {
            setTags(prevState => {
                const newTags = prevState[student.id] ? [...prevState[student.id], tagsInput] :  [ tagsInput]
                return {
                    ...prevState,
                    [student.id]: newTags,
                }
            });
            setTagsInput('');
        }
    }
    
    return(
        <>  
            {tags?.[student.id]?.map((tag, i) => <p><span className='added-tag' key={`${tag}-${i}`}>{tag}</span></p>)}
            <div className='tag-search'>
                <input 
                    type="text"
                    placeholder='Add tag'
                    value={tagsInput} 
                    onChange={e => setTagsInput(e.currentTarget.value)}
                    onKeyPress={onEnter}
                />
            </div>
           
        </>
    )
}

export default AddingTag