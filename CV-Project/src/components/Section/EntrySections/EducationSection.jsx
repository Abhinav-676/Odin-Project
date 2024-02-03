import { person } from "../../../data/data"
import SubmitButton from "../Buttons/SubmitButton"

function EducationSection(props) {
    return (
        <section className="section container">
            <div className="box entry-form">
            <div className="block">
            <label className="label">School name: </label>
            <input className="input" key="schoolName" 
            defaultValue={person.educationalExperience.schoolName} 
            type="text" 
            onChange={(e) => {person.educationalExperience.schoolName = e.target.value}}/>
            </div>
            <div>
            <label className="label">Feild of study: </label>
            <input className="input" key="fieldOfStudy" 
            defaultValue={person.educationalExperience.fieldOfStudy}  
            type="text" 
            onChange={(e) => {person.educationalExperience.fieldOfStudy = e.target.value}}/>
            </div>
            <div className="block">
            <label className="label">Date of passing: </label>
            <input className="input" key="DOP" 
            type="date" 
            defaultValue={person.educationalExperience.dateOfStudy} 
            onChange={(e) => {person.educationalExperience.dateOfStudy = e.target.value}}/>
            </div>
            <div className="block">
            <SubmitButton CurrentSection={props.CurrentSection} sectionSetter={props.sectionSetter} />
            </div>
        </div>
        </section>
    )
}

export default EducationSection