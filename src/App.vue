<template>

     <navbar :active-page="activePage" :links="links" :activate-page="(index) => activePage = index"></navbar>
     <page-viewer :page="pages[activePage]"></page-viewer>


</template>

<script>

import PageViewer from "./components/PageViewer.vue";

import Navbar from "./components/Navbar.vue"


export default {
     components: {
          PageViewer,
          Navbar
     },
     data() {
          return {
               activePage: 0,

               links: [
                    { text: "Home", link: "index.html" },
                    { text: "About", link: "about.html" },
                    { text: "Contact", link: "contact.html" },
               ],
               pages: [
                    {
                         pageTitle: "Home Page",
                         content: "Welcome to the wonderful world of Vue",
                    },
                    {
                         pageTitle: "About page",
                         content: "Welcome to the wonderful world of Vue",
                    },
                    {
                         pageTitle: "Contact page",
                         content: "Welcome to the wonderful world of Vue",
                    },
               ],
          };
     },

}
</script>