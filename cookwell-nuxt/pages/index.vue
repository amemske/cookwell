<template>
    <main class="w-full">

<section class="recent-recipes pt-9 ">

  <div class=" py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Recipes</h2>
        </div>
        <div class="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-4 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
         
         
          <article v-for="food in foodData" :key="food.id" class="flex max-w-xl flex-col items-start justify-between border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700 sm:p-1 bg-white">
              <div class="relative my-3 flex items-center gap-x-4">
                   <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                      <a href="#">
                        By {{ food.author }}
                      </a>
                    </p>
                    
                  </div>
                </div>


             
              <div class="group relative flex w-full">
                  <figure class="w-full">
                      <img class="min-w-full  rounded-lg max-h-56 w-full" :src="food.image" alt="">
                    </figure>
                
                
              </div>
              <h3 class="mt-3 mb-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a :href="getRecipeLink(food.id)">
                   {{ food.name }}
                  </a>
                </h3>
              <div class="flex justify-between w-full text-xs">
                  
                  <button type="button" class="block text-sm text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                  
                    
                    <Icon name="icon-park-solid:like" color="black" />
                    
</button>
                <button type="button" class="text-sm text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                  
                    <Icon name="material-symbols:bookmark" color="black" />
                    
</button>
</div>
              
            </article>
          

            
        </div>
        <div class="w-100 mt-5">
          <button @click="loadMore" v-if="hasMoreRecipes" type="button" class=" w-full text-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-block items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            Load more recipes
          </button>
                        </div>
      </div>
    </div>

    

    
</section>


</main>
</template>

<script setup lang="ts">

const batchSize = 10;
const currentBatchIndex = ref(0)


const { data: foodData , error } = await useFetch('http://127.0.0.1:3001/foods'); // Adjust the path to your JSON file

function getRecipeLink(id) {
  return `/recipes/${id}`;
}

function loadMore(){
  
}

</script>
