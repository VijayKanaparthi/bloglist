import { Link } from "react-router-dom"
import React from "react"
import "./BlogItem.css"

const BlogItem = (props) => {
  const { blogitems } = props
  const { id, topic, title, author, imageUrl, avatarUrl } = blogitems
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <li className="blog-items-container">
        <img src={imageUrl} alt={topic} className="poster" />
        <div className="item-information-container">
          <p>{topic}</p>
          <h3>{title}</h3>
          <div className="logo-heading-container">
            <img src={avatarUrl} alt={author} className="logo" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
