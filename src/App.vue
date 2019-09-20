<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


    export default {
        name: 'App',
        mounted(){
            window.addEventListener('unload',this.saveDate);
        },
        methods: {
            saveDate() {
                sessionStorage.setItem("userState", JSON.stringify(this.$store.state.user));
            }
        }
    }
</script>

