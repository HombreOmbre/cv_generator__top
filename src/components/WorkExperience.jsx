import format from 'date-fns/format';
import '../styles/WorkExperience.scss'

export default function WorkExperience({workExp}) {
    return (
        <div className='work-experience'>
            <div className='work-experience__title'>
               <img className='work-experience__title__icon' src='https://img.icons8.com/?size=100&id=2333&format=png&color=000000' /> Work Experience:
            </div>
            <div className='work-experience__content'>
                {
                    workExp.length > 0 ? workExp.map((job) => {
                        return (
                            <div className='work-experience__content__box' key={job.id}>
                                <div className='work-experience__content__box__job-position'>
                                    {job.title}
                                </div>
                                <div className='work-experience__content__box__company-name'>
                                    {job.companyName}
                                </div>
                                <div className='work-experience__content__box__location'>
                                    <span>Location: </span>{job.location}
                                </div>
                                <div className='work-experience__content__box__start-end-date'>
                                    <div className='work-experience__content__box__start-end-date__item'>
                                        <span>Start date: </span>{job.startDate !== '' ? format(job.startDate, 'dd-MM-yyyy') : null}
                                    </div>
                                    <div className='work-experience__content__box__start-end-date__item'>
                                        <span>End date: </span>
                                            {
                                                job.endDate === '' && job.startDate === '' ?
                                                                                        '' :
                                                                        job.endDate !== '' ?
                                                         format(job.endDate, 'dd-MM-yyyy') :
                                                                                 'Present'
                                            }
                                    </div>
                                </div>
                                <div className='work-experience__content__box__job-desc'>
                                    <h4 className='work-experience__content__box__job-desc__title'>Description:</h4>
                                    <div className='work-experience__content__box__job-desc__desc'>
                                        {job.jobDesc}
                                    </div>
                                </div>
                            </div>
                        );
                    }) : null
                }
            </div>
        </div>
    );
}