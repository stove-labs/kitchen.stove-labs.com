import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Redirect } from '@docusaurus/router';

const features = [
  {
    title: <>Start cooking with Stove Labs</>,
    imageUrl: 'img/undraw_cooking_lyxy.svg',
    description: (
      <>
       Welcome to Stove Labs' kitchen. Here you will learn how to build applications on the Tezos blockchain platform. Never cooked before? Do not worry, we will teach you how to become a chef.
      </>
    ),
  },
  {
    title: <>From idea to working product</>,
    imageUrl: 'img/undraw_product_iteration_kjok.svg',
    description: (
      <>
        It can be overwhelming when you want to turn your idea into a product. Where do you start? How do you get to a minimum viable product (MVP)? We'll show you in hands-on self-paced workshops in how to follow a proven process.
      </>
    ),
  },
  {
    title: <>Learn best practices</>,
    imageUrl: 'img/undraw_sorting_thoughts_6d48.svg',
    description: (
      <>
       In our kitchen we use many recipes and have a collection of code examples, showcases and standard practices. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

function RedirectToWorkshops() {
  return <Redirect to={useBaseUrl('/docs/learn/workshops/notarization/theory/overview')} />
}

export default RedirectToWorkshops;
