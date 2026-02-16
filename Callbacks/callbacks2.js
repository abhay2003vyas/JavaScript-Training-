    function getUser(id, callback){
        setTimeout(()=>{
            const user = {
                id : id,
                name: "Abhay"
            };
            callback(user);
        },2000);
    }

    getUser(1,(user)=>{
        console.log(user);
    })
