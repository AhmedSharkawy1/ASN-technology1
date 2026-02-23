/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'ar'];

export default getRequestConfig((async ({ requestLocale, locale }: any) => {
    // next-intl 3.9+ uses requestLocale, older uses locale
    let resolvedLocale = locale || requestLocale;
    if (resolvedLocale instanceof Promise) {
        resolvedLocale = await resolvedLocale;
    }

    if (!resolvedLocale || !locales.includes(resolvedLocale as any)) {
        resolvedLocale = 'en';
    }

    return {
        locale: resolvedLocale,
        messages: (await import(`../messages/${resolvedLocale}.json`)).default
    };
}) as any);
