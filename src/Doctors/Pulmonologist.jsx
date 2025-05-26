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

function Pulmonologist(){



    return(


<>
<div className='pl-24  mt-4  pr-24 '>

<div className="title   pb-8 pt-4 pl-4  border-[1px] border-slate-200   rounded-lg ">
    <h1 className='font-poppins font-bold text-[18px]'>196 Best Pulmonologists In Karachi</h1>
<p style={{ fontFamily: '"Noto Nastaliq Urdu", serif' }} className='text-[13px]'>  
پھیپھڑوں کے سپیشلسٹ ڈاکٹر
</p>
</div>
</div>

        <div className="p-24">
    <CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/18849/dr-zahid-hussain-pulmonologist-lung-specialist-karachi-77_170X170.webp'}
        name={' Dr. Zahid Hussain'}
        verified={'PMDC Verified'}
        bio1={'Pulmonologist / Lung Specialist'}
        bio2={'MBBS, MCPS (Chest Medicine &TB)'}
        Experience={'37 Yrs'}
        raing={'263'}
        charges={'1,800'}
        hospital={'Saifee Hospital, North Nazimabad, Karachi'}
        location={'North Nazimabad, Karachi'}

    />
      <CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/62195/dr-kamran-khan-pulmonologist-lung-specialist-karachi-83_170X170.webp'}
        name={'Dr. Azra Shamsi'}
        verified={'PMDC Verified'}
        bio1={'Pulmonologist / Lung Specialist'}
        bio2={'MBBS, MD (pulmonology), MCPS (Chest), DTCD (KU), FCCP (USA), CHPE'}
        raing={'30'}
        Experience={'15 Yrs'}
        satisfication={'75%'}
        charges={'1,000'}
        hospital={'Dr. Ziauddin Hospital (Clifton), Clifton, Karachi'}
        location={'Clifton, Karachi'}

    />

<CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/28826/maleeha-ayaz-pulmonologist-lung-specialist-lahore-26_170X170.webp'}
        name={'Dr. Maleeha Ayaz'}
        verified={'PMDC Verified'}
        bio1={'Pulmonologist / Lung Specialist'}
        bio2={'MBBS, MCPS (Pulmonology)*'}
        raing={'120'}
        Experience={'5 Yrs'}
        satisfication={'98%'}
        charges={'500'}
        hospital={'My City Hospital, Karachi, Karachi'}
        location={'Karachi, Karachi'}
    />

    </div>
    </>
)
}

export default  Pulmonologist