<template>

     <li>
          <a :href="link.link" v-bind:class="activeClasses">
               {{ link.text }}


          </a>

     </li>
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
          'isActive', 'link'
     ]
}

</script>