<template>
  <div class="bg-body-bg-col border border-black-900 font-bodyFont">
    <!-- Navigation Bar -->
    <!-- upper-div for background the colour change -->
    <div class="header-backGround-set"> 
      <img  src="../images/background-newsletter.488a0204.jpg" alt="">
    </div>
    <div >  
      <div class="flex p-10">
      <img class="" src="../images/logo2.png " alt="" />
      <div class="flex items-center justify-center gap-4 ml-auto">
        <p class="text-blue-500 flex-col">04-06 of April, 2022</p>
        <div class="h-2 w-2 bg-blue-500 rotate-45 flex-col"></div>
        <p class="text-blue-500 flex-col">Los Angeles, CA</p>
      </div>

      <div class="flex items-center ml-auto">
        <button
          class="rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
        >
          Get your tickets
        </button>
      </div>
    </div>
    <!-- Design Conferenece container -->
    <div>
      <div class="flex items-center justify-center">
        <p
          class="text-blue-600 text-6xl font-[800] text-left w-60 mt-10 leading-tight"
        >
          A design conference for the dark side.
        </p>
      </div>
      <div class="flex items-center justify-center mt-10">
        <p class="text-left w-60 text-2xl leading-10">
          The next generation of web users are tech-savvy and suspicious. They
          know how to use dev tools, they can detect a phishing scam from a mile
          away, and they certainly are't accepting any checks from Western
          Union.
        </p>
      </div>
      <div class="flex items-center justify-center mt-10">
        <p class="text-left w-60 text-2xl leading-10">
          At DeceptiConf you'll learn about the latest dark patterns being
          developed to trick even the smartest visitors, and you'll learn how to
          deploy them without ever being detected.
        </p>
      </div>
      <div class="flex justify-center mx-auto mt-20 gap-20 w-60">
        <div class="text-left mr-auto leading-8">
          <p class="text-blue-500">Speakers</p>
          <p class="text-design-conf-speaker text-2xl font-bold">18</p>
        </div>
        <div class="text-left mr-auto leading-8">
          <p class="text-blue-500">People Attending</p>
          <p class="text-design-conf-speaker text-2xl font-bold">2,091</p>
        </div>
        <div class="text-left mr-auto leading-8">
          <p class="text-blue-500">Venue</p>
          <p class="text-design-conf-speaker text-2xl font-bold">
            Staples Center
          </p>
        </div>
        <div class="text-left mr-auto leading-8">
          <p class="text-blue-500">Location</p>
          <p class="text-design-conf-speaker text-2xl font-bold">Los Angeles</p>
        </div>
      </div>
    </div>

    </div>
    
    <!-- Speaker related info -->
    <div class="text-start w-1/2 mt-36 ml-10">
      <p class="text-blue-600 text-5xl leading-tight">Speakers</p>
      <p class="text-design-conf-speaker text-2xl leading-normal">
        Learn from the experts on the cutting-edge of deception at the most
        sinister companies.
      </p>
    </div>
    <!-- Opening Day carts -- -->

    <div class="grid grid-cols-[1fr,3fr] gap-4 ">
      
        <div class="w-56 p-10">
          <div class="text-left flex items-center">
            <div class="h-2 w-2 bg-blue-500 rotate-45"></div>
            <div class="ml-10">
              <p class="text-blue-500">Opening Day</p>
              <p class="text-design-conf-speaker text-2xl font-bold pt-2">
                April 4
              </p>
            </div>
          </div>
          <div>
            <div class="text-left flex items-center">
              <div class="h-2 w-2 bg-blue-500 rotate-45"></div>
              <div class="ml-10">
                <p class="text-blue-500 mt-10">Speakers & Workshops</p>
                <p class="text-design-conf-speaker text-2xl font-bold pt-2">
                  April 5
                </p>
              </div>
            </div>
            <div class="text-left flex items-center">
              <div class="h-2 w-2 bg-blue-500 rotate-45"></div>
              <div class="ml-10">
                <p class="text-blue-500 mt-10">Interviews</p>
                <p class="text-design-conf-speaker text-2xl font-bold pt-2">
                  April 7
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Cart Images -->
        <div>
          <div class="flex flex-row pt-10 gap-10 mb-8">
            
            <div class="w-25 ">
              <img
                class="rounded-cart-radius h-250 hover:scale-110 transition duration-500 cursor-pointer"
                src="../images/steven-mchail.jpg"
                alt=""
              />
              <div class="text-left ml-2 mt-3">
                <p class="mt-5 font-bold text-xl">Steven McHail</p>
                <p class="pt-2">Designer at Globex Corporation</p>
              </div>
            </div>
            <div class="w-25">
              <img
                class="rounded-cart-radius h-250 hover:scale-110 transition duration-500 cursor-pointer"
                src="../images/jaquelin-isch.jpg"
                alt=""
              />
              <div class="text-left ml-2 mt-3">
                <p class="mt-5 font-bold text-xl">Jaquelin Isch</p>
                <p class="pt-2">UX Design at InGen</p>
              </div>
            </div>
            <div class="w-25">
              <img
                class="rounded-cart-radius h-250 hover:scale-110 transition duration-500 cursor-pointer"
                src="../images/dianne-guilianelli.jpg"
                alt=""
              />
              <div class="text-left ml-2 mt-3">
                <p class="mt-5 font-bold text-xl">Dianne Guilianelli</p>
                <p class="pt-2">General Manager at Initech</p>
              </div>
            </div>
          </div>
          <div class="flex flex-row pt-10 gap-10 mb-8">
            <div class="w-25">
              <img
                class="rounded-cart-radius h-250 hover:scale-110 transition duration-500 cursor-pointer"
                src="../images/ronni-cantadore.jpg"
                alt=""
              />
              <div class="text-left ml-2 mt-3">
                <p class="mt-5 font-bold text-xl">Ronni Cantadore</p>
                <p class="pt-2">Design Engineer at Weyland-Yutani</p>
              </div>
            </div>
            <div class="w-25">
              <img
                class="rounded-cart-radius h-250 hover:scale-110 transition duration-500 cursor-pointer"
                src="../images/erhart-cockrin.jpg"
                alt=""
              />
              <div class="text-left ml-2 mt-3">
                <p class="mt-5 font-bold text-xl">Erhart Cockrin</p>
                <p class="pt-2">Product Lead at Cyberdyne Systems</p>
              </div>
            </div>
            <div class="w-25">
              <img
                class="rounded-cart-radius h-250 hover:scale-110 transition duration-500 cursor-pointer"
                src="../images/parker-johnson.jpg"
                alt=""
              />
              <div class="text-left ml-2 mt-3">
                <p class="mt-5 font-bold text-xl">Parker Johnson</p>
                <p class="pt-2">UI Designer at MomCorp</p>
              </div>
            </div>
          </div>
        </div>
      
    </div>

    <!-- three-day-schedule  -->
    <div class="text-start w-60 mt-44 ml-10">
      <p class="text-blue-600 text-5xl leading-tight">
        Our three day schedule is jam-packed with brilliant, creative, evil
        geniuses.
      </p>
      <p class="text-design-conf-speaker text-2xl leading-normal">
        The worst people in our industry giving the best talks you’ve ever seen.
        Nothing will be recorded and every attendee has to sign an NDA to watch
        the talks.
      </p>
    </div>
    <!-- dates with detail of each speaker -->

    <div class="flex">
      <!-- 4th of april first -->
      <div class="text-left m-10 w-30 custom-class">
        <p class="text-design-conf-speaker text-2xl font-bold pt-2 pb-4">
          April 4
        </p>
        <p class="text-design-conf-speaker text-lg pb-6">
          The first day of the conference is focused on dark patterns for
          ecommerce.
        </p>
        <div class="bg-white/60 shadow-lg text-center">
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Steven McHail
          </p>
          <p class="text-design-conf-speaker leading-8">
            Not so one-time payments
          </p>
          <p class="text-date-colour pb-6">9:00AM - 10:00AM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />

          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Jaquelin Isch
          </p>
          <p class="text-design-conf-speaker leading-8">The finer print</p>
          <p class="text-date-colour pb-6">10:00AM - 11:00AM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Dianne Guilianelli
          </p>
          <p class="text-design-conf-speaker leading-8">
            Post-purchase blackmail
          </p>
          <p class="text-date-colour pb-6">11:00AM - 12:00AM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">Lunch</p>
          <p class="text-date-colour pb-6">12:00PM - 1:00PM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Ronni Cantadore
          </p>
          <p class="text-design-conf-speaker leading-8">Buy or die</p>
          <p class="text-date-colour pb-6">1:00PM - 2:00PM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Erhart Cockrin
          </p>
          <p class="text-design-conf-speaker leading-8">
            In-person cancellation
          </p>
          <p class="text-date-colour pb-6">2:00PM - 3:00PM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Parker Johnson
          </p>
          <p class="text-design-conf-speaker leading-8">
            The pay/cancel switcheroo
          </p>
          <p class="text-date-colour pb-6">3:00PM - 4:00PM PST</p>
        </div>
      </div>
      <!-- 5Th April Details -->
      <div class="text-left m-10 w-30 custom-class">
        <p class="text-design-conf-speaker text-2xl font-bold pt-2 pb-4">
          April 5
        </p>
        <p class="text-design-conf-speaker text-lg pb-6">
          Next we spend the day talking about deceiving people with technology.
        </p>
        <div class="bg-white/60 shadow-lg text-center">
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Steven McHail
          </p>
          <p class="text-design-conf-speaker leading-8">
            Not so one-time payments
          </p>
          <p class="text-date-colour pb-6">9:00AM - 10:00AM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />

          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Jaquelin Isch
          </p>
          <p class="text-design-conf-speaker leading-8">The finer print</p>
          <p class="text-date-colour pb-6">10:00AM - 11:00AM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Dianne Guilianelli
          </p>
          <p class="text-design-conf-speaker leading-8">
            Post-purchase blackmail
          </p>
          <p class="text-date-colour pb-6">11:00AM - 12:00AM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">Lunch</p>
          <p class="text-date-colour pb-6">12:00PM - 1:00PM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Ronni Cantadore
          </p>
          <p class="text-design-conf-speaker leading-8">Buy or die</p>
          <p class="text-date-colour pb-6">1:00PM - 2:00PM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Erhart Cockrin
          </p>
          <p class="text-design-conf-speaker leading-8">
            In-person cancellation
          </p>
          <p class="text-date-colour pb-6">2:00PM - 3:00PM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Parker Johnson
          </p>
          <p class="text-design-conf-speaker leading-8">
            The pay/cancel switcheroo
          </p>
          <p class="text-date-colour pb-6">3:00PM - 4:00PM PST</p>
        </div>
      </div>
      <!-- 6Th April details -->
      <div class="text-left m-10 w-30 custom-class">
        <p class="text-design-conf-speaker text-2xl font-bold pt-2 pb-4">
          April 6
        </p>
        <p class="text-design-conf-speaker text-lg pb-6">
          We close out the event previewing new techniques that are still in
          development.
        </p>
        <div class="bg-white/60 shadow-lg text-center">
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Steven McHail
          </p>
          <p class="text-design-conf-speaker leading-8">
            Not so one-time payments
          </p>
          <p class="text-date-colour pb-6">9:00AM - 10:00AM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />

          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Jaquelin Isch
          </p>
          <p class="text-design-conf-speaker leading-8">The finer print</p>
          <p class="text-date-colour pb-6">10:00AM - 11:00AM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Dianne Guilianelli
          </p>
          <p class="text-design-conf-speaker leading-8">
            Post-purchase blackmail
          </p>
          <p class="text-date-colour pb-6">11:00AM - 12:00AM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">Lunch</p>
          <p class="text-date-colour pb-6">12:00PM - 1:00PM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Ronni Cantadore
          </p>
          <p class="text-design-conf-speaker leading-8">Buy or die</p>
          <p class="text-date-colour pb-6">1:00PM - 2:00PM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Erhart Cockrin
          </p>
          <p class="text-design-conf-speaker leading-8">
            In-person cancellation
          </p>
          <p class="text-date-colour pb-6">2:00PM - 3:00PM PST</p>
          <hr class="border-t border-gray-300 w-1/2 mx-auto" />
          <p class="text-design-conf-speaker text-xl font-bold pt-10">
            Parker Johnson
          </p>
          <p class="text-design-conf-speaker leading-8">
            The pay/cancel switcheroo
          </p>
          <p class="text-date-colour pb-6">3:00PM - 4:00PM PST</p>
        </div>
      </div>
    </div>
    <!-- Current sponserships -->
    <div class=" p-10 mt-40">
      <p
        class="text-design-conf-speaker text-4xl mx-auto w-1/2 leading normal font-bold"
      >
        Current sponsorships for our workshops and speakers.
      </p>
      <div class="flex gap-24 mt-20 justify-center items-center">
        <div>
          <img class="w-40" src="../images/transistor.a1e38d49.png" alt="" />
        </div>
        <div>
          <img class="w-40" src="../images/tuple.2f54ed03.png" alt="" />
        </div>
        <div >
          <img class="w-40" src="../images/statickit.2e06fcea.png" alt="" />
        </div>
      </div>
      <div class="flex gap-24 mt-10 justify-center items-center">
        <div>
          <img class="w-40" src="../images/mirage.e12f40ad.png" alt="" />
        </div>
        <div>
          <img class="w-40" src="../images/laravel.6faebf7c.png" alt="" />
        </div>
        <div>
          <img class="w-40" src="../images/statamic.923101b6.png" alt="" />
        </div>
      </div>
      <div class="px-20 py-20 mt-32 bg-blue-200 rounded-3xl">
        <p
          class="text-design-conf-speaker text-4xl w-1/2 leading normal font-bold text-left mb-4"
        >
          Stay up to date
        </p>
        <p class="text-design-conf-speaker leading-8 text-left mb-10">
          Get updates on all of our events and be the first to get notified when
          tickets go on sale.
        </p>
        <p class="text-design-conf-speaker text-xl font-bold pt-10 text-left">
          Sign up to our newsletter <span aria-hidden="true">↓</span>
        </p>
        <div
          class="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900"
        >
          <input
            type="email"
            required=""
            placeholder="Email address"
            aria-label="Email address"
            class="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          /><button
            class="inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
            type="submit"
          >
            <span class="sr-only sm:not-sr-only">Sign up today</span
            ><span class="sm:hidden"
              ><svg aria-hidden="true" viewBox="0 0 24 24" class="h-6 w-6">
                <path
                  d="m14 7 5 5-5 5M19 12H5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
            ></span>
          </button>
        </div>
      </div>
      <!-- Copy_right section -->
      <div class="flex mt-10">
        <img class="" src="../images/logo2.png" alt="" />
        <div class="flex flex-col justify-center ml-auto">
          <p class="text-center">
            Copyright © 2023 DeceptiConf, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: "HomePage",
  components: {
    // FontAwesomeIcon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap');

body {
  font-family: 'Manrope', sans-serif;
}
.custom-class {
  width: 30%;
}
.header-backGround-set{
  background-image: url(../images/background-newsletter.488a0204.jpg);
  background-repeat: no-repeat;
  position: absolute;
  height: 1000px;
  width: 40%;
  top: 40px;
  left: 40px;
  z-index: 1;
  opacity: 0.5;
}
</style>
