<template>
    <div class="p-3 list-group-item d-flex justify-content-between lh-sm">
        <div class="float-left form-check my-auto">
            <label>
                <input type="checkbox" class="form-check-input"> 全部完成/全部未完成
            </label>
        </div>
        <div class="float-right">
            <span class="mx-3"> 已完成 {{ doneTotal }} 筆 / 總共有 {{ todoTotal }} 筆</span>
            <button type="button" class="btn btn-danger" @click="removeDone">刪除已完成項目</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoFooter',
        methods: {
            //刪除已完成項目
            removeDone(){
                if(confirm("是否刪除已完成項目"))
                {
                    this.removeAlldone()
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
            }
        },
        props: ['todos','removeAlldone']
    }
</script>

<style scoped>

</style>