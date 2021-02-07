import React from "react";
import { Button, Card, CardBody, UncontrolledCollapse } from "reactstrap";
import "./collapsible.scss";

const Collapsible = () => {
  return (
    <div className="collapsible">
      <div className="collapsible-child">
        <h1>Frequently Asked Questions</h1>
        <div>
          <Button id="toggler">What is Netflix?</Button>
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody>
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                </p>
                <p>
                  You can watch as much as you want, whenever you want without a
                  single commercial – all for one low monthly price. There's
                  always something new to discover and new TV shows and movies
                  are added every week!
                </p>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <div>
          <Button id="toggler1">How much does Netflix cost?</Button>
          <UncontrolledCollapse toggler="#toggler1">
            <Card>
              <CardBody>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from $8.99 to $17.99 a month. No extra costs, no contracts.
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <div>
          <Button id="toggler2">Where can I watch?</Button>
          <UncontrolledCollapse toggler="#toggler2">
            <Card>
              <CardBody>
                <p>
                  Watch anywhere, anytime, on an unlimited number of devices.
                  Sign in with your Netflix account to watch instantly on the
                  web at netflix.com from your personal computer or on any
                  internet-connected device that offers the Netflix app,
                  including smart TVs, smartphones, tablets, streaming media
                  players and game consoles.
                </p>
                <p>
                  You can also download your favorite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </p>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <div>
          <Button id="toggler3">How do I cancel?</Button>
          <UncontrolledCollapse toggler="#toggler3">
            <Card>
              <CardBody>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <div>
          <Button id="toggler4">What can I watch on Netflix?</Button>
          <UncontrolledCollapse toggler="#toggler4">
            <Card>
              <CardBody>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
