import EducationSection from './EntrySections/EducationSection'
import GeneraleSection from './EntrySections/GeneralSection'
import PracticeSection from './EntrySections/PracticeSection'
import ReviewSection from './ReviewSection/ReviewSection'

import { useState } from "react"

const section = {
    names: [GeneraleSection, EducationSection, PracticeSection, ReviewSection],

    getInitialSection() {
        return this.names[0]
    },

    getNextSection(CurrentSection) {
        let currentIndex = this.names.indexOf(CurrentSection)
        let nextIndex = currentIndex + 1
        return this.names[nextIndex]
    },
}

function Section() {
    const [CurrentSection, sectionSetter] = useState(() => {return section.getInitialSection()})

   return (
    <CurrentSection CurrentSection={CurrentSection} sectionSetter={sectionSetter} />
   )
}

export default Section
export {section}