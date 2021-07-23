import { artboard } from './constellation/artboard';
import Constellation from './constellation/constellation';

$(() => {
  /**
   * Constellation background
   * */
  const constellationManager = {
    constellation: new Constellation('background-canvas', artboard),
    
    $viewCtrPanelButton: $('#view-ctr-panel'),
    
    $bkgdButtons: $('#bkgd-buttons'),
    
    $modeButtons: $('#bkgd-modes button'),
    
    hideLinesOption: document.getElementById('hide-lines'),

    $destroyShapesButton: $('#destroy-shapes'),

    _hideControls: function () {
      this.$viewCtrPanelButton.removeClass('active').html('&xdtri;');
      this.$bkgdButtons.removeClass('show');
    },

    _toggleCtrPanel: function (e) {
      const $button = $(e.currentTarget);
      $button.toggleClass('active');
      if ($button.is('.active')) {
        $button.html('&xutri;');
      } else {
        $button.html('&xdtri;');
      }

      this.$bkgdButtons.toggleClass('show');
    },

    _changeMode: function (e) {
      // Changing Constellation mode
      const $button = $(e.currentTarget);
      this.constellation.changeMouseMode($button.data('bkgdMode'));
      this.$modeButtons.removeClass('active');
      $button.addClass('active');

      // reset the constellation to its original form
      if ($button.data('bkgdMode') === 'default') {
        this.constellation.resetArtboard(artboard);
        this.hideLinesOption.checked = false;
      }

      this._hideControls();
    },

    init: function () {
      this.$viewCtrPanelButton.on('click', this._toggleCtrPanel.bind(this));
      $('#bkgd-modes').on('click', 'button', this._changeMode.bind(this));
      this.hideLinesOption.addEventListener('click', () => {
        this.constellation.toggleLines()
      });
      this.$destroyShapesButton.on('click', () => {
        this.constellation.destroyShapes();
      });
    },
  };

  constellationManager.init();
});