module.exports = function ({ presenters, Presenter }) {
  class TicketBatchPresenter extends Presenter {}
  TicketBatchPresenter.type = 'ticketBatch'
  TicketBatchPresenter.plural = 'ticketBatches'
  return TicketBatchPresenter
}
