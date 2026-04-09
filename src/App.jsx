import React, { useEffect, useState } from 'react';
import {
  Bell,
  Bike,
  Bus,
  ChevronRight,
  Clock3,
  CreditCard,
  Download,
  Map,
  Route,
  Shield,
  Sparkles,
  Star,
  UserRound,
  Zap,
} from 'lucide-react';

const toneClasses = {
  blue: {
    wrapper: 'hover:bg-blue-50 hover:border-blue-100',
    iconBox: 'bg-blue-100',
    icon: 'text-blue-500',
  },
  amber: {
    wrapper: 'hover:bg-amber-50 hover:border-amber-100',
    iconBox: 'bg-amber-100',
    icon: 'text-amber-600',
  },
  emerald: {
    wrapper: 'hover:bg-emerald-50 hover:border-emerald-100',
    iconBox: 'bg-emerald-100',
    icon: 'text-emerald-500',
  },
  sky: {
    wrapper: 'hover:bg-cyan-50 hover:border-cyan-100',
    iconBox: 'bg-cyan-100',
    icon: 'text-cyan-600',
  },
};

const comingSoonHref = '#/proximamente';

const translations = {
  es: {
    meta: {
      lang: 'es',
      title: 'Subite - Tu ciudad a tu ritmo',
    },
    labels: {
      faq: 'FAQ',
      langEs: 'ES',
      langEn: 'EN',
    },
    nav: {
      features: 'Características',
      experience: 'Experiencia',
      howItWorks: 'Cómo funciona',
      services: 'Servicios',
      login: 'Iniciar sesión',
      download: 'Descargar',
    },
    hero: {
      badge: 'Actualizada con datos en tiempo real',
      titleLine1: 'Tu ciudad,',
      titleLine2: 'tu ritmo.',
      description:
        'La forma más inteligente de moverte. Encuentra la mejor ruta, conoce los tiempos de llegada y mantente informado sobre desvíos, todo en una sola aplicación.',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      rating: '4.8/5 de +10k usuarios',
      alertTitle: 'Alerta activa',
      alertDetail: 'Desvío en línea 115',
      routeLabel: '102 R',
      arrivalLabel: 'Llega en 2 min',
      appAlt: 'Pantalla principal de la app',
      avatarAlt: 'Usuario de Subite',
    },
    quickStats: [
      {
        value: '+10k',
        label: 'usuarios activos',
        detail: 'Consultan líneas, paradas y alertas cada día.',
      },
      {
        value: '4.8/5',
        label: 'valoración media',
        detail: 'Experiencia simple, rápida y confiable.',
      },
      {
        value: 'En vivo',
        label: 'estado del servicio',
        detail: 'Desvíos, demoras y recorridos alternativos en tiempo real.',
      },
    ],
    coreFeaturesSection: {
      title: 'Todo lo que necesitas para tu viaje',
      description:
        'Una suite completa de herramientas diseñada para hacer tu experiencia de transporte público más simple, predecible y útil.',
    },
    coreFeatures: [
      {
        icon: Map,
        title: 'Rutas optimizadas',
        description:
          'Calculamos la mejor ruta combinando caminata y múltiples líneas de colectivo para que llegues más rápido.',
        tone: 'blue',
      },
      {
        icon: Bell,
        title: 'Alertas en tiempo real',
        description:
          'Infórmate al instante sobre cortes, manifestaciones u obras que afecten el recorrido habitual de tu línea.',
        tone: 'amber',
      },
      {
        icon: Shield,
        title: 'Favoritos seguros',
        description:
          'Guarda líneas, destinos y paradas frecuentes para entrar a la app y resolver tu viaje en segundos.',
        tone: 'emerald',
      },
      {
        icon: CreditCard,
        title: 'Servicios integrados',
        description:
          'Encuentra puntos SUBE y soluciones de micromovilidad sin salir de la misma experiencia.',
        tone: 'sky',
      },
    ],
    experience: {
      badge: 'Funciones clave en una sola app',
      title: 'Todo lo que necesitas para moverte mejor',
      description:
        'Desde la búsqueda de rutas hasta el seguimiento de paradas y mapas interactivos, Subite reúne herramientas pensadas para cada momento del viaje.',
      cards: [
        {
          image: 'IMG_1158.jpeg',
          title: 'Compara alternativas',
          description:
            'Ves tiempos, combinaciones y costo total para elegir el viaje que más te conviene en ese momento.',
        },
        {
          image: 'IMG_1159.jpeg',
          title: 'Sigue cada parada',
          description:
            'Consulta el recorrido completo de una línea y entiende rápidamente dónde bajarte o qué tramo te falta.',
        },
        {
          image: 'IMG_1160.jpeg',
          title: 'Ubícate en el mapa',
          description:
            'Explora recorridos, paradas cercanas y zonas clave de la ciudad desde una vista geográfica clara.',
        },
      ],
    },
    howItWorks: {
      title: 'Encuentra la mejor opción en segundos',
      description:
        'Dinos a dónde vas y te mostraremos todas las alternativas. Compara tiempos de viaje, costos y transbordos necesarios.',
      bullets: [
        {
          label: 'Estimación precisa:',
          text: 'Tiempos de llegada basados en el tráfico actual.',
        },
        {
          label: 'Costo total:',
          text: 'Conoce de antemano el valor de tu viaje.',
        },
        {
          label: 'Paso a paso:',
          text: 'Instrucciones claras de dónde caminar y qué línea tomar.',
        },
      ],
      imageAlt: 'Mejores opciones de ruta',
    },
    dailyFlowSection: {
      title: 'Así acompaña Subite todo el recorrido',
      description: 'El producto no se limita a mostrar una línea. Te ayuda antes, durante y después de cada viaje.',
      steps: [
        {
          step: '01',
          title: 'Busca tu destino',
          description: 'Ingresas una dirección, punto de interés o eliges una parada guardada.',
        },
        {
          step: '02',
          title: 'Compara opciones',
          description: 'La app te muestra distintas combinaciones con tiempo estimado y nivel de conveniencia.',
        },
        {
          step: '03',
          title: 'Sigue el recorrido',
          description: 'Revisas el mapa, las paradas y el paso a paso para moverte con confianza.',
        },
        {
          step: '04',
          title: 'Recibe alertas',
          description: 'Si algo cambia, te enteras al instante para ajustar tu viaje antes de que te afecte.',
        },
      ],
    },
    alerts: {
      title: 'Anticípate a los imprevistos',
      description:
        'La ciudad es dinámica. Nuestra sección de estado del servicio te mantiene actualizado sobre cualquier evento que afecte tu recorrido.',
      cardTitle: 'Avisos detallados',
      cardDescription:
        'Conoce el motivo del desvío, qué líneas están afectadas y cuál es la ruta alternativa temporal recomendada.',
      benefitA: {
        title: 'Ahorra tiempo',
        description: 'Evita llegar a una parada y descubrir tarde que hubo un cambio en la línea.',
      },
      benefitB: {
        title: 'Reacciona mejor',
        description: 'Ten siempre una alternativa visual para decidir sobre la marcha sin improvisar.',
      },
      imageAlt: 'Alertas y desvíos',
    },
    profile: {
      title: 'Una experiencia que se adapta a tu rutina',
      description:
        'Después de planificar tu ruta, también puedes guardar favoritos, ajustar notificaciones y acceder a soporte desde un perfil simple y útil.',
      cards: [
        {
          title: 'Favoritos y accesos rápidos',
          description:
            'Las líneas y destinos que más usas quedan siempre a mano para repetir viajes cotidianos sin volver a empezar.',
        },
        {
          title: 'Configuración simple',
          description:
            'Controla notificaciones, preferencias y soporte desde una interfaz clara pensada para el uso diario.',
        },
        {
          title: 'Todo bajo control',
          description:
            'Tu información frecuente, tus preferencias y la ayuda que necesitas están siempre disponibles desde un solo lugar.',
        },
      ],
      imageAlt: 'Perfil y configuración de la app',
    },
    services: {
      title: 'Más que solo colectivos',
      description:
        'Integramos distintas soluciones de movilidad para que no tengas que saltar entre aplicaciones.',
      items: [
        {
          image: 'IMG_1161.jpeg',
          imageAlt: 'Puntos SUBE',
          icon: CreditCard,
          title: 'Puntos de recarga SUBE',
          description:
            'Encuentra en el mapa el kiosco o local más cercano para cargar tu tarjeta y resuelve ese paso sin perder tiempo.',
          iconBox: 'bg-blue-100',
          iconClass: 'text-blue-500',
        },
        {
          image: 'IMG_1162.jpeg',
          imageAlt: 'Mi Bici Tu Bici',
          icon: Bike,
          title: 'Bicicletas públicas',
          description:
            'Ubica estaciones del sistema de bicis para combinar pedaleo y colectivo cuando necesitas una última milla más ágil.',
          iconBox: 'bg-emerald-100',
          iconClass: 'text-emerald-500',
        },
      ],
    },
    useCases: {
      title: 'Pensada para los trayectos de todos los días',
      description:
        'Ya sea para ir al trabajo, cursar o volver a casa, Subite te ayuda a moverte con más previsión y menos fricción.',
      badge: 'Movilidad cotidiana sin fricción',
      cards: [
        {
          title: 'Ir al trabajo sin improvisar',
          description: 'Revisa el mejor horario, compara demoras y sal con tiempo real en la mano.',
        },
        {
          title: 'Moverte a la facultad',
          description: 'Guarda combinaciones frecuentes y consulta rápidamente paradas cercanas al campus.',
        },
        {
          title: 'Salir por la ciudad',
          description: 'Descubre recorridos alternativos y zonas con mejor conectividad para volver sin estrés.',
        },
        {
          title: 'Resolver recargas y extras',
          description: 'Encuentra puntos SUBE o integra bici pública cuando necesitas el último tramo.',
        },
      ],
    },
    faqSection: {
      title: 'Preguntas frecuentes',
      description: 'Respuestas rápidas para entender cómo puede ayudarte la app desde el primer uso.',
      items: [
        {
          question: '¿Qué puedo hacer con Subite además de ver colectivos?',
          answer:
            'También puedes consultar recorridos completos, recibir alertas sobre desvíos, encontrar puntos de recarga SUBE y ubicar servicios complementarios como bicicletas públicas.',
        },
        {
          question: '¿La app sirve para viajes cotidianos?',
          answer:
            'Sí. Está pensada para trayectos repetidos como trabajo, estudio o salidas frecuentes, por eso incluye favoritos, accesos rápidos y un historial de uso.',
        },
        {
          question: '¿La app muestra información actualizada durante el viaje?',
          answer:
            'Sí. Puedes consultar alertas, cambios de recorrido y datos clave para decidir mejor antes de salir o mientras ya estás en camino.',
        },
      ],
    },
    cta: {
      title: 'Empieza a moverte mejor hoy mismo',
      description:
        'Descarga Subite y consulta rutas, alertas, recorridos y servicios clave desde una sola app pensada para la movilidad diaria.',
      button: 'Descargar app',
    },
    footer: {
      description:
        'La solución integral para la movilidad urbana: datos precisos, rutas optimizadas y toda la información de la ciudad en tu bolsillo.',
      product: 'Producto',
      support: 'Soporte',
      links: {
        features: 'Características',
        experience: 'Experiencia',
        faq: 'Preguntas frecuentes',
        help: 'Centro de ayuda',
        report: 'Reportar problema',
        terms: 'Términos y privacidad',
      },
      rights: '© 2026 Subite. Todos los derechos reservados.',
    },
    comingSoon: {
      back: 'Volver al inicio',
      badge: 'Próximamente',
      titleLine1: 'Estamos dejando',
      titleLine2: 'Subite a punto.',
      description:
        'La app todavía no está disponible para descarga ni acceso público. En este momento estamos testeando el funcionamiento, ajustando detalles y preparando una primera experiencia sólida.',
      primaryButton: 'Volver al landing',
      secondaryButton: 'Lanzamiento próximamente',
      panelLabel: 'Estado',
      panelTitle: 'Beta privada',
      panelDescription:
        'Estamos probando rendimiento, consistencia de datos y experiencia de uso antes de abrir la app al público.',
      statusItems: [
        {
          title: 'Estamos en etapa de pruebas',
          description:
            'Estamos validando el funcionamiento general para que la experiencia de lanzamiento sea estable y clara.',
          icon: Sparkles,
          styles: 'bg-blue-100 text-blue-600',
        },
        {
          title: 'Ajustando recorridos y alertas',
          description:
            'Seguimos afinando información clave para que rutas, tiempos y avisos respondan como esperamos.',
          icon: Bell,
          styles: 'bg-amber-100 text-amber-600',
        },
        {
          title: 'Preparando el acceso inicial',
          description:
            'La descarga de la app y el inicio de sesión estarán habilitados cuando terminemos esta fase de testeo.',
          icon: Shield,
          styles: 'bg-emerald-100 text-emerald-600',
        },
      ],
    },
  },
  en: {
    meta: {
      lang: 'en',
      title: 'Subite - Your city, your pace',
    },
    labels: {
      faq: 'FAQ',
      langEs: 'ES',
      langEn: 'EN',
    },
    nav: {
      features: 'Features',
      experience: 'Experience',
      howItWorks: 'How it works',
      services: 'Services',
      login: 'Log in',
      download: 'Download',
    },
    hero: {
      badge: 'Updated with real-time data',
      titleLine1: 'Your city,',
      titleLine2: 'your pace.',
      description:
        'A smarter way to move around. Find the best route, check arrival times and stay informed about disruptions, all in one app.',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      rating: '4.8/5 from 10k+ users',
      alertTitle: 'Active alert',
      alertDetail: 'Detour on route 115',
      routeLabel: '102 R',
      arrivalLabel: 'Arrives in 2 min',
      appAlt: 'Main app screen',
      avatarAlt: 'Subite user',
    },
    quickStats: [
      {
        value: '10k+',
        label: 'active users',
        detail: 'They check routes, stops and service alerts every day.',
      },
      {
        value: '4.8/5',
        label: 'average rating',
        detail: 'A simple, fast and reliable experience.',
      },
      {
        value: 'Live',
        label: 'service status',
        detail: 'Detours, delays and alternate routes updated in real time.',
      },
    ],
    coreFeaturesSection: {
      title: 'Everything you need for your trip',
      description:
        'A complete toolkit designed to make public transport simpler, more predictable and more useful.',
    },
    coreFeatures: [
      {
        icon: Map,
        title: 'Optimized routes',
        description:
          'We calculate the best route by combining walking and multiple bus lines so you can get there faster.',
        tone: 'blue',
      },
      {
        icon: Bell,
        title: 'Real-time alerts',
        description:
          'Get instant updates about roadworks, protests or disruptions that affect your usual route.',
        tone: 'amber',
      },
      {
        icon: Shield,
        title: 'Secure favorites',
        description:
          'Save your most-used lines, stops and destinations so you can solve your trip in seconds.',
        tone: 'emerald',
      },
      {
        icon: CreditCard,
        title: 'Integrated services',
        description:
          'Find transit card top-up points and complementary mobility services without leaving the same experience.',
        tone: 'sky',
      },
    ],
    experience: {
      badge: 'Key features in one app',
      title: 'Everything you need to move better',
      description:
        'From route search to stop tracking and interactive maps, Subite brings together tools designed for every moment of the trip.',
      cards: [
        {
          image: 'IMG_1158.jpeg',
          title: 'Compare alternatives',
          description:
            'See travel times, transfers and total cost so you can choose the option that works best right now.',
        },
        {
          image: 'IMG_1159.jpeg',
          title: 'Follow every stop',
          description:
            'Check the full route of a line and quickly understand where to get off or how far you still have to go.',
        },
        {
          image: 'IMG_1160.jpeg',
          title: 'Locate yourself on the map',
          description:
            'Explore routes, nearby stops and key city areas through a clear geographic view.',
        },
      ],
    },
    howItWorks: {
      title: 'Find the best option in seconds',
      description:
        'Tell us where you are going and we will show every alternative. Compare travel time, cost and required transfers.',
      bullets: [
        {
          label: 'Accurate estimates:',
          text: 'Arrival times based on current traffic conditions.',
        },
        {
          label: 'Total cost:',
          text: 'Know the cost of your trip before you leave.',
        },
        {
          label: 'Step by step:',
          text: 'Clear instructions on where to walk and which line to take.',
        },
      ],
      imageAlt: 'Best route options',
    },
    dailyFlowSection: {
      title: 'How Subite supports the whole journey',
      description: 'It does more than show a route. It helps before, during and after every trip.',
      steps: [
        {
          step: '01',
          title: 'Search your destination',
          description: 'Enter an address, point of interest or pick one of your saved stops.',
        },
        {
          step: '02',
          title: 'Compare options',
          description: 'The app shows different combinations with estimated time and convenience level.',
        },
        {
          step: '03',
          title: 'Follow the route',
          description: 'Review the map, stops and step-by-step directions so you can move with confidence.',
        },
        {
          step: '04',
          title: 'Get alerts',
          description: 'If anything changes, you find out instantly and can adjust before it affects your trip.',
        },
      ],
    },
    alerts: {
      title: 'Stay ahead of disruptions',
      description:
        'Cities are dynamic. Our service status section keeps you updated about any event that may affect your route.',
      cardTitle: 'Detailed notices',
      cardDescription:
        'Understand the reason for the disruption, which lines are affected and what temporary alternative route is recommended.',
      benefitA: {
        title: 'Save time',
        description: 'Avoid reaching a stop only to realize too late that the service changed.',
      },
      benefitB: {
        title: 'React better',
        description: 'Keep a visual alternative ready so you can decide on the go without improvising.',
      },
      imageAlt: 'Alerts and detours',
    },
    profile: {
      title: 'An experience that adapts to your routine',
      description:
        'After planning your route, you can also save favorites, adjust notifications and access support from a simple, useful profile.',
      cards: [
        {
          title: 'Favorites and shortcuts',
          description:
            'The lines and destinations you use most are always close at hand, so recurring trips take less effort.',
        },
        {
          title: 'Simple settings',
          description:
            'Manage notifications, preferences and support from a clean interface designed for everyday use.',
        },
        {
          title: 'Everything under control',
          description:
            'Your frequent info, preferences and help options stay available from one single place.',
        },
      ],
      imageAlt: 'App profile and settings',
    },
    services: {
      title: 'More than just buses',
      description:
        'We integrate complementary mobility services so you do not need to jump between separate apps.',
      items: [
        {
          image: 'IMG_1161.jpeg',
          imageAlt: 'Transit card top-up points',
          icon: CreditCard,
          title: 'Transit card top-up points',
          description:
            'Find the nearest place to recharge your card on the map and solve that extra step without losing time.',
          iconBox: 'bg-blue-100',
          iconClass: 'text-blue-500',
        },
        {
          image: 'IMG_1162.jpeg',
          imageAlt: 'Public bike system',
          icon: Bike,
          title: 'Public bikes',
          description:
            'Locate bike stations and combine cycling with public transport whenever you need a faster last mile.',
          iconBox: 'bg-emerald-100',
          iconClass: 'text-emerald-500',
        },
      ],
    },
    useCases: {
      title: 'Built for everyday travel',
      description:
        'Whether you are heading to work, class or back home, Subite helps you move with more certainty and less friction.',
      badge: 'Daily mobility with less friction',
      cards: [
        {
          title: 'Get to work without guessing',
          description: 'Check the best time to leave, compare delays and head out with real-time information.',
        },
        {
          title: 'Move around campus',
          description: 'Save frequent combinations and quickly check stops near your university or school.',
        },
        {
          title: 'Go out around the city',
          description:
            'Discover alternate routes and areas with better connectivity so coming back feels less stressful.',
        },
        {
          title: 'Handle top-ups and extras',
          description:
            'Find card top-up points or combine public bikes when you need to solve the last stretch.',
        },
      ],
    },
    faqSection: {
      title: 'Frequently asked questions',
      description: 'Quick answers to understand how the app can help from the very first use.',
      items: [
        {
          question: 'What can I do with Subite beyond checking bus lines?',
          answer:
            'You can explore full routes, receive service alerts, find top-up points and locate complementary services such as public bikes.',
        },
        {
          question: 'Is the app useful for everyday commuting?',
          answer:
            'Yes. It is designed for repeated trips such as work, school or regular outings, which is why it includes favorites, shortcuts and recurring travel support.',
        },
        {
          question: 'Does the app show up-to-date information during the trip?',
          answer:
            'Yes. You can review alerts, route changes and key information to make better decisions before leaving or while you are already on the move.',
        },
      ],
    },
    cta: {
      title: 'Start moving better today',
      description:
        'Download Subite and check routes, alerts, stop-by-stop journeys and key services from one app built for daily mobility.',
      button: 'Download app',
    },
    footer: {
      description:
        'The all-in-one urban mobility solution: accurate data, optimized routes and the city information you need in your pocket.',
      product: 'Product',
      support: 'Support',
      links: {
        features: 'Features',
        experience: 'Experience',
        faq: 'Frequently asked questions',
        help: 'Help center',
        report: 'Report an issue',
        terms: 'Terms and privacy',
      },
      rights: '© 2026 Subite. All rights reserved.',
    },
    comingSoon: {
      back: 'Back to home',
      badge: 'Coming soon',
      titleLine1: 'We are getting',
      titleLine2: 'Subite ready.',
      description:
        'The app is not available for public download or access yet. Right now we are testing the product, fine-tuning details and preparing a solid first experience.',
      primaryButton: 'Back to landing page',
      secondaryButton: 'Launching soon',
      panelLabel: 'Status',
      panelTitle: 'Private beta',
      panelDescription:
        'We are testing performance, data consistency and user experience before opening the app to the public.',
      statusItems: [
        {
          title: 'We are in the testing phase',
          description:
            'We are validating overall behavior so the launch experience feels stable and clear.',
          icon: Sparkles,
          styles: 'bg-blue-100 text-blue-600',
        },
        {
          title: 'Fine-tuning routes and alerts',
          description:
            'We are still refining key information so routes, timings and notifications behave the way we expect.',
          icon: Bell,
          styles: 'bg-amber-100 text-amber-600',
        },
        {
          title: 'Preparing the first public access',
          description:
            'App downloads and sign-in will be enabled once we complete this testing phase.',
          icon: Shield,
          styles: 'bg-emerald-100 text-emerald-600',
        },
      ],
    },
  },
};

