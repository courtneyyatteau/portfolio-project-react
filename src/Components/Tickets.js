import React, { Component } from 'react';
import { render } from 'react-dom';
import { Jumbotron, UncontrolledCollapse, Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import Footer from './Footer';


class Tickets extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <div>
            <Card>
              <CardTitle className="ticket-head">Ticket Options</CardTitle>
            </Card>
          </div>

          <br />
          <div className="row">
            <div className="col-md-6">
            <Card>
              <CardTitle className="TicketsTitle">General Admission</CardTitle>
              <CardBody>
                <ul>
                  <li>
                     This ticket gives you access to the Indulgent Fest on either Saturday or Sunday starting at noon.
                  </li>
                </ul>
              </CardBody>
            </Card>
            </div>
            <div className="col-md-6">
            <Card>
              <CardTitle className="TicketsTitle">VIP Admission</CardTitle>
              <ul>
                <li>
                  This ticket includes first access to the Indulgent Fest starting at 10am on either Saturday or Sunday.
                </li>
                <li>
                  The special VIP hour from 10-11AM includes samples, cocktail sips, and a gift bag for shopping that is already filled with a few fun food treats.
                </li>
                <li>
                  VIP is limited to 800 people in that exclusive hour, meaning shorter lines, smaller crowds, and more time for you and your friends to INDULGE!
                </li>
              </ul>
              <CardBody></CardBody>
            </Card>
            </div>
          </div>
        </Jumbotron>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Tickets;