import { component$ } from '@builder.io/qwik';

import { Cameras, GH, Terminals, Mails , Profiles, Hearts} from '~/integrations/react/react';

export default component$(() => {
  return (
 <div class="bg-neutral-800 shadow-lg my-auto  m-5 font-apercu px-3 py-3 h-[calc(100vh-60px)] w-max  rounded-md ">
  <div class="w-12 h-12 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 relative flex flex-col items-center content-center">
  
<Cameras size={5} color="white" className='mx-auto absolute top-0 right-0 bottom-0 left-0 my-auto w-[22px] h-[22px]'/>
  </div>
  <div class='my-5'>
  <div class="flex flex-col space-y-3 items-center  content-center">
  <div class="w-12 py-0 rounded-md bg-gradient-to-r from-neutral-700/50 to-neutral-600/75 relative h-12">
  <Terminals size={5} color="white" className='opacity-80 mx-auto absolute top-0 right-0 bottom-0 left-0 my-auto w-[22px] h-[22px]'/>

 </div>
 <div class="w-12 py-0 rounded-md bg-gradient-to-r from-neutral-700/50 to-neutral-600/75 relative h-12">
  <GH size={5} color="white" className='opacity-80 mx-auto absolute top-0 right-0 bottom-0 left-0 my-auto w-[22px] h-[22px]'/>

 </div>
 <div class="w-12 py-0 rounded-md bg-gradient-to-r from-neutral-700/50 to-neutral-600/75 relative h-12">
  <Mails size={5} color="white" className='opacity-80 mx-auto absolute top-0 right-0 bottom-0 left-0 my-auto w-[22px] h-[22px]'/>

 </div>

 </div>
 </div>
 <div class="absolute bottom-3 py-5 mt-auto">
 <div class="w-12 py-0 mb-4 rounded-md bg-gradient-to-r from-red-500/50 to-red-400/50 relative h-12">
 <Hearts size={5}  className='opacity-100 mx-auto  text-red-200 absolute top-0 right-0 bottom-0 left-0 my-auto w-[22px] h-[22px]'/>

  </div>
 <div class="w-12 py-0  rounded-md bg-gradient-to-r from-neutral-200/75 to-neutral-100/75 relative h-12">
 <Profiles size={5} color="black" className='opacity-100 mx-auto absolute top-0 right-0 bottom-0 left-0 my-auto w-[22px] h-[22px]'/>

  </div>
  </div>
 </div>
  );
});
