const { expect } = require('../helper')
const { webhooks, tickets, contacts } = require('../../src/presenters')

describe('Presenters', function () {
  describe('Webhooks', function () {
    it('should present a webhook with relation ids', function () {
      const webhook = webhooks.render({
        type: 'ticket.attending',
        url: 'https://hooks.zapier.com/hooks/standard/1337/',
        provider: 'zapier',
        workspaceId: 57,
        eventId: 2,
      })
      expect(webhook).to.deep.equal({
        data: {
          type: 'webhook',
          attributes: {
            type: 'ticket.attending',
            url: 'https://hooks.zapier.com/hooks/standard/1337/',
            provider: 'zapier',
          },
          relationships: {
            event: { data: { id: '2', type: 'event' } },
            workspace: { data: { id: '57', type: 'workspace' } },
          },
        },
        included: [
          { id: '2', type: 'event', attributes: {} },
          { id: '57', type: 'workspace', attributes: {} },
        ],
      })
    })
    it('should present a webhook without eventId', function () {
      const webhook = webhooks.render({
        type: 'ticket.attending',
        url: 'https://hooks.zapier.com/hooks/standard/1337/',
        provider: 'zapier',
        workspaceId: 57,
      })
      expect(webhook).to.deep.equal({
        data: {
          type: 'webhook',
          attributes: {
            type: 'ticket.attending',
            url: 'https://hooks.zapier.com/hooks/standard/1337/',
            provider: 'zapier',
          },
          relationships: {
            event: { data: null },
            workspace: { data: { id: '57', type: 'workspace' } },
          },
        },
        included: [{ id: '57', type: 'workspace', attributes: {} }],
      })
    })
  })
  describe('Tickets', function () {
    it('should present a ticket with relation ids', function () {
      const ticket = tickets.render({
        firstName: 'John',
        lastname: 'Doe',
        email: 'john@doe.se',
        ticketBatchId: 57,
        eventId: 2,
        company: 'Company AB',
      })
      expect(ticket).to.deep.equal({
        data: {
          type: 'ticket',
          attributes: {
            firstName: 'John',
            lastname: 'Doe',
            email: 'john@doe.se',
            company: 'Company AB',
          },
          relationships: {
            event: { data: { id: '2', type: 'event' } },
            ticketBatch: { data: { id: '57', type: 'ticketBatch' } },
          },
        },
        included: [
          { id: '2', type: 'event', attributes: {} },
          { id: '57', type: 'ticketBatch', attributes: {} },
        ],
      })
    })
    it('should present a ticket without ticketBatchId', function () {
      const ticket = tickets.render({
        firstName: 'John',
        lastname: 'Doe',
        email: 'john@doe.se',
        eventId: 2,
      })
      expect(ticket).to.deep.equal({
        data: {
          type: 'ticket',
          attributes: {
            firstName: 'John',
            lastname: 'Doe',
            email: 'john@doe.se',
          },
          relationships: {
            event: { data: { id: '2', type: 'event' } },
            ticketBatch: { data: null },
          },
        },
        included: [{ id: '2', type: 'event', attributes: {} }],
      })
    })
    it('should present a ticket with meta info', function () {
      const ticket = tickets.render({
        firstName: 'John',
        lastname: 'Doe',
        email: 'john@doe.se',
        eventId: 2,
        sendEmailConfirmation: true,
      })
      expect(ticket).to.deep.equal({
        data: {
          type: 'ticket',
          attributes: {
            firstName: 'John',
            lastname: 'Doe',
            email: 'john@doe.se',
            meta: {
              sendEmailConfirmation: true,
            },
          },
          relationships: {
            event: { data: { id: '2', type: 'event' } },
            ticketBatch: { data: null },
          },
        },
        included: [{ id: '2', type: 'event', attributes: {} }],
      })
    })
  })
  describe('Contacts', function () {
    it('should present a contact with relation ids', function () {
      const contact = contacts.render({
        firstName: 'John',
        lastname: 'Doe',
        email: 'john@doe.se',
        workspaceId: 57,
        categoryIds: [1, 3],
        company: 'Test AB',
      })
      expect(contact).to.deep.equal({
        data: {
          type: 'contact',
          attributes: {
            firstName: 'John',
            lastname: 'Doe',
            email: 'john@doe.se',
            company: 'Test AB',
          },
          relationships: {
            workspace: { data: { id: '57', type: 'workspace' } },
            categories: {
              data: [
                { id: '1', type: 'category' },
                { id: '3', type: 'category' },
              ],
            },
          },
        },
        included: [
          { id: '57', type: 'workspace', attributes: {} },
          { id: '1', type: 'category', attributes: {} },
          { id: '3', type: 'category', attributes: {} },
        ],
      })
    })
  })
})
