/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Section = require('./schemas/info-section.ts');
const ActionCard = require('./schemas/action-card.ts');

const Routes = require('./routes.ts');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/api/v1', Routes);

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);

  // const actionCard = new ActionCard({
  //   title: 'title',
  //   imageUrl: './images/everi-logo.png',
  //   imageAlt: 'img-alt',
  //   actionCallback: {
  //     actionType: 'FILE',
  //     action: 'Download',
  //   }
  // }).save()
  // .then(
  //     () => console.log("One entry added"), 
  //     (err) => console.log(err)
  // );

  const section = new Section({
    sectionTitle: 'EDUCATION / KNOWLEDGE',
    priority: 2,
    infoCardData: [
      {
        title: 'B.S. Mechanical Engineering',
        subtitle: 'The University of Arizona',
        description: [
          'I graduated with a bachelors degree in Mechanical Engineering from the University of Arizona in Tucson. While there I received the Arizona Excellence Scholarship, multiple deans list recognitions and a cum laude distiction upon graduation.',
          'While my degree may seem unrelated to my current career, I believe my engineering background has given me the problem-solving skills and adaptability needed to excel in the technology industry.',
        ],
        imageUrl: './images/everi-logo.png',
        imageAlt: 'University of Arizona Logo'
      },
    ],
    listCardData: [{
      title: 'Technologies and Skills',
      subListItems: [
        {
          subtitle: "Frameworks",
          listItems: [
            {
              label: "- Ionic 6"
            },
            {
              label: "- Capacitor / Cordova"
            },
            {
              label: "- Angular 14",
            },
            {
              label: "- React 18",
            },
          ],
        },
        {
          subtitle: "Languages",
          listItems: [
            {
              label: "- TypeScript 4 / Javascript",
            },
            {
              label: "- HTML 5",
            },
            {
              label: "- SCSS / CSS",
            },
            {
              label: "- Bash Scripting",
            },
            {
              label: "- Swift",
            },
            {
              label: "- Java 8",
            },
          ]
        },
        {
          subtitle: "Automation / Testing",
          listItems: [
            {
              label: "- Azure DevOps",
            },
            {
              label: "- Angular Schematics",
            },
            {
              label: "- Karma",
            },
            {
              label: "- Protactor",
            },
            {
              label: "- Jasmine",
            },
            {
              label: "- Jenkins",
            },
            {
              label: "- CARA",
            },
            {
              label: "- Docker",
            },
          ]
        },
        {
          subtitle: "Other",
          listItems: [
            {
              label: "- git",
            },
            {
              label: "- npm / yarn",
            },
            {
              label: "- SpringBoot",
            },
            {
              label: "- SQL & Oracle DB",
            },
          ]
        }
      ]
    }]
    // infoCardData: [
    //   {
    //     description: [
    //       'My name is Marco and I\'m a full stack software developer based in Austin, TX. Creating and maintaining intuitive interfaces and efficient midrange systems that empower businesses and users is my passion.',
    //       'Originally a mechanical engineer, I fell into a software development role by accident; I have not looked back since, although I bring a creative, problem-solving engineer mentality everywhere I go.',
    //       'My hobbies include travelling and riding motorcycles; I cannot afford any other hobbies.'
    //     ],
    //   },
    // ]
    // infoCardData: [
    //   {
    //     title: 'Senior Mobile Engineer',
    //     subtitle: 'Everi Holdings',
    //     description: [
    //       'I am currently employed at Everi Holdings, making a white label hospitality and gaming hybrid (iOS & Android) application framework for casinos across North America',
    //       'I lead the new feature development team, where I have architected and developed industry-first fully digital enrollment, cardless/cashless slot and table play on casino floors, keyless room entry, dynamic client-controlled content and more.',
    //       'Scalability and quality are the of highest importance; I have written scripts, setup CI/CD pipelines, and leveraged code generation tools to deploy dozens of 4+ star rated apps.'
    //     ],
    //     imageUrl: './images/everi-logo.png',
    //     imageAlt: 'Everi Logo'
    //   },
    //   {
    //     title: 'Full Stack Engineer',
    //     subtitle: 'General Motors',
    //     description: [
    //       'I am currently employed at General Motors Company in Austin, TX. I am a full-stack developer leading the development of internal sites that allow users to fine tune the logistics and complex supply chain that allows GM to run a profitable business in both North and South America.',
    //       'Using React, Angular, SpringBoot, REST, GraphQL and more, these new applications are projected to save GM $10 million over the next 5 years. I have also been committed to minimizing defects across these applications by creating hundreds of automated tests using Cypress and Protractor in order to create the most reliable applications possible.',
    //       'These new applications have replaced dated mainframe and oracle systems; these big changes could potentially be disruptive to the users day-to-day usage, so I routinely meet with these users to demo the new applications and functionalities, as well extract feedback and additional requirements in order to maximize the added efficiency these application provide.',
    //     ],
    //     imageUrl: './images/gm-logo.png',
    //     imageAlt: 'GM logo',
    //   },
    //   {
    //     title: 'Project Lead',
    //     subtitle: 'Microsoft Capstone',
    //     description: [
    //       'During my time at the University of Arizona, I led a team that designed and created a fully automated datacenter model for Microsoft.',
    //       'This model made use of multiple algorithms and equations that calculated the cost and viability of constructing a new datacenter based user inputs, like desired zip code and datacenter size measured in megawatts. The model factored in capital expenditures like cost of land, construction and distance to national internet backbone. The operational costs factored included power usage, cost and cooling based on climate data, as well as labor costs.',
    //       'After all costs were calculated the model determined how much the datacenter would cost, what type of cooling system would be most efficient, how many floors the datacenter would need to be cheapest, and whether proposed automation systems (robots that would perform the server maintenance) made financial sense.',
    //     ],
    //     imageUrl: './images/microsoft-logo.png',
    //     imageAlt: 'Microsoft logo',
    //   }
    // ],
    // listCardData: [{
    //   title: 'Applications',
    //   subListItems: [
    //     {
    //       listItems: [
    //         {
    //           label: 'mySkyRiver',
    //           imageUrl: './images/everi-logo.png',
    //           imageAlt: 'Everi Logo'
    //         },
    //         {
    //           label: 'Hard Rock Sioux City',
    //           imageUrl: './images/everi-logo.png',
    //           imageAlt: 'Everi Logo'
    //         },
    //       ]
    //     },
    //     {
    //       listItems: [
    //         {
    //           label: 'Gila River Resorts & Casinos',
    //           imageUrl: './images/everi-logo.png',
    //           imageAlt: 'Everi Logo'
    //         },
    //         {
    //           label: 'Jackson Rancheria Casino',
    //           imageUrl: './images/everi-logo.png',
    //           imageAlt: 'Everi Logo'
    //         },
    //       ]
    //     }
    //   ]
    // }]
  }).save()
    .then(
      () => console.log("One entry added"),
      (err) => console.log(err)
    );
});