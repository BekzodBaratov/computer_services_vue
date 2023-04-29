<template>
  <div class="bg-primaryBlue w-full rounded-xl p-4 px-4">
    <div class="flex justify-between items-end pb-2 md:pb-6 lg:pb-8">
      <div class="flex gap-2 items-end">
        <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5007 18.5941C12.8777 18.5941 9.11523 14.8316 9.11523 10.2087C9.11523 5.58574 12.8777 1.82324 17.5007 1.82324C22.1236 1.82324 25.8861 5.58574 25.8861 10.2087C25.8861 14.8316 22.1236 18.5941 17.5007 18.5941ZM17.5007 4.01074C14.0882 4.01074 11.3027 6.79616 11.3027 10.2087C11.3027 13.6212 14.0882 16.4066 17.5007 16.4066C20.9131 16.4066 23.6986 13.6212 23.6986 10.2087C23.6986 6.79616 20.9131 4.01074 17.5007 4.01074Z"
            fill="white"
          />
          <path
            d="M30.0268 33.1771C29.4289 33.1771 28.9331 32.6812 28.9331 32.0833C28.9331 27.0521 23.7997 22.9687 17.4997 22.9687C11.1997 22.9687 6.06641 27.0521 6.06641 32.0833C6.06641 32.6812 5.57057 33.1771 4.97266 33.1771C4.37474 33.1771 3.87891 32.6812 3.87891 32.0833C3.87891 25.8562 9.98932 20.7812 17.4997 20.7812C25.0101 20.7812 31.1206 25.8562 31.1206 32.0833C31.1206 32.6812 30.6247 33.1771 30.0268 33.1771Z"
            fill="white"
          />
        </svg>
        <p class="text-white">{{ props.review.user.username }}</p>
      </div>
      <div>
        <!-- <p>{{ props.review.rating }}</p> -->
        <div class="text-white">{{ props.review.rating.toFixed(2) }} <i class="fas fa-star"></i></div>
      </div>
    </div>
    <div class="leading-relaxed text-white text-sm pb-2 md:pb-6 lg:pb-8">
      {{ props.review.body }}
    </div>
<!--    <p class="date text-white">{{ date(props.review?.createdAt) }}</p>-->
    <p class="date text-white">{{ (props.review?.createdAt) }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["review"]);
const date = (date) => {
  const createdAt = new Date(date);

  return `${createdAt.toLocaleDateString()} | ${createdAt.toLocaleTimeString()}`;
};
</script>
