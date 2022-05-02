class ProductsController < ApplicationController

    def index
       render json: Product.all
    end

    def show
        render json: @product
    end

    def create 
        products = Product.create!(product_params)
        render json: product, status: :created 
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
        params.permit(:name, :description, :image, :price, :quantity, :sku)
    end
end
