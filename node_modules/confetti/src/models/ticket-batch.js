const transformAttributes = require('../utils/transform-attributes')

module.exports = function ({ samples }) {
  return {
    key: 'ticketBatch',
    endpoint: 'ticketBatches',
    name: 'Ticket Batch',
    sample: samples.ticketBatch,
    attributes: [
      { key: 'left', label: 'Left', type: 'number' },
      { key: 'status', label: 'Status', type: 'string' },
      { key: 'name', Label: 'Name', type: 'string' },
      { key: 'order', label: 'Order', type: 'number' },
      { key: 'description', label: 'Description', type: 'string' },
      { key: 'promoCode', label: 'Promo code', type: 'string' },
      { key: 'releasedAt', label: 'Released at', type: 'date' },
      { key: 'closedAt', label: 'Closed at', type: 'date' },
      { key: 'price', label: 'Price', type: 'string' },
      { key: 'useCustomVat', label: 'Use custom VAT', type: 'boolean' },
      { key: 'vatPercentage', label: 'VAT percentage', type: 'number' },
      { key: 'limit', label: 'Limit', type: 'number' },
      { key: 'sold', label: 'Sold', type: 'number' },
      { key: 'reserved', label: 'Reserved', type: 'number' },
      { key: 'settings', label: 'Settings', type: 'object' },
      { key: 'startDate', label: 'Start date', type: 'date' },
      { key: 'endDate', label: 'End date', type: 'date' },
      { key: 'createdAt', label: 'Created at', type: 'date' },
      { key: 'updatedAt', label: 'Updated at', type: 'date' },
      { key: 'eventId', label: 'Event Id', type: 'number' },
      {
        key: 'linkedTicketBatchId',
        label: 'Linked ticket batch Id',
        type: 'number',
      },
      { key: 'formId', label: 'Form Id', type: 'number' },
      { key: 'payoutId', label: 'Payout Id', type: 'number' },
    ],
    filters: {
      eventId: {
        type: 'number',
        required: true,
        default: '',
      },
    },
    includes: [],
  }
}
