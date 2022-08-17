
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => json.forEach(element))

function element(elemnt){
    let table = document.querySelector('#tab');
    let row = `<tr>
    
    <td>${elemnt.id}</td>
       <td>${elemnt.name}</td>
       <td>${elemnt.username}</td>
       <td>${elemnt.email}</td>
      
      </tr>
   `

   table.innerHTML += row   


}

function App30(){     
return(
    
    <div className="m-5">
    <h1>This is Fetch API !!!</h1>
    <table className="table table-striped table-bordered">
     <tr>
     <td>ID</td>
     <td>Name</td>  
     <td>UserName</td>  
     <td>Email</td>      
     </tr>
     <tbody id="tab">

     </tbody>
    </table>
    </div>
)

}


export default App30; 