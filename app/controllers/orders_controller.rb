class OrdersController < ApplicationController

before_action :find_order

def index
    render json: Order.all
end

def show 
    render json: @order
end

def create 
    new_order = Order.create!(order_params)
    render json: new_order, status: :created
end

def update 
    @order.update!(order_params)
    render json: @order, status: :accepted
end

def destroy 
    @order.destroy 
    head :no_content
end 

private 

def find_order
    @order = Order.find(params[:id])
end

def order_params
    params.permit(:total_price, :ordered, :user_id)
end

end
