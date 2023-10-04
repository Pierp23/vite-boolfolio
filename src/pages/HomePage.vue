<script>
export default {
    data() {
        return {
            title: 'HomePage'
        }
    }
}
</script>

<template>
    <div class="title-container">
        <h1>
            {{ title }}
        </h1>
    </div>

    <div class="container">
        <div class="benvenuto">
            Benvenuto nel mondo di Pier, il developer <strong>senza gusto estetico!</strong>
            <div class="benvenuto-tip">
                Non fare il pignolo! Questo esercizio è dedicato al lavoro back-end!
            </div>
        </div>
        <div class="loading-screen">
            <div class="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title-container {
    margin: 10px 30px;
}

.benvenuto {
    text-align: center;
    font-size: 40px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);

    .benvenuto-tip {
        margin-top: 10px;
        font-size: 20px;
    }
}

.loading-screen {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%);
}

.loading {
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    animation: rotate 3s linear infinite;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}

.loading span {
    width: 32px;
    height: 32px;
    background-color: red;
    margin: 3px;
    animation: scale 1.5s linear infinite;
}

@keyframes scale {
    50% {
        transform: scale(1.2);
    }
}

.loading span:nth-child(1) {
    border-radius: 50% 50% 0 50%;
    background-color: #ffbe0b;
    transform-origin: bottom right;
}

.loading span:nth-child(2) {
    border-radius: 50% 50% 50% 0;
    background-color: #ff006e;
    transform-origin: bottom left;
    animation-delay: .5s;
}

.loading span:nth-child(3) {
    border-radius: 50% 0 50% 50%;
    background-color: #fb5607;
    transform-origin: top right;
    animation-delay: 1.5s;
}

.loading span:nth-child(4) {
    border-radius: 0 50% 50% 50%;
    background-color: #8338ec;
    transform-origin: top left;
    animation-delay: 1s;
}
</style>