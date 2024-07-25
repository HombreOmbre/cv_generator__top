import '../styles/PersonalInformation.scss';
import SocialMediaLinks from "./SocialMediaLinks.jsx";

export default function PersonalInformation({personalInformation: {name, surname, location, jobTitle, email, phoneNumber, smLinks}}) {
    const fullName = name + ' ' + surname;

    return (
        <div className="personal-information">
            <div className='personal-information__fullname'>{fullName}</div>
            <div className='personal-information__job-title'>{jobTitle}</div>
            <div className='personal-information__location'><span>Location: </span>{location}</div>
            <div className='personal-information__contact-info'>
                <div className='personal-information__contact-info__email'>
                    <span>Email: </span>{email}
                </div>
                <div className='personal-information__contact-info__phone-number'>
                    <span>Phone: </span>{phoneNumber}
                </div>
            </div>
            {smLinks.length > 0 ? <SocialMediaLinks smLinks={smLinks} /> : null}
        </div>
    );
}