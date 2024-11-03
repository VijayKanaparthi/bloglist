import React from "react"
import { Component } from "react"
import { Link } from "react-router-dom"
import "./BlogItemDetails.css"

class BlogItemDetails extends Component {
  state = { blogDetails: [] }
  componentDidMount() {
    this.getBlogItems()
  }

  getBlogItems = async () => {
    const { match } = this.props
    const { id } = match.params
    const resposne = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await resposne.json()
    const formattedData = {
      id: data.id,
      title: data.title,
      topic: data.topic,
      avatarUrl: data.avatar_url,
      author: data.author,
      imageUrl: data.image_url,
      content: data.content,
    }
    this.setState({ blogDetails: formattedData })
  }

  render() {
    const { blogDetails } = this.state
    const { title, avatarUrl, author, imageUrl, topic, content } = blogDetails
    return (
      <div className="blog-item-details-container">
        <div className="controller">
          <div className="arrow">
            <Link to="/" className="back-link">
              <p>←</p>
            </Link>
          </div>
          <div>
            <h1>{title}</h1>
          </div>
          <div className="blog-details-avatar-logo-container">
            <img src={avatarUrl} alt={author} />
            <p>{author}</p>
          </div>
          <div>
            <img src={imageUrl} alt={topic} />
          </div>
          <div className="para">
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
