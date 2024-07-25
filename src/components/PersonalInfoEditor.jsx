import InputComponent from "./InputComponent.jsx";
import '../styles/PersonalInfoEditor.scss';

export default function PersonalInfoEditor({personalInfo, setTmpPersonalInfo, openTab, setOpenTab}) {
    const handleClick = () => {
        let tmpOpenTab = [...openTab];
        let isOpen = !tmpOpenTab[0];
        tmpOpenTab[0] = isOpen;
        tmpOpenTab[1] = false;
        tmpOpenTab[2] = false;
        setOpenTab(tmpOpenTab);
    }

    const handleInputChange = (fieldName, value) => {
        setTmpPersonalInfo(() => {
            return {
                ...personalInfo,
                [fieldName]: value.trim()
            }
        });
    };

    const handleLinkChange = (index, value) => {
        setTmpPersonalInfo(() => {
            let tmpLinksArr = [...personalInfo.smLinks];
            tmpLinksArr.splice(index, 1, value.trim());

            return {...personalInfo, smLinks: tmpLinksArr};
        });
    };

    return (
        <div className="personal-info-editor-container">
            <div className="personal-info-editor-container__header">
                <div className="personal-info-editor-container__header__title">
                    Personal Information
                </div>
                <button className="personal-info-editor-container__header__btn" onClick={handleClick}>
                    {openTab[0] ? '▲' : '▼'}
                </button>
            </div>
            <div className={openTab[0] ? "personal-info-editor-container__body__active" : "personal-info-editor-container__body"}>
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Name'}
                    inputType={'text'}
                    placeholder={'Name'}
                    inputId={'name'}
                    value={personalInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Surname'}
                    inputType={'text'}
                    placeholder={'Surname'}
                    inputId={'surname'}
                    value={personalInfo.surname}
                    onChange={(e) => handleInputChange('surname', e.target.value)}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Job Title'}
                    inputType={'text'}
                    placeholder={'Job Title'}
                    inputId={'jobTitle'}
                    value={personalInfo.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Location'}
                    inputType={'text'}
                    placeholder={'Location'}
                    inputId={'location'}
                    value={personalInfo.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Email'}
                    inputType={'email'}
                    placeholder={'Email'}
                    inputId={'email'}
                    value={personalInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                />
                <InputComponent
                    nameOfClass={'personal-info-editor-container__body'}
                    labelTxt={'Phone Number'}
                    inputType={'tel'}
                    placeholder={'Phone Number'}
                    inputId={'phoneNumber'}
                    value={personalInfo.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
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
                            onChange={(e) => handleLinkChange('smLink', e.target.value)}
                        />
                    )
                })}
            </div>
        </div>
    );
}