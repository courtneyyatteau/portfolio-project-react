import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Footer from './Footer';
import { Accordion } from 'react-bootstrap';

const Faq = (props) => {
  return (
    <React.Fragment>
      <div>
        <br />
        <Button className="btn" id="PopoverLegacy1" type="button" color="danger">When and where is this event?</Button>
        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy1">
          <PopoverHeader>Location and Time</PopoverHeader>
          <PopoverBody>
          This event takes place in Fake City, Fake State at the Fake Plaza on Fake Street. The event will be on Saturday, FakeMonth 10th from noon-6pm. </PopoverBody>
        </UncontrolledPopover>
        {' '}
        <br />
        <br />
        <Button className="btn" id="PopoverLegacy2" type="button" color="danger">What do I get for the price of admission?</Button>
        <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverLegacy2">
          <PopoverHeader>Admission Perks</PopoverHeader>
          <PopoverBody>Admission gets you entrance into our indulgent marketplace, where you will have access to various samples, foods, and beverages, plus you will be able to purchase a wonderful selection of products from our 50+ vendors.</PopoverBody>
        </UncontrolledPopover>
        {' '}
        <br />
        <br />
        <Button className="btn" id="PopoverLegacy3" type="button" color="danger">Is there parking available at the event?</Button>
        
        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy3">
          <PopoverHeader>Parking</PopoverHeader>
          <PopoverBody>Yes! There are two parking garages withing 0.2 miles from Fake Plaza. One is just off of Faker Street and the other is just off of West Fake Drive.</PopoverBody>
        </UncontrolledPopover>
        {' '}
        <br />
        <br />
        <Button className="btn" id="PopoverLegacy4" type="button" color="danger">Will tickets be sold at the door?</Button>

        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy4">
          <PopoverHeader>Ticket Sales</PopoverHeader>
          <PopoverBody>Yes, but they will be on a limited first come first serve basis. There is a limited amount of tickets sold day-of to make the experience pleasurable for all attendees. It's recommended you purchase tickets ahead of time online.</PopoverBody>
        </UncontrolledPopover>
        {' '}
        <br />
        <br />
        <Button className="btn" id="PopoverLegacy5" type="button" color="danger">Are children welcome to this event?</Button>

        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy5">
          <PopoverHeader>Children</PopoverHeader>
          <PopoverBody>Yes. Children under the age of 10 are free!</PopoverBody>
        </UncontrolledPopover>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Faq;