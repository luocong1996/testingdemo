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
                if (!this.$cookies.isKey('user_session')) {
                    this.$cookies.set("user_session", "test_cookies", 60 * 60 * 24);
                } else {
                    console.log(this.$cookies.get("user_session"));
                    console.log(this.$cookies.keys())
                }
                this.setUserInfo(this.userInfo);
                console.log(this.getInfo())
            }
        }
    }
</script>

<style scoped>
</style>