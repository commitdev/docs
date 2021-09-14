module.exports = {
  docs: [
    'about-commit',
    'about-ep-program',
    {
      type: 'category',
      label: 'Communication',
      collapsed: true,
      items: [
        'communication/slack',
        'communication/helix',
        'communication/zoom',
        'communication/calendly',
      ],
    },
    {
      type: 'category',
      label: 'Culture',
      collapsed: true,
      items: [
        'culture/doing-whats-right',
        'culture/life-at-commit',
        'culture/st-team/epx-team',
      ],
    },
    {
      type: 'category',
      label: 'EP Handbook',
      collapsed: false,
      items: [
        'ep-handbook/onboarding',
        'ep-handbook/hop',
        'ep-handbook/matchmaking',
        'ep-handbook/pilot',
        'ep-handbook/offboarding',
        'ep-handbook/graduation',
        'ep-handbook/all-hands',
        'ep-handbook/hop-demos',
      ],
    },
    'hr/vacation-and-time-off',
  ],
};
