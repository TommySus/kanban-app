<template>
    <div>
        <Navbar 
        @PleaseChangePage="changePage">
        ></Navbar>
        <BoardList
        :fetch="fetch"
        :Task="Task"
        :Category="Category"
        @PleaseAddTask="addTask"
        @PleaseEditCategory="back"
        @PleaseEditCategory="done"
        @PleaseDeleteTask="destroy"
        ></BoardList>
</template>

<script>
import Navbar from "./navbar"
import BoardList from "./BoardList"
import axios from "axios"

export default {
    name: "MainPage",
    props: [ 'Task', 'fetch' , 'Category'],
    data(){
        return {
            
        }
    },
    components: {
        Navbar,
        BoardList
    },
    methods: {
        changePage(page){
            this.$emit("PleaseChangePage", page)
        },
        back(category,id){
            this.$emit("PleaseEditCategory", category, id)
        },
        done(category,id){
            this.$emit("PleaseEditCategory", category, id)
        },
        destroy(id){
            this.$emit("PleaseDeleteTask", id)
        },
        addTask(){
            this.$emit("PleaseAddTask")
        }
        

    },
    created() {
       
    },
    mounted(){
        
    }
}
</script>

<style>
    #form-card-1{
    background-color: rgba(212, 209, 209, 0.212);
}
#form-card-2{
    background-color: rgba(212, 209, 209, 0.212);
}
#form-card-3{
    background-color: rgba(212, 209, 209, 0.212);
}
#form-card-4{
    background-color: rgba(212, 209, 209, 0.212);
}
.btn-done {
    margin-left: 5%;
    display: inline-block;
    padding: 3px 3px 3px 3px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px #999;
    width: 20%;
}
.btn-done:hover {
    background-color: #3e8e41
}
.btn-done:active {
background-color: #3e8e41;
box-shadow: 0 5px #666;
transform: translateY(4px);
}

.btn-delete {
    margin-left: 5%;
    display: inline-block;
    padding: 3px 3px 3px 3px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #df1616;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px #999;
    width: 20%;
}
.btn-delete:hover {
    background-color: #df1616
}
.btn-delete:active {
background-color:#df1616;
box-shadow: 0 5px #666;
transform: translateY(4px);
}


.btn-back {
    margin-left: 5%;
    display: inline-block;
    padding: 3px 3px 3px 3px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #aaaaaa;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px #999;
    width: 20%;
}
.btn-back:hover {
    background-color: #aaaaaa
}
.btn-back:active {
    background-color:#aaaaaa;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>