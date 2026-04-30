/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Building2, 
  Sprout, 
  Users, 
  BusFront, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowRight,
  CheckCircle2,
  Tractor,
  GraduationCap,
  HardHat,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  Music
} from "lucide-react";
import { useState, FormEvent } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* SEO metadata simulated in standard HTML head via index.html or just using standard document titles */}

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/244928496373?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20da%20ALBEVA." 
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Fale connosco no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Navigation */}
      <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-black rounded flex items-center justify-center">
              <span className="text-brand-gold font-display font-bold text-xl italic font-serif">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none">ALBEVA</span>
              <span className="text-[10px] text-gray-500 font-medium tracking-tighter uppercase">Comércio e Serviços, Lda</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#produtos" className="hover:text-brand-gold transition-colors">Produtos</a>
            <a href="#kits" className="hover:text-brand-gold transition-colors">Kits Sociais</a>
            <a href="#veiculos" className="hover:text-brand-gold transition-colors">Veículos</a>
            <a href="#contacto" className="hover:text-brand-gold transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 mr-4 border-r border-gray-200 pr-4">
              <a href="https://www.facebook.com/profile.php?id=100063727423899" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Music size={18} title="TikTok" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Youtube size={18} />
              </a>
            </div>
            <a href="#orcamento" className="hidden lg:flex btn-primary py-2 px-6 text-sm">
              Pedir Orçamento
            </a>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-200 py-6 px-6 flex flex-col gap-4 text-center"
          >
            <a href="#produtos" onClick={() => setIsMenuOpen(false)} className="font-bold py-2">Produtos</a>
            <a href="#kits" onClick={() => setIsMenuOpen(false)} className="font-bold py-2">Kits Sociais</a>
            <a href="#veiculos" onClick={() => setIsMenuOpen(false)} className="font-bold py-2">Veículos</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="font-bold py-2">Contacto</a>
            <a href="#orcamento" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full">Pedir Orçamento</a>
            <div className="flex justify-center gap-6 pt-4 border-t border-gray-100">
              <a href="https://www.facebook.com/profile.php?id=100063727423899" target="_blank" rel="noopener noreferrer" className="text-brand-black hover:text-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brand-black hover:text-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-brand-black hover:text-brand-gold transition-colors">
                <Music size={20} title="TikTok" />
              </a>
              <a href="#" className="text-brand-black hover:text-brand-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-gold/20 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-gold/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8 bg-brand-gold/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-light">
              Líder em Soluções Corporativas e Agrícolas em Angola
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight"
          >
            Excelência que Impulsiona o <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold italic">
              Seu Sucesso
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Soluções completas em <span className="text-white font-medium">Mobiliário</span>, 
            <span className="text-white font-medium"> Agricultura</span> e 
            <span className="text-white font-medium"> Impacto Social</span> com o selo de confiança ALBEVA.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a href="#orcamento" className="btn-primary py-5 px-10 text-lg w-full sm:w-auto shadow-2xl shadow-brand-gold/20">
              Solicitar Consultoria Grátis <ArrowRight size={22} />
            </a>
            <a href="#produtos" className="group border border-white/10 hover:border-brand-gold/50 text-white font-bold py-5 px-10 rounded-lg backdrop-blur-md transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              Explorar Catálogo <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Deslizar</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Value Prop Stats */}
      <section className="bg-brand-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Anos de Experiência", value: "10+" },
            { label: "Kits Entregues", value: "5000+" },
            { label: "Produtos em Catálogo", value: "200+" },
            { label: "Clientes Satisfeitos", value: "15k+" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobiliário Section */}
      <section id="produtos" className="section-padding overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Conforto e Durabilidade</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Venda e Comercialização de Mobiliário</h2>
            <p className="text-gray-600 text-lg mb-8">
              Soluções completas para ambientes profissionais e educacionais, unindo resistência e design ergonómico.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Escritório", icon: <Building2 /> },
                { label: "Escolar", icon: <GraduationCap /> },
                { label: "Hospitalar", icon: <HardHat /> },
              ].map((cat, i) => (
                <div key={i} className="flex flex-col items-center p-4 border border-gray-100 rounded-xl bg-gray-50/50 hover:border-brand-gold/30 transition-colors">
                  <div className="text-brand-gold mb-2">{cat.icon}</div>
                  <span className="font-bold text-sm tracking-tight">{cat.label}</span>
                </div>
              ))}
            </div>
            
            <a href="#orcamento" className="btn-outline">
              Solicitar Catálogo Completo <ChevronRight size={20} />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600"
                alt="Mobiliário Corporativo Premium"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-100 mt-12">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600"
                alt="Mobiliário Escolar e Universitário"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agricultura Section */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="section-padding">
          <div className="text-center mb-16">
            <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold mb-4">Equipamentos Agrícolas</motion.h2>
            <motion.p {...fadeIn} className="text-gray-600 max-w-2xl mx-auto text-lg italic">
              Apoio total à produção nacional com ferramentas de alta durabilidade.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div {...fadeIn} className="lg:col-span-1">
              <div className="bg-brand-black text-white p-8 rounded-[2rem] h-full shadow-2xl">
                <h3 className="text-2xl font-bold text-brand-gold mb-6 uppercase tracking-wider">Distribuição De:</h3>
                <ul className="grid grid-cols-1 gap-3 text-sm font-medium">
                  {[
                    "Mangueiras de Sucção e Rega",
                    "Adubos e Fertilizantes",
                    "Sementes Agrícolas",
                    "Catanas e Enxadas",
                    "Pulverizadores",
                    "Botas e Luvas de Campo",
                    "Ancinho e Picareta",
                    "Machados e Carros de Mão",
                    "Moto Bombas (Diversos Modelos)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { img: "https://images.unsplash.com/photo-1558444458-36940003046f?auto=format&fit=crop&q=80&w=400", label: "Sistemas de Rega" },
                { img: "https://images.unsplash.com/photo-1533241242314-ec73b22cfdc1?auto=format&fit=crop&q=80&w=400", label: "Moto-bombas" },
                { img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400", label: "Sementes" },
                { img: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=400", label: "Ferramentas" },
                { img: "https://images.unsplash.com/photo-1622383529357-3fb050304616?auto=format&fit=crop&q=80&w=400", label: "Irrigação" },
                { img: "https://images.unsplash.com/photo-1589923177891-689bb5352601?auto=format&fit=crop&q=80&w=400", label: "Catálogo Campo" },
              ].map((item, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden h-40 shadow-sm border border-white hover:border-brand-gold/50 transition-all">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-black/40 flex items-end p-3">
                    <span className="text-[10px] text-white font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kits de Combate à Pobreza */}
      <section id="kits" className="py-24 bg-brand-black text-white overflow-hidden">
        <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-brand-gold/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl bg-brand-gray">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                alt="Kit de Ferramentas e Tecnologia Albeva"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75 group-hover:brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"></div>
              
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                <span className="bg-brand-black/70 backdrop-blur-md text-brand-gold px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-gold/30">
                  Corte e Costura
                </span>
                <span className="bg-brand-black/70 backdrop-blur-md text-brand-gold px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-gold/30">
                  Serralharia
                </span>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-[2px] bg-brand-gold mb-4"
                ></motion.div>
                <h4 className="text-2xl font-bold text-white mb-2">Impacto Real no Terreno</h4>
                <p className="text-gray-400 text-sm max-w-sm font-medium">Equipamento industrial de alta durabilidade para novos empreendedores angolanos.</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn}>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Impacto Social</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Kits de Profissionalização e Mudança de Vida</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              Acreditamos no empreendedorismo como a ferramenta mais eficaz de combate à pobreza. Nossos kits completos fornecem não apenas ferramentas, mas a dignidade de começar o próprio negócio hoje mesmo.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <HardHat size={24} />, label: "Mecânica e Serralharia", color: "from-blue-500/10" },
                { icon: <MessageCircle size={24} />, label: "Corte e Costura", color: "from-pink-500/10" },
                { icon: <Users size={24} />, label: "Eletricidade", color: "from-yellow-500/10" },
                { icon: <GraduationCap size={24} />, label: "Informática", color: "from-purple-500/10" },
              ].map((kit, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className={`flex flex-col gap-3 p-6 border border-white/10 rounded-2xl bg-gradient-to-br ${kit.color} to-transparent hover:border-brand-gold/50 transition-all cursor-default group`}
                >
                  <div className="text-brand-gold group-hover:scale-110 transition-transform">{kit.icon}</div>
                  <span className="font-bold text-sm tracking-tight">{kit.label}</span>
                </motion.div>
              ))}
            </div>

            <button className="btn-primary mt-12 w-full sm:w-auto shadow-brand-gold/10">
              Conhecer Catálogo de Kits <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Veículos Section */}
      <section id="veiculos" className="section-padding bg-white relative overflow-hidden">
        <div className="text-center mb-16 relative z-10">
          <motion.span {...fadeIn} className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block underline decoration-brand-gold/30 underline-offset-8">Venda de Veículos Motorizados</motion.span>
          <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-bold mb-6 italic">Mobilidade que Transforma</motion.h2>
          <motion.p {...fadeIn} className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Potência e economia para transporte de carga e passageiros em Angola.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Side: 2 Wheels */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-full"
          >
            <div className="product-card h-full bg-brand-gray text-white p-0 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800"
                alt="Motorizada Robusta 2 Rodas"
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-brand-gold italic">Motorizadas de 2 Rodas</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Agilidade e durabilidade para o trânsito urbano e caminhos rurais. O equilíbrio perfeito entre performance e consumo.
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <CheckCircle2 className="text-brand-gold" />
                  <span className="font-bold text-sm tracking-widest uppercase">Pronta Entrega</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: 3 Wheels Carga & Passageiros */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {[
              {
                title: "3 Rodas para Passageiros",
                desc: "Conforto e segurança para transporte público e privado. Ideal para serviços de Tuk-tuk e frotas urbanas.",
                items: ["Teto Reforçado", "Cabine Protegida", "Baixo Consumo"],
                img: "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?auto=format&fit=crop&q=80&w=600",
                icon: <Users size={24} />
              },
              {
                title: "3 Rodas para Carga",
                desc: "Capacidade e robustez para logística de mercadorias. O braço direito do comércio local em Angola.",
                items: ["Caixa de Carga Ampla", "Suspensão Reforçada", "Motor de Alta Resiliência"],
                img: "https://images.unsplash.com/photo-1621285096525-451e06fe3360?auto=format&fit=crop&q=80&w=600",
                icon: <BusFront size={24} />
              }
            ].map((v, i) => (
              <div key={i} className="product-card flex flex-col md:flex-row gap-0 p-0 overflow-hidden group hover:border-brand-gold/30">
                <div className="md:w-2/5 overflow-hidden">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <div className="text-brand-gold mb-3">{v.icon}</div>
                  <h4 className="text-2xl font-bold mb-3">{v.title}</h4>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed font-medium">{v.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {v.items.map((it, idx) => (
                      <span key={idx} className="bg-gray-100 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-brand-black/70">{it}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="orcamento" className="bg-brand-gray py-24 text-white">
        <div className="section-padding grid lg:grid-cols-2 gap-16">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Vamos Falar <br/>de Negócio?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Preencha o formulário e um dos nossos especialistas entrará em contacto para fornecer um orçamento personalizado e consultoria técnica.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-brand-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Ligue agora</p>
                  <p className="font-bold text-lg text-white">+244 928 496 373</p>
                  <p className="font-bold text-lg text-white">+244 935 728 018</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-brand-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">E-mail Corporativo</p>
                  <p className="font-bold text-lg">info@albevanegocio.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-12 text-brand-black"
          >
            {formStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600">Entraremos em contacto muito brevemente.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-brand-gold font-bold underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nome Completo</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all" placeholder="Ex: João Manuel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">WhatsApp / Telefone</label>
                    <input required type="tel" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all" placeholder="+244..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Área de Interesse</label>
                  <select required className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all appearance-none">
                    <option value="">Selecione uma opção</option>
                    <option value="mobiliario">Mobiliário</option>
                    <option value="agricola">Equipamentos Agrícolas</option>
                    <option value="kits">Kits de Profissionalização</option>
                    <option value="veiculos">Veículos</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Mensagem / Observações</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none transition-all" placeholder="Como podemos ajudar o seu negócio?"></textarea>
                </div>

                <button 
                  disabled={formStatus === "sending"}
                  type="submit" 
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Processando..." : "Enviar Pedido de Orçamento"}
                </button>
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-tighter">Ao enviar, concorda com a nossa política de privacidade e tratamento de dados.</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trust & Location */}
      <section id="contacto" className="section-padding">
        <div className="grid md:grid-cols-3 gap-12 text-center lg:text-left">
          <div className="space-y-4">
            <h4 className="text-brand-gold font-bold flex items-center justify-center lg:justify-start gap-2">
              <MapPin size={20} /> LOCALIZAÇÃO
            </h4>
            <p className="text-gray-600 font-medium">
              Província do Bengo, Município do Panguila, <br/>
              Rua do Polivalente, Casa nº 3.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-brand-gold font-bold flex items-center justify-center lg:justify-start gap-2">
              <Building2 size={20} /> IDENTIFICAÇÃO FISCAL
            </h4>
            <p className="text-gray-600 font-medium">
              ALBEVA Negócios – Comércio e Serviços, Lda <br/>
              NIF: 5002594226
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-brand-gold font-bold flex items-center justify-center lg:justify-start gap-2">
               <Mail size={20} /> ATENDIMENTO
            </h4>
            <div className="text-gray-600 font-medium">
              Segunda a Sexta: 08h00 - 18h00 <br/>
              info@albevanegocio.com
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-gray-400 py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center">
              <span className="text-brand-black font-display font-bold text-sm italic font-serif">A</span>
            </div>
            <span className="text-white font-display font-bold">ALBEVA Negócios</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100063727423899" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all">
                <Music size={20} title="TikTok" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all">
                <Youtube size={20} />
              </a>
            </div>
            <div className="flex gap-6 text-xs uppercase font-bold tracking-widest mt-2">
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Termos</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>

          <p className="text-[10px] uppercase font-medium">
            © 2026 ALBEVA Negócios - Todos os direitos reservados. <br/>
            Desenvolvido para Excelência em Angola.
          </p>
        </div>
      </footer>
    </div>
  );
}
