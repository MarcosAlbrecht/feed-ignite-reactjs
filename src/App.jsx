import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css'

function App() {
  return (
    <div>
      <Header></Header>

      <Post 
        author="Marcos Roberto"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, illum? Perspiciatis eaque sunt recusandae ipsum est doloribus vel veritatis magnam. Sunt eaque eos magnam nisi? Tempora repudiandae reprehenderit facere reiciendis."
      />
      <Post 
        author="Luana"
        content="Novo post"
      />
      
    </div>
  )
}

export default App

