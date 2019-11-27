import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby";
import './aside.less';

const Aside = ({activePath}) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }`);

    return (
        <aside className='aside-wrap'>
            <div className={activePath === '/articles/' ? 'active': ''}>前言</div>
            {
                data && data.allMarkdownRemark.edges.map((edge, index) => (
                    <Link
                      key={index}
                      to={edge.node.frontmatter.path}
                      className={activePath === edge.node.frontmatter.path ? 'active': ''}
                    >
                      {edge.node.frontmatter.title}
                    </Link>
                ))
            }
        </aside>
    )
};
export default Aside;
