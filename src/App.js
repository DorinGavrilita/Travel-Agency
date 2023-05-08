import React from 'react';
import { Header } from './Components/Header';
import { HelpTravels } from './Components/HelpTravels';
import { Gallery } from './Components/Gallery';
import { Contact } from './Components/Contact';
import { Tours } from './Components/Tours';
import { TourCards } from './Components/TourCards';
import { BeachHoliday } from './Components/BeachHoliday';
import { Offers } from './Components/Offers';

export const App = () => {
  return (
    <>
      <Header />
      <HelpTravels />
      <Gallery />
      <Contact />
      <Tours />
      <TourCards />
      <BeachHoliday />
      <Offers />
    </>
  )
}