class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
       user = User.all
       render json: user    
    end 
    def create 
        user = User.create(user_params)
        # if user.valid? 
            session[:user_id] = user.id
            render json: user,include: :vehicles, status: :created
        # else
            # render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        # end
    end 

    def view 
        user = User.find_by(id: session[:user_id])
        vehicles = Vehicle.find_by(id: session[:user_id])
        if user
            render json: user.vehicles, status: :created
        else
            render json: "Not authorised", status: :unauthorized
        end
        # render json: @current_user
        
    end

    def show 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user,include: :vehicles, status: :created
        else
            render json: "Not authorised", status: :unauthorized
        end
        # render json: @current_user
        
    end

    # def create
    #     user = user.find_by(id: session[:user_id])
    #     booking = user.bookings.create!(booking_params)
    #     render json: booking, status: :created
    # end

    private 
    def user_params
        params.permit(:username, :email, :phone, :password, :password_confirmation, :admin,:address,:licence_no, :user_id)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
