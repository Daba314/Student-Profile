import React from 'react';
import EachPost from './EachPost';


const ListPosts = ({students}) =>(
    <div>
        {students.map((student) => (
            <EachPost key={student.id} student={student}/>
        ))}       
    </div>
)
export default ListPosts