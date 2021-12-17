import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { supportedLocales } from 'ember-cheat-sheet/services/locale';
import { setupIntl, t } from 'ember-intl/test-support';

const TEST_LOCALE_CODE = 'en-us';

module('Unit | Service | locale', function (hooks) {
  setupTest(hooks);
  setupIntl(hooks, [TEST_LOCALE_CODE]);

  test('menuOptions includes user-friendly labels', function (assert) {
    const locale = this.owner.lookup('service:locale');

    const expected = Array.from(supportedLocales)
      .map((localeCode) => t(`component.locale-menu.locale-${localeCode}`))
      .sort((a, b) => a.localeCompare(b, TEST_LOCALE_CODE));

    assert.deepEqual(
      locale.menuOptions.map(({ label }) => label),
      expected
    );
  });
});
