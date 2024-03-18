<template>
     <nav :class="navbarClasses">
          <div class="title">Future</div>
          <ul>
               <li v-for="(link, index) in links" :key="index">
                    <links :link="link" :isActive="index == activePage" 
                         @click.prevent="activatePage(index)">
                    </links>
               </li>
          </ul>

          <button @click.prevent="changeTheme()">
               <i class="uil uil-exchange-alt"></i>
          </button>
     </nav>
</template>



<script>
import links from "./links.vue"

export default {
     components: {
          links
     },
     props: ["activePage", "links", 'activatePage'],
     computed: {
          navbarClasses() {
               return {
                    dark: this.darkStyle,
               };
          },
     },
     methods: {
          changeTheme() {
               this.darkStyle = !this.darkStyle;
          },
     },
     data() {
          return {
               darkStyle: false,
          };
     },
}


</script>