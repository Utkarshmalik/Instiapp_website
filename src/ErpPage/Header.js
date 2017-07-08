import React from 'react';
import MainMenu from '../components/MainMenu';
import PageHeading from '../components/PageHeading';
const HeaderSection = () => (
  <section className="main-menu-section">
    <MainMenu fixedMenuTopHeight="200" />
    <section className="section section-erp-header align-center">
      <PageHeading
        text1='School '
        text2='Management '
        text3='System'
        classes=' heading_theme_white'
      />
    </section>
  </section>
);
export default HeaderSection;
