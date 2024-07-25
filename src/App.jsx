import Preview from "./components/Preview.jsx";
import EditComponent from "./components/EditComponent.jsx";
import { useState } from "react";
import './styles/App.scss';
import { v4 as uuidv4 } from 'uuid';
import HeaderComponent from "./components/HeaderComponent.jsx";


export default function App() {
    const initialPersonalInfo = {
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
    };
    const initialEduExp = [
        {
            schoolName: '',
            schoolDegree: '',
            schoolMajor: '',
            startDate: '',
            endDate: '',
            optDesc: '',
            id: uuidv4(),
        },
    ];

    const initialWorkExp = [
        {
            companyName: '',
            location: '',
            title: '',
            startDate: '',
            endDate: '',
            jobDesc: '',
            id: uuidv4(),
        },
    ];

    const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
    const [studyExp, setStudyExp] = useState(initialEduExp);
    const [workExp, setWorkExp] = useState(initialWorkExp);

    const [tmpPersonalInfo, setTmpPersonalInfo] = useState(null);
    const [tmpEduExp, setTmpEduExp] = useState(null);
    const [tmpWorkExp, setTmpWorkExp] = useState(null);

    const [openTab, setOpenTab] = useState([false, false, false]);

    const saveAllData = () => {
        setPersonalInfo(tmpPersonalInfo === null ? personalInfo : tmpPersonalInfo);
        setStudyExp(tmpEduExp === null ? studyExp : tmpEduExp);
        setWorkExp(tmpWorkExp === null ? workExp : tmpWorkExp);
        setTmpPersonalInfo(null);
        setTmpEduExp(null);
        setTmpWorkExp(null);
    }

    const resetAllData = () => {
        setPersonalInfo(initialPersonalInfo);
        setStudyExp(initialEduExp);
        setWorkExp(initialWorkExp);
        setTmpPersonalInfo(null);
        setTmpEduExp(null);
        setTmpWorkExp(null);
    }

    return (
            <div className="main-container">
                <HeaderComponent />
                <div className="main-container__content">
                    <EditComponent
                        personalInfo={tmpPersonalInfo === null ? personalInfo : tmpPersonalInfo}
                        studyExp={tmpEduExp === null ? studyExp : tmpEduExp}
                        workExp={tmpWorkExp === null ? workExp : tmpWorkExp}
                        resetAllData={resetAllData}
                        saveAllData={saveAllData}
                        setTmpPersonalInfo={setTmpPersonalInfo}
                        setTmpEduExp={setTmpEduExp}
                        setTmpWorkExp={setTmpWorkExp}
                        openTab={openTab}
                        setOpenTab={setOpenTab}
                    />
                    <Preview
                        personalInfo={personalInfo}
                        studyExp={studyExp}
                        workExp={workExp}
                    />
                </div>
            </div>
    );
}
