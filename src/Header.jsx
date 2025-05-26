import { Link } from "react-router-dom";

function Header() {
    return (
      <>
        <div className="navbar flex justify-around content-center items-center font-poppins shadow-lg">
          <Link to={'Homes'}>
          <div className="logo cursor-pointer">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQELW5f7BAS0Hg/company-logo_200_200/company-logo_200_200/0/1636697263460/marhamhc_logo?e=2147483647&v=beta&t=JIm7uA0XiionBsS4Ni4NxgrLtvVS0Y1nSkVuWM_V_A8"
              alt="Error"
              className="h-[100px] w-[150px]"
            />
          </div>
          </Link>
          <div className="list">
            <ul className="flex ">
              <li className="p-3 cursor-pointer  transition-all duration-300 hover:bg-gray-100">All Doctors in Pakistan</li>
              <li className="p-3 cursor-pointer  transition-all duration-300 hover:bg-gray-100">Hospitals</li>
              <li className="p-3 cursor-pointer transition-all duration-300 hover:bg-gray-100">Surgeries</li>
              <li className="p-3 cursor-pointer transition-all duration-300 hover:bg-gray-100">Medicines</li>
              <li className="p-3 cursor-pointer transition-all duration-300 hover:bg-gray-100">Shop</li>
              <li className="p-3 cursor-pointer transition-all duration-300 hover:bg-gray-100">Lab Tests</li>
            </ul>
          </div>
          <div className="login relative group flex items-center">
            <h1 className="pr-2 cursor-pointer">Login</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
              alt="Login Icon"
              className="h-[50px] w-[50px] cursor-pointer"
            />
            
            <div className="absolute top-[50px] hidden group-hover:flex  w-[150px] flex-col bg-white shadow-lg border rounded-md">
              <Link to={'/Homes'} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a
                href="/login/patient"
                
              >
                Patient
              </a>
              </Link>
              <a
                href="/admin"
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Doctor
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Header;
  
