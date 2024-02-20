import { module, test } from 'qunit';
import { setupRenderingTest } from 'subirdescargar/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | generador-pdf', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GeneradorPdf />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <GeneradorPdf>
        template block text
      </GeneradorPdf>
    `);

    assert.dom().hasText('template block text');
  });
});
