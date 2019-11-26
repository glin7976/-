import React from "react"
import { graphql } from "gatsby"
import Blog from '../pages/blog';

export default function Template({ data }) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	return (
		<Blog path={frontmatter.path}>
			<div className='blog-post-title'>
				<h2>{frontmatter.title}</h2>
				<span>更新时间：{frontmatter.date}</span>
			</div>
			<div
				className="blog-post-content"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</Blog>

	)
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
	  html
	  timeToRead
	  wordCount {
		words
	  }
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`
