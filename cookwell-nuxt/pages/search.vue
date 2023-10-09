<template>
  <main class="w-full">


    <section class=" pt-20 sm:pt-20 relative">
      <div class="">


        <div class=" px-6 lg:px-8">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">


            <div class="flex items-center justify-between">
              <div class="flex min-w-0 items-center">
                <h1 class="text-2xl font-bold tracking-wider text-gray-800 capitalize dark:text-white">Filter Results</h1>
              </div><a class="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600" href="#">Reset
              </a>
            </div>





            <form @submit.prevent="filterResults"  class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 flex">
              <div>
                <label class="block mb-2 text-normal text-gray-600 dark:text-gray-200">Show me recipe with</label>
                <input v-model="resultsWith" type="text" placeholder="John"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
              </div>

              <div>
                <label class="block mb-2 text-normal text-gray-600 dark:text-gray-200">Show me recipe without</label>
                <input  v-model="resultsWithout" type="text" placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
              </div>









              <button
                class="mt-7 text-center align-bottom inline-block items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 sm:h-12">
                <span>
                  Filter</span>


              </button>
            </form>
          </div>
        </div>
      </div>
    </section>


    <section class="recent-recipes pt-9 ">

      <div class=" py-8 sm:py-8">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl mb-7 font-bold tracking-tight text-gray-900 sm:text-4xl">Search Results for "{{
              searchQuery }}" <span class="font-semibold"> ({{ resultCount }})</span></h2>
          </div>
          <div
            class="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">

            <div class="sm:flex lg:items-start group"  v-for="food in searchResults" :key="food.id">
              <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <img class="w-full rounded-md sm:h-36 sm:w-36 object-cover" :src= food.image alt="text">
              </div>
              <div class="flex-1">

                <p class="mt-1 text-lg font-medium leading-6">
                  <a href="./blog-post.html" class="text-xl  h">{{ food.name  }}</a>
                </p>
                <p class="mt-1 text leading-normal ">{{ food.instructions}}</p>

              

                <div class="relative mt-3 mb-3 flex items-center gap-x-4 border-gray-200">
                
                  <div class="text-sm leading-6">
                    <p class="font-normal text-gray-900">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        {{ food.author }}
                      </a>
                    </p>

                  </div>
                </div>
              </div>
            </div>


          </div>




          <div class="w-100 mt-5">
            <button type="button"
              class=" w-full text-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-block items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
              Load more recipes
            </button>
          </div>
        </div>
    </div>




  </section>


</main></template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const searchQuery = ref('');
const searchResults = ref([]);
const resultCount = ref('');
const route = useRoute();
const resultsWithout = ref('');
const resultsWith = ref('');

// Retrieve the search query from the route parameter
searchQuery.value = route.query.query || '';


// Fetch search results based on the search query
fetchSearchResults();

async function fetchSearchResults() {
  // Simulate API call or search operation
  // Replace this with your actual search logic
  const response = await fetch(`http://localhost:3001/foods?q=${searchQuery.value}`);
  const data = await response.json();
  console.log(data);

  // Store the search results in the searchResults variable
  searchResults.value = data
  //console.log(data.length) //count number of objects
  resultCount.value = data.length //.value comes from composition API
  
};

async function filterResults() {
  let filteredResults = searchResults.value;

  if (resultsWith.value) {
    filteredResults = filteredResults.filter((filtered) => {
      return filtered.name.includes(resultsWith.value);
    });
  }

  if (resultsWithout.value) {
    filteredResults = filteredResults.filter((filtered) => {
      return !filtered.name.includes(resultsWithout.value);
    });
  }

  searchResults.value = filteredResults;
  resultCount.value = filteredResults.length;
}


/*
n Vue 3 with the Composition API, when using the ref function to create a reactive variable, the value is wrapped in a JavaScript object with a .value property. This is done to enable reactivity and ensure that changes to the value trigger re-rendering in the template.

When you define a variable using ref, you get an object with a .value property containing the actual value. To access or update the value, you need to use .value.

So in the code example I provided, resultCount is created using ref, which means it's an object with a .value property. To assign a value to resultCount, you need to use resultCount.value = data.length;.

Similarly, to access the value of resultCount, you would use resultCount.value.

This syntax is specific to Vue's Composition API and the ref function, which provides reactivity to the variables. It ensures that changes to the value are properly tracked and trigger updates in the template
*/
</script>