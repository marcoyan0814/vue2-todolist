<template>
  <div class="container">
    <div class="mt-5">
      <TodoHeader :addItem="addItem"/>
      <TodoLists :todos="todos"/>
      <TodoFooter/>
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
        'todos':[
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
      }
    },
    mounted(){
      console.log(this.todos)
    }
  };
</script>

<style>
  
</style>