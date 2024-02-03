import EditButton from "../Buttons/EditButton"
import { person } from "../../../data/data"

function ReviewSection(props) {
    person.practicalExperience.responsibilities= person.practicalExperience.responsibilityBuffer.split(" ")
    return (
        <section className="section container">
        <div className="content">
        <h1>Review Section</h1>
        <p><strong>Name: </strong>{person.generalInformation.personName}</p>
        <p><strong>Email: </strong>{person.generalInformation.email}</p>
        <p><strong>Phone Number: </strong>{person.generalInformation.phoneNumber}</p>
        <p><strong>School Name: </strong>{person.educationalExperience.schoolName}</p>
        <p><strong>Field of study: </strong>{person.educationalExperience.fieldOfStudy}</p>
        <p><strong>Date of Study: </strong>{person.educationalExperience.dateOfStudy}</p>
        <p><strong>Company Name: </strong>{person.practicalExperience.companyName}</p>
        <p><strong>Position Title: </strong>{person.practicalExperience.positionTitle}</p>
        <p><strong>Responsibilities: </strong>{person.practicalExperience.responsibilities.join(", ")}</p>
        <p><strong>Joining Date: </strong>{person.practicalExperience.joiningDate}</p>
        <p><strong>Leaving Date: </strong>{person.practicalExperience.leavingDate}</p>
        <div className="block">
        <EditButton sectionSetter={props.sectionSetter}/>
        </div>
        </div>
        </section>
    )
}

export default ReviewSection