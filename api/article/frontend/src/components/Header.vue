<template>
    <header>
        <h1>
            <router-link :to="{name: 'posts'}">Design Note</router-link>
        </h1>
        <div id="form">
            <input type="text" placeholder="Search" class="text" v-model="keyword" @change="search">
            <div class="selectWrap">
                <select class="select" v-model="selected" @change="search">
                    <option value="" :key="-1">Category</option>
                    <option v-for="category of categoryList" :value="category.id" :key="category.id">{{category.name}}
                    </option>
                </select>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {UPDATE_CATEGORIES, UPDATE_POSTS} from "@/store/mutation-types"

    export default {
        name: 'site-header',
        data() {
            return {
                keyword: this.$route.query.keyword || '',
                selected: this.$route.query.category || '',
            }
        },
        watch: {
            '$route'() {
                this.keyword = this.$route.query.keyword || ''
                this.selected = this.$route.query.category || ''
            }
        },
        created: {
            ...mapGetters(['categoryList'])
        },
        methods: {
            ...mapActions([UPDATE_CATEGORIES, UPDATE_POSTS]),
            search() {
                this.$router.push({name: 'posts', query: {page: 1, keyword: this.keyword, category: this.selected}})
            },
        }
    }
</script>

<style scoped>
    header {
        background-color: #000;
        color: #fff;
        height: 50px;
        display: grid;
        grid-template-columns: 20px 1fr 20px;
        grid-template-rows: 1fr;
        margin-bottom: 80px;
    }

    header > * {
        grid-row: 1;
        grid-column: 2;
    }

    h1 {
        justify-self: start;
        align-self: center;
        font-size: 20px;
        font-weight: normal;
    }

    h1 > a {
        color: #fff;
        text-decoration: none;
    }

    #form {
        justify-self: end;
        align-self: center;
        display: none;
    }

    @media (min-width: 768px) {
        header {
            grid-template-columns: 1fr 700px 1fr;
        }

        #form {
            display: block;
        }
    }

    @media (min-width: 1024px) {
        header {
            grid-template-columns: 1fr 980px 1fr;
        }
    }
</style>