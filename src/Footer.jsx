import getImage from './gets.png'; // Import the image

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {   faMoneyBill,faNotesMedical,faHeadphones,faLock}  from "@fortawesome/free-solid-svg-icons"
import {faFacebook,faTwitter,faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons"
import app from './app.png';


function Footer() {
  return (
    <>
      <div className="footerfirst bg-cyan-700 text-white font-poppins">

        <div className='pl-[100px] pt-[20px] pb-[20px]'>
          <h1 className='p-2 font-bold '>Download Marham App</h1>
          

          <div className='flex items-center ml-[-15px]   p-2'>
          <img src={getImage} alt="Get Marham App"  className=' h-[65px] w-[200px]   '/>
          <img src={app} alt="Get Marham App"  className='  h-[50px] w-[190px]    '/>
          </div>

          <h1 className='font-bold p-2'>Follow Us</h1>

          <div className="socialIcons  ml-[-10px] p-2">
          <FontAwesomeIcon icon={faTwitter}  className='h-[20px] p-4 m-2 bg-cyan-600 rounded-md' />
          <FontAwesomeIcon icon={faFacebook} className='h-[20px]  p-4  m-2 bg-cyan-600 rounded-md'  />
          <FontAwesomeIcon icon={faInstagram} className='h-[20px]  p-4 m-2  bg-cyan-600 rounded-md' />
          <FontAwesomeIcon icon={faYoutube} className='h-[20px]  p-4  m-2 bg-cyan-600 rounded-md' />

          </div>

        </div>
      </div>
     



      <div className="footersecond bg-cyan-950 text-white">
         <div className='flex justify-evenly'>
      <div className="status flex items-center justify-between  border-b-[1px] border-cyan-900">
         <div className='flex items-center m-7 '>
            <div className='p-3 text-[30px] '> 
            <FontAwesomeIcon icon={faNotesMedical} />
            </div>
            <div className=''>
               <h2 className='leading-5'>PMC Verified Doctors</h2>
               <h2 className='text-[15px] '>Authentic & updated information</h2>
            </div>
         </div>
         <div className='flex items-center  m-7'>
            <div className='p-3 text-[30px]'> 
            <FontAwesomeIcon icon={faMoneyBill} />
            </div>
            <div className=''>
               <h2 className='leading-5'>Money back guarantee</h2>
               <h2 className='text-[15px] '>We return money within 48 hours</h2>
            </div>
         </div>
       
         <div className='flex items-center m-7'>
            <div className='p-3 text-[30px]'> 
            <FontAwesomeIcon icon={faHeadphones} />

            </div>
            <div className=''>
               <h2 className='leading-5'>5/7 customer support</h2>
               <h2 className='text-[15px] '>Well-trained & Supportive team</h2>
            </div>
         </div>
         <div className='flex items-center m-7'>
            <div className='p-3 text-[30px]'> 
            <FontAwesomeIcon icon={faLock} />


            </div>
            <div className=''>
               <h2 className='leading-5'>Secure online payment</h2>
               <h2 className='text-[15px] '>We possess SSL / Secure сertificate</h2>
            </div>
         </div>
      </div>
      </div>

      <div className="list flex ml-[70px] p-12">
            <p className='p-2'>Terms & Policies</p>
            <p className='p-2'> About Us</p>
            <p className='p-2'>Doctors</p>
            <p className='p-2'>Partnerships</p>
        
         
         
      </div>
      </div>
    </>
  );
}

export default Footer;
