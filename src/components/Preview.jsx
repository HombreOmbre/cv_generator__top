import PersonalInformation from "./PersonalInformation.jsx";
import StudyExperience from "./StudyExperience.jsx";
import WorkExperience from "./WorkExperience.jsx";
import '../styles/Preview.scss';


export default function Preview({ personalInfo, studyExp, workExp }) {
    return (
        <div className="preview-container">
            <PersonalInformation personalInformation={personalInfo} />
            <StudyExperience studyExp={studyExp} />
            <WorkExperience workExp={workExp} />
        </div>
    );
}
