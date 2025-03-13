export class PostRepository {
  static getPosts(){
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts;
  }

  static create(postContent){
    const posts = this.getPosts();
    posts.push(postContent);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  static update(index, postContent){
  }

  static delete(index){
    const posts = this.getPosts();
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
}