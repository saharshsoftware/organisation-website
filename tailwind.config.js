/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'todo-image': "url('src/images/todo-image.jpg')",
      },
    },
  },
  darkMode: "class",
}

