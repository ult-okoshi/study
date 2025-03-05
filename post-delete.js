class PostDelete {
  constructor(postShow) {
    this.PostDeleteButton();
  }

  PostDeleteButton() {
    $('#post-list').on('click','.post-delete', (event) => {
      event.preventDefault();
      const deleteConfirm = confirm("削除しますか？");
      if (deleteConfirm === true){
        const listCount = $(event.target).parent().siblings().length;
        const index = listCount - $(event.target).parent().index();
        const postList = JSON.parse(localStorage.getItem('posts'));
        postList.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(postList));
        $(event.target).parent().remove();
      }
    });
  }
}

$(document).ready(function() {
  new PostDelete();
});