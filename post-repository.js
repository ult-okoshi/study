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

  static update(index, postContentEdit){
    const posts = this.getPosts();
    posts[index] = postContentEdit;
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  static delete(index){
    const posts = this.getPosts();
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  static getPost(index){
    const posts = this.getPosts();
    return posts[index];
  }
}