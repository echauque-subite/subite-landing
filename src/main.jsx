import React from 'react';
import { Bus, Map, Bell, Bike, CreditCard, Download, ChevronRight, Star, Shield, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-emerald-200">
      
      {/* Navegación */}
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
              <a href="#caracteristicas" className="text-gray-600 hover:text-emerald-500 transition-colors">Características</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-emerald-500 transition-colors">Cómo funciona</a>
              <a href="#servicios" className="text-gray-600 hover:text-emerald-500 transition-colors">Servicios</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-blue-500 font-medium hover:text-emerald-500 transition-colors">Iniciar Sesión</button>
              <button className="bg-gradient-to-r from-blue-500 to-emerald-400 hover:from-blue-600 hover:to-emerald-500 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Descargar</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
            Tu ciudad, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">tu ritmo.</span>
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
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="User" />
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
          {/* Decorative background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative mx-auto w-full max-w-[320px]">
            {/* Phone Mockup Wrapper */}
            <div className="relative rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[1/2.16]">
              <img 
                src="IMG_1156.jpeg" 
                alt="Pantalla principal de la app" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Elements to highlight features */}
            <div className="absolute -left-12 top-1/4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-amber-100 p-2 rounded-lg">
                <Bell className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Alerta activa</p>
                <p className="text-[10px] text-gray-500">Desvío en línea 115</p>
              </div>
            </div>
            
            <div className="absolute -right-8 bottom-1/4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
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

      {/* Grid de Características */}
      <section id="caracteristicas" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Todo lo que necesitas para tu viaje</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Una suite completa de herramientas diseñadas para hacer tu experiencia de transporte público más fácil y predecible.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Map className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rutas Optimizadas</h3>
              <p className="text-gray-600 leading-relaxed">Calculamos la mejor ruta combinando caminata y múltiples líneas de colectivo para que llegues más rápido.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:bg-amber-50 transition-colors border border-transparent hover:border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Bell className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alertas en Tiempo Real</h3>
              <p className="text-gray-600 leading-relaxed">Infórmate al instante sobre cortes, manifestaciones o reparaciones que afecten el recorrido habitual de tu línea.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tus Favoritos Seguros</h3>
              <p className="text-gray-600 leading-relaxed">Guarda tus líneas y destinos habituales. Crea un perfil personalizado para acceder a tu información en segundos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase 1: Planificación */}
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
              <div className="mt-1 bg-emerald-100 p-1 rounded-full"><ChevronRight className="w-4 h-4 text-emerald-600"/></div>
              <p className="text-gray-700"><span className="font-semibold">Estimación precisa:</span> Tiempos de llegada basados en el tráfico actual.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-emerald-100 p-1 rounded-full"><ChevronRight className="w-4 h-4 text-emerald-600"/></div>
              <p className="text-gray-700"><span className="font-semibold">Costo total:</span> Conoce de antemano el valor de tu viaje.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 bg-emerald-100 p-1 rounded-full"><ChevronRight className="w-4 h-4 text-emerald-600"/></div>
              <p className="text-gray-700"><span className="font-semibold">Paso a paso:</span> Instrucciones claras de dónde caminar y qué línea tomar.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Feature Showcase 2: Alertas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 bg-gray-50 rounded-3xl">
        <div className="lg:w-1/2 space-y-6">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
            <Bell className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Anticípate a los imprevistos</h2>
          <p className="text-lg text-gray-600">
            La ciudad es dinámica. Nuestra sección de "Estado del Servicio" te mantiene actualizado sobre cualquier evento que afecte tu recorrido.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Avisos detallados
            </h4>
            <p className="text-gray-600 text-sm">
              Conoce el motivo del desvío (obras, manifestaciones), qué líneas están afectadas y cuál es la ruta alternativa temporal.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 relative flex justify-center">
           <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
           <div className="relative rounded-[2rem] border-4 border-gray-200 shadow-xl overflow-hidden w-full max-w-[280px]">
              <img src="IMG_1163.jpeg" alt="Alertas y desvíos" className="w-full" />
           </div>
        </div>
      </section>

      {/* Feature Showcase 3: Servicios Extra (SUBE y Bicis) */}
      <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Más que solo colectivos</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Integramos todas las soluciones de movilidad de la ciudad para que no tengas que saltar entre aplicaciones.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* SUBE */}
          <div className="flex flex-col items-center">
             <div className="rounded-[2rem] border-4 border-gray-200 shadow-lg overflow-hidden w-full max-w-[260px] mb-8">
                <img src="IMG_1161.jpeg" alt="Puntos SUBE" className="w-full" />
             </div>
             <div className="bg-blue-100 p-3 rounded-full mb-4">
                <CreditCard className="w-6 h-6 text-blue-500" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Puntos de Recarga SUBE</h3>
             <p className="text-gray-600 max-w-sm">
               Encuentra en el mapa el kiosco o local más cercano para cargar tu tarjeta. Te mostramos la distancia exacta.
             </p>
          </div>
          
          {/* Bicis */}
          <div className="flex flex-col items-center">
             <div className="rounded-[2rem] border-4 border-gray-200 shadow-lg overflow-hidden w-full max-w-[260px] mb-8">
                <img src="IMG_1162.jpeg" alt="Mi Bici Tu Bici" className="w-full" />
             </div>
             <div className="bg-emerald-100 p-3 rounded-full mb-4">
                <Bike className="w-6 h-6 text-emerald-500" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Bicicletas Públicas</h3>
             <p className="text-gray-600 max-w-sm">
               Ubica las estaciones del sistema "Mi Bici Tu Bici". Combina el pedaleo con tu viaje en colectivo para llegar más rápido.
             </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-500 to-emerald-500">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full opacity-50 blur-3xl mix-blend-overlay"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-300 rounded-full opacity-50 blur-3xl mix-blend-overlay"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Empieza a moverte mejor hoy mismo</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Únete a los miles de usuarios que ya ahorran tiempo todos los días en sus traslados. Disponible gratis para iOS y Android.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-gray-50 text-emerald-700 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
              <Download className="w-6 h-6" />
              Descargar App
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              La solución integral para la movilidad urbana. Datos precisos, rutas optimizadas y toda la información de la ciudad en tu bolsillo.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Cómo funciona</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Actualizaciones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Reportar Problema</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Términos y Privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Subite. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
