const transformAttributes = require('../utils/transform-attributes')

module.exports = function ({ samples }) {
  const attributes = [
    {
      key: 'id',
      label: 'ID',
      description: 'Identifier of the contact.',
      type: 'number',
    },
    { key: 'firstName', label: 'First Name', type: 'string' },
    { key: 'lastName', label: 'Last Name', type: 'string' },
    { key: 'email', label: 'Email', type: 'string' },
    { key: 'phone', label: 'Phone', type: 'string' },
    { key: 'token', label: 'Token', type: 'string' },
    { key: 'status', label: 'Status', type: 'string' },
    { key: 'comment', label: 'Comment', type: 'string' },

    { key: 'lastSeen', label: 'Last Seen', type: 'date' },
    {
      key: 'deletionRequestedAt',
      label: 'Deletion Requested At',
      type: 'date',
    },
    { key: 'createdAt', label: 'Created At', type: 'date' },
    { key: 'updatedAt', label: 'Updated At', type: 'date' },
    { key: 'organisationId', label: 'Organisation Id', type: 'number' },
    { key: 'company', label: 'Company', type: 'string' },
  ]

  const createAttributes = {
    firstName: {},
    lastName: {},
    email: { required: true },
    phone: {
      placeholder: '+46 12 345 67 89',
      helpText: 'Mobile phone number with country code. Example: +46701234567',
    },
    comment: {},
    company: {},
    categoryIds: {
      type: 'number',
      label: 'Categories',
      multiple: true,
      helpText: 'Attach categories to your contact.',
    },
  }

  const operations = {
    create: {
      attributes: transformAttributes(attributes, createAttributes),
    },
  }

  return {
    key: 'contact',
    endpoint: 'contacts',
    name: 'Contact',
    sample: samples.contact,
    attributes,
    sorting: [],
    filters: {},
    operations,
    webhooks: [
      {
        type: 'contact.created',
        label: 'Created',
        description: 'Triggers when a contacts is created.',
        important: true,
      },
      {
        type: 'contact.updated',
        label: 'Updated',
        description: 'Triggers when a contact is updated.',
        important: true,
      },
      {
        type: 'contact.unsubscribed',
        label: 'Unsubscribed',
        description: 'Triggers when a contact is unsubscribed.',
      },
      {
        type: 'contact.deletion-requested',
        label: 'Deletion Requested',
        description: 'Triggers when someone has requested to be deleted.',
      },
      {
        type: 'contact.deleted',
        label: 'Deleted',
        description: 'Triggers when a contact is deleted.',
      },
    ],
  }
}
