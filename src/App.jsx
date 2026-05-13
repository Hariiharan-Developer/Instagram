import Navbar from "./Navbar"
import Post from "./Post"
import Suggetion from "./Suggetion"

const App = () => {
  return (
    <div className="min-vh-100 d-flex m-3">
      <div className="w-20"><Navbar/></div>
      <div className="w-50"><Post/></div>
      <div className="w-30"><Suggetion/></div>
      </div>
  )
}

export default App