import '../styles/ManagerInformation.scss';
import PersonalInfoEditor from "./PersonalInfoEditor.jsx";
import StudyExpEditor from "./StudyExpEditor.jsx";
import WorkExpEditor from "./WorkExpEditor.jsx";
import OptionsComponent from "./OptionsComponent.jsx";

export default function EditComponent(
    {
        personalInfo,
        studyExp,
        workExp,
        resetAllData,
        saveAllData,
        setTmpPersonalInfo,
        setTmpEduExp,
        setTmpWorkExp
    }
) {
    return (
        <div className='manager-information'>
            <OptionsComponent
                resetAllData={resetAllData}
                saveAllData={saveAllData}
            />
            <PersonalInfoEditor
                personalInfo={personalInfo}
                setTmpPersonalInfo={setTmpPersonalInfo}
            />
            <StudyExpEditor
                studyExp={studyExp}
                setTmpEduExp={setTmpEduExp}
            />
            <WorkExpEditor
                workExp={workExp}
                setTmpWorkExp={setTmpWorkExp}
            />
        </div>
    );
}
