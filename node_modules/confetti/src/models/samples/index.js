const samples = {
  category: {
    raw: require('./category/raw'),
    formatted: require('./category/formatted'),
  },
  contact: {
    raw: require('./contact/raw'),
    formatted: require('./contact/formatted'),
  },
  event: {
    raw: require('./event/raw'),
    formatted: require('./event/formatted'),
  },
  image: {
    raw: require('./image/raw'),
    formatted: require('./image/formatted'),
  },
  payment: {
    raw: require('./payment/raw'),
    formatted: require('./payment/formatted'),
  },
  ticket: {
    raw: require('./ticket/raw'),
    formatted: require('./ticket/formatted'),
  },
  webhook: {
    raw: require('./webhook/raw'),
    formatted: require('./webhook/formatted'),
  },
  workspace: {
    raw: require('./workspace/raw'),
    formatted: require('./workspace/formatted'),
  },
  ticketBatch: {
    raw: require('./ticket-batch/raw'),
    formatted: require('./ticket-batch/formatted'),
  },
}

module.exports = function () {
  const getSample = (model) => {
    const raw = samples[model].raw
    const formatted = samples[model].formatted
    const rawMultiple = { data: [raw.data, raw.data] }
    const formattedMultiple = [
      JSON.parse(JSON.stringify(formatted)),
      JSON.parse(JSON.stringify(formatted)),
    ]
    delete formattedMultiple[0].meta
    delete formattedMultiple[1].meta

    return {
      single: {
        formatted: formatted,
        raw: raw,
      },
      multiple: {
        formatted: formattedMultiple,
        raw: rawMultiple,
      },
    }
  }

  const models = [
    'category',
    'contact',
    'event',
    'image',
    'payment',
    'ticket',
    'webhook',
    'workspace',
    'ticketBatch',
  ]

  return models.reduce((result, key) => {
    result[key] = getSample(key)
    return result
  }, {})
}
