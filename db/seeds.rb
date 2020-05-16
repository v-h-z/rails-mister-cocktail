# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
puts 'firing up'
Ingredient.destroy_all
url = 'http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
list_serialized = open(url).read
list = JSON.parse(list_serialized)
list['drinks'].each do |drink|
  ingredient = Ingredient.new(name: drink['strIngredient1'])
  ingredient.save
  puts "#{ingredient.name} created"
end
Ingredient.create(name: 'Campari')
Ingredient.create(name: 'Martini Rosso')
puts "That's all folks!"
