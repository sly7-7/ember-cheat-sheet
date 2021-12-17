import Service, { inject as service } from '@ember/service';

/*
  To help with maintenance, please list
  the supported locales in alphabetical order.
*/
export const supportedLocales = new Set(['en-US', 'eo', 'es', 'fr-FR', 'ja', 'pt-BR', 'tr']);

export default class LocaleService extends Service {
  @service intl;

  menuOptions = Array.from(supportedLocales)
    .map((locale) => {
      return {
        label: this.intl.t(`component.locale-menu.locale-${locale}`).toString(),
        value: locale,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label, this.intl.primaryLocale));

  updateSiteLocale(locale) {
    if (!supportedLocales.has(locale)) {
      return;
    }

    this.intl.setLocale(locale);
  }
}
