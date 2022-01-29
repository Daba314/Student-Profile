import React, {useState, useEffect, useMemo, createContext} from 'react'
import ListPosts from './ListPosts'
import SearchBarName from './SearchBarName'
import SearchBarTag from './SearchBarTag'
import { getStudents } from '../requests/students'
import { checkIfStringMeetSearchInput } from './utils/searchUtils';

export const MyContext = createContext()
const App = () =>{
   
    const [students, setStudents] = useState([])
    const [tags, setTags] = useState({})

    const [searchByNameInput, setSearchByNameInput] = useState("")
    const [searchByTagInput, setSearchByTagInput] = useState("")

    const filteredStudents = useMemo(() => {
        return students.filter(student => checkIfStringMeetSearchInput(`${student.firstName} ${student.lastName}`, searchByNameInput))
    }, [students, searchByNameInput]);

    const filteredTags = useMemo(() => {
        return filteredStudents.filter(student => {
            if (!searchByTagInput) return true;
            const id = student.id;
            const studentTags = tags[id];
            if (!studentTags) return false;

            return studentTags.some(tag => checkIfStringMeetSearchInput(tag, searchByTagInput))
        })
    }, [filteredStudents, searchByTagInput,tags]);

    console.log(tags)
   

    useEffect(() => {
        (async () => {
            try {
                const { students } = await getStudents();
                setStudents(students)
            } catch {
                console.log('Error getting students')
            }
        })()
    }, [])
    
    const sortByName = (value) =>{
        setSearchByNameInput(value)
    }

    const sortByTag = (value) =>{
        setSearchByTagInput(value)
    }


    return(
        <MyContext.Provider value = {{tags, setTags}}>
           <SearchBarName sortByName = {sortByName}/>
           <SearchBarTag sortByTag={sortByTag}/>
            {!filteredStudents && <ListPosts students = {students}/>}
           {!!filteredStudents  && <ListPosts students = {filteredTags}/>}
        </MyContext.Provider>
     
    )
}

export default App