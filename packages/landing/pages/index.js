import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from '../../common/src/theme/agency';
import { ResetCSS } from '../../common/src/assets/css/style';
import {
  GlobalStyle,
  AgencyWrapper,
} from '../../common/src/containers/Agency/agency.style';
import Navbar from '../../common/src/containers/Agency/Navbar';
import BannerSection from '../../common/src/containers/Agency/BannerSection';
import FeatureSection from '../../common/src/containers/Agency/FeatureSection';
import AboutUsSection from '../../common/src/containers/Agency/AboutUsSection';
import WorkHistory from '../../common/src/containers/Agency/WorkHistory';
import BlogSection from '../../common/src/containers/Agency/BlogSection';
import TestimonialSection from '../../common/src/containers/Agency/TestimonialSection';
import TeamSection from '../../common/src/containers/Agency/TeamSection';
import ContactSection from '../../common/src/containers/Agency/Contact';
import QualitySection from '../../common/src/containers/Agency/QualitySection';
import Footer from '../../common/src/containers/Agency/Footer';
import { DrawerProvider } from '../../common/src/contexts/DrawerContext';
export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* start head */}
        <Head>
          <title>Chapi Labs | Software</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="Chapi Labs Software" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* end head */}
        {/* start body */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <AboutUsSection />
          <WorkHistory />
          <BlogSection />
          <QualitySection />
          <TestimonialSection />
          <TeamSection />
          <ContactSection />
          <Footer />
        </AgencyWrapper>
        {/* end body */}
      </Fragment>
    </ThemeProvider>
  );
};
