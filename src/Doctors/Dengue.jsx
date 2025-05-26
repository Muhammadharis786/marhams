import {Link,NavLink,useNavigate} from 'react-router-dom'
function CardFeverDoctor (

    {
        Img,
        name,
        verified,
        charges,
        bio1,
        bio2,
        raing,
        Experience,
        satisfication,
        hospital,
        location,
        



    }
){

    return(
        <div className=" bg-white  shadow-lg  mb-14 font-poppins rounded-lg">
            <div className="flex items-center   ">
                <div className="   p-4 ">
                <img src={Img} alt=""  className="rounded-full border-2 border-black"/>
                </div>
        
        
               
                <div className="details ">
                <h1 className="underline font-semibold">{name}</h1>
                <h5  className="text-[14px] text-green-500 font-medium">{verified}</h5>
                <div className="mb-12 mt-4">
                <p className="text-[14px] font-light">{bio1}</p>
                <p className="text-[14px] font-light">{bio2}</p>
                </div>
                <div className="flex justify-center">
                    <div className="pr-52">
                        <h1 className="text-[14px]">Reviews</h1>
                        <h1 className="text-orange-500 font-bold" >{raing}</h1>
                    </div >
                    <div  className="pr-52">
                        <h1 className="text-[14px]">Experience</h1>
                        <h1 className="text-orange-500 font-bold" >{Experience}</h1>
                    </div >
                    <div  className="pr-52">
                        <h1 className="text-[14px]">Satisfaction</h1>
                        <h1 className="text-orange-500 font-bold" >{satisfication}</h1>
                    </div>
                  
                </div>
                </div>  

        
        <div className="appoinment ">
        <Link
          to="/gendocAppoinment"
          state={{ charges, hospital , location  ,name }} // Passing props as state
        >
          <button
            type="button"
            className="bg-cyan-800 hover:bg-cyan-600 p-3 pr-14 pl-14 text-white rounded-3xl"
          >
            Book Appointment
          </button>
        </Link>
        </div>
        </div>

        <div className=' m-4  pb-12  flex   '>
            <div className=' border-slate-200 border-[1px]   pt-2 pb-2  pl-6 pr-9 rounded-md' >
             <h1 className='text-cyan-700 font-semibold  text-[14px]'>{hospital}</h1>  
             <h1 className='font-light text-[12px] mb-2'>Available Today</h1>
             <div className='text-[14px]'>
             <h1>Rs <span className='font-bold'>{charges}</span>  </h1>
             </div>
             </div>
            </div>
                        
        </div>
 
           
)
        
}
    
         
        
        
          

           
            
            

 

function Dengue(){



    return(


<>
<div className='pl-24  mt-4  pr-24 '>

<div className="title   pb-8 pt-4 pl-4  border-[1px] border-slate-200   rounded-lg ">
    <h1 className='font-poppins font-bold text-[18px]'>652 Best General Physicians In Karachi</h1>
<p style={{ fontFamily: '"Noto Nastaliq Urdu", serif' }} className='text-[13px]'>  
جنرل فزیشن
</p>
</div>
</div>

        <div className="p-24">
    <CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/4262/dr-nouman-anjum-general-practitioner-lahore-88_170X170.webp'}
        name={'Dr. Muhammad Nouman Anjum'}
        verified={'PMDC Verified'}
        bio1={'General Physician, Internal Medicine Specialist, Diabetologist, Family Medicine'}
        bio2={'MBBS, Certified Diabetologist (UK), Certified Hypertension Specialist (PSIM)'}
        raing={'2,083'}
        Experience={'10 Yrs'}
        satisfication={'99%'}
        hospital={'Cure Clinic, Garhi Shahu, Lahore'}
        location={'Garhi Shahu, Lahore'}
        charges={1200}

    />
      <CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/8315/dr-mujahid-israr-gastroenterologist-lahore-1_170X170.webp'}
        name={'Asst. Prof. Dr. Mujahid Israr'}
        verified={'PMDC Verified'}
        bio1={'Gastroenterologist, Liver Specialist, General Physician, Internal Medicine Specialist'}
        bio2={'MBBS, FCPS (Gastroenterology), FCPS (Internal Medicine), FACG (US), SCE (UK), ESEGH ( European Board Of'}
        raing={'1,441'}
        Experience={'15 Yrs'}
        satisfication={'97%'}
        hospital={'Omar Hospital & Cardiac Centre, Jail Road, Lahore'}
        location={'Jail Road, Lahore'}
        charges={1000}

    />

<CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/64031/dr-rabia-shafqat-general-physician-sialkot-92_170X170.webp'}
        name={'Dr. Rabia Shafqat'}
        verified={'PMDC Verified'}
        bio1={'General Physician'}
        bio2={'MBBS'}
        raing={'83'}
        Experience={'2 Yrs'}
        satisfication={'60%'}
        hospital={'Dha Medical Centre, DHA Defence, Lahore'}
        location={'DHA Defence, Lahore'}
        charges={500}

    />

    </div>
    </>
)
}

export default  Dengue