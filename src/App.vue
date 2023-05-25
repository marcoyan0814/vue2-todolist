<template>
  <div class="container">
    <div class="mt-5">
      <TodoHeader :addItem="addItem"/>
      <TodoLists :todos="todos" :updateItem="updateItem" :removeItem="removeItem"/>
      <TodoFooter :todos="todos" :removeAlldone="removeAlldone" :setAll="setAll" />
    </div>
  </div>
</template>

<script>
  // 載入 components
  import TodoHeader from './components/TodoHeader'
  import TodoFooter from './components/TodoFooter'
  import TodoLists from './components/TodoLists'
  // 載入nanoid
  import { nanoid } from "nanoid"

  export default {
    name: "App",
    components: {
      TodoHeader,
      TodoLists,
      TodoFooter
    },
    data() {
      return {
        // 取得本機資料，若無則返回範例
        'todos': JSON.parse(localStorage.getItem('todos')) || [
          {id: nanoid(), title: "念書", done: false},
          {id: nanoid(), title: "打球", done: true},
          {id: nanoid(), title: "買菜", done: false},
        ]
      }
    },
    methods: {
      //新增項目
      addItem(value){
        const item = {
          id: nanoid(),
          title: value,
          done: false
        }
        this.todos.unshift(item)
      },
      //更新項目狀態
      updateItem(key){
        this.todos.forEach((todo) => {
          if (todo.id===key){ 
            todo.done = !todo.done 
          }
        })
      },
      //刪除項目
      removeItem(key){
        this.todos = this.todos.filter(todo => todo.id!==key)
      },
      //刪除已完成項目
      removeAlldone(){
        this.todos = this.todos.filter(todo => todo.done!==true)
      },
      //設定全已完成或全未完成
      setAll(value){
        this.todos.forEach((todo) => {
            todo.done = (value)?true:false
        })
      }
    },
    watch: {
      //設定監聽，寫入localStorage
      todos:{
        deep:true,
        handler(e){
          localStorage.setItem('todos',JSON.stringify(e))
        }
      }
    },
    mounted(){
      console.log(this.todos)
    }
  };
</script>

<style>
  
</style>