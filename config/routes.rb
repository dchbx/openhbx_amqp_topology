Rails.application.routes.draw do
  resources :message_routes
  resources :exchanges
  resources :configurations, :only => [:index] do
    collection do
      get :download
      get :graph
      get :dump
    end
  end
  root :to => "exchanges#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
