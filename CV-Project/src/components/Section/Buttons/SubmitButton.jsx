import { section } from "../Section"


function SubmitButton(props) {
    return (
        <button className="button is-primary" type="button" onClick={()=> {handleSubmit(props.CurrentSection, props.sectionSetter)}}>Submit</button>
    )
}

function handleSubmit(CurrentSection, setCurrentSection) {
    setCurrentSection(() => {return section.getNextSection(CurrentSection)})
}


export default SubmitButton