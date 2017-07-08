import React from 'react';
import {render} from 'react-dom';
import './main.css';
import HomePage from './HomePage';
import ErpPage from './ErpPage';
import FeaturesPage from './FeaturesPage';
import PrincipalPage from './PrincipalPage';
import ParentPage from './ParentPage';
import TeacherPage from './TeacherPage';
import NoticeBoardPage from './NoticeBoardPage';
import TransportPage from './TransportPage';
import ContactPage from './ContactPage';
import FontFaceObserver from 'fontfaceobserver';
// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}
ScrollToTop = withRouter(ScrollToTop);

const App = () => (
  <Router>
    <ScrollToTop>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/erp" component={ErpPage}/>
      <Route path="/features" component={FeaturesPage}/>
      <Route path="/noticeBoard" component={NoticeBoardPage}/>
      <Route path="/principal" component={PrincipalPage}/>
      <Route path="/parent" component={ParentPage}/>
      <Route path="/teacher" component={TeacherPage}/>
      <Route path="/transport" component={TransportPage}/>
      <Route path="/contact" component={ContactPage}/>
    </div>
    </ScrollToTop>
  </Router>
);


render(<App/>, document.getElementById('app'));
