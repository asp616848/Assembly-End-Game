module.exports = function ({ presenters, Presenter }) {
  class EventPresenter extends Presenter {}
  EventPresenter.type = 'event'
  EventPresenter.plural = 'events'
  return EventPresenter
}
