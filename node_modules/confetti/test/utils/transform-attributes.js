const { expect } = require('../helper')

const transformAttributes = require('../../src/utils/transform-attributes')

describe('transformAttributes()', function () {
  it('should pick attributes using configuration object ', function () {
    const attributes = [
      { key: 'firstName', label: 'First name', type: 'string' },
      { key: 'lastName', label: 'Last name', type: 'string' },
      { key: 'name', label: 'Name', type: 'string' },
      { key: 'email', label: 'Email', type: 'string' },
      { key: 'phone', label: 'Phone', type: 'string' },
      { key: 'token', label: 'Token', type: 'string' },
      { key: 'status', label: 'Status', type: 'string' },
    ]

    const config = { firstName: {}, lastName: {} }

    expect(transformAttributes(attributes, config)).to.deep.equal([
      { key: 'firstName', label: 'First name', type: 'string' },
      { key: 'lastName', label: 'Last name', type: 'string' },
    ])
  })
  it('should add additional properties from config object', function () {
    const attributes = [
      { key: 'firstName', label: 'First name', type: 'string' },
      { key: 'lastName', label: 'Last name', type: 'string' },
      { key: 'name', label: 'Name', type: 'string' },
      { key: 'email', label: 'Email', type: 'string' },
      { key: 'phone', label: 'Phone', type: 'string' },
      { key: 'token', label: 'Token', type: 'string' },
      { key: 'status', label: 'Status', type: 'string' },
    ]

    const config = {
      firstName: { required: true },
      lastName: { required: true, default: 'Test' },
    }

    expect(transformAttributes(attributes, config)).to.deep.equal([
      {
        key: 'firstName',
        label: 'First name',
        type: 'string',
        required: true,
      },
      {
        key: 'lastName',
        label: 'Last name',
        type: 'string',
        required: true,
        default: 'Test',
      },
    ])
  })
  it('should add key from config object if missing in array', function () {
    const attributes = [
      { key: 'firstName', label: 'First name', type: 'string' },
      { key: 'lastName', label: 'Last name', type: 'string' },
      { key: 'name', label: 'Name', type: 'string' },
      { key: 'email', label: 'Email', type: 'string' },
      { key: 'phone', label: 'Phone', type: 'string' },
      { key: 'token', label: 'Token', type: 'string' },
      { key: 'status', label: 'Status', type: 'string' },
    ]

    const config = {
      firstName: { required: true },
      someCreateField: { label: 'Some create field', type: 'string' },
    }

    expect(transformAttributes(attributes, config)).to.deep.equal([
      {
        key: 'firstName',
        label: 'First name',
        type: 'string',
        required: true,
      },
      {
        key: 'someCreateField',
        label: 'Some create field',
        type: 'string',
      },
    ])
  })
})
