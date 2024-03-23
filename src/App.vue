<template>

     <navbar  :links="links" :activate-page="(index) => activePage = index"></navbar>


     <router-view>

     </router-view>
     <!-- <page-viewer :page="pages[activePage]"></page-viewer> -->
     <!-- <create-page @pageCreated="pageCreated"></create-page> -->
</template>

<script>

import PageViewer from "./components/PageViewer.vue";
import Navbar from "./components/Navbar.vue"
import CreatePage from '@/components/CreatePage'


export default {
     components: {
          CreatePage,
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
               pages: []
          };
     },
     methods: {
          async getPages() {
               let res = await fetch("pages.json");

               let data = await res.json();

               this.pages = data;

          },
          pageCreated(object) {
               this.links.push(object.link);
               this.pages.push({
                    pageTitle: object.pageTitle,
                    content: object.content
               })
          }
     },
     created() {
          this.getPages()
     },
     computed: {
          publishedPages() {
               return this.pages.filter(p => p.published)
          }
     }

}
</script>