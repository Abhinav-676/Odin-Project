import { section } from "../Section"

function EditButton(props) {
    return (
        <button className="button is-link" type="button" onClick={() => {
            props.sectionSetter(() => {return section.getInitialSection()})
        }}>Edit</button>
    )
}

export default EditButton