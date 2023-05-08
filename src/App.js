import React, { useEffect } from 'react';
import { Header } from './Components/Header';
import { HelpTravels } from './Components/HelpTravels';
import { Gallery } from './Components/Gallery';
import { Contact } from './Components/Contact';
import { Tours } from './Components/Tours';
import { TourCards } from './Components/TourCards';
import { BeachHoliday } from './Components/BeachHoliday';
import { Offers } from './Components/Offers';
import { ContactInfo } from './Components/ContactInfo';
import { Footer } from './Components/Footer';
import AOS from 'aos';

export const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  })
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
      <ContactInfo />
      <Footer />
    </>
  )
}