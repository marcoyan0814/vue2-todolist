<template>
    <li class="p-3 list-group-item d-flex justify-content-between lh-sm">
        <div class="form-check pt-2 pb-2">
            <label class="form-check-label">
                <input 
                    type="checkbox" 
                    class="form-check-input" 
                    :checked="todo.done" 
                    @change="update(todo.id)"
                >
                {{todo.title}}
            </label>
        </div>
        <div class="float-right"><button class="btn btn-danger hide">刪除項目</button></div>
    </li>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: ['todo','updateItem'],
        methods: {
            //更新狀態
            update(key){
                this.updateItem(key)
            }
        },
    }
</script>

<style scoped>
    button.hide {
        display: none;
    }

    li:hover .btn {
        display: block;
    }
</style>