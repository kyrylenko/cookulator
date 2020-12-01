const data: any = {
    en: {
        title: 'Hello',
    },
    uk: {
        title: 'Привіт',
    },
    ru: {
        title: 'Привет',
    }
};

export default function(key: string) {
    return data[key];
};
