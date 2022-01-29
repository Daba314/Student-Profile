import React, {useState} from 'react'
import AddingTag from './AddingTag';
import './EachPost.css'
import  {average}  from './utils/countAverage';

 const EachPost = ({student}) =>{

    const {pic, firstName,lastName, email, company,skill, grades} = student
    
    const [isModalOpen, setIsModalOpen] = useState(false);  

     return(
         <>
            <div className='post'>

                <div className='picture-container'>
                    <img src={pic} alt='Student' />
                </div>

                <div className='post-content'>
                    <h1>{firstName} {lastName}</h1>
                    <p>Email: {email}</p>
                    <p>Company: {company}</p>
                    <p>Skill: {skill}</p>
                    <p>Average: ${average(grades)}%</p>
                    {isModalOpen && grades.map((grade, testNumber) => <p key={testNumber}>Test {testNumber + 1}: {grade}</p>)}

                    <div className='addingTag'>
                        <AddingTag student={student} />
                    </div>
                </div>

                

                <div className='button-change'>
                    <button className="switch-grade-list" onClick={() => setIsModalOpen(!isModalOpen)}>
                        {isModalOpen ? '-' : '+'}
                    </button>
                </div>
                        
            </div>
         </>
     )
 }

 export default EachPost