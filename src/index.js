import React from 'react';
import {render} from 'react-dom';
require('./main.css');
import HomePage from './HomePage';
import ErpPage from './ErpPage';
import FeaturesPage from './FeaturesPage';
import PrincipalPage from './PrincipalPage';
import ParentPage from './ParentPage';
import TeacherPage from './TeacherPage';
import NoticeBoardPage from './NoticeBoardPage';
import ContactPage from './ContactPage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/erp" component={ErpPage}/>
      <Route path="/features" component={FeaturesPage}/>
      <Route path="/noticeBoard" component={NoticeBoardPage}/>
      <Route path="/principal" component={PrincipalPage}/>
      <Route path="/parent" component={ParentPage}/>
      <Route path="/teacher" component={TeacherPage}/>
      <Route path="/contact" component={ContactPage}/>
    </div>
  </Router>
);


render(<App/>, document.getElementById('app'));
