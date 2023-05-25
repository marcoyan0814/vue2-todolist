<template>
    <div class="p-3 list-group-item d-flex justify-content-between lh-sm">
        <div class="float-left form-check my-auto">
            <label>
                <input type="checkbox" class="form-check-input"> 全部完成/全部未完成
            </label>
        </div>
        <div class="float-right">
            <span class="mx-3"> 已完成 0 筆 / 總共有 0 筆</span>
            <button type="button" class="btn btn-danger">刪除已完成項目</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoFooter',
    }
</script>

<style scoped>

</style>