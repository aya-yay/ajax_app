class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end

  def create
    post = Post.create(content: params[:content], checked: false)
    render json:{ post: post}
  end

  def checked
    post = Post.find(params[:id])
    if post.checked then
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: {post: item}
  end

  # post.checkedという既読したか否かを判定するプロパティを指定し、既読していれば「既読を解除するためにfalseへ変更」し、既読していなければ「既読にするためtrueへ変更」します。
  # この時はupdateというActiveRecordのメソッドを使用
  
  # 最後に、更新したレコードをitem = Post.find(params[:id])で取得し直し、render json:{ post: item }でJSON形式（データ）としてchecked.jsに返却

end
