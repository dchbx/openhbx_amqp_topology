class MessageRoutesController < ApplicationController
  before_action :set_message_route, only: [:show, :edit, :update, :destroy]

  # GET /message_routes
  # GET /message_routes.json
  def index
    @message_routes = MessageRoute.all
  end

  # GET /message_routes/1
  # GET /message_routes/1.json
  def show
  end

  # GET /message_routes/new
  def new
    @message_route = MessageRoute.new
  end

  # GET /message_routes/1/edit
  def edit
  end

  # POST /message_routes
  # POST /message_routes.json
  def create
    @message_route = MessageRoute.new(message_route_params)

    respond_to do |format|
      if @message_route.save
        format.html { redirect_to @message_route, notice: 'Message route was successfully created.' }
        format.json { render :show, status: :created, location: @message_route }
      else
        format.html { render :new }
        format.json { render json: @message_route.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /message_routes/1
  # PATCH/PUT /message_routes/1.json
  def update
    respond_to do |format|
      if @message_route.update(message_route_params)
        format.html { redirect_to @message_route, notice: 'Message route was successfully updated.' }
        format.json { render :show, status: :ok, location: @message_route }
      else
        format.html { render :edit }
        format.json { render json: @message_route.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /message_routes/1
  # DELETE /message_routes/1.json
  def destroy
    @message_route.destroy
    respond_to do |format|
      format.html { redirect_to message_routes_url, notice: 'Message route was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message_route
      @message_route = MessageRoute.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def message_route_params
      params.require(:message_route).permit(:to_exchange_id, :from_exchange_id, :routing_key, route_arguments_attributes: [:id, :message_route_id, :key, :value])
    end
end
