Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] 
    resource :session, only: [:destroy, :create]
    resources :blogs, only: [:index, :create, :destroy, :update]
    resources :taggings, only: [:index, :create, :destroy, :show, :update]
    resources :tags, only: [:index, :create, :destroy, :show, :update]
    resources :blogs, only: [:show] do 
      resources :posts, only: [:show, :index, :create, :destroy, :update]
    end
  end
end
