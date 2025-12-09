import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


export default function MainLayout({ children }) {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}