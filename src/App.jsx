import Preview from "./components/Preview.jsx";
import EditComponent from "./components/EditComponent.jsx";
import { useState } from "react";
import './styles/App.scss';
import { v4 as uuidv4 } from 'uuid';
import HeaderComponent from "./components/HeaderComponent.jsx";


export default function App() {
    const [personalInfo, setPersonalInfo] = useState(
        {
            name: '',
            surname: '',
            location: '',
            jobTitle: '',
            email: '',
            phoneNumber: '',
            smLinks: [
                '',
                '',
                '',
                '',
            ],
        }
    );

    const [studyExp, setStudyExp] = useState([
            {
                schoolName: '',
                schoolDegree: '',
                schoolMajor: '',
                startDate: '',
                endDate: '',
                optDesc: '',
                id: uuidv4(),
            },
        ]);

    const [workExp, setWorkExp] = useState( [
            {
                companyName: '',
                location: '',
                title: '',
                startDate: '',
                endDate: '',
                jobDesc: '',
                id: uuidv4(),
            },
    ]);

    const [tmpPersonalInfo, setTmpPersonalInfo] = useState(null);
    const [tmpEduExp, setTmpEduExp] = useState(null);
    const [tmpWorkExp, setTmpWorkExp] = useState(null);

    const saveAllData = () => {
        setPersonalInfo(tmpPersonalInfo === null ? personalInfo : tmpPersonalInfo);
        setStudyExp(tmpEduExp === null ? studyExp : tmpEduExp);
        setWorkExp(tmpWorkExp === null ? workExp : tmpWorkExp);
        setTmpPersonalInfo(null);
        setTmpEduExp(null);
        setTmpWorkExp(null);
    }

    const resetAllData = () => {
        setPersonalInfo({
            name: '',
            surname: '',
            location: '',
            jobTitle: '',
            email: '',
            phoneNumber: '',
            smLinks: [
                '',
                '',
                '',
                '',
            ]
        });
        setStudyExp([
            {
                schoolName: '',
                schoolDegree: '',
                schoolMajor: '',
                startDate: '',
                endDate: '',
                optDesc: '',
                id: uuidv4(),
            },
        ]);
        setWorkExp([{
            companyName: '',
            location: '',
            title: '',
            startDate: '',
            endDate: '',
            jobDesc: '',
            id: uuidv4(),
        }
        ]);
        setTmpPersonalInfo(null);
        setTmpEduExp(null);
        setTmpWorkExp(null);
    }

    return (
        <>
            <HeaderComponent />
            <div className="main-container">
                <EditComponent
                    personalInfo={tmpPersonalInfo === null ? personalInfo : tmpPersonalInfo}
                    studyExp={tmpEduExp === null ? studyExp : tmpEduExp}
                    workExp={tmpWorkExp === null ? workExp : tmpWorkExp}
                    resetAllData={resetAllData}
                    saveAllData={saveAllData}
                    setTmpPersonalInfo={setTmpPersonalInfo}
                    setTmpEduExp={setTmpEduExp}
                    setTmpWorkExp={setTmpWorkExp}
                />
                <Preview
                    personalInfo={personalInfo}
                    studyExp={studyExp}
                    workExp={workExp}
                />
            </div>
        </>
    );
}
