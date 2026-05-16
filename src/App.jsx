import Feed from "./Feed"
import Navbar from "./Navbar"
import Suggetion from "./Suggetion"

const App = () => {
  return (
    <div className="min-vh-100 d-flex m-3">
      <div className="w-20"><Navbar/></div>
      <div className="w-50"><Feed/></div>
      <div className="w-30"><Suggetion/></div>
      </div>
  )
}

export default App