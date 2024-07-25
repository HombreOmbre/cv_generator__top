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
        setTmpWorkExp,
        openTab,
        setOpenTab
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
                openTab={openTab}
                setOpenTab={setOpenTab}
            />
            <StudyExpEditor
                studyExp={studyExp}
                setTmpEduExp={setTmpEduExp}
                openTab={openTab}
                setOpenTab={setOpenTab}
            />
            <WorkExpEditor
                workExp={workExp}
                setTmpWorkExp={setTmpWorkExp}
                openTab={openTab}
                setOpenTab={setOpenTab}
            />
        </div>
    );
}
