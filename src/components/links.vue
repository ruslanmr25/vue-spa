<template>

     <li>
          <router-link :to="`/${index}`"
          :active-class="active"
          >
               {{ link.text }}
          </router-link>
     </li>



</template>




<script>


export default {
     
     props: [
          'index', 'link'
     ]
}

</script>