import mainsky from '../Assests/mainsky.png';
import mainone from '../Assests/mainone.png';
import iconmoneybag from '../Assests/icon_MoneyBag.png';
import icondramamasks from '../Assests/icon_dramamasks.png';
import iconchase from '../Assests/icon_chase.png';
import group from '../Assests/Group.png';
import groupstars from '../Assests/group-stars.png';
import onestar from '../Assests/one-star.png';

const SkyContainers = () => {

  const divsArray = new Array(6).fill(null);
  const texts = [
    'Long-Term success and stability',
    'Digital cultural exchange',
    'Empowering Artists',
    'Fostering a global community',
    'Preservation of cultural art',
    'Democratizing art globally'
  ];

  const images = [
    iconmoneybag,
    icondramamasks,
    iconchase,
    group,
    groupstars,
    onestar,
  ];
  return (
    <div style={{ backgroundImage: `url(${mainsky})` }} className='bg-no-repeat bg-cover py-20 pb-40'>
      <div className="container mx-auto">
        <div className='min-h-screen '>

          <div className='flex flex-col sm:flex-row justify-between flex-wrap gap-5' >
            <div className=" relative h-[300px] flex flex-col justify-center items-center px-7 w-[300px] text-center mx-auto md:w-[31%] sm:w-[48%]">

              <img alt='' src={mainone} className='absolute left-0 top-0 w-[100%] h-[100%]' style={{width: "100%"}} />
              <img src={iconmoneybag} className='w-[100px]' alt='' />
              <h6 className='text-white mt-4' >Long-Term success and stability</h6>
            </div>

            <div className=" relative h-[300px] flex flex-col justify-center items-center px-7 w-[300px] text-center mx-auto md:w-[31%] sm:w-[48%]">

              <img alt='' src={mainone} className='absolute left-0 top-0 w-[100%] h-[100%]' style={{width: "100%"}} />
              <img src={icondramamasks} className='w-[100px]' alt='' />
              <h6 className='text-white mt-4' >Digital cultural exchange</h6>
            </div>

            <div className=" relative h-[300px] flex flex-col justify-center items-center px-7 w-[300px] text-center mx-auto md:w-[31%] sm:w-[48%]">

              <img alt='' src={mainone} className='absolute left-0 top-0 w-[100%] h-[100%]' style={{width: "100%"}} />
              <img src={iconchase} className='w-[100px]' alt='' />
              <h6 className='text-white mt-4' >Empowering Artists</h6>
            </div>

            <div className=" relative h-[300px] flex flex-col justify-center items-center px-7 w-[300px] text-center mx-auto md:w-[31%] sm:w-[48%]">

              <img alt='' src={mainone} className='absolute left-0 top-0 w-[100%] h-[100%]' style={{width: "100%"}} />
              <img src={group} className='w-[100px]' alt='' />
              <h6 className='text-white mt-4' >Fostering a global community</h6>
            </div>

            <div className=" relative h-[300px] flex flex-col justify-center items-center px-7 w-[300px] text-center mx-auto md:w-[31%] sm:w-[48%]">

              <img alt='' src={mainone} className='absolute left-0 top-0 w-[100%] h-[100%]' style={{width: "100%"}} />
              <img src={groupstars} className='w-[100px]' alt='' />
              <h6 className='text-white mt-4' >Preservation of cultural art</h6>
            </div>

            <div className=" relative h-[300px] flex flex-col justify-center items-center px-7 w-[300px] text-center mx-auto md:w-[31%] sm:w-[48%]">

              <img alt='' src={mainone} className='absolute left-0 top-0 w-[100%] h-[100%]' style={{width: "100%"}} />
              <img src={onestar} className='w-[100px]' alt='' />
              <h6 className='text-white mt-4' >Democratizing art globally</h6>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default SkyContainers;