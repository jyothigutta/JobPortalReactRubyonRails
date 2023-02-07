class SearchbynameController < ApplicationController

    def index
        b = Bookdb.find_by('bookName': params[:bookName])
        if b
        render json: b
        else render json: "Book not found."
        end
    end

end
