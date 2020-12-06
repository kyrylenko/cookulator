import { useRouter } from 'next/router';
import translations from './trabslations.json';

export function useTranslation() {
    const router = useRouter();
    //const { locale }: {locale: string} = router;
    const { locale } = router;

    return {
      t: function (key: string) {
        //@ts-ignore
        return translations[locale][key];
      }
    }
}