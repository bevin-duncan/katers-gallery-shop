class CartsController < ApplicationController

    before_action :find_cart


    def index 
        render json: Cart.all
        
    end

    def show
        cart = Cart.find(params[:id]) 
        render json: cart
    end

    def create
        new_cart = Cart.create!(cart_params)
        render json: new_cart
    end

    def update 
        @cart.update!(cart_params)
        render json: @cart, status: :accepted
    end

    def destroy
        @cart.destroy 
        head :no_content
    end

    private

    def find_cart
        @cart = Cart.find(params[:id])
    end

    def cart_params
        params.permit(:quantity, :order_id, :product_id)
    end
end
