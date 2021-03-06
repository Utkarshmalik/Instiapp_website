import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: '',
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentWillMount() {
     window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
     window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    const { fixedMenuTopHeight } = this.props;
    const height = event.srcElement.body.scrollTop;
    if ( height > fixedMenuTopHeight ) {
      this.setState({className: ' fix-top-menu'});
    }
    else {
      this.setState({className: ''});
    }
  }
  toggleMenu() {
    if ( this.state.className.length > 0) {
      this.setState({className: ''});
    }
    else {
      this.setState({className: ' show-mobile-menu'});
    }
  }
  render() {
    const className = "main-menu" + this.state.className;
    const imageClassName = "logo-section" + this.state.className;
    return (
      <div className="header-section">
        <span onClick={this.toggleMenu} className="mobile-menu-icon">
          <a>
            <i className="fa fa-bars"></i>
          </a>
        </span>
        <span>
          <img src="/./public/images/logo.png" className={imageClassName} />
        </span>
          <ul className={className}>
            <img src="./public/images/logo.png" className="inner-logo" />
            <li><NavLink  exact={true} activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/erp">School Management System</NavLink></li>
            <li><NavLink activeClassName="active" to="/noticeBoard">Digital Notice Board</NavLink></li>
            <li><NavLink activeClassName="active" to="/features">App Features</NavLink></li>
            <li><NavLink activeClassName="active" to="/principal">Principal App</NavLink></li>
            <li><NavLink activeClassName="active" to="/parent">Parent App</NavLink></li>
            <li><NavLink activeClassName="active" to="/teacher">Teacher App</NavLink></li>
            <li><NavLink activeClassName="active" to="/transport">GPS Bus Tracking</NavLink></li>
            <li><NavLink activeClassName="active" to="/contact">Contact Us</NavLink></li>
          </ul>
      </div>
    );
  }
}
export default MainMenu;
