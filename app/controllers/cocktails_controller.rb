class CocktailsController < ApplicationController
  def root
    redirect_to cocktails_path
  end

  def index
    @cocktails = Cocktail.all
    @cocktail = Cocktail.new
    @dose = Dose.new
  end

  def search
    @cocktails = Cocktail.where("UPPER(NAME) LIKE ?", "%" + search_params[:search].upcase + "%")
    @cocktail = Cocktail.new
    @dose = Dose.new
    render :index
  end

  def show
    @cocktail = Cocktail.find(params[:id])
    @dose = Dose.new
  end

  def new
    @cocktail = Cocktail.new
  end

  def create
    cocktail = Cocktail.new(cocktail_params)
    if cocktail.save
      redirect_to cocktails_path(anchor: 'last-cocktail')
    else
      render :index
    end
  end

  private

  def cocktail_params
    params.require(:cocktail).permit(:name)
  end

  def search_params
    params.permit(:search)
  end
end
