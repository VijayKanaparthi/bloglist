import { Component } from "react"
import BlogItem from "../BlogItem/BlogItem"
import "./BlogList.css"
import Loader from "react-loader-spinner"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class BlogList extends Component {
  state = { blogItems: [], isLoading: true }

  componentDidMount() {
    this.getBlogItems()
  }

  getBlogItems = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs")
    const data = await response.json()
    const formattedData = data.map((each) => ({
      id: each.id,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({ blogItems: formattedData, isLoading: false })
  }

  render() {
    const { blogItems, isLoading } = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#81D7DB" width={50} height={50} />
        ) : (
          <ul>
            {blogItems.map((each) => (
              <BlogItem key={each.id} blogitems={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
