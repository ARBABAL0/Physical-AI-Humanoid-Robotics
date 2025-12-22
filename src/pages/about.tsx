import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

export default function About(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About - ${siteConfig.title}`}
      description="Learn more about the Physical AI textbook, its purpose, and the author">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1" className="text--center margin-bottom--lg">
              About This Book
            </Heading>
            
            <div className="margin-vert--lg">
              <Heading as="h2">Purpose of This Textbook</Heading>
              <p>
                The Physical AI textbook is designed to bridge the gap between theoretical AI concepts and their practical applications in the real world. 
                This book explores how artificial intelligence integrates with physical systems - from robots and autonomous vehicles to smart cities and IoT devices.
              </p>
              
              <p>
                As AI continues to reshape our world, understanding its physical implementations becomes crucial for engineers, researchers, and 
                students who want to build the next generation of intelligent systems.
              </p>
            </div>
            
            <div className="margin-vert--lg">
              <Heading as="h2">What You'll Find</Heading>
              <ul>
                <li>Comprehensive coverage of AI concepts with practical implementations</li>
                <li>Real-world case studies and examples</li>
                <li>Hands-on exercises to reinforce learning</li>
                <li>Insights into current research and future directions</li>
                <li>Code examples using popular AI frameworks</li>
              </ul>
            </div>
            
            <div className="margin-vert--lg">
              <Heading as="h2">Target Audience</Heading>
              <p>
                This book is designed for undergraduate and graduate students, researchers, engineers, and anyone interested in understanding 
                how AI interacts with the physical world. A basic understanding of programming and mathematics is recommended.
              </p>
            </div>
            
            <div className="margin-vert--lg text--center">
              <Link 
                className="button button--primary button--lg"
                to="/docs/intro">
                Start Reading
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}