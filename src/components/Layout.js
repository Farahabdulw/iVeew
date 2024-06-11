import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-10 bg-gray-100">{children}</div>
    </main>
  );
};

export default Layout;