class Blog::PostsController < ApplicationController
  before_action :find_blog, only: %i(edit update destroy)

  def create
    blog = Blog.new blog_params
    blog.title = t("blog.posts.create.auto_gen", time: Time.now)
    if blog.save
      redirect_to edit_blog_post_path blog
    else
      redirect_to blog_root_path
    end
  end

  def edit; end

  def update
    if @blog.update_attributes blog_params
      redirect_to blog_root_path
    else
      redirect_to edit_blog_post_path @blog
    end
  end

  def destroy
  end

  private

  def blog_params
    params.require(:blog).permit :user_id, :content,
      :description, :title, :status, book_ids: []
  end

  def find_blog
    @blog = current_user.blogs.find_by id: params[:id]

    return if @blog
    redirect_to blog_root_path
  end
end
