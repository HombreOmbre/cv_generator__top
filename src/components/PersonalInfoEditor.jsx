import {useState} from "react";
import InputComponent from "./InputComponent.jsx";
import '../styles/PersonalInfoEditor.scss';

export default function PersonalInfoEditor({personalInfo, setTmpPersonalInfo}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="personal-info-editor-container">
            <div className="personal-info-editor-container__header">
                <div className="personal-info-editor-container__header__title">
                    Personal Information
                </div>
                <button className="personal-info-editor-container__header__btn" onClick={handleClick}>
                    {isOpen ? '▲' : '▼'}
                </button>
            </div>
            <div className={isOpen ? "personal-info-editor-container__body__active" : "personal-info-editor-container__body"}>
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Name'}
                    inputType={'text'}
                    placeholder={'Name'}
                    inputId={'name'}
                    value={personalInfo.name}
                    onChange={(e) => setTmpPersonalInfo({...personalInfo, name: e.target.value.trim()})}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Surname'}
                    inputType={'text'}
                    placeholder={'Surname'}
                    inputId={'surname'}
                    value={personalInfo.surname}
                    onChange={(e) => setTmpPersonalInfo({...personalInfo, surname: e.target.value.trim()})}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Job Title'}
                    inputType={'text'}
                    placeholder={'Job Title'}
                    inputId={'jobTitle'}
                    value={personalInfo.jobTitle}
                    onChange={(e) => setTmpPersonalInfo({...personalInfo, jobTitle: e.target.value.trim()})}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Location'}
                    inputType={'text'}
                    placeholder={'Location'}
                    inputId={'location'}
                    value={personalInfo.location}
                    onChange={(e) => setTmpPersonalInfo({...personalInfo, location: e.target.value.trim()})}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Email'}
                    inputType={'email'}
                    placeholder={'Email'}
                    inputId={'email'}
                    value={personalInfo.email}
                    onChange={(e) => setTmpPersonalInfo({...personalInfo, email: e.target.value.trim()})}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Phone Number'}
                    inputType={'tel'}
                    placeholder={'Phone Number'}
                    inputId={'phoneNumber'}
                    value={personalInfo.phoneNumber}
                    onChange={(e) => setTmpPersonalInfo({...personalInfo, phoneNumber: e.target.value.trim()})}
                />
                {personalInfo.smLinks.map((link, index) => {
                    let label;
                    let id;

                    switch (index) {
                        case 0 :
                            label = 'GitHub Link';
                            id = 'ghLink';
                        break;
                        case 1:
                            label = 'LinkedIn Link';
                            id = 'liLink';
                        break;
                        case 2 :
                            label = 'LeetCode Link';
                            id = 'lcLink';
                        break;
                        case 3 :
                            label = 'CodeWars Link';
                            id = 'cwLink';
                        break;
                    }

                    return (
                        <InputComponent
                            key = {index}
                            nameOfClass={'personal-info-editor-container__body'}
                            labelTxt={label}
                            inputType={'text'}
                            placeholder={label}
                            inputId={id}
                            value={personalInfo.smLinks[index]}
                            onChange={(e) => {
                                let tmpPersonalInfo = {...personalInfo};
                                let tmpLinksArr = [...tmpPersonalInfo.smLinks];
                                tmpLinksArr[index] = e.target.value.trim();
                                tmpPersonalInfo.smLinks = tmpLinksArr;
                                setTmpPersonalInfo(tmpPersonalInfo);
                            }}
                        />
                    )
                })}
            </div>
        </div>
    );
}