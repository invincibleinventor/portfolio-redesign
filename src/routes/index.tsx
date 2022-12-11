import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Downs, Sphere, Xarrows } from '~/integrations/react/react';
export default component$(() => {
  return (
    <section class="md:px-10 px-4 sm:px-6 lg:px-20 py-8 mx-auto">
          <div class="flex flex-row my-auto  lg:h-56 w-full items-center content-center">
    <div class="w-3  h-[150px] md:block shadow-lg hidden my-auto rounded-full bg-gradient-to-b from-blue-600 to-neutral-500 bg-opacity-100"></div>
    <div class="flex flex-col my-auto mx-auto lg:mx-0 md:pl-10  mt-5  mb-3 md:mb-6  lg:py-0 lg:pt-0 ">
    <h1 class="font-bold  text-neutral-200 drop-shadow-xl font-sans mb-[10px] md:mb-[16px] text-[40px] sm:text-5xl md:text-6xl lg:text-7xl ">Hi, <span class={"text-neutral-200 font-sans"}>I'm Bala</span></h1>
    <h1 class="font-medium text-neutral-400 opacity-80 font-apercu mb-1 lg:mb-[4px] ml-[1px] lg:ml-1 text-lg md:text-xl lg:text-[20px] lg:leading-[32px] lg:w-3/5 w-4/5 ">I Make Products That Change Lifes. I Make Real Game-Changers.I Make Products That Change Lifes. I Make Real Game-Changers.</h1>

    </div>
    </div>  
    <Sphere client:load></Sphere>
   
<div class="flex hidden flex-col space-y-7  mt-5 lg:mt-10 lg:w-3/4 w-4/4">
  <div class="  rounded-xl shadow-xl -ml-2 flex flex-row">
    <div class="w-2/6 flex rounded-l-xl bg-neutral-800 px-6 py-5 flex-row space-x-0 items-center content-center">
      <div class="w-1/6   items-center content-center flex">
      </div>
      <div class="w-5/6">
        <span class="font-apercu text-md lg:text-xl font-medium text-white">December 12, 2022</span>
</div>

    </div>
    <div class="w-4/6 rounded-r-xl bg-black bg-opacity-20 px-6 py-5">
    <span class="font-apercu text-md lg:text-xl font-normal text-neutral-300">I made this awesome thing! A Timeline Component! Great</span>

    </div>

    </div> 
    <div class=" opacity-70  rounded-xl shadow-xl -ml-2 flex flex-row">
    <div class="w-2/6 flex rounded-l-xl bg-neutral-800 px-6 py-5 flex-row space-x-0 items-center content-center">
      <div class="w-1/6   items-center content-center flex">
      </div>
      <div class="w-5/6">
        <span class="font-apercu text-md lg:text-xl font-medium text-white">November 12, 2022</span>
</div>

    </div>
    <div class="w-4/6 rounded-r-xl bg-black bg-opacity-20 px-6 py-5">
    <span class="font-apercu text-md lg:text-xl font-normal text-neutral-300">I started this awesome thing! A QwikJs Website! Cheers!!</span>

    </div>

    </div> 
    <div class=" opacity-70 rounded-xl shadow-xl -ml-2 flex flex-row">
    <div class="w-2/6 flex rounded-l-xl bg-neutral-800 px-6 py-5 flex-row space-x-0 items-center content-center">
      <div class="w-1/6   items-center content-center flex">
      </div>
      <div class="w-5/6">
        <span class="font-apercu text-md lg:text-xl font-medium text-white">November 09, 1999</span>
</div>

    </div>
    <div class="w-4/6 rounded-r-xl bg-black bg-opacity-20 px-6 py-5">
    <span class="font-apercu text-md lg:text-xl font-normal text-neutral-300">I was made by my awesome parents!</span>

    </div>

    </div> 
    <div class="flex flex-row mt-10 space-x-3 items-center content-center  mx-auto">
    <h1 class="font-apercu  text-[15px] lg:text-xl font-medium text-white text-center">See More History</h1><Downs className="text-white block my-auto" size={18}></Downs>
    </div>
</div>


    </section>
    
    
  );
});

export const head: DocumentHead = {
  title: 'Welcome to NeoBrutalism',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
