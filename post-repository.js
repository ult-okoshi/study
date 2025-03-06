export class PostRepository {
  constructor(){}

  getPost(){
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postContent = $('#post-content').val();
    return {posts, postContent};
  }

  saveLocalStorage(){
    const { posts, postContent } = this.getPost();
    posts.push(postContent);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  getLocalStorage(){
    const postList = JSON.parse(localStorage.getItem('posts'));
    return postList;
  }

  deleteLocalStorage(event){
    const listCount = $(event.target).parent().siblings().length;
    const index = listCount - $(event.target).parent().index();
    const postList = this.getLocalStorage();
    postList.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(postList));
  }
}