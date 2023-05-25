<template>
    <div>
        <h4 class="m-3">
            <span class="text-primary">目前待辦清單</span>
        </h4>
        <ul class="list-group mb-3">
            <TransitionGroup 
                name="todo" 
                class="animate__animated animate__bounce"
                apper
                enter-active-class="animate__animated animate__fadeInRight"
                leave-active-class="animate__animated animate__fadeOutLeft"               
            >
                <TodoItem 
                    v-for="todo in todos" 
                    :key="todo.id" 
                    :todo="todo" 
                />
            </TransitionGroup>
        </ul>
    </div>
</template>

<script>
    //引入 animate.css
    import 'animate.css'
    //引入 components
    import TodoItem from './TodoItem'
    export default {
        name: 'TodoLists',
        props: ['todos'],
        components: {
            TodoItem
        }
    }
</script>

<style scoped>

</style>