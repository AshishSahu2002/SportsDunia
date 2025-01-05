const Navbar: React.FC = () => {
    return (
      <div className="p-4 bg-blue-500 text-white flex justify-between">
        <h1 className="text-xl font-bold">Responsive Dashboard</h1>
        <button className="bg-white text-blue-500 px-4 py-2 rounded">Logout</button>
      </div>
    );
  };
  
  export default Navbar;
  