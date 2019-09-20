<template>
    <div>
      个人信息 {{id}}
    </div>
</template>

<script>
    export default {
        props:['id'],
        name: "UserProfile",
        beforeRouteEnter:(to,from,next) =>{
            // 注意，一定要在 next 中请求，因为该方法调用时 Vue 实例还没有创建，此时无法获取到 this 对象，在这里使用官方提供的回调函数拿到当前实例
            next(vm => {
                vm.getData();
            });
        },
        methods:{
            getData:function () {
                this.axios({
                    method:'get',
                    url: 'http://localhost:8080/data.json'
                }).then(function (repos) {
                    console.log('请求成功');
                    console.log(repos);
                }).catch(function (error) {
                    console.log('请求失败');
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>
