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
                <input 
                    v-show="todo.isEdit" 
                    type="text" 
                    class="form-control" 
                    ref="title"
                    :value="todo.title"
                    @keyup.enter="saveTitle(todo,$event)"
                    @keyup.esc="unsaveTitle(todo,$event)"
                    @blur="unsaveTitle(todo,$event)"
                >
                <span v-show="!todo.isEdit">{{todo.title}}</span>
            </label>
        </div>
        <div class="float-right d-flex justify-content-between">
            <button v-show="!todo.isEdit" class="btn btn-primary text-white me-1 hide" @click="edit(todo)">編輯項目</button>
            <button class="btn btn-danger hide" @click="remove(todo.id)">刪除項目</button>
        </div>
    </li>
</template>

<script>
    //載入 sweetalert2
    import Swal from 'sweetalert2'
    export default {
        name: 'TodoItem',
        props: ['todo'],
        methods: {
            //更新狀態
            update(key){
                this.$bus.$emit('updateItem',key)
            },
            //移除項目
            remove(key){
                Swal.fire({
                    icon: 'warning',
                    title: '是否刪除此項目?',
                    showCancelButton: true,
                    confirmButtonText: '確認刪除',
                    cancelButtonText: '取消操作',
                    showLoaderOnConfirm: true,
                    allowOutsideClick: () => !Swal.isLoading()
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$bus.$emit('removeItem',key)  
                    }
                })
            },
            //點擊變更項目
            edit(todo){
                //如果已經有編輯中isEdit這個元素
                if(Object.prototype.hasOwnProperty.call(todo,'isEdit'))
                {
                    todo.isEdit = true;
                }
                else
                {
                    //如果沒有就新增編輯中isEdit並設為true
                    this.$set(todo,'isEdit',true)
                }
                //更新完把焦點移至編輯輸入框
                this.$nextTick(function(){
                    this.$refs.title.focus()
                })
            },
            //更新項目按下Enter送出
            saveTitle(todo,e){
                todo.isEdit = false
                this.$bus.$emit('updateTitle',todo.id,e.target.value)
                //離開焦點
                e.target.blur()
            },
            //不更新返回
            unsaveTitle(todo,e){
                todo.isEdit = false
                //離開焦點
                e.target.blur()
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