import { Flexbox } from "../../../styles";
import Footer from "./Footer";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
function Body({ children }) {
  return (
    <Flexbox>
        <Navbar />
        {children}
        <Footer />
    </Flexbox>
  )
}


export default Body;
