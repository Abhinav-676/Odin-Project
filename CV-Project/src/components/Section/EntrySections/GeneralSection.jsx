import SubmitButton from "../Buttons/SubmitButton"
import { person } from "../../../data/data"

function GeneraleSection(props) {
    return (
        
        <section className="section container">
            <div className="box entry-form">
                <div className="field">
                    <label className="label">Name: </label>
                    <div className="control">
                        <input className="input" key="personName" 
                        defaultValue={person.generalInformation.personName} 
                        type="text" 
                        onChange={(e) => {person.generalInformation.personName = e.target.value}}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email: </label>
                    <div className="control">
                        <input className="input" key="email" 
                        defaultValue={person.generalInformation.email} 
                        type="text" 
                        onChange={(e) => {person.generalInformation.email = e.target.value}}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Phone Number: </label>
                    <div className="control">
                        <input className="input" key="phoneNumber" 
                        defaultValue={person.generalInformation.phoneNumber} 
                        type="text" 
                        onChange={(e) => {person.generalInformation.phoneNumber = e.target.value}}/>
                    </div>
                </div>
                <div className="control">
                    <SubmitButton CurrentSection={props.CurrentSection} sectionSetter={props.sectionSetter} />
                </div>
            </div>
        </section>
    )
}

export default GeneraleSection