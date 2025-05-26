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

        
        {/* Appointment Button */}
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

function Dermatologists(){



    return(


<>
<div className='pl-24  mt-4  pr-24 '>

<div className="title   pb-8 pt-4 pl-4  border-[1px] border-slate-200   rounded-lg ">
    <h1 className='font-poppins font-bold text-[18px]'>454 Best Dermatologists In Karachi | Top Skin Specialists</h1>
<p style={{ fontFamily: '"Noto Nastaliq Urdu", serif' }} className='text-[13px]'>  
ماہر امراض جلد
</p>
</div>
</div>

        <div className="p-24">
    <CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/9226/dr-zafar-ahmed-dermatologist-karachi-34_170X170.webp'}
        name={' Dr. Zafar Ahmed'}
        verified={'PMDC Verified'}
        bio1={'Dermatologist'}
        bio2={'MBBS, CRCP, D.DERM (Thailand ), Diploma in Dermato-Surgery (Bangkok), Research Course (UK)'}
        Experience={'27 Yrs'}
        raing={'2,835'}
        satisfication={'97%'}
        charges={'1,500'}
        hospital={'Deep Ocean Dermatology, Skin Laser Center, Clifton, Karachi'}
        location={' Clifton, Karachi'}

    />
      <CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/17383/dr-khurram-mushir-dermatologist-karachi-98_170X170.webp'}
        name={'Dr. Khurram Mushir'}
        verified={'PMDC Verified'}
        bio1={'Dermatologist'}
        bio2={'MBBS, D-Derma (UK), MSc'}
        raing={'459'}
        Experience={'12 Yrs'}
        satisfication={'96%'}
        charges={'2,000'}
        hospital={'Dr Aisha Health Vision Hospital, Bahadarabad, Karachi'}
        location={' Bahadarabad, Karachi'}

    />

<CardFeverDoctor
        Img={'https://staticconnect.marham.pk/assets/doctors/30491/dr-zafar-ahmed-dermatologist-karachi-8_170X170.webp'}
        name={'Dr. Zafar Ahmad'}
        verified={'PMDC Verified'}
        bio1={'Dermatologist'}
        bio2={'MBBS, Diploma in Dermatological Medicine'}
        raing={'62'}
        Experience={'36 Yrs'}
        satisfication={'100%'}
        charges={'2,00'}
        hospital={'Taj Consultant Clinics (Gulshan-e-Iqbal), Gulshan e Iqbal block 3, Karachi'}
        location={' Gulshan e Iqbal block 3, Karachi'}

    />

    </div>
    </>
)
}

export default  Dermatologists