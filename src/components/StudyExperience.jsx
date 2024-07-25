import {format} from "date-fns";
import '../styles/StudyExperience.scss';

export default function StudyExperience({studyExp}) {
    return (
        <div className="study-experience">
            <div className='study-experience__title'>
                <img className='study-experience__title__icon' src='https://img.icons8.com/?size=100&id=SOSsf64BLnDT&format=png&color=000000' /> Education:
            </div>
            {studyExp.map((item) => {
                return (
                    <div className='study-experience__box' key={item.id}>
                           <div className='study-experience__box__school-name'>
                               {item.schoolName}
                           </div>
                            <div className='study-experience__box__degree-major'>
                                <div className='study-experience__box__degree-major__item'>
                                    <span>Degree: </span>{item.schoolDegree}
                                </div>
                                <div className='study-experience__box__degree-major__item'>
                                    <span>Major: </span>{item.schoolMajor}
                                </div>
                            </div>
                        <div className='study-experience__box__start-end-date'>
                            <div className='study-experience__box__start-end-date__item'>
                                <span>Start date: </span>{item.startDate !== '' ? format(item.startDate, 'dd-MM-yyyy') : ''}
                            </div>
                            <div className='study-experience__box__start-end-date__item'>
                                <span>End date: </span>
                                {
                                    item.endDate === '' && item.startDate === '' ?
                                                                              '' :
                                                             item.endDate !== '' ?
                                     format(item.endDate, 'dd-MM-yyyy') :
                                                                        'Present'
                                }
                            </div>
                        </div>
                    {
                        item.optDesc !== '' ?
                            <div className='study-experience__box__opt-desc'>
                                <h4 className='study-experience__box__opt-desc__title'>Description:</h4>
                                <div className='study-experience__box__opt-desc__desc'>
                                    {item.optDesc}
                                </div>
                            </div> :
                            null
                    }
                    </div>
                );
            })}
        </div>
    );
}