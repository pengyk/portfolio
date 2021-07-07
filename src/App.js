import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Modal, Button, Divider, List,
  Container, Grid, Header, Icon, Image, Menu, Responsive, Segment, Sidebar, Visibility,
} from 'semantic-ui-react'
import profilePic from "./porfilepic.jpg"
import PainTrix from "./Pictures/Paintrix.jpg"
import MindBook from "./mindbook.jpg"
import ProperPark from "./Pictures/Properpark.jpg"
import Resume from "./Pictures/Resume_Yun_Kai_Peng.pdf"
import MSAcces from "./Pictures/MSAccess.png"
import "./App.css"
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


const center = {
  textAlign: "center"
}
/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text id="home">
    <Image size='medium' circular
      src={profilePic}
      as='a'
      target='_blank'
    />
    <Header
      as='h1'
      content='Yun Kai Peng'
      inverted
      style={{
        fontWeight: 'normal',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item a href="#home">
                  Home
                </Menu.Item>
                <Menu.Item a href="#aboutme">About me</Menu.Item>
                <Menu.Item a href="#experience">Work Experience</Menu.Item>
                <Menu.Item a href="#projects">Projects</Menu.Item>
                <Menu.Item a href="#extra">Extra</Menu.Item>
                <Menu.Item a href={Resume} target="_blank" inverted>
                  Resume
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item a href='#home'>
            Home
          </Menu.Item>
          <Menu.Item a href="#aboutme">About me</Menu.Item>
          <Menu.Item a href="#experience">Work Experience</Menu.Item>
          <Menu.Item a href="#projects">Projects</Menu.Item>
          <Menu.Item a href="#extra">Extra</Menu.Item>
          <Menu.Item a href={Resume} target="_blank" inverted>Resume</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical id="aboutme">
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column >
            <Header as='h3' style={{ fontSize: '2em' }}>
              About me
            </Header>
            <p style={{ fontSize: '1.66em' }}>
              Computer Science and Mathematics student at McGill University
            </p>
            <br />
            <p style={{ fontSize: '1.33em' }}>
              I am a Math & CS student at McGill University
              with a CGPA of 3.73/4.00 currently interning at Amazon.

              I am anticipating to graduate December 2021.

              Feel free to contact me for additional information!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical id="experience">
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column >
            <Header as='h3' style={{ fontSize: '2em' }}>
              Work Experience
            </Header>
            <br/>
            <Container text>
              <Header as='h3' style={{ fontSize: '1.66em' }}>
                Amazon
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Working for Customer Service Team in handling customer communications by providing the necessary recommendations to users and routing contacts.
                Using Java, React, Typescript, Redux and AWS products to build a web app capable of routing customer requirements to customer agents.
              </p>
              <Divider/>
              <Header as='h3' style={{ fontSize: '1.66em' }}>
                CDPQ
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                I used React with TypeScript to develop widgets for the development of the new intranet of the company. The plateform is built on top of SharePoint and Akumina.
               </p>
              <Divider/>
              <Header as='h3' style={{ fontSize: '1.66em' }}>
                Manulife (John Hancock)
              </Header>
              <p style={{ fontSize: '1.33em' }}>
              Full stack developer in an Agile environment, worked on a business risk-management
              application. Developed in ReactJS, Sprint Boot Java and SQL Server with REST APIs.
               </p>
              <Divider/>
              <Header as='h3' style={{ fontSize: '1.66em' }}>
                UMAKnow Solutions
              </Header>
              <p style={{ fontSize: '1.33em' }}>
              Took part in the development of a new desktop application to run a cloud computing diagram
              generator called Cloudockit. Grasped good knowledge of XAML and C# to build this WPF Application.
              </p>
            </Container>
            <Divider/>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Research Experience
            </Header>
            <br/>
            <Container text>
              <Header as='h3' style={{ fontSize: '1.66em' }}>
                McGill University
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Implemented algorithms such as Hybrid Bipartite Graph Formulation in Python to predict patterns in crowd
                sourced data from Eve Online under Dr.Jerome Waldispuhl’s supervision.
              </p>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical id="projects">
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Projects
            </Header>
            <p style={{ fontSize: '1.66em' }}>
              Here are a few of my personnal projects and some built with friends
            </p>
            <br />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <div style={center}>
              <Image src={MindBook} className = "displayed"/>
              <Modal trigger={<Button size="medium" content="Open" hover />}>
                <Modal.Header>MindBook</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src={MindBook}/>
                  <Modal.Description>
                    <p>
                      An online personal journal and tone analyzer which helps users document their days and improve their mental well-being.
                    </p>
                    <p>This project aims to tackle the mental health issues we face in our daily work environment.</p>
                    <Button a href="https://devpost.com/software/mindbook" target="_blank" content="Details" />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
          </Grid.Column>
          <Grid.Column width={4} >
            <div style={center}>
              <Image src={PainTrix} className = "displayed"/>
              <Modal trigger={<Button content="Open" />}>
                <Modal.Header>Paintrix</Modal.Header>
                <Modal.Content image>
                  <Image size='large' src={PainTrix} wrapped/>
                  <Modal.Description>
                    <p>
                      Paintrix allows it's user to write to their screen with the swift movement of their hand.
                      For an educator, it allows them to record their classes, highlight what they judge as important
                      and mark it down for students to see. For an artist, it could be used to paint in space,
                      sketch out their ideas, all without the use of any material, not even a pencil!
                    For a student, it could be used to take notes and to do homework.</p>
                    <p>
                      This projects implement WRNCH"s API
                    </p>
                    <Button a href="https://devpost.com/software/painttrix" target="_blank" content="Details" />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
          </Grid.Column>
          <Grid.Column width={4} >
            <div style={center}>
              <br />
              <br />
              <br />
              <Image className = "displayed" src={ProperPark} wrapped/>
              <br />
              <br />
              <Modal trigger={<Button content="Open" />}>
                <Modal.Header>ProperPark</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='large' src={ProperPark} />
                  <Modal.Description>
                    <p>
                      Proper park’s purpose is to translate multiple parking signs into an easily read format so that restrictions are respected and parking tickets are avoided.
                      By snapping a picture of the parking panels, the mobile app deciphers the rest for you.
                    </p>
                    <Button a href="https://devpost.com/software/proper-park-mw0h6e" target="_blank" content="Details" />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
          </Grid.Column>
          <Grid.Column width={4} >
            <div style={center}>
              <Image className = "displayed" src={MSAcces} wrapped/>
              <br />
              <br />
              <Modal trigger={<Button content="Open" />}>
                <Modal.Header>Database management for summer camp</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='large' src={MSAcces} />
                  <Modal.Description>
                    <p>
                      Using Access to easily fetch student and teacher schedules. Easy access to different types of
                      forms for administrative purposes.
                      This project was developed by manipulating queries, linking them to different tables and
                      outputting many types of forms to make sure that administration can easily input and find
                      the campers information.
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical id="extra">
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column >
            <Header as='h3' style={{ fontSize: '2em' }}>
              Extra
            </Header>
            <p style={{ fontSize: '1.66em' }}>
              What I do outside of work
            </p>
            <List style={{ fontSize: '1.33em' }}>
              <List.Item>
                <b>McHacks</b> <br />
                <p>
                  Development using React, TypeScript, MongoDB, Express and NodeJS to build multiple web applications for
                  McGill University’s hackathon.
                </p>
              </List.Item>
              <List.Item>
                <b>Ex-member of the Canadian Armed Forces (Qualified Private Infantryman)</b> <br />
                Graduated the basic military course and the infantry developmental period 1 course (DP1).
                Participated in monthly military exercises throughout the school year and the summer.
              </List.Item>
              <List.Item>
                <b>Music</b> <br />
                Previous member of OSJM, Montreal's Youth Symphony Orchestra.
                Recently, I am playing around on the violin, piano and I am trying to pick up the guitar. 
              </List.Item>
              <List.Item>
                <b>Sports</b> <br />
                Played high school and college rugby. Now I jog around and rock climb a little here and there.
              </List.Item>
            </List>
            <br />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid columns={3} inverted stackable>
          <Grid.Row>
            <Grid.Column>
              <Header inverted as='h4' content='Contact me' />
              <Button circular color='linkedin' icon='linkedin' size="large" a href="https://www.linkedin.com/in/yun-kai-peng-52853a158/" target="_blank" />
              <Button circular icon='github' size="large" a href="https://github.com/pengyk" target="_blank" />
              <Button circular color='google plus' icon='mail' size="large" a href="mailto:yun.k.peng@mail.mcgill.ca" target="_blank" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout