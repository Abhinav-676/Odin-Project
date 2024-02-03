import SubmitButton from "../Buttons/SubmitButton"
import { person } from "../../../data/data"

function PracticeSection(props) {
    return (
        <section className="section container">
            <div className="box entry-form">
            <div className="block">
            <label className="label">Company name: </label>
            <input
                className="input"
                key="companyName" 
                defaultValue={person.practicalExperience.companyName} 
                type="text" 
                onChange={(e) => {person.practicalExperience.companyName = e.target.value}}/>
            </div>
            <div className="block">
            <label className="label">Position title: </label>
            <input 
                className="input"
                key="positionTitle" 
                defaultValue={person.practicalExperience.positionTitle} 
                type="text" 
                onChange={(e) => {person.practicalExperience.positionTitle = e.target.value}}/>
            </div>
            <div className="block">
            <label className="label">Responsibilities: </label>
            <textarea 
                className="textarea is-small"
                key="responisibilty" 
                defaultValue={person.practicalExperience.responsibilityBuffer} 
                onChange={(e) => {person.practicalExperience.responsibilityBuffer = e.target.value}}></textarea>
            </div>
            <div className="block">
            <label className="label">Joining Date: </label>
            <input 
                className="input"
                key="joiningDate" 
                defaultValue={person.practicalExperience.joiningDate} 
                type="date" 
                onChange={(e) => {person.practicalExperience.joiningDate = e.target.value}}/>
            </div>
            <div className="block">
            <label className="label">Leaving Date: </label>
            <input 
                className="input"
                key="leavingDate" 
                defaultValue={person.practicalExperience.leavingDate} 
                type="date" 
                onChange={(e) => {person.practicalExperience.leavingDate= e.target.value}}/>
            </div>
            <div className="block">
            <SubmitButton CurrentSection={props.CurrentSection} sectionSetter={props.sectionSetter} />
            </div>
        </div>
        </section>
        
    )
}

export default PracticeSection