export class PostRepository {
  static getPost(){
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts;
  }

  static createLocalStorage(postContent){
    const posts = this.getPost();
    posts.push(postContent);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  static listLocalStorage(){
    const postList = JSON.parse(localStorage.getItem('posts'));
    return postList;
  }

  static deleteLocalStorage(index){
    const postList = this.listLocalStorage();
    postList.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(postList));
  }
}