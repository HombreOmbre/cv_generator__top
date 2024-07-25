import { format } from "date-fns";
import InputComponent from "./InputComponent.jsx";
import '../styles/ExpEditor.scss';
import ButtonComponent from "./ButtonComponent.jsx";
import {v4 as uuidv4} from "uuid";

export default function StudyExpEditor({studyExp, setTmpEduExp, openTab, setOpenTab}) {
    const handleClick = () => {
        let tmpOpenTab = [...openTab];
        let isOpen = !tmpOpenTab[1];
        tmpOpenTab[0] = false;
        tmpOpenTab[1] = isOpen;
        tmpOpenTab[2] = false;
        setOpenTab(tmpOpenTab);
    }

    const removeExperience = (e) => {
        let tmpStudyExp = [...studyExp];
        tmpStudyExp.splice(+e.target.dataset.index, 1);
        setTmpEduExp(tmpStudyExp);
    }

    const addNewEduExp = () => {
        let tmpStudyExp = [...studyExp];
        tmpStudyExp.push({
            schoolName: '',
            schoolDegree: '',
            schoolMajor: '',
            startDate: '',
            endDate: '',
            optDesc: '',
            id: uuidv4(),
        });
        setTmpEduExp(tmpStudyExp);
    }

    return (
        <div className='study-exp-editor-container'>
            <div className="study-exp-editor-container__header">
                <div className="study-exp-editor-container__header__title">
                    Education Information
                </div>
                <button className="study-exp-editor-container__header__btn" onClick={handleClick}>
                    {openTab[1] ? '▲' : '▼'}
                </button>
            </div>
            <div className={openTab[1] ? "study-exp-editor-container__body__active" : "study-exp-editor-container__body"}>
                {studyExp.map((eduInfo, index) => {
                    return (
                        <div className='study-exp-editor-container__body__exp-box' key={eduInfo.id}>
                            {
                                studyExp.length > 1 ?
                                    <div className='study-exp-editor-container__body__exp-box__delete-btn-box'>
                                        <button className="study-exp-editor-container__body__exp-box__delete-btn-box__btn"
                                                onClick={removeExperience} data-index={index}>
                                            X
                                        </button>
                                    </div> :
                                    null
                            }

                            <InputComponent
                                nameOfClass={'study-exp-editor-container__body__exp-box'}
                                labelTxt={'School Name'}
                                inputType={'text'}
                                placeholder={'School Name'}
                                inputId={'schoolName' + index}
                                value={eduInfo.schoolName}
                                onChange={(e) => {
                                    let tmpStudyExp = [...studyExp];
                                    let tmpIndexedExp = {...tmpStudyExp[index], schoolName: e.target.value.trim()};
                                    tmpStudyExp.splice(index, 1, tmpIndexedExp);
                                    setTmpEduExp(tmpStudyExp);
                                }}
                            />
                            <InputComponent
                                nameOfClass={'study-exp-editor-container__body__exp-box'}
                                labelTxt={'Degree'}
                                inputType={'text'}
                                placeholder={'Degree'}
                                inputId={'degree' + index}
                                value={eduInfo.schoolDegree}
                                onChange={(e) => {
                                    let tmpStudyExp = [...studyExp];
                                    let tmpIndexedExp = {...tmpStudyExp[index], schoolDegree: e.target.value.trim()};
                                    tmpStudyExp.splice(index, 1, tmpIndexedExp);
                                    setTmpEduExp(tmpStudyExp)
                                }}
                            />
                            <InputComponent
                                nameOfClass={'study-exp-editor-container__body__exp-box'}
                                labelTxt={'Major'}
                                inputType={'text'}
                                placeholder={'Major'}
                                inputId={'major' + index}
                                value={eduInfo.schoolMajor}
                                onChange={(e) => {
                                    let tmpStudyExp = [...studyExp];
                                    let tmpIndexedExp = {...tmpStudyExp[index], schoolMajor: e.target.value.trim()};
                                    tmpStudyExp.splice(index, 1, tmpIndexedExp);
                                    setTmpEduExp(tmpStudyExp)
                                }}
                            />
                            <div className="study-exp-editor-container__body__exp-box__time-range">
                                <InputComponent
                                    nameOfClass={'study-exp-editor-container__body__exp-box__time-range'}
                                    labelTxt={'Start Date'}
                                    inputType={'date'}
                                    placeholder={'Start Date'}
                                    inputId={'startDate' + index}
                                    value={eduInfo.startDate !== '' ? format(eduInfo.startDate, 'yyyy-MM-dd') : null}
                                    onChange={(e) => {
                                        let tmpStudyExp = [...studyExp];
                                        let tmpIndexedExp = {...tmpStudyExp[index], startDate: e.target.value !== '' ? new Date(e.target.value) : ''};
                                        tmpStudyExp.splice(index, 1, tmpIndexedExp);
                                        setTmpEduExp(tmpStudyExp)
                                    }}
                                />
                                <InputComponent
                                    nameOfClass={'study-exp-editor-container__body__exp-box__time-range'}
                                    labelTxt={'End Date'}
                                    inputType={'date'}
                                    placeholder={'End Date'}
                                    inputId={'endDate' + index}
                                    value={eduInfo.endDate !== '' ? format(eduInfo.endDate, 'yyyy-MM-dd') : null}
                                    onChange={(e) => {
                                        let tmpStudyExp = [...studyExp];
                                        let tmpIndexedExp = {...tmpStudyExp[index], endDate: e.target.value !== '' ? new Date(e.target.value) : ''};
                                        tmpStudyExp.splice(index, 1, tmpIndexedExp);
                                        setTmpEduExp(tmpStudyExp)
                                    }}
                                />
                            </div>
                            <label htmlFor={'optDesc' + index} className='study-exp-editor-container__body__exp-box__label'>
                                Optional Description:
                                <textarea
                                    className='study-exp-editor-container__body__exp-box__label__input'
                                    maxLength={350}
                                    id={'optDesc' + index}
                                    name={'optDesc' + index}
                                    placeholder={'Optional Description...'}
                                    value={eduInfo.optDesc}
                                    onChange={(e) => {
                                        let tmpStudyExp = [...studyExp];
                                        let tmpIndexedExp = {...tmpStudyExp[index], optDesc: e.target.value.trim()};
                                        tmpStudyExp.splice(index, 1, tmpIndexedExp);
                                        setTmpEduExp(tmpStudyExp)
                                    }}
                                ></textarea>
                            </label>
                        </div>
                    )
                })}
                <div className="study-exp-editor-container__body__add-container">
                    <ButtonComponent
                        nameOfClass="study-exp-editor-container__body__add-container"
                        propsFunc={addNewEduExp}
                        btnTxt="Add new experience"
                    />
                </div>
            </div>
        </div>
    );
}