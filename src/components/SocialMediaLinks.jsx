export default function SocialMediaLinks({smLinks}) {
    const iconsLinks = [
        'https://img.icons8.com/?size=100&id=106562&format=png&color=000000',
        'https://img.icons8.com/?size=100&id=98960&format=png&color=000000',
        'https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000',
        'https://img.icons8.com/?size=100&id=e2cNCby2DRXJ&format=png&color=000000',
    ];
    return (
        <ul className="personal-information__sm-links">
            {smLinks.map((link, index) => {
                let srcIcon = '';
                let desc = '';

                switch (true) {
                    case link.includes('github') :
                        srcIcon = iconsLinks[0];
                        desc = 'GitHub';
                        break;
                    case link.includes('linkedin') :
                        srcIcon = iconsLinks[1];
                        desc = 'LinkedIn';
                        break;
                    case link.includes('leetcode') :
                        srcIcon = iconsLinks[2];
                        desc = 'LeetCode';
                        break;
                    case link.includes('codewars') :
                        srcIcon = iconsLinks[3];
                        desc = 'CodeWars';
                        break;
                }

                return (
                        link !== '' ?
                            <li className='personal-information__sm-links__link' key={index}>
                                <a href={link} target="_blank">
                                    <img className='img-icon' src={srcIcon} alt={desc + ' icon'}/>
                                </a>
                            </li>
                        : null
                );
            })}
        </ul>
    );
}