// Throws no error when imported in /pages/index.vue
// When imported from nuxt.config.ts, it throws: "Property 'someObject' does not exist on type 'Global'."
console.log(global.someObject);
