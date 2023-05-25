<template>
    <div>
        <h4 class="m-3">
            <span class="text-primary">目前待辦清單</span>
        </h4>
        <ul class="list-group mb-3">
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
        </ul>
    </div>
</template>

<script>
    //引入 components
    import TodoItem from './TodoItem'
    export default {
        name: 'TodoLists',
        components: {
            TodoItem
        },
        props: ['todos']
    }
</script>

<style scoped>

</style>