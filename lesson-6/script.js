
function randomUserName(userName){
    if( userName.name.length > 5 ){
        console.log(userName.name + "ning ismi 5ta xarfdan ko'p")
    }else{
        console.log(userName.name + "ning ismi 5ta xarfdan kam")
    }
}
    
    let users = [

        {
            name: "Alex"
        },
        {
            name: "Jack"
        },
        {
            name: "Rojers"
        },
        {
            name: "Samandra"
        },
        {
            name: "Rock"
        },
        {
            name: "Rafina"
        },
        {
            name: "Elesabit"
        },
        {
            name: "Laura",
        },
        {
            name: "Jorjinyo"
        },
        {
            name: "Bruno"
        }
        ]
for(let i=0; i<users.length; i++){
    randomUserName(users[i])
}