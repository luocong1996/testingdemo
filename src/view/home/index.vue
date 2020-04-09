<template>
    <div>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "index",
        data() {
            return {
                userInfo: {
                    'id': 1231223,
                    'name': '你好'
                }
            }
        },
        mounted() {
            this.setStore()
        },
        methods: {
            ...mapActions(['setUserInfo']),
            ...mapGetters(['getInfo']),
            setStore() {
                this.setUserInfo(this.userInfo);
                console.log(this.getInfo())
            }
        }
    }
</script>

<style scoped>
</style>