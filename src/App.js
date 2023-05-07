import React from 'react';
import { Header } from './Components/Header';
import { HelpTravels } from './Components/HelpTravels';
import { Gallery } from './Components/Gallery';
import { Contact } from './Components/Contact';
import { Tours } from './Components/Tours';

export const App = () => {
  return (
    <>
      <Header />
      <HelpTravels />
      <Gallery />
      <Contact />
      <Tours />
    </>
  )
}