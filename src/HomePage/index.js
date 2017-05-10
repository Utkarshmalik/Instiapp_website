import React from 'react';
import ReactDOM from 'react-dom';
import HeaderSection from './HeaderSection';
import ErpSection from './ErpSection';
import PermissionsSection from './PermissionsSection';
import NoticeBoardSection from './NoticeBoardSection';
import PortfolioSection from './PortfolioSection';
import FeaturesSection from './FeaturesSection';
import CustomerSection from './CustomerSection';
import PushNotificationSection from './PushNotificationSection';
import Footer from '../components/Footer';

const HomePage = () => (
  <main className="home-page">
    <HeaderSection />
    <ErpSection />
    <PermissionsSection />
    <FeaturesSection />
    <PortfolioSection />
    <NoticeBoardSection />
    <CustomerSection />
    <PushNotificationSection />
    <Footer />
  </main>
)
export default HomePage;
