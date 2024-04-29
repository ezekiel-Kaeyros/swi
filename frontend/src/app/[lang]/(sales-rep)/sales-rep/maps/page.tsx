import Maps from '@/app/common/mobileComponents/modules/maps/maps';

export default function page({}) {
  return (
    <div className="h-full p-8 2xl:w-11/12 mx-auto relative">
      {/* <div className='flex justify-center items-center fixed w-full h-screen z-10 top-0 left-0'>
        <div className='backdrop-blur-lg h-screen w-full absolute'>
        </div>
        <AgentModal />
      </div> */}
      <Maps />
    </div>
  );
}
