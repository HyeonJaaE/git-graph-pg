<template>
    <button class="btn">
        <slot/>
    </button>
</template>

<script>
export default {
    props: {
        label: String,
    },
}
</script>

<style>
.btn {
    display: inline-block;
    background-color:transparent;
    border: 1px solid #6c757d;
    color: #6c757d;
    font-weight: 400;
    border-radius: .25rem;
    padding: 10px 20px;
}

.primary {
    background-color: blue;
}

.danger { 
    background-color: red;
}

.info {
    background-color: cyan
}
</style>