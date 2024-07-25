import { useState} from "react";
import { format } from "date-fns";
import InputComponent from "./InputComponent.jsx";
import '../styles/ExpEditor.scss';
import ButtonComponent from "./ButtonComponent.jsx";
import {v4 as uuidv4} from "uuid";

export default function WorkExpEditor({workExp, setTmpWorkExp}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const removeExperience = (e) => {
        let tmpWorkExp = [...workExp];
        tmpWorkExp.splice(+e.target.dataset.index, 1);
        setTmpWorkExp(tmpWorkExp);
    }

    const addNewWorkExp = () => {
        let tmpWorkExp = [...workExp];
        tmpWorkExp.push(
            {
                companyName: '',
                location: '',
                title: '',
                startDate: '',
                endDate: '',
                jobDesc: '',
                id: uuidv4(),
            }
        );
        setTmpWorkExp(tmpWorkExp);
    }


    return (
        <div className='work-exp-editor-container'>
            <div className="work-exp-editor-container__header">
                <div className="work-exp-editor-container__header__title">
                    Work Information
                </div>
                <button className="work-exp-editor-container__header__btn" onClick={handleClick}>
                    {isOpen ? '▲' : '▼'}
                </button>
            </div>
            <div className={isOpen ? "work-exp-editor-container__body__active" : "work-exp-editor-container__body"}>
                {workExp.map((workInfo, index) => {
                    return (
                        <div className='work-exp-editor-container__body__exp-box' key={workInfo.id}>
                            {
                                workExp.length > 1 ?
                                    <div className='work-exp-editor-container__body__exp-box__delete-btn-box'>
                                        <button
                                            className="work-exp-editor-container__body__exp-box__delete-btn-box__btn"
                                            onClick={removeExperience} data-index={index}>
                                            X
                                        </button>
                                    </div> :
                                    null
                            }

                            <InputComponent
                                nameOfClass={'work-exp-editor-container__body__exp-box'}
                                labelTxt={'Title'}
                                inputType={'text'}
                                placeholder={'Title'}
                                inputId={'title' + index}
                                value={workInfo.title}
                                onChange={(e) => {
                                    let tmpWorkExp = [...workExp];
                                    let tmpIndexedExp = {...tmpWorkExp[index], title: e.target.value.trim()};
                                    tmpWorkExp.splice(index, 1, tmpIndexedExp);
                                    setTmpWorkExp(tmpWorkExp)
                                }}
                            />
                            <InputComponent
                                nameOfClass={'work-exp-editor-container__body__exp-box'}
                                labelTxt={'Company Name'}
                                inputType={'text'}
                                placeholder={'Company Name'}
                                inputId={'companyName' + index}
                                value={workInfo.companyName}
                                onChange={(e) => {
                                    let tmpWorkExp = [...workExp];
                                    let tmpIndexedExp = {...tmpWorkExp[index], companyName: e.target.value.trim()};
                                    tmpWorkExp.splice(index, 1, tmpIndexedExp);
                                    setTmpWorkExp(tmpWorkExp);
                                }}
                            />
                            <InputComponent
                                nameOfClass={'work-exp-editor-container__body__exp-box'}
                                labelTxt={'Location'}
                                inputType={'text'}
                                placeholder={'Location'}
                                inputId={'location' + index}
                                value={workInfo.location}
                                onChange={(e) => {
                                    let tmpWorkExp = [...workExp];
                                    let tmpIndexedExp = {...tmpWorkExp[index], location: e.target.value.trim()};
                                    tmpWorkExp.splice(index, 1, tmpIndexedExp);
                                    setTmpWorkExp(tmpWorkExp)
                                }}
                            />
                            <div className="work-exp-editor-container__body__exp-box__time-range">
                                <InputComponent
                                    nameOfClass={'work-exp-editor-container__body__exp-box__time-range'}
                                    labelTxt={'Start Date'}
                                    inputType={'date'}
                                    placeholder={'Start Date'}
                                    inputId={'startDate' + index}
                                    value={workInfo.startDate !== '' ? format(workInfo.startDate, 'yyyy-MM-dd') : null}
                                    onChange={(e) => {
                                        let tmpWorkExp = [...workExp];
                                        let tmpIndexedExp = {...tmpWorkExp[index], startDate: e.target.value !== '' ? new Date(e.target.value) : ''};
                                        tmpWorkExp.splice(index, 1, tmpIndexedExp);
                                        setTmpWorkExp(tmpWorkExp)
                                    }}
                                />
                                <InputComponent
                                    nameOfClass={'work-exp-editor-container__body__exp-box__time-range'}
                                    labelTxt={'End Date'}
                                    inputType={'date'}
                                    placeholder={'End Date'}
                                    inputId={'endDate' + index}
                                    value={workInfo.endDate !== '' ? format(workInfo.endDate, 'yyyy-MM-dd') : null}
                                    onChange={(e) => {
                                        let tmpWorkExp = [...workExp];
                                        let tmpIndexedExp = {...tmpWorkExp[index], endDate: e.target.value !== '' ? new Date(e.target.value) : ''};
                                        tmpWorkExp.splice(index, 1, tmpIndexedExp);
                                        setTmpWorkExp(tmpWorkExp)
                                    }}
                                />
                            </div>
                            <label htmlFor={'optDesc' + index}
                                   className='work-exp-editor-container__body__exp-box__label'>
                                Optional Description:
                                <textarea
                                    className='work-exp-editor-container__body__exp-box__label__input'
                                    maxLength={350}
                                    id={'optDesc' + index}
                                    name={'optDesc' + index}
                                    placeholder={'Optional Description...'}
                                    value={workInfo.jobDesc}
                                    onChange={(e) => {
                                        let tmpWorkExp = [...workExp];
                                        let tmpIndexedExp = {...tmpWorkExp[index], jobDesc: e.target.value.trim()};
                                        tmpWorkExp.splice(index, 1, tmpIndexedExp);
                                        setTmpWorkExp(tmpWorkExp)
                                    }}
                                ></textarea>
                            </label>
                        </div>
                    )
                })}
                <div className="work-exp-editor-container__body__add-container">
                    <ButtonComponent
                        nameOfClass="work-exp-editor-container__body__add-container"
                        propsFunc={addNewWorkExp}
                        btnTxt="Add new experience"
                    />
                </div>
            </div>
        </div>
    );
}