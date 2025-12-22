import React, { JSX } from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  icon?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Practical Applications',
    description: (
      <>
        Learn how AI concepts apply to real-world systems including robotics, autonomous vehicles, and smart environments.
      </>
    ),
    icon: '🤖',
  },
  {
    title: 'Theoretical Foundations',
    description: (
      <>
        Strong mathematical and algorithmic foundations to understand how Physical AI systems make decisions.
      </>
    ),
    icon: '🧠',
  },
  {
    title: 'Implementation Focus',
    description: (
      <>
        Hands-on examples with code implementations to bridge the gap between theory and practice.
      </>
    ),
    icon: '💻',
  },
];

function Feature({title, description, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center padding-horiz--md', styles.featureCard)}>
        <div className={styles.icon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}