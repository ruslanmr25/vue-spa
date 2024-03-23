<template>

     <h1>{{ $page.pageTitle }}</h1>
     <p>
          {{ $page.content }}
     </p>

</template>



<script>
export default {
     props: ['index'],

     created() {
          this.$page = this.$pages.getSinglePage(this.$route.params.index)
     },
     data() {

          return {
               $page: null
          }
     },

     watch: {
          index(newIndex, oldIndex) {
               this.$page = this.$pages.getSinglePage(newIndex);
          }
     }



}


</script>
