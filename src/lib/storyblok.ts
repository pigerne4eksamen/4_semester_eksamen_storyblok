import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import Murercard from "@/components/Murercard";
import Vaerdier from "@/components/Vaerdier";
import VaerdiCard from "@/components/VaerdiCard";
import Ydelser from "@/components/Ydelser";
import YdelserCard from "@/components/YdelserCard";
import Kundeanmeldelser from "@/components/Kundeanmeldelser";
import KundeanmeldelserCard from "@/components/KundeanmeldelserCard";
import TidligereProjekter from "@/components/TidligereProjekter";
import KontaktForside from "@/components/KontaktForside";
import Faq from "@/components/Faq";
import FaqItem from "@/components/FaqItem";
import TidligereYdelse from "@/components/TidligereYdelse";
import ProcesYdelseCard from "@/components/ProcesYdelseCard";
import ProcesYdelse from "@/components/ProcesYdelse";
import KontaktInfo from "@/components/KontaktInfo";
import KontaktInfoCard from "@/components/KontaktInfoCard";
import Inkluderet from "@/components/Inkluderet";
import HeroCard from "@/components/HeroCard";
import Button from "@/components/Button";
import Galleri from "@/components/Galleri";
import Formular from "@/components/Formular";

export const initStoryblok = () => {
  storyblokInit({
    accessToken: process.env.STORYBLOK_API_TOKEN,
    use: [apiPlugin],
    components: {
        page: Page,
        hero: Hero,
        herocard: HeroCard,
        murercard: Murercard,
        vaerdier: Vaerdier,
        vaerdicard: VaerdiCard,
        ydelser: Ydelser,
        ydelsercard: YdelserCard,
        kundeanmeldelser: Kundeanmeldelser,
        kundeanmeldelsercard: KundeanmeldelserCard,
        tidligereprojekter: TidligereProjekter,
        kontaktforside: KontaktForside,
        faq: Faq,
        faqitem: FaqItem,
        tidligereydelse: TidligereYdelse,
        procesydelsecard: ProcesYdelseCard,
        procesydelse: ProcesYdelse,
        kontaktinfo: KontaktInfo,
        kontaktinfocard: KontaktInfoCard,
        inkluderet: Inkluderet,
        button: Button,
        galleri: Galleri,
        formular: Formular
    },
  });
};
