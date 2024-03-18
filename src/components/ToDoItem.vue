<template>
     <h1>{{ page.pageTitle }}</h1>
     <p>{{ page.content }}</p>
</template>
<script>
export default {
     props: ["page"],
};
</script>