Rails.application.routes.draw do
  root to: 'posts#index'
 # get 'posts/new', to: 'posts#new'←これは削除する
  post 'posts', to: 'posts#create'
  get 'posts/:id', to: 'posts#checked'
end