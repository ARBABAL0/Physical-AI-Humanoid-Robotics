import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AITutor from '@site/src/components/AITutor';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero hero--primary">
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className="padding-horiz--md">
              <div className="badge badge--secondary margin-bottom--sm">AI & Robotics</div>
              <Heading as="h1" className="hero__title">
                {siteConfig.title}
              </Heading>
              <p className="hero__subtitle">
                {siteConfig.tagline}
              </p>
              <div className="hero__buttons margin-top--lg">
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro">
                  Start Reading
                </Link>
                <Link
                  className="button button--secondary button--lg margin-left--md"
                  to="/docs/chapter-1-physical-ai">
                  View Contents
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className="text--center padding-horiz--md">
              <img
                src="/img/book-cover.png"
                alt="AI Textbook Cover"
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className="features-section padding-top--xl padding-bottom--xl">
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className="text--dark">
            What You'll Learn
          </Heading>
          <p className="text--secondary">
            Comprehensive coverage of modern AI concepts, practical implementations, and real-world applications
          </p>
        </div>
        <HomepageFeatures />
      </div>
    </section>
  );
}

function ChapterPreview() {
  const chapters = [
    { id: 1, title: 'Introduction to Physical AI', desc: 'Foundations and concepts' },
    { id: 2, title: 'Core Components', desc: 'Sensors, AI models, and actuators' },
    { id: 3, title: 'Sensor Technologies', desc: 'Cameras, LIDAR, RADAR, and more' },
    { id: 4, title: 'Decision Making', desc: 'How AI processes information' },
    { id: 5, title: 'Real-World Applications', desc: 'Case studies and implementations' },
    { id: 6, title: 'Future Trends', desc: 'Emerging technologies and challenges' }
  ];

  return (
    <section className="chapter-section padding-top--xl padding-bottom--xl">
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className="text--dark">
            Book Chapters
          </Heading>
          <p className="text--secondary">
            Each chapter builds on the previous to provide a comprehensive understanding
          </p>
        </div>
        <div className="row">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3 className="text--center">Chapter {chapter.id}</h3>
                </div>
                <div className="card__body">
                  <h4>{chapter.title}</h4>
                  <p>{chapter.desc}</p>
                </div>
                <div className="card__footer text--center">
                  <Link
                    to={`/docs/chapter-${chapter.id}`}
                    className="button button--primary button--block">
                    Read Chapter
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AITutorSection() {
  return (
    <section id="ai-tutor" className="ai-tutor-section padding-top--xl padding-bottom--xl">
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className="text--dark">
            AI Tutor
          </Heading>
          <p className="text--secondary">
            Get instant help with Physical AI concepts using our AI-powered tutor
          </p>
        </div>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <AITutor />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A comprehensive AI textbook covering modern artificial intelligence concepts and applications">
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <AITutorSection />
        <ChapterPreview />
      </main>
    </Layout>
  );
}