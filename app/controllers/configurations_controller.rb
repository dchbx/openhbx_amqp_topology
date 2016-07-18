class ConfigurationsController < ApplicationController

  def download
    @connection_string = params[:connection_string]
    if @connection_string.blank?
      @connection_string = "amqp://guest:guest@localhost:5672"
    end
    @environment_name = params[:environment]
    if @environment_name.blank?
      @environment_name = "uat"
    end
    @hbx_id = params[:hbx_id]
    if @hbx_id.blank?
      @hbx_id= "dc0"
    end
    respond_to do |format|
      format.rb 
    end
  end

end
