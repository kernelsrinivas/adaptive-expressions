"use strict";
/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * locale info of decimal, thousands, grouping and currency.
 */
exports.localeInfo = {
    'ar-MA': {
        currency: ['\u062f.\u0645. ', ''],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'en-IN': {
        currency: ['\u20b9', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    },
    'ar-BH': {
        currency: ['', ' \u062f.\u0628.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-PS': {
        currency: ['\u20aa ', ''],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'en-IE': {
        currency: ['\u20ac', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
    'it-IT': {
        currency: ['\u20ac', ''],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'ar-EG': {
        currency: ['', ' \u062c.\u0645.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-IQ': {
        currency: ['', ' \u062f.\u0639.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-EH': {
        currency: ['\u062f.\u0645. ', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
    'ar-AE': {
        currency: ['', ' \u062f.\u0625.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-MR': {
        currency: ['', ' \u0623.\u0645.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'uk-UA': {
        currency: ['', '\u00a0\u20b4.'],
        decimal: ',',
        thousands: '\u00a0',
        grouping: [3],
    },
    'ca-ES': {
        currency: ['', '\u00a0\u20ac'],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'sv-SE': {
        currency: ['', ' kr'],
        decimal: ',',
        thousands: '\u00a0',
        grouping: [3],
    },
    'ja-JP': {
        currency: ['', '\u5186'],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
    'es-ES': {
        currency: ['', '\u00a0\u20ac'],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'fi-FI': {
        currency: ['', '\u00a0\u20ac'],
        decimal: ',',
        thousands: '\u00a0',
        grouping: [3],
    },
    'ar-DZ': {
        currency: ['\u062f.\u062c. ', ''],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'en-GB': {
        currency: ['\u00a3', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
    'cs-CZ': {
        currency: ['', '\u00a0K\u010d'],
        decimal: ',',
        thousands: '\u00a0',
        grouping: [3],
    },
    'ar-TD': {
        currency: ['\u200fFCFA ', ''],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'de-CH': {
        currency: ['', '\u00a0CHF'],
        decimal: ',',
        thousands: "'",
        grouping: [3],
    },
    'nl-NL': {
        currency: ['\u20ac\u00a0', ''],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'es-BO': {
        currency: ['Bs\u00a0', ''],
        decimal: ',',
        percent: '\u202f%',
        thousands: '.',
        grouping: [3],
    },
    'ar-SY': {
        currency: ['', ' \u0644.\u0633.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-JO': {
        currency: ['', ' \u062f.\u0623.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'en-CA': {
        currency: ['$', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
    'ar-ER': {
        currency: ['Nfk ', ''],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-LB': {
        currency: ['', ' \u0644.\u0644.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'fr-CA': {
        currency: ['', '$'],
        decimal: ',',
        thousands: '\u00a0',
        grouping: [3],
    },
    'ar-TN': {
        currency: ['\u062f.\u062a. ', ''],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'ar-YE': {
        currency: ['', ' \u0631.\u0649.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ru-RU': {
        currency: ['', '\u00a0\u0440\u0443\u0431.'],
        decimal: ',',
        thousands: '\u00a0',
        grouping: [3],
    },
    'en-US': {
        currency: ['$', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
    'ar-SS': {
        currency: ['\u00a3 ', ''],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-SO': {
        currency: ['\u200fS ', ''],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'hu-HU': {
        currency: ['', '\u00a0Ft'],
        decimal: ',',
        thousands: '\u00a0',
        grouping: [3],
    },
    'pt-BR': {
        currency: ['R$', ''],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'ar-DJ': {
        currency: ['\u200fFdj ', ''],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-SD': {
        currency: ['', ' \u062c.\u0633.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-001': {
        currency: ['', ''],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-LY': {
        currency: ['\u062f.\u0644. ', ''],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'ar-SA': {
        currency: ['', ' \u0631.\u0633.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'ar-KW': {
        currency: ['', ' \u062f.\u0643.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'pl-PL': {
        currency: ['', 'z\u0142'],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'ar-QA': {
        currency: ['', ' \u0631.\u0642.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'mk-MK': {
        currency: ['', '\u00a0\u0434\u0435\u043d.'],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'ko-KR': {
        currency: ['\u20a9', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
    'es-MX': {
        currency: ['$', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
    'ar-IL': {
        currency: ['\u20aa ', ''],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'zh-CN': {
        currency: ['\u00a5', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
    'de-DE': {
        currency: ['', '\u00a0\u20ac'],
        decimal: ',',
        thousands: '.',
        grouping: [3],
    },
    'ar-OM': {
        currency: ['', ' \u0631.\u0639.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'fr-FR': {
        currency: ['', '\u00a0\u20ac'],
        decimal: ',',
        percent: '\u202f%',
        thousands: '\u00a0',
        grouping: [3],
    },
    'ar-KM': {
        currency: ['', ' \u0641.\u062c.\u0642.'],
        decimal: '\u066b',
        thousands: '\u066c',
        numerals: ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'],
        grouping: [3],
    },
    'he-IL': {
        currency: ['\u20aa', ''],
        decimal: '.',
        thousands: ',',
        grouping: [3],
    },
};
//# sourceMappingURL=localeInfo.js.map