Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  resources :tracks, only: :show

  namespace :api, defaults: {format: :json} do
    resources :tracks, only: [:create, :destroy, :index, :show, :update, :discover, :search] do
      collection do
        get 'discover'
      end
      member do
        get 'search'
      end
    end
    resources :comments, only: [:create, :destroy, :index]
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:new, :create, :destroy]
  end

end
