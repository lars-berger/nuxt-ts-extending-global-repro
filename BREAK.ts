// Throws no error when imported in /pages/index.vue
// When imported from nuxt.config.ts, it throws: "Property 'extraMethod' does not exist on type 'any[]'."
Array.prototype.extraMethod = function(array): string {
  return JSON.stringify(array);
}
