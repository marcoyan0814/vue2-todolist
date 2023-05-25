<template>
    <div class="p-3 list-group-item d-md-flex d-sm-flex justify-content-between lh-sm" v-if="todoTotal>0">
        <div class="form-check my-3 text-center">
            <label>
                <input type="checkbox" class="form-check-input" v-model="isAll"> 勾選設定全部完成/全部未完成
            </label>
        </div>
        <div class="text-center">
            <span class="mx-3"> 已完成 {{ doneTotal }} 筆 / 共有 {{ todoTotal }} 筆</span>
            <button type="button" class="btn btn-danger" @click="removeDone">刪除已完成項目</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoFooter',
        props: ['todos'],
        data() {
            return {
                'checkAll': false
            }
        },
        methods: {
            //刪除已完成項目
            removeDone(){
                if(confirm("是否刪除已完成項目"))
                {
                    this.$emit('removeAlldone')
                }
                return
            }
        },
        computed: {
            //取得目前總筆數
            todoTotal(){
                return this.todos.length;
            },
            //取得目前已完成筆數
            doneTotal(){
                // let i = 0;
                // this.todos.forEach(todo => {
                //     if(todo.done){
                //         i++
                //     }
                // });
                // return i
                return this.todos.reduce((pre,current) => (pre += (current.done)??1),0);
            },
            //檢查全選/非全選是否勾
            isAll:{
                get(){
                    //如果總數等於完成總數則勾選
                    return this.todoTotal===this.doneTotal
                },
                set(value){
                    this.$emit('setAll',value)
                }
            }
        }
    }
</script>

<style scoped>

</style>