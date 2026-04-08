import React from 'react';
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

const quickStats = [
  { value: '+10k', label: 'usuarios activos', detail: 'Consultan líneas, paradas y alertas cada día.' },
  { value: '4.8/5', label: 'valoración media', detail: 'Experiencia simple, rápida y confiable.' },
  { value: 'En vivo', label: 'estado del servicio', detail: 'Desvíos, demoras y recorridos alternativos en tiempo real.' },
];

const coreFeatures = [
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
];

const experienceCards = [
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
];

const dailyFlow = [
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
];

const useCases = [
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
];

const faqs = [
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
    question: '¿Por qué extender el landing ayuda al producto?',
    answer:
      'Porque permite mostrar mejor el valor de cada pantalla, bajar dudas antes de la descarga y comunicar que la app resuelve más que una simple búsqueda de líneas.',
  },
];

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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-emerald-200">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img
                src="Subite Logo.png"
                alt="Logo Subite"
                className="w-9 h-9 rounded-xl object-cover shadow-sm"
              />
              <span className="font-bold text-xl tracking-tight">Subite</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#caracteristicas" className="text-gray-600 hover:text-emerald-500 transition-colors">
                Características
              </a>
              <a href="#experiencia" className="text-gray-600 hover:text-emerald-500 transition-colors">
                Experiencia
              </a>
              <a href="#como-funciona" className="text-gray-600 hover:text-emerald-500 transition-colors">
                Cómo funciona
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-emerald-500 transition-colors">
                Servicios
              </a>
              <a href="#faq" className="text-gray-600 hover:text-emerald-500 transition-colors">
                FAQ
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-blue-500 font-medium hover:text-emerald-500 transition-colors">
                Iniciar sesión
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-emerald-400 hover:from-blue-600 hover:to-emerald-500 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Descargar</span>
              </button>
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
            Actualizada con datos en tiempo real
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Tu ciudad,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">
              tu ritmo.
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            La forma más inteligente de moverte. Encuentra la mejor ruta, conoce los tiempos de llegada y mantente informado sobre desvíos, todo en una sola aplicación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg">
              <Download className="w-5 h-5" />
              App Store
            </button>
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
              <Download className="w-5 h-5" />
              Google Play
            </button>
          </div>
          <div className="flex items-center gap-4 pt-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=1"
                alt="Usuario de Subite"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=2"
                alt="Usuario de Subite"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=3"
                alt="Usuario de Subite"
              />
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span>4.8/5 de +10k usuarios</span>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-full blur-3xl -z-10"></div>

          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="relative rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[1/2.16]">
              <img src="IMG_1156.jpeg" alt="Pantalla principal de la app" className="w-full h-full object-cover" />
            </div>

            <div
              className="absolute -left-12 top-1/4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <div className="bg-amber-100 p-2 rounded-lg">
                <Bell className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Alerta activa</p>
                <p className="text-[10px] text-gray-500">Desvío en línea 115</p>
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
                <p className="text-xs font-bold text-gray-900">102 R</p>
                <p className="text-[10px] text-gray-500">Llega en 2 min</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {quickStats.map((item) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Todo lo que necesitas para tu viaje</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una suite completa de herramientas diseñada para hacer tu experiencia de transporte público más simple, predecible y útil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {coreFeatures.map((feature) => {
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
            Una experiencia más completa
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-5">Un landing más largo para mostrar mejor el producto</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            En lugar de quedarse en un resumen general, esta versión explica qué hace cada pantalla, cómo acompaña el viaje y por qué la app resuelve necesidades reales del día a día.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-14">
          {experienceCards.map((card) => (
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
            <img src="IMG_1158.jpeg" alt="Mejores opciones de ruta" className="w-full" />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <Zap className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Encuentra la mejor opción en segundos</h2>
          <p className="text-lg text-gray-600">
            Dinos a dónde vas y te mostraremos todas las alternativas. Compara tiempos de viaje, costos y transbordos necesarios.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                <ChevronRight className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Estimación precisa:</span> Tiempos de llegada basados en el tráfico actual.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                <ChevronRight className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Costo total:</span> Conoce de antemano el valor de tu viaje.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                <ChevronRight className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Paso a paso:</span> Instrucciones claras de dónde caminar y qué línea tomar.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Así acompaña Subite todo el recorrido</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              El producto no se limita a mostrar una línea. Te ayuda antes, durante y después de cada viaje.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {dailyFlow.map((item) => (
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
          <h2 className="text-4xl font-bold text-gray-900">Anticípate a los imprevistos</h2>
          <p className="text-lg text-gray-600">
            La ciudad es dinámica. Nuestra sección de estado del servicio te mantiene actualizado sobre cualquier evento que afecte tu recorrido.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Avisos detallados
            </h4>
            <p className="text-gray-600 text-sm">
              Conoce el motivo del desvío, qué líneas están afectadas y cuál es la ruta alternativa temporal recomendada.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <Clock3 className="w-5 h-5 text-amber-500 mb-3" />
              <h5 className="font-semibold text-gray-900">Ahorra tiempo</h5>
              <p className="text-sm text-gray-600 mt-2">Evita llegar a una parada y descubrir tarde que hubo un cambio en la línea.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <Route className="w-5 h-5 text-blue-500 mb-3" />
              <h5 className="font-semibold text-gray-900">Reacciona mejor</h5>
              <p className="text-sm text-gray-600 mt-2">Ten siempre una alternativa visual para decidir sobre la marcha sin improvisar.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          <div className="relative rounded-[2rem] border-4 border-gray-200 shadow-xl overflow-hidden w-full max-w-[280px]">
            <img src="IMG_1163.jpeg" alt="Alertas y desvíos" className="w-full" />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="absolute inset-x-10 bottom-10 h-52 bg-blue-100 rounded-full blur-3xl opacity-80"></div>
          <div className="relative rounded-[2rem] border-4 border-gray-200 shadow-xl overflow-hidden w-full max-w-[280px] bg-white">
            <img src="IMG_1164.jpeg" alt="Perfil y configuración de la app" className="w-full" />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <UserRound className="w-6 h-6 text-indigo-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Una experiencia que se adapta a tu rutina</h2>
          <p className="text-lg text-gray-600 mt-5 leading-relaxed">
            Al hacer el landing más extenso, también podemos comunicar mejor lo que pasa después de la primera búsqueda: favoritos, historial, configuración y soporte.
          </p>
          <div className="space-y-5 mt-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Favoritos y accesos rápidos</h3>
              <p className="text-gray-600 mt-2">Las líneas y destinos que más usas quedan siempre a mano para repetir viajes cotidianos sin volver a empezar.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Configuración simple</h3>
              <p className="text-gray-600 mt-2">Controla notificaciones, preferencias y soporte desde una interfaz clara pensada para el uso diario.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Más confianza para descargar</h3>
              <p className="text-gray-600 mt-2">Mostrar estas pantallas en el landing ayuda a que la propuesta se sienta más completa, madura y real.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Más que solo colectivos</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Integramos distintas soluciones de movilidad para que no tengas que saltar entre aplicaciones.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center">
            <div className="rounded-[2rem] border-4 border-gray-200 shadow-lg overflow-hidden w-full max-w-[260px] mb-8">
              <img src="IMG_1161.jpeg" alt="Puntos SUBE" className="w-full" />
            </div>
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <CreditCard className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Puntos de recarga SUBE</h3>
            <p className="text-gray-600 max-w-sm">
              Encuentra en el mapa el kiosco o local más cercano para cargar tu tarjeta y resuelve ese paso sin perder tiempo.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-[2rem] border-4 border-gray-200 shadow-lg overflow-hidden w-full max-w-[260px] mb-8">
              <img src="IMG_1162.jpeg" alt="Mi Bici Tu Bici" className="w-full" />
            </div>
            <div className="bg-emerald-100 p-3 rounded-full mb-4">
              <Bike className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Bicicletas públicas</h3>
            <p className="text-gray-600 max-w-sm">
              Ubica estaciones del sistema de bicis para combinar pedaleo y colectivo cuando necesitas una última milla más ágil.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Pensada para los trayectos de todos los días</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                Un landing más completo también permite aterrizar el producto en situaciones reales y conectar mejor con quien está por descargar la app.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full px-4 py-2 text-sm font-medium">
              <Bus className="w-4 h-4" />
              Movilidad cotidiana sin fricción
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((item) => (
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600">
            Un cierre útil para responder dudas rápidas y reforzar el valor de la propuesta.
          </p>
        </div>
        <div className="space-y-5">
          {faqs.map((item) => (
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
          <h2 className="text-4xl font-bold text-white mb-6">Empieza a moverte mejor hoy mismo</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Ahora el landing comunica mejor el producto completo: información útil, pantallas reales y una propuesta de valor mucho más clara para descargar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-gray-50 text-emerald-700 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
              <Download className="w-6 h-6" />
              Descargar app
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="Subite Logo.png"
                alt="Logo Subite"
                className="w-8 h-8 rounded-lg object-cover opacity-90"
              />
              <span className="font-bold text-xl text-white tracking-tight">Subite</span>
            </div>
            <p className="text-sm max-w-md">
              La solución integral para la movilidad urbana: datos precisos, rutas optimizadas y toda la información de la ciudad en tu bolsillo.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#caracteristicas" className="hover:text-emerald-400 transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-emerald-400 transition-colors">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Reportar problema
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Términos y privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Subite. Todos los derechos reservados.</p>
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
