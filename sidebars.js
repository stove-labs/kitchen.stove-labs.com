module.exports = {
  learn: [
    {
      type: 'category',
      label: 'Workshops',
      items: [
        {
          type: 'category',
          label: 'Notarization',
          items: [
            'learn/workshops/notarization/overview', 
            'learn/workshops/notarization/intro',
            'learn/workshops/notarization/need-to-notarize',
            'learn/workshops/notarization/renting-an-old-factory',
            'learn/workshops/notarization/opportunities-in-a-digital-age',
            'learn/workshops/notarization/notarization-powered-by-blockchain',
            'learn/workshops/notarization/comparing-old-new',
            
          ]
        }
      ]
    }
  ],
  wiki: [
    {
      type: 'category',
      label: 'Workstation setup',
      items: [
        'wiki/workstation-setup/starter-kit'
      ]
    },
    { type: 'category',
    label: 'Smart Contract',
    items: [
      'knowledge/smart_contract/smart-contract',
      'knowledge/smart_contract/entrypoints',
      'knowledge/smart_contract/michelson',
    ]
  
  },
    {
      type: 'category',
      label: 'Tezos Protocol',
      items: [
        'knowledge/tezos_protocol/implicit-account',
        'knowledge/tezos_protocol/block', 
        'knowledge/tezos_protocol/context',
        {
          type: 'category',
          label: 'Cryptography',
          items: [
            'knowledge/tezos_protocol/cryptography/address',
            'knowledge/tezos_protocol/cryptography/hash', 
            'knowledge/tezos_protocol/cryptography/key-pair',
            'knowledge/tezos_protocol/cryptography/signature'
          ]
        },
        'knowledge/tezos_protocol/protocol',
     
      'knowledge/tezos_protocol/node',
      {
        type: 'category',
        label: 'Operations',
        items: [
          'knowledge/tezos_protocol/operations/operations',
          'knowledge/tezos_protocol/operations/gas-fees',
          'knowledge/tezos_protocol/operations/originated-account',
          'knowledge/tezos_protocol/operations/reveal-operation',
          'knowledge/tezos_protocol/operations/transaction'
        ]
      }

      ]
    },
    {
      type: 'category',
      label: 'References',
      items: [
        'knowledge/references/taquito',
        'knowledge/references/tezbridge',

      ]
    }
    
  ]
};
