class GrasshoppersController < ApplicationController
  before_action :set_grasshopper, only: [:show, :edit, :update, :destroy]
  before_action :set_groups_options, only: [:new, :create, :edit, :update]
  skip_before_action :require_authentication
  skip_authorize_resource

  # GET /grasshoppers
  # GET /grasshoppers.json
  def index
    @grasshoppers = Grasshopper.joins(:group).all
    render_json_serializer(@grasshoppers)
  end

  # GET /grasshoppers/1
  # GET /grasshoppers/1.json
  def show
    render_json_message({:success => t('.success')}, 201, {grasshopper: @grasshopper})
  end

  # # GET /grasshoppers/new
  # def new
  #   @grasshopper = Grasshopper.new
  # end

  # # GET /grasshoppers/1/edit
  # def edit
  # end

  # POST /grasshoppers
  # POST /grasshoppers.json
  def create
    @grasshopper = Grasshopper.new(grasshopper_params)
      if @grasshopper.save
        render_json_message({:success => t('.success')}, 201, {id: @grasshopper.id})
      else
        render_json_message({:errors => @grasshopper.errors.messages}, 422)
      end
  end

  # PATCH/PUT /grasshoppers/1
  # PATCH/PUT /grasshoppers/1.json
  def update
      if @grasshopper.update(grasshopper_params)
        render_json_message({success: t('.success')}, 200)        
      else
        render_json_message({errors: @grasshopper.errors.messages}, 422)        
      end
  end

  # DELETE /grasshoppers/1
  # DELETE /grasshoppers/1.json
  def destroy
    if @grasshopper.destroy
      render_json_message({:success => t('.success')}, 200)
    else
      render_json_message({:errors => @grasshopper.errors.messages}, 422)
    end
  end

  private

  private

  def set_groups_options
    @set_groups_options = Group.all.pluck(:description, :id)
  end
  # Use callbacks to share common setup or constraints between actions.
  def set_grasshopper
    @grasshopper = Grasshopper.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def grasshopper_params
    params.require(:grasshopper).permit(:description, :age, :group_id)
  end
end
