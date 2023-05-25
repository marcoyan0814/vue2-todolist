<template>
    <div class="col-12">
        <input 
            type="text" 
            class="form-control" 
            placeholder="請輸入待辦項目，輸入完畢請按Enter" 
            @keyup.enter="add"
            autofocus
        >
    </div>
</template>

<script>
    export default {
        name: 'TodoHeader',
        methods: {
            add(e){
                //若為空不處理
                if(e.target.value=="") return
                //新增項目
                this.$emit('addItem',e.target.value)
                //清空輸入欄
                e.target.value = ""
                e.target.autofocus
            }
        }
    }
</script>

<style scoped>

</style>