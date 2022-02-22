// This landing page redirects to first page
import React from 'react';
import { Redirect } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const REDIRECTS_TO = 'about/overview'
export default () => {
  const { siteConfig } = useDocusaurusContext();
  return <Redirect to={`${ siteConfig.baseUrl }${REDIRECTS_TO}`} />
}
