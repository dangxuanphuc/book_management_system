class Admin
  class BookItemsController < AdminController
    before_action :find_book
    before_action :find_book_item, except: %i(new create)
    before_action :load_books, only: %i(new edit)

    def create
      @book_item = @book.book_items.build book_item_params
      if @book_item.save
        flash[:success] = t "flash.book_items.create_success"
      else
        flash[:danger] = t "flash.book_items.destroy_fail"
      end
    end

    def update
      @book_item.book_id = params[:book_id]
      if @book_item.update_attributes book_item_params
        flash[:success] = t "flash.book_items.update_success"
      else
        flash[:danger] = t "flash.book_items.destroy_fail"
      end
    end

    def destroy
      if @book
        book_items = @book.book_items
        if (book_items.include? @book_item) && book_items.delete(@book_item)
          flash[:success] = t "flash.book_items.delete_success"
        else
          flash[:danger] = t "flash.book_items.destroy_fail"
        end
      end
    end

    private

    def book_item_params
      params.require(:book_item).permit :state, :location,
        :description, :book_id
    end

    def find_book_item
      @book_item = @book.book_items.find_by id: params[:id]

      return if @book_item
      flash[:danger] = t "flash.book_items.find_fail"
      redirect_to admin_books_path
    end

    def find_book
      @book = Book.find_by id: params[:book_id]
    end

    def load_books
      @books = Book.all
    end
  end
end
