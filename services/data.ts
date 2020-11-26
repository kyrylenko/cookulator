const data: any = {
    en: {
        title: 'Hello',
        content: 'Dear nigga'
    },
    uk: {
        title: 'Привіт',
        content: 'Шановний нігга'
    },
    ru: {
        title: 'Привет',
        content: 'Дорогой нигер'
    }
};

export default function(key: string) {
    return data[key];
};
