class BookingsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
       bookings = if params[:user_id]
                    Booking.find_by(params[:user_id])
                else                    
                    Booking.all
                end
       render json: bookings    
    end 
    def show
       user = User.find_by(id: session[:user_id])
       bookings=
        if user            
            render json: user,include: :bookings, status: :created
        else
            render json: "Not authorised", status: :unauthorized
        end   
    end 

    def create        
        booking =Booking.create(booking_params)
        # booking = User.first.bookings.create!(booking_params)
        # booking = Booking.create!(booking_params)
        # byebug
        # render  status: :created
    end 

    def update 
        booking = Booking.find_by(id: params[:id])
        booking.update(status: false)
        render json: booking
    end 

    def destroy 
        booking = Booking.find_by(id: params[:id])
        booking.destroy
        head :no_content
    end

    private
    def booking_params 
        params.permit( :service, :date, :time,:user_id)
    end


    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found 
        render json: {errors: "not found"}, status: :not_found
    end
end
