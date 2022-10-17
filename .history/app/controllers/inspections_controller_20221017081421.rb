class InspectionsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
       inspections = Inspection.all
       render json: inspections , include: :user  
    end 

    def create               
        inspections =Inspection.create(inspections_params)
        render json: inspections, status: :created
    end 
    def reviews_index
        # users = User.find_by(params[:user_id])
        inspections = Inspection.all
        render json: inspections
    end    
    def show
        inspections=Inspection.find_by(id: params[:id])   
        render json: inspections
    end 

    def destroy
        inspections=Inspection.find_by(id: params[:id])
        inspections.destroy
    end
    private 
    def inspections_params 
        params.permit(:user_id, :vehicle_id ,:offence,:fine,:servicecharge,:status)
    end


    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found 
        render json: {errors: "not found"}, status: :not_found
    end
end
