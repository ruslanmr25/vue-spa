<template>
     <a :href="link.link" v-bind:class="F ">
          {{ link.text }}


     </a>
</template>




<script>

export default {

     computed: {
          activeClasses() {
               return {
                    active: this.isActive
               }
          }
     },

     props: [
          "link", 'isActive',
     ]
}

</script>