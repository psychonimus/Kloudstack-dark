import React from 'react';
import './ClientLogos.css';
import akoirah from '/images/logos/akoirah.svg'
import adani from '/images/logos/adani.svg'
import bajel from '/images/logos/bajel-projects.svg'
import lic from '/images/logos/lic-mutual-fund.svg'
import maxSpare from '/images/logos/max-spare.svg'
import dattaMeghe from '/images/logos/datta-meghe-logo.svg'
import sevenIsland from '/images/logos/seven-island.svg'
import veHealthCare from '/images/logos/ve-healthcare.svg'
import seeBreeze from '/images/logos/sea-breeze.svg'
import vexxa from '/images/logos/vexxa.svg'
import meru from '/images/logos/meru.svg'
import prism from '/images/logos/prism.svg'

const logos = [
  {
    id: 'akoirah',
    label: 'Akoirah',
    render: () => (
      <img src={akoirah} alt="Akoirah" />
    ),
  },
  {
    id: 'adani',
    label: 'Adani ',
    render: () => (
      <img src={adani} alt="Adani" />
    ),
  },
  {
    id: 'bajel',
    label: 'Bajel Projects',
    render: () => (
      <img src={bajel} alt="Bajel Projects" />
    ),
  },
  {
    id: 'lic',
    label: 'LIC Mutual Fund',
    render: () => (
      <img src={lic} alt="LIC Mutual Fund" />
    ),
  },
  {
    id: 'maxSpare',
    label: 'Max Spare',
    render: () => (
      <img src={maxSpare} alt="Max Spare" />
    ),
  },
  {
    id: 'dattaMeghe',
    label: 'Datta Meghe',
    render: () => (
      <img src={dattaMeghe} alt="Datta Meghe" />
    ),
  },
  
  {
    id: 'sevenIsland',
    label: 'Seven Islands Shipping',
    render: () => (
      <img src={sevenIsland} alt="Seven Island" />
    ),
  },
  {
    id: 've-healthcare',
    label: 'VE Health Care',
    render: () => (
      <img src={veHealthCare} alt="VE Health Care" />
    ),
  },
  {
    id: 'seeBreeze',
    label: 'See Breeze',
    render: () => (
      <img src={seeBreeze} alt="See Breeze" />
    ),
  },
  {
    id: 'vexxa',
    label: 'Vexxa',
    render: () => (
      <img src={vexxa} alt="Vexxa" />
    ),
  },
  {
    id: 'meru',
    label: 'Meru',
    render: () => (
      <img src={meru} alt="Meru" />
    ),
  },
  {
    id: 'prism',
    label: 'Prism Johnson Limited',
    render: () => (
      <img src={prism} alt="Prism" />
    ),
  },
];

/* Duplicate the array so we can loop seamlessly */
const track = [...logos, ...logos];

const ClientLogos = () => {
  return (
    <section className="cl-section" aria-label="Trusted by our clients">
      <h2 className='section-heading text-center mx-auto'>Trusted By</h2>

      {/* Carousel */}
      <div className="cl-carousel" aria-hidden="true">
        {/* Left fade */}
        <div className="cl-fade cl-fade-left" />
        {/* Right fade */}
        <div className="cl-fade cl-fade-right" />

        <div className="cl-track">
          {track.map((logo, i) => (
            <div key={`${logo.id}-${i}`} className="cl-item" title={logo.label}>
              {logo.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;