function LanguageToggle({ language, setLanguage, compact = false }) {
  const baseClass = compact
    ? 'rounded-full border border-gray-200 bg-white/80 p-1 shadow-sm'
    : 'rounded-full border border-gray-200 bg-white p-1 shadow-sm';

  const buttonClass = (isActive) =>
    `px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
      isActive ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
    }`;

  return (
    <div className={`inline-flex items-center gap-1 ${baseClass}`}>
      <button type="button" onClick={() => setLanguage('es')} className={buttonClass(language === 'es')}>
        ES
      </button>
      <button type="button" onClick={() => setLanguage('en')} className={buttonClass(language === 'en')}>
        EN
      </button>
    </div>
  );
}

function ComingSoonPage({ t, language, setLanguage }) {
  const { comingSoon } = t;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#dbeafe,_#f8fafc_45%,_#ecfdf5_100%)] font-sans text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between gap-4">
        <a href="#" className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors">
          <ChevronRight className="w-4 h-4 rotate-180" />
          {comingSoon.back}
        </a>
        <LanguageToggle language={language} setLanguage={setLanguage} compact />
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <section className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 text-blue-700 text-sm font-medium shadow-sm">
              <Clock3 className="w-4 h-4" />
              {comingSoon.badge}
            </div>
            <div className="space-y-5">
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {comingSoon.titleLine1}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
                  {comingSoon.titleLine2}
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{comingSoon.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                {comingSoon.primaryButton}
              </a>
              <div className="bg-white/80 border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-sm">
                <Download className="w-5 h-5" />
                {comingSoon.secondaryButton}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/70 to-emerald-200/70 rounded-[2rem] blur-3xl"></div>
            <div className="relative bg-white/90 backdrop-blur-md border border-white rounded-[2rem] p-8 shadow-2xl">
              <div className="rounded-[1.5rem] bg-gray-900 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60">{comingSoon.panelLabel}</p>
                    <p className="text-3xl font-bold mt-2">{comingSoon.panelTitle}</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-300" />
                  </div>
                </div>
                <p className="text-white/70 mt-5 leading-relaxed">{comingSoon.panelDescription}</p>
              </div>

              <div className="mt-6 space-y-4">
                {comingSoon.statusItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.styles}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                          <p className="text-gray-600 mt-2 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function LandingPage() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);
  const [language, setLanguage] = useState(() => {
    const storedLanguage = window.localStorage.getItem('subite-language');

    if (storedLanguage === 'es' || storedLanguage === 'en') {
      return storedLanguage;
    }

    return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
  });

  const t = translations[language];

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('subite-language', language);
    document.documentElement.lang = t.meta.lang;
    document.title = t.meta.title;
  }, [language, t.meta.lang, t.meta.title]);

  if (currentHash === comingSoonHref) {
    return <ComingSoonPage t={t} language={language} setLanguage={setLanguage} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-emerald-200">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            <div className="flex items-center gap-2">
              <img src="Subite Logo.png" alt="Logo Subite" className="w-9 h-9 rounded-xl object-cover shadow-sm" />
              <span className="font-bold text-xl tracking-tight">Subite</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#caracteristicas" className="text-gray-600 hover:text-emerald-500 transition-colors">
                {t.nav.features}
              </a>
              <a href="#experiencia" className="text-gray-600 hover:text-emerald-500 transition-colors">
                {t.nav.experience}
              </a>
              <a href="#como-funciona" className="text-gray-600 hover:text-emerald-500 transition-colors">
                {t.nav.howItWorks}
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-emerald-500 transition-colors">
                {t.nav.services}
              </a>
              <a href="#faq" className="text-gray-600 hover:text-emerald-500 transition-colors">
                {t.labels.faq}
              </a>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <LanguageToggle language={language} setLanguage={setLanguage} />
              <a href={comingSoonHref} className="hidden md:block text-blue-500 font-medium hover:text-emerald-500 transition-colors">
                {t.nav.login}
              </a>
              <a
                href={comingSoonHref}
                className="bg-gradient-to-r from-blue-500 to-emerald-400 hover:from-blue-600 hover:to-emerald-500 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{t.nav.download}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.hero.badge}
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            {t.hero.titleLine1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">
              {t.hero.titleLine2}
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">{t.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={comingSoonHref}
              className="bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Download className="w-5 h-5" />
              {t.hero.appStore}
            </a>
            <a
              href={comingSoonHref}
              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-5 h-5" />
              {t.hero.googlePlay}
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt={t.hero.avatarAlt} />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt={t.hero.avatarAlt} />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt={t.hero.avatarAlt} />
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span>{t.hero.rating}</span>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-full blur-3xl -z-10"></div>

          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="relative rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[1/2.16]">
              <img src="IMG_1156.jpeg" alt={t.hero.appAlt} className="w-full h-full object-cover" />
            </div>

            <div
              className="absolute -left-12 top-1/4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <div className="bg-amber-100 p-2 rounded-lg">
                <Bell className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">{t.hero.alertTitle}</p>
                <p className="text-[10px] text-gray-500">{t.hero.alertDetail}</p>
              </div>
            </div>

            <div
              className="absolute -right-8 bottom-1/4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            >
              <div className="bg-blue-100 p-2 rounded-lg">
                <Bus className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">{t.hero.routeLabel}</p>
                <p className="text-[10px] text-gray-500">{t.hero.arrivalLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {t.quickStats.map((item) => (
            <div key={item.label} className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
              <p className="text-3xl font-bold text-gray-900">{item.value}</p>
              <p className="text-sm font-semibold text-gray-700 mt-2 uppercase tracking-[0.18em]">{item.label}</p>
              <p className="text-gray-600 mt-3 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="caracteristicas" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.coreFeaturesSection.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.coreFeaturesSection.description}</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {t.coreFeatures.map((feature) => {
              const Icon = feature.icon;
              const styles = toneClasses[feature.tone];

              return (
                <div
                  key={feature.title}
                  className={`bg-gray-50 rounded-2xl p-8 transition-colors border border-transparent ${styles.wrapper}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${styles.iconBox}`}>
                    <Icon className={`w-6 h-6 ${styles.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experiencia" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            {t.experience.badge}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-5">{t.experience.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t.experience.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-14">
          {t.experience.cards.map((card) => (
            <article key={card.title} className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-sm">
              <div className="rounded-[1.75rem] overflow-hidden border border-gray-100 bg-gray-100">
                <img src={card.image} alt={card.title} className="w-full h-[480px] object-cover object-top" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6">{card.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="absolute top-0 right-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          <div className="relative rounded-[2rem] border-4 border-gray-200 shadow-xl overflow-hidden w-full max-w-[280px]">
            <img src="IMG_1158.jpeg" alt={t.howItWorks.imageAlt} className="w-full" />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <Zap className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900">{t.howItWorks.title}</h2>
          <p className="text-lg text-gray-600">{t.howItWorks.description}</p>
          <ul className="space-y-4 pt-4">
            {t.howItWorks.bullets.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                  <ChevronRight className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">{item.label}</span> {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.dailyFlowSection.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.dailyFlowSection.description}</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {t.dailyFlowSection.steps.map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
                <div className="text-sm font-bold text-emerald-600 tracking-[0.2em]">{item.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 bg-gray-50 rounded-3xl">
        <div className="lg:w-1/2 space-y-6">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
            <Bell className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900">{t.alerts.title}</h2>
          <p className="text-lg text-gray-600">{t.alerts.description}</p>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              {t.alerts.cardTitle}
            </h4>
            <p className="text-gray-600 text-sm">{t.alerts.cardDescription}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <Clock3 className="w-5 h-5 text-amber-500 mb-3" />
              <h5 className="font-semibold text-gray-900">{t.alerts.benefitA.title}</h5>
              <p className="text-sm text-gray-600 mt-2">{t.alerts.benefitA.description}</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <Route className="w-5 h-5 text-blue-500 mb-3" />
              <h5 className="font-semibold text-gray-900">{t.alerts.benefitB.title}</h5>
              <p className="text-sm text-gray-600 mt-2">{t.alerts.benefitB.description}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          <div className="relative rounded-[2rem] border-4 border-gray-200 shadow-xl overflow-hidden w-full max-w-[280px]">
            <img src="IMG_1163.jpeg" alt={t.alerts.imageAlt} className="w-full" />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="absolute inset-x-10 bottom-10 h-52 bg-blue-100 rounded-full blur-3xl opacity-80"></div>
          <div className="relative rounded-[2rem] border-4 border-gray-200 shadow-xl overflow-hidden w-full max-w-[280px] bg-white">
            <img src="IMG_1164.jpeg" alt={t.profile.imageAlt} className="w-full" />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <UserRound className="w-6 h-6 text-indigo-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900">{t.profile.title}</h2>
          <p className="text-lg text-gray-600 mt-5 leading-relaxed">{t.profile.description}</p>
          <div className="space-y-5 mt-8">
            {t.profile.cards.map((card) => (
              <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">{t.services.description}</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {t.services.items.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex flex-col items-center">
                <div className="rounded-[2rem] border-4 border-gray-200 shadow-lg overflow-hidden w-full max-w-[260px] mb-8">
                  <img src={item.image} alt={item.imageAlt} className="w-full" />
                </div>
                <div className={`${item.iconBox} p-3 rounded-full mb-4`}>
                  <Icon className={`w-6 h-6 ${item.iconClass}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 max-w-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">{t.useCases.title}</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl">{t.useCases.description}</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full px-4 py-2 text-sm font-medium">
              <Bus className="w-4 h-4" />
              {t.useCases.badge}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.useCases.cards.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.faqSection.title}</h2>
          <p className="text-lg text-gray-600">{t.faqSection.description}</p>
        </div>
        <div className="space-y-5">
          {t.faqSection.items.map((item) => (
            <div key={item.question} className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{item.question}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-500 to-emerald-500">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full opacity-50 blur-3xl mix-blend-overlay"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-300 rounded-full opacity-50 blur-3xl mix-blend-overlay"></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={comingSoonHref}
              className="bg-white hover:bg-gray-50 text-emerald-700 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
            >
              <Download className="w-6 h-6" />
              {t.cta.button}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="Subite Logo.png" alt="Logo Subite" className="w-8 h-8 rounded-lg object-cover opacity-90" />
              <span className="font-bold text-xl text-white tracking-tight">Subite</span>
            </div>
            <p className="text-sm max-w-md">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#caracteristicas" className="hover:text-emerald-400 transition-colors">
                  {t.footer.links.features}
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-emerald-400 transition-colors">
                  {t.footer.links.experience}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  {t.footer.links.faq}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.support}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  {t.footer.links.help}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  {t.footer.links.report}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  {t.footer.links.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>{t.footer.rights}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
