class UI{
    constructor(){
        this.profile=document.getElementById('profile');
    }

    showProfile(user){
        console.log(user);
        this.profile.innerHTML=`
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Id</th>
      <th scope="col">TITLE</th>
      <th scope="col">BODY</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-active">
      <th scope="row">Active</th>
      <td>${user.id}</td>
      <td>${user.title}</td>
      <td>${user.body}</td>
    </tr>
        `
    }

    clearProfile(){
        this.profile.innerHTML='';
    }
}