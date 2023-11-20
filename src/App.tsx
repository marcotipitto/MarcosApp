import React, { useEffect, useState } from 'react';
import './styles/app.scss';
import './styles/fonts.scss';
import { Section, Header } from './components';
import { experienceData,  educationData, introData } from './data';
import { SectionProps } from './models';

const App = () => {

  const [sections, setSections] = useState<SectionProps[]>([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        "Content-Type":"application/json"
      }
    }
    fetch('http://localhost:3001/api/v1/sectionInfo', requestOptions)
      .then(response => response.json())
      .then((response: SectionProps[]) => {
        response = response.sort((a, b) => a.priority - b.priority);
        console.log('sectionInfo Response: ', response);
        setSections(response);
      })
      .catch((error) => console.error(error))
  }, [setSections])

  console.log(`
       .--'''''''''--.
    .'      .---.      '.
   /    .-----------.    \\
  /        .-----.        \\
  |       .-.   .-.       |
  |      /   \\ /   \\      |
   \\    | .-. | .-. |    /
    '-._| | | | | | |_.-'
        | '-' | '-' |    What are you looking at?
         \\___/ \\___/
      _.-'  /   \\  \`-._
    .' _.--|     |--._ '.
    ' _...-|     |-..._ '
           |     |
           '.___.' 
  `)
  
  return (
    <div className="App">
      <Header />
      { sections && (
        sections.map((section: SectionProps, index: number) => 
          <Section {...section} key={index}/>
        )
      )}
      <Section {...introData}/>
      <Section {...experienceData}/>
      <Section {...educationData}/>
    </div>
  );
};

export default App;
