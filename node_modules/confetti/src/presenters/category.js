module.exports = function ({ presenters, Presenter }) {
  class CategoryPresenter extends Presenter {}
  CategoryPresenter.type = 'category'
  CategoryPresenter.plural = 'categories'
  return CategoryPresenter
}
