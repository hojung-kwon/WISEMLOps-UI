export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  const isAuthenticated = true;

  if (isAuthenticated !== true) {
    return navigateTo('/login')
  } 

})