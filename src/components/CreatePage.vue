<template>
     <form action="">
          <div class="container">

               <div class="form__container">
                    <label for="name">Page title</label>
                    <input class="form-input" type="text" name="name" v-model="pageTitle">

               </div>
               <div class="form__container">
                    <label for="content">Content</label>
                    <textarea class="form-input" name="content" id="content" cols="30" rows="10"
                         v-model="content"></textarea>
               </div>

               <div class="form__container">
                    <label for="link">Link Text</label>
                    <input v-model="linkText" class="form-input" type="text">
               </div>


               <div class="form__container">
                    <label for="linkUrl">
                         Link Url
                    </label>
                    <input class="form-input" v-model="linkUrl" type="text" name="linkUrl">
               </div>

               <div>
                    <input v-model="published" class="checkBox" type="checkbox" name="gridCheck1">
                    <label for="gridCheck1">Published</label>
               </div>


               <button @click.prevent="submitForm" :disabled="isInvaildForm" class="btn">Submit</button>
          </div>

     </form>

</template>




<script>

export default {


     computed: {
          isInvaildForm() {
               return !this.pageTitle || !this.content || !this.linkUrl || !this.linkText;
          }
     },

     data() {
          return {
               pageTitle: '',
               content: '',
               linkUrl: '',
               linkText: '',
               published: true,
          }
     },
     methods: {
          submitForm() {
               if (!this.pageTitle || !this.content || !this.linkUrl || !this.linkText) {
                    alert("Something its wrong. Place make sure fill the form correctly")

               }

               this.$emit('pageCreated', {
                    pageTitle: this.pageTitle,
                    content: this.content,
                    link: {

                         text: this.linkText,
                         url: this.linkUrl
                    },
                    published: this.published
               });

               this.pageTitle = ''
               this.content = ''
               this.linkUrl = ''
               this.linkText = ''
               this.published = true;
               return;
          }




     },

     watch: {
          pageTitle(newTitle, oldTitle) {
               if (this.linkText == oldTitle) {
                    this.linkText = newTitle
               }
          }
     }
}

</script>


<style scoped>
.container {

     width: 50vh;
     height: min-content;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     border-radius: 1rem;
     padding: 2rem 3rem;
     border: 1px solid rgb(36, 36, 36);
     margin: 5rem 10rem;

}

.form__container {
     display: flex;
     flex-direction: column;
}

label {
     color: rgb(39, 39, 39);

     font-size: 2rem;
}

.form-input {
     color: rgb(39, 39, 39);
     border: 1px solid rgb(39, 39, 39);
     border-radius: 0.5rem;
     padding: 1rem;
}

.btn {
     width: min-content;

     color: rgb(39, 39, 39);
     border: 1px solid rgb(39, 39, 39);
}
</style>