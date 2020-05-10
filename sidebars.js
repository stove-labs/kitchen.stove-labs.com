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
      'wiki/smart-contract',
      'wiki/michelson',
    ]
  
  },
    {
      type: 'category',
      label: 'Tezos Protocol',
      items: [
        'wiki/implicit-account',
        'wiki/block', 
        'wiki/context',
        {
          type: 'category',
          label: 'Cryptography',
          items: [
            'wiki/address',
            'wiki/hash', 
            'wiki/key-pair',
            'wiki/signature'
          ]
        },
        'wiki/protocol',
     
      'wiki/node',
      {
        type: 'category',
        label: 'Operations',
        items: [
          'wiki/operations',
          'wiki/gas-fees',
          'wiki/originated-account',
          'wiki/reveal-operation',
          'wiki/transaction'
        ]
      }

      ]
    },
    {
      type: 'category',
      label: 'References',
      items: [
        'wiki/taquito',
        'wiki/tezbridge',

      ]
    }
    
  ]
};
