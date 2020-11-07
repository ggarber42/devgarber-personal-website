import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { SectionWrapper } from "../styles/utils"





const Works = ({ data }) => {
	
	console.log(data);

	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html, excerpt, main } = markdownRemark
	const images = frontmatter.main.blurbs;


	return (
		<Layout className="page" >
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			<SectionWrapper>
				<h1>{frontmatter.title}</h1>
				{images.map(node =>
						<Img fluid={node.image.childImageSharp.fluid} />
					)}
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</SectionWrapper>
		</Layout>
	)
}

export const pageQuery = graphql`
query WorksQuery($id: String!){
	markdownRemark(id: { eq: $id }) {
		id
		html
		excerpt(pruneLength: 140)
		frontmatter {
			title
			main{
				blurbs{
					image{
						childImageSharp{
							fluid(maxWidth: 400, maxHeight:400, quality: 100) {
								...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
							}
						}
					}
				}
			}
		}
	}
}
`

export default Works;