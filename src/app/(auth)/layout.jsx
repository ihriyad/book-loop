import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayout;
