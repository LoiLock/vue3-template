import {VueI18n, createI18n} from 'vue-i18n';

const i18n = createI18n({
    locale: 'en',
});

async function loadMessages(i18nInstance: VueI18n): Promise<void> {
    const {locale} = i18nInstance;

    const messages = await import(`@/lang/${locale}.json`);

    i18nInstance.setLocaleMessage(locale, messages.default);
}

loadMessages(i18n.global as VueI18n);

export default i18n;
