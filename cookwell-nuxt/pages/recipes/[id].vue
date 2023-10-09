Sound production -
Script writer
2d animator - 


<template>
  <main class="w-full">
    <section class="recent-recipes pt-9">
      <div class="pb-8 sm:pb-8">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-6 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-1"
          >
            <div class="block">
              <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-0">
                <img
                  class="w-full rounded-md sm:h-80 sm:w-full object-cover"
                  :src="foodData.image"
                  alt="text"
                />
              </div>
              <div class="flex-1">
                <h2 class="mt-5 text-3xl font-bold">
                  <a href="./blog-post.html" class="">{{ foodData.name }}</a>
                </h2>

                <div
                  class="relative mt-3 mb-3 flex items-center gap-x-4 border-gray-200"
                >
                  <div class="text-sm leading-6">
                    <p class="font-normal text-gray-900">
                      By
                      <a href="#">
                        <strong>{{ foodData.author }} </strong> 
                      </a>
                    </p>
                  </div>
                </div>

                <div class="flex mt-5">
                  <h2
                    class="flex items-center flex-grow text-2xl font-semibold"
                  >
                    Ingredients
                  </h2>
                </div>

                <ul class="mt-3 space-y-2.5 text-sm">
                  <li
                    v-for="ingredient in foodData.ingredients"
                    class="flex space-x-2"
                    :key="ingredient.id"
                  >
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-blue-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span class="paragraph text-sm xl:text-base">{{
                      ingredient
                    }}</span>
                  </li>
                </ul>

                <div
                  data-aos="fade-right"
                  class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 mt-8 aos-init aos-animate"
                  data-v-b444fb2c=""
                >
                  <h2 class="text-2xl font-semibold" data-v-b444fb2c="">
                    Instructions
                  </h2>
                  <div class="space-y-2">
                    <p>
                      {{ foodData.instructions }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-6 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-1"
          >
            <div class="block">
              <div
                class="mx-auto max-w-7xl px-0 mt-5"
                
              >
                <div
                  class="mx-auto max-w-2xl lg:mx-0"
                  
                >
                  <h2
                    class="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl"
                    
                  >
                    More recipes from the author
                  </h2>
                </div>
                <div
                  class="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-4 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                  data-v-inspector="pages/recipes/[id].vue:79:9"
                >
                  <article v-for="food in authorFoods" :key="food.id" 
                    class="flex max-w-xl flex-col items-start justify-between border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-1 bg-white"
                   
                  >
                    <div
                      class="group relative w-full"
                      
                    >
                      <figure
                        class="block"
                        
                      >
                        <img
                          class=" w-full rounded-lg sm:h-40 w-full object-cover"
                          :src="food.image" alt=""
                          
                        />
                      </figure>
                      <h3
                        class="mt-3 mb-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                       
                      >
                        <a
                          :href="getRecipeLink(food.id)"
                          
                          >
                          {{ food.name }}
                        </a>
                      </h3>
                    </div>
                  </article>
                  <!-- More posts... -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>

const { id } = useRoute().params;
const authorFoods = ref(null);
const { data: foodData, error } = await useFetch(
  `http://127.0.0.1:3001/foods/${id}`
);
// if (foodData !== null) {
//   const { data: foods } = await useFetch(`http://127.0.0.1:3001/foods/?author=${foodData._rawValue.author}`);
//   console.log(foods._rawValue);
//   authorFoods.value = foods._rawValue.filter((food) => food.id !== id);
//   console.log(authorFoods.value);
 
// }

function getRecipeLink(id) {
  return `/recipes/${id}`;
}

</script>
