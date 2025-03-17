export class Repository {
  static getPosts(){
    const localStoragePosts = JSON.parse(localStorage.getItem('posts')) || [];
    return localStoragePosts;
  }

  static create(displayPost){
    const localStoragePosts = this.getPosts();
    localStoragePosts.push(displayPost);
    localStorage.setItem('posts', JSON.stringify(localStoragePosts));
  }

  static update(index, displayPostEdit){
    const localStoragePosts = this.getPosts();
    localStoragePosts[index] = displayPostEdit;
    localStorage.setItem('posts', JSON.stringify(localStoragePosts));
  }

  static delete(index){
    const localStoragePosts = this.getPosts();
    localStoragePosts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(localStoragePosts));
  }

  static getPost(index){
    const localStoragePosts = this.getPosts();
    return localStoragePosts[index];
  }
}