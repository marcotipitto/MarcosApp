import { SectionProps } from '../models';

export const experienceData: SectionProps = {
    sectionTitle: "EXPERIENCE",
    priority: 1,
    infoCardData: [
        {
            title: 'Senior Mobile Developer',
            subtitle: 'Everi Holdings',
            description: [
                'I am currently leading the project development of a white label casino hospitality framework using Angular, Ionic, and Capacitor. The framework supports over 50,000 monthly active users and dozens of 4+ star rated iOS and Android apps.',
                'Within the framework, I have spearheaded the creation of a groundbreaking self-serve loyalty enrollment feature within the casino industry. This feature includes document scanning, identity and age verification, as well single sign-on OAuth integration making a previously manual and time-consuming process user-friendly and quick. Additionally, I oversaw the implementation of fintech features like digital wallets, card/cash-less slot and table game play, as well as engaging loyalty features like in-app games, drawings, and promotions.',
                'On the native side, I have taken charge of building custom Capacitor plugins to leverage mobile features such as Bluetooth, NFC, geolocation, analytics, QR scanning and more. I have also worked on enhancing scalability through the development of bash automation scripts, Azure DevOps YAML pipelines and automated unit testing with Jasmine/Karma.',
                'On my team I have introduced clean architecture, domain-driven design practices, and efficient coding patterns that have resulted in a scalable and modular micro front-end architecture. Furthermore, I played a key role in mentoring new team members and managing workloads and deadlines for a 9 person fully remote team spanning six countries.'
            ],
            imageUrl: './images/everi-logo.png',
            imageAlt: 'Everi Holdings logo'

        },
        {
            title: 'Full Stack Developer',
            subtitle: 'General Motors',
            description: [
                'I spearheaded the development of feature-rich Angular and React applications that allowed for improved management of General Motors\' world-spanning supply chain. These complex apps were developed with a focus on creating reusable UI components and flows that would expedite feature implementation on my team as well as other company teams.',
                'I also contributed to highly scalable SpringBoot services that played a crucial role in helping GM analysts and dealers reduce operational costs for businesses across North and South America. These front and back-end efforts opened up new areas to improve efficiency and saved the company $10 million over 5 years.',
                'Additionally, I took the lead in setting up fully automated CI/CD build and release pipelines in Azure DevOps for both npm and Maven applications; an automation effort that significantly improved the efficiency and reliability of our development process by enabling daily builds and ensuring consistent build settings. To further enhance application reliability and reduce incidents, I integrated automated end-to-end tests using Cypress, Protractor, Selenium and test coverage reports into our pipelines.',
            ],
            imageUrl: './images/gm-logo.png',
            imageAlt: 'General Motors Logo'
        },
        {
            title: 'Capstone Project Leader',
            subtitle: 'Microsoft',
            description: [
                'At the helm of an innovative cross-discipline engineering team at the University of Arizona, I orchestrated the creation of a groundbreaking datacenter model within Power BI for Microsoft. This dynamic model went beyond traditional analytics, seamlessly generating comprehensive insights into location-based datacenter costs and statistics. We tackled complexities head-on, factoring in diverse cooling, power, and automation systems to provide a holistic view of operational dynamics.',
                'Drawing inspiration from cutting-edge datacenter technologies, I modeled the design of current and future advanced autonomous systems. Our focus was twofold: maximizing power efficiency and resource utilization while minimizing the environmental footprint. By harnessing the power of data, we aimed to slash energy consumption and streamline operations, leading to substantial power savings and optimized land use.',
            ],
            imageUrl: './images/microsoft-logo.png',
            imageAlt: 'alt'
        },
        {
            title: 'Full Stack Developer',
            subtitle: 'PVCProperties.com',
            description: [
                'In a personal endeavor of mine, I developed a dynamic multi-page React application that serves both prospective tenants and administrators for a small property management company. This application allows interested tenants to explore available listings, while administrators have the capability to create, modify, or delete these listings, ensuring a seamless user experience for all.',
                'In building this application, I leveraged the power of NodeJS to craft RESTful APIs that communicate with a MongoDB database. Additionally, I implemented OAuth and JWT token authentication to enhance security and access control, making the application not only user-friendly but also secure and reliable.',
                'My work on this project resulted in an efficient and user-centric solution that simplifies administrator tasks and allows them to more easily reach prospective tenants, all while maintaining the highest standards of data security and authentication.',
            ],
            imageUrl: './images/apartment-logo.png',
            imageAlt: 'logo'
        },
    ],
}