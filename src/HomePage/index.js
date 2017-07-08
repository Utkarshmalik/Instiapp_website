import React from 'react';
import ReactDOM from 'react-dom';
import HeaderSection from './HeaderSection';
import ErpSection from './ErpSection';
import CustomerReviewSection from './CustomerReviewSection';
import RoleAppSection from './RoleAppSection';
import NoticeBoardSection from './NoticeBoardSection';
import WebsiteSection from './WebsiteSection';
import FeaturesSection from './FeaturesSection';
import GpsSection from './GpsSection';
import Footer from '../components/Footer';
const HomePage = () => (
  <main className="page page-home">
    <HeaderSection />
    <ErpSection />
    <RoleAppSection />
    <FeaturesSection />
    <GpsSection />
    <NoticeBoardSection />
    <WebsiteSection />
    <CustomerReviewSection />
    <Footer />
  </main>
)
export default HomePage;
