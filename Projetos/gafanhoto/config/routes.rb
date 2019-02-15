Rails.application.routes.draw do
  resources :groups
  resources :grasshoppers
  resources :recruiters
  get 'welcome/index'

  root to: 'welcome#index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
