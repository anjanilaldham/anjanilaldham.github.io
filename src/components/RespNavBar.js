import React from "react";
import {
  Container,
  Icon,
  Menu,
  Sidebar,
  Responsive,
  Dropdown
} from "semantic-ui-react";

const MobileNavBar = ({ childern, visible, onPusherClick, onToggle }) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      vertical
      visible={visible}
      //   width="thin"
    >
      <Menu.Item>
        <Menu.Header>मंदिर</Menu.Header>
        <Menu.Menu>
          <Menu.Item as="a">श्री अंजनीलाल मंदिर</Menu.Item>
          <Menu.Item as="a">श्री राम मंदिर</Menu.Item>
          <Menu.Item as="a">श्री व्दादशज्योतिर्लिगेश्वर महादेव मंदिर</Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item as="a">उपलब्धिया</Menu.Item>
      <Menu.Item as="a">गतिविधिया</Menu.Item>
      <Menu.Item as="a">इतिहास</Menu.Item>
      <Menu.Item as="a">सदस्य गड़</Menu.Item>
      <Menu.Item as="a">संपर्क सूत्र</Menu.Item>
    </Sidebar>
    <Sidebar.Pusher
      id="pusher"
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "6vh", display: "flex", flexFlow: "column nowrap" }}
    >
      <Menu fixed="top">
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu borderless position="right">
          <Menu.Item header>श्री अंजनी लाल मंदिर धाम</Menu.Item>
        </Menu.Menu>
      </Menu>
      {childern}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const DesktopNavBar = ({ activeItem, handleItemClick }) => (
  <Menu borderless color="teal">
    <Menu.Item header>श्री अंजनी लाल मंदिर धाम</Menu.Item>
    <Menu.Menu horizontal position="right">
      <Dropdown
        item
        text="मंदिर"
        active={activeItem === "मंदिर"}
        onClick={handleItemClick}
      >
        <Dropdown.Menu>
          <Dropdown.Item>श्री अंजनीलाल मंदिर</Dropdown.Item>
          <Dropdown.Item>श्री राम मंदिर</Dropdown.Item>
          <Dropdown.Item>
            श्री व्दादशज्योतिर्लिगेश्वर महादेव मंदिर
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
    <Menu.Item
      name="upalbdhi"
      active={activeItem === "upalbdhi"}
      onClick={handleItemClick}
      as="a"
    >
      उपलब्धिया
    </Menu.Item>
    <Menu.Item
      name="gatividhi"
      active={activeItem === "gatividhi"}
      onClick={handleItemClick}
      as="a"
    >
      गतिविधिया
    </Menu.Item>
    <Menu.Item
      name="itihas"
      active={activeItem === "upalbdhi"}
      onClick={handleItemClick}
      as="a"
    >
      इतिहास
    </Menu.Item>
    <Menu.Item
      name="sadasya"
      active={activeItem === "upalbdhi"}
      onClick={handleItemClick}
      as="a"
    >
      सदस्य गड़
    </Menu.Item>
    <Menu.Item
      name="sampark"
      active={activeItem === "upalbdhi"}
      onClick={handleItemClick}
      href="//google.com"
      target="_blank"
    >
      संपर्क सूत्र
    </Menu.Item>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class ResponsiveNavBar extends React.Component {
  state = {
    visible: false,
    minHeight: "100vh"
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
    if (visible) {
      document.getElementById("pusher").style.height = "0vh";
    } else {
      document.getElementById("pusher").style.height = "100vh";
    }
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Container fluid>
          <Responsive {...Responsive.onlyMobile}>
            <MobileNavBar
              onPusherClick={this.handlePusher}
              onToggle={this.handleToggle}
              visible={visible}
            />
          </Responsive>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <DesktopNavBar />
          </Responsive>
        </Container>
      </div>
    );
  }
}

export default ResponsiveNavBar;
