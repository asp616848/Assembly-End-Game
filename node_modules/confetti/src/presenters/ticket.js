module.exports = function ({ presenters, Presenter }) {
  class TicketPresenter extends Presenter {
    attributes(ticket) {
      if (ticket.eventId) {
        ticket.event = {
          id: ticket.eventId,
        }
        delete ticket.eventId
      }
      if (ticket.ticketBatchId) {
        ticket.ticketBatch = {
          id: ticket.ticketBatchId,
        }
        delete ticket.ticketBatchId
      }

      if ([true, false].includes(ticket.sendEmailConfirmation)) {
        ticket.meta = {
          sendEmailConfirmation: ticket.sendEmailConfirmation,
        }
      }
      delete ticket.sendEmailConfirmation

      const s = super.attributes(ticket)
      return s
    }
    relationships() {
      return {
        event: presenters.EventPresenter,
        ticketBatch: presenters.TicketBatchPresenter,
      }
    }
  }
  TicketPresenter.type = 'ticket'
  TicketPresenter.plural = 'tickets'
  return TicketPresenter
}
