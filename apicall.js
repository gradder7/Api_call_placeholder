class Apicall{
    constructor(){

    }
    async getPost(id){
        const postResponce= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const posts=await postResponce.json();
        return{
            posts
        }
    }
}