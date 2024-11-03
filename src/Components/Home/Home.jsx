import "./Home.css"
import UserInfo from "../UserInfo/UserInfo"
import BlogList from "../BlogList/BlogList"

const Home = () => {
  return (
    <div className="home-container">
      <UserInfo />
      <BlogList />
    </div>
  )
}

export default Home
