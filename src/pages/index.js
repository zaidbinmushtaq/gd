import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          GitAds Documentation
        </Heading>
        <p className="hero__subtitle">
          The premier platform for monetizing open-source GitHub repositories
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/publishers">
            For Publishers
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{marginLeft: '12px'}}
            to="/docs/getting-started/advertisers">
            For Advertisers
          </Link>
        </div>
      </div>
    </header>
  );
}

function ValueProposition() {
  return (
    <section className={styles.valueProposition}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Monetize Your Open Source Work</Heading>
            <p>
              GitAds helps open-source maintainers generate revenue from their repositories 
              without compromising user experience or project integrity. Our non-intrusive 
              ads are designed specifically for the GitHub ecosystem.
            </p>
          </div>
          <div className="col col--6">
            <Heading as="h2">Reach Developers Directly</Heading>
            <p>
              For advertisers, GitAds provides unparalleled access to a highly targeted 
              audience of developers and technical decision-makers actively engaged with 
              relevant technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>How GitAds Works</Heading>
        <div className="row">
          <div className="col col--4">
            <div className={styles.featureCard}>
              <Heading as="h3">1. Simple Integration</Heading>
              <p>
                Add a single line of markdown to your README.md file. 
                No complex code or intrusive scripts required.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <Heading as="h3">2. Relevant Ads</Heading>
              <p>
                We match your repository with relevant advertisers in the tech space,
                ensuring ads are valuable to your audience.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <Heading as="h3">3. Get Paid</Heading>
              <p>
                Earn revenue based on impressions and engagement. 
                Payments are processed monthly with transparent reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Trusted By Open Source Leaders</Heading>
        <div className="row">
          <div className="col col--6">
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                "GitAds has been a game-changer for our project. We're able to focus more on development 
                while generating sustainable revenue without compromising our values."
              </p>
              <p className={styles.author}>— Open Source Maintainer</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                "As an advertiser, we've seen incredible engagement rates with GitAds. 
                The ability to reach developers directly in their workflow is invaluable."
              </p>
              <p className={styles.author}>— Tech Company Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2">Ready to Get Started?</Heading>
        <p>Join the growing community of open source maintainers and advertisers on GitAds</p>
        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg"
            to="https://gitads.dev/publisher/register">
            Become a Publisher
          </Link>
          <Link
            className="button button--outline button--lg"
            style={{marginLeft: '12px'}}
            to="https://gitads.dev/advertiser/register">
            Become an Advertiser
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="GitAds Documentation"
      description="Documentation for GitAds - The premier platform for monetizing open-source GitHub repositories">
      <HomepageHeader />
      <main>
        <ValueProposition />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
    </Layout>
  );
}
