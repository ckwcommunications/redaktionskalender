var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';
var BLACK_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg';

var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
};

window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: {
        dark: WHITE_ICON,
        light: BLACK_ICON
      },
      text: 'superKalender',
      condition: 'always',
      url: 'https://calendar.google.com',
      target: 'Google Kalender' // optional target for above url
    }];
  }
});