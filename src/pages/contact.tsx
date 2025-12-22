import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function Contact(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About - ${siteConfig.title}`}
      description="Learn about the Physical AI textbook and its approach to artificial intelligence concepts">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1" className="text--center margin-bottom--lg">
              About the Physical AI Book
            </Heading>

            <div className="margin-vert--lg">
              <Heading as="h2">Understanding Physical AI</Heading>
              <p>
                This comprehensive textbook explores the intersection of artificial intelligence and the physical world.
                Physical AI represents a paradigm shift in how intelligent systems interact with and understand their environment.
                Through this book, you'll gain insights into how AI systems can perceive, reason about, and manipulate physical objects and environments.
              </p>
            </div>

            <div className="margin-vert--lg">
              <Heading as="h3">Learning Objectives</Heading>
              <p>
                By studying this book, you will develop a deep understanding of sensor integration, decision-making systems,
                and the practical applications of AI in real-world scenarios. The content bridges the gap between theoretical
                AI concepts and their implementation in physical systems.
              </p>
            </div>

            <div className="margin-vert--lg">
              <Heading as="h3">Target Audience</Heading>
              <p>
                This book is designed for students, researchers, and professionals in AI, robotics, computer science, and related fields
                who want to understand how AI systems operate in physical environments. Whether you're beginning your journey in AI
                or looking to expand your expertise in applied AI systems, this resource provides both foundational knowledge and advanced concepts.
              </p>
            </div>

            <div className="margin-vert--lg">
              <Heading as="h3">Practical Applications</Heading>
              <p>
                The concepts covered in this book have direct applications in robotics, autonomous systems, industrial automation,
                and human-computer interaction. Each chapter builds on the previous to provide a comprehensive understanding
                of how AI systems can effectively operate in the physical world.
              </p>
            </div>

            <div className="margin-vert--lg">
              <Heading as="h2">Connect with the Community</Heading>
              <ul>
                <li>
                  <Link to="https://github.com/ARBABAL0">GitHub Repository</Link>
                </li>
                <li>
                  <Link to="mailto:contact@example.com">Author Contact</Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com">Professional Network</Link>
                </li>
              </ul>
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