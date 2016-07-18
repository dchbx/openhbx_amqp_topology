class ConfigurationsController < ApplicationController

  def download
    @environment_name = params[:environment] || "uat"
    @hbx_id = params[:hbx_id] || "dc0"
    respond_to do |format|
      format.rb 
    end
  end

end
