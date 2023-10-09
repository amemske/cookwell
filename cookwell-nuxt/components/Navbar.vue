<template>
   <nav class=" z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
     
      <div class="flex items-center justify-start">
  <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    <!-- Button content -->
  </button>
  <router-link to="/" class="flex ml-2 md:mr-24">
    <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">cookwise</span>
  </router-link>
  <div class="flex items-center">
    <form @submit.prevent="submitSearch" method="GET" class="hidden lg:block lg:pl-3.5">
      <!-- Input and label code here -->
      <div class="flex items-center"> <!-- Add a flex container -->
        <input v-model="searchQuery" type="text" name="email" id="topbar-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search">
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </div>
    </form>
  </div>
</div>


      <div class="flex items-center">
        
          <!-- Search mobile -->
          <button id="toggleSidebarMobileSearch" type="button" class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Search</span>
            <!-- Search icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </button>
          


          <div class="flex items-center ml-8">


            <div>
              <router-link to="/bookmarks" class="flex text-sm  " id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
                Bookmarks
                  </router-link>
            </div>
            
          </div>

          <div class="flex items-center ml-8">
            <div>
              <router-link to="/notifications" class="flex text-sm  " id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
                Notifications
                  </router-link>
            </div>
            
          </div>
        
         
          <!-- Profile -->
          <div class="flex items-center ml-8">

            <div v-if="isUserLoggedIn">
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
              </button>
            </div>

            <div v-else>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </div>
            
          </div>
        </div>
    </div>
  </div>
</nav>
  </template>




<script>
export default {
  data() {
    return {
      isUserLoggedIn: true,
      searchQuery: '',
    };
  },
  methods: {
    submitSearch() {
      // Perform search action using the searchQuery value
      // Redirect to the search results page passing the search query as a parameter
      this.$router.push(`/search?query=${this.searchQuery}`);
    },
  },
};
</script>

<!--<script> options API Vue 2-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      loggedIn: false // Set this to true if the user is logged in, otherwise set it to false-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->
