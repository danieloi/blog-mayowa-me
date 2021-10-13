/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong> who lives and works in Abuja
              building useful things.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                You should follow him on Twitter
              </a>
              .{` `}
              I'm iterating on this voice note journaling and sharing tool
              called olog. Get it
              {` `}
              <a href={`${social.ologIOs}`}> on iOS</a>,{` `}
              <a href={`${social.ologAndroid}`}>on Android</a>
              {` `}
              and
              {` `}
              <a href={`${social.ologWeb}`}>on the web</a>.{` `}
              You can see WIP and suggest edits to articles
              {` `}
              <a href={`${social.repo}`}>here</a>
              {` `}
            </p>
            <p />
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          ologAndroid
          ologIOs
          ologWeb
          repo
        }
      }
    }
  }
`

export default Bio
