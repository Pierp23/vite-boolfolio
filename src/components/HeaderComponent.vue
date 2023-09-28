<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            title: 'Header Component'
        }
    }
}
</script>

<template>
    <header>
        <nav>
            <div class="logo">
                DeveloPier
            </div>
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio' }">
                        Portfolio
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 50px;

    >* {
        padding: 20px;
    }

    .logo {
        margin-right: 30px;
        color: lightcoral;
        font-size: 20px;
        font-weight: bold;
    }

    nav {
        display: flex;

        ul {
            display: flex;

            li {
                margin: 0 10px;
                list-style: none;

                a {
                    text-decoration: none;
                    color: black;
                    line-height: 20px;
                }

            }

        }

        ;
    }
}
</style>