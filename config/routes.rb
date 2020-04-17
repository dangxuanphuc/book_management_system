Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: "registrations"}

  root "static_pages#show", page: "home"
  get "/pages/:page" => "static_pages#show"

  namespace :admin do
    root "static_pages#show", page: "dashboard"
    get "/pages/:page" => "static_pages#show"

    resources :users

    resources :authors do
      resources :books
    end

    resources :books
    resources :categories

    resources :publishers do
      resources :books
    end
  end

  resources :books do
    resource :comments, only: [:create]
  end

  resources :search, only: :index
  resources :categories, only: %i(index show)
  resources :borrows, only: :create
  resources :explorer, only: :index
end
