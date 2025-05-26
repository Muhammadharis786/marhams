import {Link,NavLink,useNavigate} from 'react-router-dom'
function CardFeverDoctor (

    {
        Img,
        name,
        verified,
        bio1,
        bio2,
        raing,
        Experience,
        satisfication,
        charges,
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

function Neurologist(){



    return(


<>
<div className='pl-24  mt-4  pr-24 '>

<div className="title   pb-8 pt-4 pl-4  border-[1px] border-slate-200   rounded-lg ">
    <h1 className='font-poppins font-bold text-[18px]'>169 Best Neurologists In Karachi | Top Neuro Physicians</h1>
<p style={{ fontFamily: '"Noto Nastaliq Urdu", serif' }} className='text-[13px]'>  
دماغ کے سپیشلسٹ ڈاکٹر
</p>
</div>
</div>

        <div className="p-24">
    <CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/4511/dr-prof-arif-herekar-neurologist-karachi-4_170X170.webp'}
        name={' Prof. Dr. Arif Herekar'}
        verified={'PMDC Verified'}
        bio1={'Neurologist'}
        bio2={'MBBS, MCPS (Medicine), MD Neurology, Masters In Adult Neurology, Masters In Child Neurology, Diploma In Tropical Medicine'}
        Experience={'39 Yrs'}
        raing={'819'}
        satisfication={'94%'}
        charges={'3,500'}
        hospital={'Hilal-E-Ahmar House Hospital, Clifton, Karachi'}
        location={'Clifton, Karachi'}

    />
      <CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/29436/dr-mustafa-ali-raza-neurologist-karachi-73_170X170.webp'}
        name={'Dr. Mustafa Ali Raza'}
        verified={'PMDC Verified'}
        bio1={'Neurologist'}
        bio2={'MBBS, MS (Neurosurgery)'}
        raing={'159'}
        Experience={'9 Yrs'}
        satisfication={'96%'}
        charges={'1,000'}
        hospital={'Dr Mulazim Hussain Soomro Clinic, Power House, Ahmedpur East'}
        location={'CPower House, Ahmedpur East'}

    />

<CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/8073/dr-shahid-mustafa-neurologist-karachi_170X170.webp'}
        name={'Dr. Shahid Mustafa'}
        verified={'PMDC Verified'}
        bio1={'Neurologist'}
        bio2={'MBBS, Diplomate Of American Board Of Neurology'}
        raing={'942'}
        Experience={'30 Yrs'}
        satisfication={'100%'}
        charges={'2,00'}
        hospital={'Neuro Care Clinic, PECHS, Karachi'}
        location={'PECHS, Karachi'}
    />

    </div>
    </>
)
}

export default  Neurologist