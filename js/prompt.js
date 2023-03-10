/*
1. Alert is a browser API 
2. confirm is a yes no API
3. prompt get input from user
 */
const showAlert = () =>{
    alert('dost tk ase');
}
const lendMoney = () =>{
    const result = confirm('will you merry me')
    console.log(result);
    if(result === true){
        alert('Yes i will ');
    }
    else{
        alert("No,I'm enggesd");
    }
}
const getInfo = () =>{

    const name = prompt('what is your name');
    console.log(name);
    if(name === null){
        alert('No name')
    }
    else{
        console.log('welcome to this world');
    }
}