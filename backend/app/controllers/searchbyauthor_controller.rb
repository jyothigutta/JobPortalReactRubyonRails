class SearchbyauthorController < ApplicationController

    def index
        b = Bookdb.find_by('bookAuthor': params[:bookAuthor])
        if b
            render json: b
        else render json: "Author not found."
        end
    end

end