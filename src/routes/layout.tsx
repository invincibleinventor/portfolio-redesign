import { component$, Slot } from '@builder.io/qwik';
import Sidebar from '~/components/sidebar/sidebar';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class="w-screen h-screen relative overflow-x-hidden overflow-y-hidden ml-0 flex flex-row bg-neutral-900">
        <Header />
        <section class="mx-auto md:py-20 lg:py-32">
          <Slot />
        </section>
       
      </main>
     
    </>
  );
});
