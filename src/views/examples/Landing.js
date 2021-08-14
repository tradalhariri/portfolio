/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
// import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const styles = {
      center: {
        textAlign: "center",
        margin:"75px auto 10px auto",
        width:"100%"
      }
      ,
      margin: {
        marginTop: '150px',
        marginBottom: '120px'
      },
      grid: {
        paddingLeft: 0,
        paddingRight: 0
      },
      row: {
        marginLeft: 0,
        marginRight: 0
      },
      col: {
        paddingTop: '10px',
        paddingBottom: '10px'
      }
    };
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Full Stack Web Developer{" "}
                        <span>codefellows academy</span>
                      </h1>
                      <p className="lead text-white">
                        What excites me the most about tech is how  the new futuring technologies will be and how the world becomes after they apply the virtual reality.Most of the new technologies excites me and I'm looking forward to be one of participants in these technologies
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg">
            <Container style={styles.margin}>
              <h1 style={styles.center}>Background And Education</h1>

              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>My Background</h3>
                    <p>
                      Javascript full stack web developer with enough background in mathematics and enough experience in computer engineering. I worked in more than 10 projects throughout my studies in German Jordanian University and after graduation. What encourege me to learn programming is my love to solve challenges and my love to  build my own apps.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>

          </section>
          <h1 style={styles.center}>My Projects</h1>
          <section className="section section-lg section-shaped pb-250 ">

              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

            <Container style={styles.margin}>
             
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Electronic Hub
                          </h6>
                          <p className="description mt-3">
                            Electronic Hub store was designed to be the main website for our store where you can watch the new devices and the new tech every day and do  shopping online.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#elecHub"
                          // onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Beasts Horns
                          </h6>
                          <p className="description mt-3">
                            Beasts Horns shows information about horned animals and and filters them by the number of horns.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#horns"
                          // onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>


                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            401 project
                          </h6>
                          <p className="description mt-3">
                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#proj"
                            // onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                  </Row>
                </Col>
              </Row>
            </Container>
            <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
          </section>


          <section className="section bg-secondary">
            <Row className="row-grid align-items-center">
              <Col id="elecHub" style={styles.col} md="12">
                <h2 style={styles.center}>Electronic Hub</h2>
                <Container>
                  <Row className="row-grid align-items-center">
                    <Col md="6">
                      <Card className="bg-default shadow border-0">
                        <CardImg
                          alt="..."
                          src="https://res.cloudinary.com/doaoxkcbc/image/upload/v1628898187/elechub_ljzhzo.png"
                          top
                        />
                        <blockquote className="card-blockquote">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-bg"
                            preserveAspectRatio="none"
                            viewBox="0 0 583 95"
                          >
                            <polygon
                              className="fill-default"
                              points="0,52 583,95 0,95"
                            />
                            <polygon
                              className="fill-default"
                              opacity=".2"
                              points="0,42 583,95 683,0 0,95"
                            />
                          </svg>
                          <h4 className="display-3 font-weight-bold text-white">
                            Electronic Hub
                          </h4>
                          <p className="lead text-italic text-white">
                            Electronic Hub store was designed to be the main website for our store where you can watch the new devices and the new tech every day and do  shopping online.
                          </p>
                        </blockquote>
                      </Card>
                    </Col>
                    <Col md="6">
                      <div className="pl-md-5">
                        <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                          <i className="ni ni-settings" />
                        </div>
                        <h3>Electronic Hub</h3>
                        <p className="lead">
                          This website was built using HTML,CSS and Javascript.
                        </p>
                        <p>
                          The homepage displays all the categories with the most featured products in the store.
                        </p>
                        <p>
                          You can add any item to the cart from the homepage or from any product page then complete purchase process or if you want to go back later you will find what you added to the cart still exists.
                        </p>
                        <a
                          className="font-weight-bold text-warning mt-5"
                          href="https://electronicsstore.github.io/electronics-store/"
                        // onClick={e => e.preventDefault()}
                        >
                          Watch live
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col id="horns" style={styles.col} md="12">
              <h2 style={styles.center}>Beasts Horns</h2>

                <Container>
                  <Row className="row-grid align-items-center">
                    <Col md="6">
                      <Card className="bg-default shadow border-0">
                        <CardImg
                          alt="..."
                          src="https://res.cloudinary.com/doaoxkcbc/image/upload/v1628882982/hornedd_nfgpew.png"
                          top
                        />
                        <blockquote className="card-blockquote">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-bg"
                            preserveAspectRatio="none"
                            viewBox="0 0 583 95"
                          >
                            <polygon
                              className="fill-default"
                              points="0,52 583,95 0,95"
                            />
                            <polygon
                              className="fill-default"
                              opacity=".2"
                              points="0,42 583,95 683,0 0,95"
                            />
                          </svg>
                          <h4 className="display-3 font-weight-bold text-white">
                            Beasts Horns
                          </h4>
                          <p className="lead text-italic text-white">
                            Beasts Horns shows information about horned animals and and filters them by the number of horns.
                          </p>
                        </blockquote>
                      </Card>
                    </Col>
                    <Col md="6">
                      <div className="pl-md-5">
                        <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                          <i className="ni ni-settings" />
                        </div>
                        <h3>Beasts Horns</h3>
                        <p className="lead">
                          This website was built using React and React Bootstrap
                        </p>
                        <p>
                          The homepage displays all the Beasts with with information of each of them inside Card.
                        </p>
                        <p>
                          You can filter them using the number of horns and you can click on each beast to show it in a separate modal.
                        </p>
                        <a
                          className="font-weight-bold text-warning mt-5"
                          href="https://beasts-horns.netlify.app/"
                        // onClick={e => e.preventDefault()}
                        >
                          Watch live
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col id="proj" style={styles.col} md="12">
              <h2 style={styles.center}>Project 401</h2>

                <Container>
                  <Row className="row-grid align-items-center">
                    <Col md="6">
                      <Card className="bg-default shadow border-0">
                        <CardImg
                          alt="..."
                          src="https://res.cloudinary.com/doaoxkcbc/image/upload/v1610205997/sample.jpg"
                          top
                        />
                        <blockquote className="card-blockquote">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-bg"
                            preserveAspectRatio="none"
                            viewBox="0 0 583 95"
                          >
                            <polygon
                              className="fill-default"
                              points="0,52 583,95 0,95"
                            />
                            <polygon
                              className="fill-default"
                              opacity=".2"
                              points="0,42 583,95 683,0 0,95"
                            />
                          </svg>
                          <h4 className="display-3 font-weight-bold text-white">
                            401 Project
                          </h4>
                          <p className="lead text-italic text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                          </p>
                        </blockquote>
                      </Card>
                    </Col>
                    <Col md="6">
                      <div className="pl-md-5">
                        <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                          <i className="ni ni-settings" />
                        </div>
                        <h3>401 Project</h3>
                        <p className="lead">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </p>
                        <a
                          className="font-weight-bold text-warning mt-5"
                          href="#"
                        // onClick={e => e.preventDefault()}
                        >
                          Watch live
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </section>



          <section className="section section-lg bg-gradient-default">
         
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section style={styles.margin} className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with me?</h4>
                      <p className="mt-0">
                        Your interest is very important to me.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={() => this.setState({ nameFocused: true })}
                            onBlur={() => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={() => this.setState({ emailFocused: true })}
                            onBlur={() => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
