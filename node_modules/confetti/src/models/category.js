module.exports = function ({ samples }) {
  return {
    key: 'category',
    name: 'Category',
    endpoint: 'categories',
    sample: samples.category,
    attributes: [
      {
        key: 'id',
        label: 'ID',
        description: 'Identifier of the category.',
        type: 'number',
      },
      {
        key: 'name',
        label: 'Name',
        description: 'Category name.',
        type: 'string',
      },
      { key: 'createdAt', label: 'Created At', type: 'date' },
      { key: 'updatedAt', label: 'Updated At', type: 'date' },
      { key: 'organisationId', label: 'Organisation Id', type: 'number' },
    ],
    filters: {},
  }
}
