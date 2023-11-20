import { ActionCardProps, ActionEnum } from '../models';

export const actionCardData: ActionCardProps[] = [
    {
        title: 'RESUME',
        imageUrl: './icons/download.png',
        imageAlt: 'download resume',
        priority: 0,
        actionCallback: {
            actionType: ActionEnum.FILE,
            action: './Resume2023.pdf',
        }
    },
    {
        title: 'CONTACT',
        imageUrl: './icons/email.png',
        imageAlt: 'email contact',
        priority: 1,
        actionCallback: {
            actionType: ActionEnum.EMAIL,
            action: "mailto:marco.tipitto@gmail.com?subject=Hello!&body=Your%20message%20here",
        }
    },
    {
        title: 'LINKEDIN',
        imageUrl: './icons/linkedin.png',
        imageAlt: 'linked in link',
        priority: 2,
        actionCallback: {
            actionType: ActionEnum.LINK,
            action: 'https://www.linkedin.com/in/marco-tipitto-cerruti-4a8ab643/',
        }
    },
]