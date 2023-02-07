class BookdbController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Bookdb.all
    end

    def show
        b = Bookdb.find(params[:id])
        render json: b
    rescue => e
        render json: "Book not found. Kindly input correct data."
    end

    def create   
        if (!params[:bookName].nil? && !params[:bookAuthor].nil? && !params[:bookQuantity].nil?)  
        b= Bookdb.create('bookName': params[:bookName],
            'bookAuthor': params[:bookAuthor], 
            'bookQuantity': params[:bookQuantity])  
        if(b.errors.any?)               
            render json: "Book already exists, Kindly update quantity"    
        else 
            render json: "Book Details Saved!"   
        end 
    else
        render json: "Kindly input all the fields!"   
    end
    end



    def update
        b=Bookdb.find(params[:id].to_i)
        b.update('bookName': params[:bookName],
            'bookAuthor': params[:bookAuthor], 
            'bookQuantity': params[:bookQuantity])
        render json: "Book Data Updated Sucessfully!"

        rescue => e
        render json: "Book not found. Kindly input correct data."
    
    end

    def destroy
        b=Bookdb.find(params[:id].to_i)
        b.destroy
        render json: "Book data has been deleted!"
    rescue => e
        render json: "Book not found. Kindly input correct data."
    end

end
