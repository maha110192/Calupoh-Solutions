import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Si usas backend para cargar traducciones
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "heroSubtitle": "We are getting married",
          "heroTitle": "Daniela Paola\n&\nMiguel Angel",
          "heroDate": "November 9, 2024",
          "countdownTitle": "Countdown",
          "days": "DAYS",
          "countdownSubtitle": "Can’t wait to celebrate with you",
          "whereTitle": "VENUES & WEDDING ITINERARY",
          "whereSubtitle": "A day to remember: from vows to celebrations",
          "hotelsTitle": "Hotels",
          "hotelsSubtitle": "Because your comfort is part of our special day",
          "giftsTitle": "WEDDING REGISTRY",
          "giftsSubtitle": "Our greatest gift is sharing this special day with you! \nShould you wish to offer a gift, we suggest the following options",
          // "giftsSubtitle2": "Should you wish to offer a gift, we suggest the following options",
          "amazonWedReg": "Amazon Wedding Registry: ",
          "amazonWedReg2": "Amazon Gift Card: ",
          "dressCodeTitle": "IMPORTANT EVENT INFORMATION",
          "dressCodeSubtitle": "Dress Code",
          "noSmoking": "NO SMOKING",
          "noChildren": "NO CHILDREN",
          "dressCode": "Dress Code: ",
          "dressCodeFormal": "- Formal (suit or long dress) -",
          "dressCodeNoChildren": "- Please note that the event is designed for adults, and we respectfully request no children -",
          "dressCodeNoSmoking": "- Smoking will be strictly forbidden during the entire duration of the event, both indoors and outdoors -",
          "confirmationsTitle": "RSVP",
          "confirmationsSubtitle": "Let's Get In Touch",
          "formName":"Name",
          "formEmail":"Email",
          "formPhone":"Phone",
          "formMessage":"How can we help you?",
          "footer1":"Got an upcoming event?",
          "footer2":"Design your web invitation with us. ",
          "footer3":"© 2024 Calupoh+. All Rights Reserved.",
          "religiousCeremony": {
            "title": "Religious Ceremony",
            "time": "Time: 4:00 p.m.",
            "description": "Place: Parroquia del Señor del Encino",
            "description2": "Address: Jardín, Barrio del Encino, 20240. Aguascalientes, Ags., México.",
            "locationUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.363643634333!2d-102.2937839218664!3d21.875182263614903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee796b62a955%3A0x6f40669481f287ec!2sParroquia%20del%20Se%C3%B1or%20del%20Encino!5e0!3m2!1ses-419!2sca!4v1715200189348!5m2!1ses-419!2sca"
          }
        },
      },
      es: {
        translation: {
          "heroSubtitle": "¡Nos Casamos!",
          "heroTitle": "Daniela Paola\n&\nMiguel Angel",
          "heroDate": "9 de Noviembre, 2024",
          "whereTitle": "NUESTRO ITINERARIO",
          "whereSubtitle": "Acompáñanos en cada momento",
          "hotelsTitle": "Hoteles",
          "hotelsSubtitle": "Opciones de alojamiento en Aguascalientes",
          "giftsTitle": "MESA DE REGALOS",
          "giftsSubtitle": "Tu compañía es nuestro mayor regalo; \npero si deseas obsequiarnos algo, te sugerimos las siguientes opciones",
          "amazonWedReg": "Mesa de Regalos de Amazon: ",
          "amazonWedReg2": "Tarjeta de Regalo de Amazon: ",
          "dressCodeTitle": "INFORMACION IMPORTANTE",
          "dressCodeSubtitle": " Formal (traje o vestido largo)",
          "dressCodeFormal": "- Formal (traje o vestido largo) -",
          "noSmoking": "NO FUMAR",
          "noChildren": "NO NIÑOS",
          "dressCode": "Código de Vestimenta: ",
          "confirmationsTitle": "CONFIRMAR MI ASISTENCIA",
          "confirmationsSubtitle": "Compártenos Tu Idea",
          "formName":"Nombre",
          "formEmail":"Email",
          "formPhone":"Celular",
          "formMessage":"Cómo podemos Ayudarte?",
          "footer3":"© 2024 Calupoh+. All Rights Reserved.",
          "religiousCeremony": {
            "title": "Ceremonia Religiosa  ",
            "time": "Hora: 4:00 p.m.",
            "description": "Lugar: Parroquia del Señor del Encino",
            "description2": "Jardín, Barrio del Encino, 20240. Aguascalientes, Ags., México.",
            "locationUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.363643634333!2d-102.2937839218664!3d21.875182263614903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee796b62a955%3A0x6f40669481f287ec!2sParroquia%20del%20Se%C3%B1or%20del%20Encino!5e0!3m2!1ses-419!2sca!4v1715200189348!5m2!1ses-419!2sca"
          }
        }
      }
    }
  });

export default i18n;
