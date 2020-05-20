Rails.application.routes.draw do
  namespace :api do
    post   '/login',   to: 'sessions#create'
    get    '/remember',   to: 'sessions#show'
    delete '/logout',  to: 'sessions#destroy'
    resources :users
  end
end
