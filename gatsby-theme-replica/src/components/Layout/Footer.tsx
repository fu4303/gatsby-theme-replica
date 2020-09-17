import { Link } from 'gatsby';
import React, { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

import config from '../../../_config';
import { isExternalLink } from '../../utils/url';

const StyledIconLink = styled(Link)`
  color: #c6cbd1;
  &:hover {
    color: #959da5;
  }
`;

const Footer: FC = () => (
  <footer className={`border-t mt-10 pt-10 mb-4 md:mb-10`}>
    <div
      className={`page-grid flex flex-wrap items-center md:justify-between text-xs md:flex-row`}
    >
      <ul className={`flex flex-wrap justify-between w-full md:w-5/12`}>
        {config.footerList?.map((o) => (
          <li className={`mr-4`} key={o.text}>
            {o.link ? (
              isExternalLink(o.link) ? (
                <a href={o.link} target='_blank'>
                  {o.text}
                </a>
              ) : (
                <Link to={o.link}>{o.text}</Link>
              )
            ) : (
              o.text
            )}
          </li>
        ))}
      </ul>
      <div className={`hidden md:block md:2/12`}>
        <StyledIconLink to={`/`}>
          {' '}
          <FaGithub size={24} />{' '}
        </StyledIconLink>
      </div>
      <div
        className={`w-full text-center mt-4 md:mt-0 md:w-5/12 md:text-right`}
      >
        Theme{' '}
        <a href='https://github.com/sabrinaluo/gatsby-theme-replica'>Replica</a>{' '}
        by <a href='https://hiitea.io'>HiiTea</a>{' '}
        <span style={{ color: 'hotpink' }}>♥</span> Powered by Gatsby
      </div>
    </div>
    {config.flagCounter && (
      <div className={`page-grid flex justify-center mt-4`}>
        <a
          href={config.flagCounter.url}
          target='_blank'
          className={`h-16 overflow-hidden`}
        >
          <img src={config.flagCounter.image} />
        </a>
      </div>
    )}
  </footer>
);

export default Footer;
