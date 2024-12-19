<template>
  <ul>
    <li class="flex flex-col gap-2 p-4 text-xl border-4 mx-5 mt-4 my-10">
      <div>Coding</div>
      <div class="flex h-8 overflow-hidden rounded bg-gray-100 border border-gray-200">
        <div
          class="bg-red-300"
          style="width: 10%;"
        />
      </div>
      <div class="flex justify-between">
        <span>10%</span>
        <span>03:00 / 30:00 </span>
      </div>
    </li>
    <li class="flex flex-col gap-2 p-4 text-xl border-4 mx-5 mt-4 my-10 ">
      <div>Reading</div>
      <div class="flex h-8 overflow-hidden rounded bg-gray-100 border border-gray-200">
        <div
          class="bg-yellow-300"
          style="width: 50%;"
        />
      </div>
      <div class="flex justify-between">
        <span>50%</span>
        <span>15:00 / 30:00 </span>
      </div>
    </li>
    <li class="flex flex-col gap-2 p-4 text-xl border-4 mx-5 mt-4 my-10">
      <div>Training</div>
      <div class="flex h-8 overflow-hidden rounded bg-gray-100 border border-gray-200">
        <div
          class="bg-green-300  "
          style="width: 100%;"
        />
      </div>
      <div class="flex justify-between">
        <span>100%</span>
        <span>30:00 / 30:00 </span>
      </div>
    </li>
  </ul>
</template>
