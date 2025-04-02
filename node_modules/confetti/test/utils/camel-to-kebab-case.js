const { expect } = require('../helper')

const camelToKebebCase = require('../../src/utils/camel-to-kebab-case')

describe('camelCase to kebab-case', function () {
  it('should transform string of camel case to kebab case', function () {
    expect(camelToKebebCase('ticketBatch')).to.equal('ticket-batch')
    expect(camelToKebebCase('ticketBatches')).to.equal('ticket-batches')
  })
  it('should handle string without camelCase', function () {
    expect(camelToKebebCase('categories')).to.equal('categories')
    expect(camelToKebebCase('category')).to.equal('category')
  })
})
