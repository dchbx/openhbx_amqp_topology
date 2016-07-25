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

  def dump
    @exchanges = Exchange.all
    @message_routes = MessageRoute.all
    @route_arguments = RouteArgument.all
    respond_to do |format|
      format.json
    end
  end

  def import
    @configuration_import = ConfigurationImport.new(allowed_configuration_upload_params[:configuration_import])
    if @configuration_import.save
      redirect_to exchanges_path
    else
      render "upload"
    end
  end

  def upload
    @configuration_import = ConfigurationImport.new
  end

  def allowed_configuration_upload_params
    params.permit(:configuration_import => [:definition_file])
  end
end
