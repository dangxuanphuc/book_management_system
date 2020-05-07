class BookMarksController < ApplicationController
  before_action :find_user, only: :index
  before_action :find_book, only: %i(create destroy)
  before_action :find_book_mark, only: :destroy

  def index
    @books = @user.book_marked_books
  end

  def create
    unless current_user.book_marked? @book
      @book_mark = @book.book_marks.new user: current_user
      @book_mark.save
    end
  end

  def destroy
    if @book_mark.destroy
      flash[:success] = t "book_mark.destroy_success"
    else
      flash[:danger] = t "book_mark.destroy_fail"
    end
  end

  private

  def find_user
    @user = User.find_by id: params[:user_id]

    return if @user
    flash[:danger] = "user not found"
    redirect_to not_found_index_path
  end

  def find_book
    @book = Book.friendly.find(params[:book_id])

    return if @book
    flash[:danger] = "book not found"
    redirect_to not_found_index_path
  end

  def find_book_mark
    @book_mark = current_user.book_marks.find_by id: params[:id]

    return if @book_mark
    flash[:danger] = "book mark not found"
    redirect_to not_found_index_path
  end
end
