import { SectionProps } from '../models';

export const educationData: SectionProps = {
    sectionTitle: "EDUCATION / KNOWLEDGE",
    priority: 1,
    infoCardData: [
        {
            title: 'Mechanical Engineering B.S.',
            subtitle: 'The University of Arizona',
            description: [
                'I graduated with a bachelors degree in Mechanical Engineering from the University of Arizona in Tucson. While there I received the Arizona Excellence Scholarship, multiple deans list recognitions and a cum laude distiction upon graduation.',
                'While my degree may seem unrelated to my current career, I believe my engineering background has given me the problem-solving skills and adaptability needed to excel in the technology industry. I am never afraid to think outside the box or try new solutions to complex challenges.',
            ],
            imageUrl: './images/arizona-logo.png',
            imageAlt: 'University of Arizona logo'
        },
    ],
    listCardData: [
        {
            title: "Technologies and Skills",
            subListItems: [
                {
                    subtitle: "Frameworks",
                    listItems: [
                        {
                            label: "Angular 14",
                        },
                        {
                            label: "React 18",
                        },
                        {
                            label: "Ionic 6"
                        },
                        {
                            label: "Capacitor 5"
                        },
                        {
                            label: "Cordova",
                        },
                        {
                            label: "Node",
                        },
                    ],
                },
                {
                    subtitle: "Languages",
                    listItems: [
                        {
                            label: "TypeScript 4",
                        },
                        {
                            label: "Javascript",
                        },
                        {
                            label: "HTML 5",
                        },
                        {
                            label: "SCSS / CSS",
                        },
                        {
                            label: "Bash Scripting",
                        },
                        {
                            label: "Swift",
                        },
                        {
                            label: "Java 8",
                        },
                        {
                            label: "Kotlin",
                        }
                    ]
                },
                {
                    subtitle: "Automation / Testing",
                    listItems: [
                        {
                            label: "Azure DevOps",
                        },
                        {
                            label: "YAML",
                        },
                        {
                            label: "Angular Schematics",
                        },
                        {
                            label: "Karma",
                        },
                        {
                            label: "Protactor",
                        },
                        {
                            label: "Jasmine",
                        },
                        {
                            label: "Jenkins",
                        },
                        {
                            label: "Cypress",
                        },
                        {
                            label: "CARA",
                        },
                        {
                            label: "Docker",
                        },
                    ]
                },
                {
                    subtitle: "Other",
                    listItems: [
                        {
                            label: "Agile Practices",
                        },
                        {
                            label: "git",
                        },
                        {
                            label: "npm / yarn",
                        },
                        {
                            label: "SpringBoot",
                        },
                        {
                            label: "SQL & Oracle DB",
                        },
                    ]
                }

            ]
        }
    ]
}