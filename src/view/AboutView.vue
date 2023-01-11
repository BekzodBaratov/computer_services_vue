<template>
  <div class="container mx-auto grid md:grid-cols-2 gap-12 my-12 items-center">
    <div class="left">
      <h3 class="text-3xl pb-2 font-semibold">Our Mission</h3>
      <p class="pr-48">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a blanditiis aspernatur perspiciatis commodi
        quisquam distinctio animi atque obcaecati rerum incidunt, illum, nostrum minima dolorem, amet dolores eius
        corporis expedita quidem natus architecto mollitia! Rerum quos ea harum sit vel.
      </p>
    </div>
    <div class="right grid grid-cols-2 gap-3 h-[24rem] md:mx-16">
      <div class="bg-gray-300">
        <img class="object-cover object-center w-full h-full" src="../assets/img/about/service1.jpg" alt="" />
      </div>
      <div class="bg-gray-300">
        <img class="object-cover object-center w-full h-full" src="../assets/img/about/service2.jpg" alt="" />
      </div>
      <div class="col-span-2 bg-gray-300">
        <img class="object-cover object-center w-full h-full" src="../assets/img/about/service3.jpg" alt="" />
      </div>
    </div>
  </div>
  <div class="container mx-auto text-center bg-slate-300 rounded-md ring ring-offset-4 ring-slate-300 my-16 py-16">
    <h2 class="text-3xl font-semibold mb-3">Meet Our Leaders</h2>
    <p class="pb-4 md:pb-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 items-center my-12 px-16 md:px-52">
      <div v-for="i in 4" :key="i" class="cardLeads flex flex-col">
        <div class="overflow-hidden rounded-full flex justify-center mb-2 group">
          <img
            class="w-52 aspect-square rounded-full object-cover object-center duration-200 group-hover:scale-110"
            src="https://imageio.forbes.com/specials-images/imageserve/60676384c5f722607f2ae0df/0x0.jpg?format=jpg&crop=1078,1078,x0,y2,safe&height=416&width=416&fit=bounds"
            alt=""
          />
        </div>
        <div class="title text-xl font-semibold">Justin Baber</div>
        <div>Team lead</div>
        <div></div>
      </div>
    </div>
    <div class="flex justify-center my-3">
      <ButtonFill>
        <span class="py-2 px-3">View other Leaders</span>
      </ButtonFill>
    </div>
  </div>
</template>

<script setup>
import ButtonFill from "../components/buttons/ButtonFill.vue";
</script>
