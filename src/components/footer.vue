<template>  
  <div class="fixed-bottom text-center bg-dark text-white form-control" v-if="title">
   版权所有:{{title}} 
   </div>
</template>
<script>
export default {
 props:["title"]
}
</script>