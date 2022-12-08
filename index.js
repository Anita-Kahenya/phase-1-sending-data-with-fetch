// Add your code here
function submitData( name, email ){
    return fetch("http://localhost:3000", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify
        name,
        email
    })
    .then("=>" (response){
        return response.json()
    })
    .then("=>" (object){
        document.body.innerHTML = Object["id"]
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}
