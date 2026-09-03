import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Repo = {
  name: string;
  description: string;
  url: string;
};

const repos: Repo[] = [
  {
    name: 'nxt-ai-assistant',
    description:
      'Production-ready chat orchestrator with Gemini, dynamic instructions, RAG, and MCP integration.',
    url: 'https://github.com/nxtgrid/nxt-ai-assistant',
  },
  {
    name: 'nxt-backend',
    description:
      'Backend platform for mini-grid operations, payments, monitoring, and prepaid meter interactions.',
    url: 'https://github.com/nxtgrid/nxt-backend',
  },
  {
    name: 'nxt-control-room',
    description:
      'Operations dashboard for managing infrastructure, users, payments, and commissioning.',
    url: 'https://github.com/nxtgrid/nxt-control-room',
  },
  {
    name: 'nxt-crm',
    description:
      'PWA dashboard for mini-grid developers and operators to monitor and manage sites.',
    url: 'https://github.com/nxtgrid/nxt-crm',
  },
  {
    name: 'nxt-device-messaging',
    description:
      'Standalone command-delivery service for field devices (plugins, Redis queue, signed webhooks).',
    url: 'https://github.com/nxtgrid/nxt-device-messaging',
  },
  {
    name: 'nxt-field-ops',
    description:
      'Field technician PWA for installation, commissioning, and fault resolution workflows.',
    url: 'https://github.com/nxtgrid/nxt-field-ops',
  },
  {
    name: 'nxt-gis',
    description:
      'FastAPI geospatial backend for infrastructure planning and network optimization.',
    url: 'https://github.com/nxtgrid/nxt-gis',
  },
  {
    name: 'nxt-sts',
    description:
      'Spring Boot microservice for IEC 62055-41 STS prepayment token generation.',
    url: 'https://github.com/nxtgrid/nxt-sts',
  },
  {
    name: 'nxt-topup',
    description:
      'Customer-facing PWA for prepaid meter top-ups and transaction history.',
    url: 'https://github.com/nxtgrid/nxt-topup',
  },
  {
    name: 'nxt-ui-components',
    description:
      'Shared Vue 3 components, composables, styles, and integration layers for NXT apps.',
    url: 'https://github.com/nxtgrid/nxt-ui-components',
  },
  {
    name: 'lorawan-cert-renewer',
    description:
      'Automated TLS certificate renewal and credential packaging for LoRaWAN infrastructure.',
    url: 'https://github.com/nxtgrid/lorawan-cert-renewer',
  },
  {
    name: 'lorawan-cups-server',
    description:
      'Production-ready CUPS implementation for the Semtech binary protocol.',
    url: 'https://github.com/nxtgrid/lorawan-cups-server',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Open documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Unified documentation for NXT open-source software">
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <section className={styles.section}>
            <Heading as="h2">Open-source repositories</Heading>
            <p className={styles.sectionLead}>
              Central links for NXT public projects.
            </p>
            <ul className={styles.repoList}>
              {repos.map((repo) => (
                <li key={repo.name} className={styles.repoItem}>
                  <a href={repo.url} target="_blank" rel="noreferrer">
                    <strong>{repo.name}</strong>
                  </a>
                  <p>{repo.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}
