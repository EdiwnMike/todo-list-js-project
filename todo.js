 
 var todoform = document.getElementById('todo')
 var ul = document.getElementById('todos')
 var todos = [

    {
        id: 'kdp10',
        title: 'Reach out to the needy',
        description:"help the needy stay of the street",
        completed: false
       
    },

     {
        id: 'kdp11',
        title: 'Reach out to my invisible crush',
        description:"Single life is sweet but e get as e be so try find better person",
        completed: false
       
    }, 

     {
      id: 'kdp12',
        title: 'Go to the mall',
        description:"to get som basic things",
        completed: false
        
    }

 ]

 
 todoform.addEventListener('submit', function(e){
    e.preventDefault()
    
   addtodo(e.target.title.value)

   e.target.title.value = ''
 })

 

 var displaytodo = function(){


    

    ul.innerHTML = ''
    todos.forEach(function(todo){

       var btns = `<Span>
   <img src="img/correct.png" alt="" class="cmpltBtn" id = c-${todo.id}>
   <img src="img/delete.png" alt="" class="dltBtn" id = d-${todo.id}>
</span> `


      var el = document.createElement('li')

      el.id = todo.id

      if(todo.completed){
         console.log (todo.title, 'is completed')
         //add a class clled completed
         el.classList.add('completed')
         //add a text called compleded
         el.innerHTML = todo.title +'<Span>Completed<Span>'+ btns
      }else{
           el.innerHTML = todo.title + btns
      }
  
    ul.appendChild(el)
    
 })

 }








 var addtodo = function(txt){
    //create the todo object 
    // add the todo object to the todo array 
    
    var x = {
      
        title: txt,
        description:'',
        completed: false
    }

    todos.push(x)

    displaytodo()
 }



 var completeTodo = function(id) {

   var index = todos.findIndex(function(x){
      return x.id == id

   })

   var target = todos[index]

   target.completed = !target.completed 

 displaytodo()
 }
 


var removeTodo = function(id){
   // get the todo object 

   var index = todos.findIndex(function(x){
      return x.id == id

   })

   todos.splice(index, 1)

   displaytodo()



}


 ul.addEventListener('click', function(e){

   if(e.target.classList.contains('cmpltBtn')){

    var x = e.target.id
    var y = x.split('-')
    completeTodo(y[1])

    displaytodo()

   }


   if(e.target.classList.contains('dltBtn')){

      var x = e.target.id
      var y = x.split('-')
      removeTodo(y[1])
  
     }


   console.log(e.target)

    displaytodo()
 })
 displaytodo()

 
        

 