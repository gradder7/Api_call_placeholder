
const apicall=new Apicall;

const ui=new UI;

const searchUser=document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    //get input text
    const userText=e.target.value;
    if(userText!==''){
        //make http call
        apicall.getPost(userText)
        .then(data=>{
            if(data.posts.id != userText){
                //show alert
                console.log('something went ewrong')
            }else{
                //show profile
                ui.showProfile(data.posts);
                
            }
        })
        
        
    }else{
        //clearProfile
        ui.clearProfile();
    }
})