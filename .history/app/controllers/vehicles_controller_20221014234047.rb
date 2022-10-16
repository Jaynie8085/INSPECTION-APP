class VehiclesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
       vehicles = Vehicle.all
       render json: vehicles    
    end 

    def create               
        vehicles =Vehicle.create(vehicles_params)
        render status: :created
    end 
    def reviews_index
        # users = User.find_by(params[:user_id])
        vehicles = Vehicle.all
        render json: vehicles
    end    
    def show
       user = User.find_by(id: params[:user_id])
    #    bookings=
        if user            
            render json: user.vehicles ,status: :created
        else
            render json: user.vehicles ,status: :ok
        end   
    end 

    def destroy
        vehicles=Vehicle.find_by(id: params[:id])
        vehicles.destroy
    end
    private 
    def vehicles_params 
        params.permit(:user_id, :numberplate ,:model,:chasisnumber)
    end


    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found 
        render json: {errors: "not found"}, status: :not_found
    end
end
