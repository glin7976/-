/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/header"
import Footer from '../Footer/footer';
import "./layout.css"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	const style = {
		width: '100%',
		height: '100%',
		margin: `0 auto`,
		padding: `1.45rem 0`
	};

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main style={style}>
				{children}
			</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
