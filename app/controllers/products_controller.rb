class ProductsController < ApplicationController
 
    before_action :find_product, only: [:show, :update, :destroy]

    def index
       render json: Product.all
    end

    def show
        render json: @product
    end

    def create 
        products = Product.create!(product_params)
        render json: products, status: :created 
    end

    def update 
        @product.update!(product_params)
        render json: @product, status: :accepted 
    end

    def destroy
        @product.destroy
        head :no_content
    end


    private

    def find_product
        @product = Product.find(params[:id])
    end

    def product_params
        params.permit(:id, :name, :description, :image, :price, :quantity, :sku)
    end
end
