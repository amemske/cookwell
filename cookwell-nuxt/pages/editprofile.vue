<template>
    
    <main class="w-full">

<div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid grid-cols-1 px-4 pt-6 xl:grid-cols-1 xl:gap-4 dark:bg-gray-900">
                <div class="mb-4 col-span-full xl:mb-2">
                    
                    <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">User settings</h1>
                </div>
                <!-- Right Content -->
                
                <div class="col-span-2">
        <div class=" pb-0 mb-4 bg-white rounded-lg shadow-sm 2xl:col-span-2  sm:p-6 sm:pb-0">
                        <div class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                            <img class="mb-4 rounded-full w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png" alt="Jese picture">
                            <div>
                                <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Jane Snow</h3>
                                <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">I enjoy cooking and teaching others</div>
                                <div class="flex items-center space-x-4">
                                    <button type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        <svg class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path><path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path></svg>
                                        Upload picture
                                    </button>
                                    
                                </div>
                            </div>
                        </div>

<div class="border-t border-gray-200 dark:border-gray-700 mt-4">
<nav class="flex space-x-2" aria-label="Tabs" role="tablist">
<button type="button" class=" py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap  text-blue-600 hover:text-blue-600 active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">Edit Profile</button>

<button type="button" class=" py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap  hover:text-blue-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">Saved Recipes</button>
</nav>
</div>


                    </div>
                    <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                        <h3 class="mb-4 text-xl font-semibold dark:text-white">General information</h3>
                        <form action="#">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Bonnie" >
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Green" >
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                    <input type="text" name="country" id="country" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="United States">
                                </div>
                                
                                
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@company.com" >
                                </div>
                                
                                
                                
                                
                                
                                
                                
                            </div>
                        


             
                        
                            <div class="mt-5 grid grid-cols-1 gap-1 ">
                                <div class="col-span-12 sm:col-span-3">
                                    <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                
                                
                                

                                
                            </div>
                       
                    <h3 class="mb-4 mt-5 text-xl font-semibold dark:text-white">Password information</h3>
<div class="grid grid-cols-6 gap-6 ">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current password</label>
                                    <input type="text" name="current-password" id="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" >
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                                    <input data-popover-target="popover-password" data-popover-placement="bottom" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" >
                                    <div data-popover="" id="popover-password" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(840px, -1788px, 0px);" data-popper-placement="top" data-popper-reference-hidden="" data-popper-escaped="">
                                        <div class="p-3 space-y-2">
                                            <h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
                                            <div class="grid grid-cols-4 gap-2">
                                                <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
                                                <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
                                                <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                                <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                            </div>
                                            <p>It’s better to have:</p>
                                            <ul>
                                                <li class="flex items-center mb-1">
                                                    <svg class="w-4 h-4 mr-2 text-green-400 dark:text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    Upper &amp; lower case letters
                                                </li>
                                                <li class="flex items-center mb-1">
                                                    <svg class="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    A symbol (#$&amp;)
                                                </li>
                                                <li class="flex items-center">
                                                    <svg class="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    A longer password (min. 12 chars.)
                                                </li>
                                            </ul>
                                    </div>
                                    <div data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(139.2px, 0px, 0px);"></div>
                                    </div>
                                </div>
                                
                                <div class="col-span-6 sm:col-full">
                                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit">Save all</button>
                                </div>

                                
                            </div></form></div>
                    
                    
                </div>
                
            </div>
            
            </div>


</main>
</template>