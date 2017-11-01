class FeaturesController < ApplicationController
   def index
    @features = JSON.parse(File.read(Rails.public_path.join('camp_features.json')))
    
    render json: @features
  end 
end
