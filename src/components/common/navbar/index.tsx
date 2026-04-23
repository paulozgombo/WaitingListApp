import { ShieldUser } from "lucide-react";
import { Container } from "./style";

const Navbar = () => {
  return (
    <>
    <Container>
      <div className='navegationBar'>
        <h1>WaitingLisApp</h1>
        <a href="#"> <ShieldUser size={16}/>Admin</a>
      </div>
    </Container>  
    </>
  )
}

export default Navbar