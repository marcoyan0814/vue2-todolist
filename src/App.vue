<template>
  <div class="container">
    <div class="mt-5">
      <div class="col-12">
        <input type="text" class="form-control" placeholder="請輸入待辦項目，輸入完畢請按Enter" required="true">
      </div>
      <h4 class="m-3">
        <span class="text-primary">目前待辦清單</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="p-3 list-group-item d-flex justify-content-between lh-sm">
          <div class="form-check pt-2 pb-2">
            <input type="checkbox" class="form-check-input" id="same-address">
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing
              address</label>
          </div>
          <div class="float-right"><button class="btn btn-danger hide">刪除項目</button></div>
        </li>
        <li class="p-3 list-group-item d-flex justify-content-between lh-sm">
          <div class="form-check pt-2 pb-2">
            <input type="checkbox" class="form-check-input" id="same-address">
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing
              address</label>
          </div>
          <div class="float-right"><button class="btn btn-danger hide">刪除項目</button></div>
        </li>
        <li class="p-3 list-group-item d-flex justify-content-between lh-sm">
          <div class="form-check pt-2 pb-2">
            <input type="checkbox" class="form-check-input" id="same-address">
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing
              address</label>
          </div>
          <div class="float-right"><button class="btn btn-danger hide">刪除項目</button></div>
        </li>
      </ul>

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
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style>
  button.hide {
    display: none;
  }

  li:hover .btn {
    display: block;
  }
</style>