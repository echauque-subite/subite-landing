import React from 'react';
import ReactDOM from 'react-dom/client';
// Importamos los iconos de esta forma para evitar errores de compilación
import * as Lucide from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navegación */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-2">
            {/* Si no tienes el logo aún, esto no romperá la web, solo mostrará el texto */}
            <img src="/Subite Logo.png" alt="" className="h-10 w-10 object-contain" onError={(e) => e.target.style.display='none'} />
            <span className="text-2xl font-bold tracking-tight text-blue-600">Subite</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#caracteristicas" className="hover:text-blue-600 transition">Características</a>
            <a href="#como-funciona" className="hover:text-blue-600 transition">Cómo funciona</a>
          </div>
          <button className="rounded-full bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700 transition">
            Descargar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="z-10 text-center lg:text-left">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-700 mb-6">
              Actualizada en tiempo real ⏱️
            </span>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight lg:text-7xl">
              Tu ciudad, <br />
              <span className="text-blue-600">tu ritmo.</span>
            </h1>
            <p className="mb-8 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              La forma más inteligente de moverte por Rosario. Encuentra la mejor ruta, conoce tiempos de llegada y mantente informado sobre desvíos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-white cursor-pointer hover:bg-slate-800 transition">
                <Lucide.Download size={20} /> App Store
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-white cursor-pointer hover:bg-slate-800 transition">
                <Lucide.Download size={20} /> Google Play
              </div>
            </div>
          </div>
          
          <div className="relative mt-16 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[300px] rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
              {/* Esta imagen debe estar en la carpeta /public */}
              <img src="/IMG_1156.jpeg" alt="App Preview" className="w-full" onError={(e) => e.target.src='https://via.placeholder.com/300x600?text=Subite+App'} />
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Características */}
      <section id="caracteristicas" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-12 text-3xl font-bold lg:text-4xl">Todo lo que necesitas para tu viaje</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
              <div className="mb-4 inline-block rounded-2xl bg-blue-50 p-4 text-blue-600"><Lucide.Map /></div>
              <h3 className="mb-2 text-xl font-bold">Rutas Optimizadas</h3>
              <p className="text-slate-500 text-sm">Calculamos la mejor ruta combinando colectivos y caminata.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
              <div className="mb-4 inline-block rounded-2xl bg-orange-50 p-4 text-orange-500"><Lucide.Zap /></div>
              <h3 className="mb-2 text-xl font-bold">Tiempo Real</h3>
              <p className="text-slate-500 text-sm">Información actualizada sobre arribos y desvíos.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
              <div className="mb-4 inline-block rounded-2xl bg-green-50 p-4 text-green-600"><Lucide.Shield /></div>
              <h3 className="mb-2 text-xl font-bold">Favoritos</h3>
              <p className="text-slate-500 text-sm">Acceso rápido a tus líneas y paradas más usadas.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12 text-slate-400 text-center">
        <p className="text-sm">© 2026 Subite App. Rosario, Santa Fe.</p>
      </footer>
    </div>
  );
};

// Renderizado de la aplicación con manejo de errores
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  );
}
