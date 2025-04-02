const { Presenter } = require('yayson')()
const presenters = {}

const WebhookPresenter = require('./webhook')({ presenters, Presenter })
const EventPresenter = require('./event')({ presenters, Presenter })
const WorkspacePresenter = require('./workspace')({ presenters, Presenter })
const ContactPresenter = require('./contact')({ presenters, Presenter })
const TicketPresenter = require('./ticket')({ presenters, Presenter })
const CategoryPresenter = require('./category')({ presenters, Presenter })
const TicketBatchPresenter = require('./ticket-batch')({
  presenters,
  Presenter,
})

presenters.WebhookPresenter = WebhookPresenter
presenters.EventPresenter = EventPresenter
presenters.WorkspacePresenter = WorkspacePresenter
presenters.ContactPresenter = ContactPresenter
presenters.TicketPresenter = TicketPresenter
presenters.CategoryPresenter = CategoryPresenter
presenters.TicketBatchPresenter = TicketBatchPresenter

module.exports = {
  webhooks: WebhookPresenter,
  events: EventPresenter,
  workspaces: WorkspacePresenter,
  contacts: ContactPresenter,
  tickets: TicketPresenter,
  ticketBatches: TicketBatchPresenter,
}
