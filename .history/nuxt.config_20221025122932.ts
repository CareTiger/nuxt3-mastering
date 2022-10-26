// https://v3.nuxtjs.org/api/configuration/nuxt.config
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
    title: "Hello Nuxt",
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@tailwindcss/typography"],
    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        config: {
            plugins: [tailwindTypography],
        },
    },
});
