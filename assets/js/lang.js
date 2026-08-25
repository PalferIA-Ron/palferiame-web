/* ── PALFERIA.ME · SISTEMA DE IDIOMAS ES / EN / VA ── */
(function(){

const LANGS = ['es','en','va'];
const DEFAULT = 'es';

/* ─────────────────────────────────────────────
   TRADUCCIONES GLOBALES (nav, footer, cookiebanner, wa)
───────────────────────────────────────────── */
const global = {
  'nav.agentes'        : { es:'Agentes',          en:'Agents',           va:'Agents'           },
  'nav.como'           : { es:'Cómo funciona',    en:'How it works',     va:'Com funciona'     },
  'nav.sobre'          : { es:'Sobre mí',          en:'About',            va:'Sobre mi'         },
  'nav.blog'           : { es:'Blog',              en:'Blog',             va:'Blog'             },
  'nav.cta'            : { es:'Hablemos →',        en:'Let\'s talk →',    va:'Parlem →'         },
  'cookie.text'        : { es:'Usamos cookies para mejorar tu experiencia. Al continuar, aceptas su uso.', en:'We use cookies to improve your experience. By continuing, you accept their use.', va:'Usem cookies per millorar la teua experiència. En continuar, acceptes el seu ús.' },
  'cookie.accept'      : { es:'Aceptar',           en:'Accept',           va:'Acceptar'         },
  'cookie.reject'      : { es:'Rechazar',          en:'Reject',           va:'Rebutjar'         },
  'wa.label'           : { es:'WhatsApp',          en:'WhatsApp',         va:'WhatsApp'         },
  'footer.rights'      : { es:'Todos los derechos reservados.', en:'All rights reserved.', va:'Tots els drets reservats.' },
  'footer.privacy'     : { es:'Privacidad',        en:'Privacy',          va:'Privacitat'       },
  'footer.legal'       : { es:'Aviso legal',       en:'Legal notice',     va:'Avís legal'       },
  'footer.cookies'     : { es:'Cookies',           en:'Cookies',          va:'Cookies'          },
};

/* ─────────────────────────────────────────────
   TRADUCCIONES POR PÁGINA
───────────────────────────────────────────── */
const pages = {

  /* ── INDEX ── */
  'home.hero.badge'        : { es:'Agentes IA para entidades deportivas',    en:'AI Agents for sports organisations',   va:'Agents IA per a entitats esportives'   },
  'home.hero.h1a'          : { es:'AUTOMATIZA',          en:'AUTOMATE',           va:'AUTOMATITZA'         },
  'home.hero.h1b'          : { es:'TU ENTIDAD',          en:'YOUR ENTITY',        va:'LA TEUA ENTITAT'     },
  'home.hero.h1c'          : { es:'DEPORTIVA.',          en:'SPORTS CLUB.',       va:'ESPORTIVA.'          },
  'home.hero.sub'          : { es:'Agentes IA que gestionan leads, responden consultas y automatizan la comunicación de tu centro deportivo — sin perder el toque humano.', en:'AI agents that manage leads, answer queries and automate communication for your sports centre — without losing the human touch.', va:'Agents IA que gestionen leads, responen consultes i automatitzen la comunicació del teu centre esportiu — sense perdre el toc humà.' },
  'home.hero.cta1'         : { es:'Ver agentes →',       en:'See agents →',       va:'Veure agents →'      },
  'home.hero.cta2'         : { es:'Hablar con Ronald',   en:'Talk to Ronald',     va:'Parlar amb Ronald'   },
  'home.agentes.label'     : { es:'Soluciones por vertical', en:'Solutions by vertical', va:'Solucions per vertical' },
  'home.agentes.h2a'       : { es:'6',                   en:'6',                  va:'6'                   },
  'home.agentes.h2b'       : { es:'agentes',             en:'agents',             va:'agents'              },
  'home.agentes.h2c'       : { es:'especializados',      en:'specialised',        va:'especialitzats'      },
  'home.agentes.sub'       : { es:'Cada agente está entrenado para tu tipo de entidad deportiva. No es un chatbot genérico — es un especialista en tu negocio.', en:'Each agent is trained for your type of sports organisation. Not a generic chatbot — a specialist in your business.', va:'Cada agent està entrenat per al teu tipus d\'entitat esportiva. No és un chatbot genèric — és un especialista en el teu negoci.' },
  'home.kit.label'         : { es:'Producto · Pago único', en:'Product · One-time payment', va:'Producte · Pagament únic' },
  'home.kit.h2a'           : { es:'Kit IA Deportivo',    en:'Sports AI Kit',      va:'Kit IA Esportiu'     },
  'home.kit.h2b'           : { es:'Listo en 48h.',       en:'Ready in 48h.',      va:'Llest en 48h.'       },
  'home.kit.sub'           : { es:'Agente IA configurado a medida, instalado y funcionando desde el primer día. Sin mensualidades. Un solo pago, todo incluido.', en:'Custom-configured AI agent, installed and running from day one. No monthly fees. One payment, everything included.', va:'Agent IA configurat a mida, instal·lat i funcionant des del primer dia. Sense mensualitats. Un sol pagament, tot inclòs.' },
  'home.kit.cta'           : { es:'Ver el Kit completo →', en:'See full Kit →',   va:'Veure el Kit complet →' },
  'home.blog.label'        : { es:'Conocimiento',        en:'Knowledge',          va:'Coneixement'         },
  'home.blog.h2a'          : { es:'Recursos',            en:'Resources',          va:'Recursos'            },
  'home.blog.h2b'          : { es:'sport IA',            en:'sport AI',           va:'sport IA'            },
  'home.blog.cta'          : { es:'Ver todos →',         en:'See all →',          va:'Veure tots →'        },
  'home.contact.label'     : { es:'Contacto',            en:'Contact',            va:'Contacte'            },
  'home.contact.h2a'       : { es:'¿Lista tu entidad',   en:'Is your organisation', va:'Està llesta la teua entitat' },
  'home.contact.h2b'       : { es:'para la IA?',         en:'for AI?',            va:'per a la IA?'        },
  'home.contact.sub'       : { es:'Cuéntame cómo funciona ahora y te digo exactamente qué se puede automatizar, con qué resultado y en cuánto tiempo.', en:'Tell me how things work now and I\'ll tell you exactly what can be automated, with what results and in how long.', va:'Conta\'m com funciona ara i et diré exactament què es pot automatitzar, amb quin resultat i en quant de temps.' },
  'home.contact.nombre'    : { es:'Tu nombre',           en:'Your name',          va:'El teu nom'          },
  'home.contact.email'     : { es:'tu@email.com',        en:'you@email.com',      va:'tu@email.com'        },
  'home.contact.whatsapp'  : { es:'+34 600 000 000',     en:'+34 600 000 000',    va:'+34 600 000 000'     },
  'home.contact.submit'    : { es:'Solicitar sesión estratégica →', en:'Request strategy session →', va:'Sol·licitar sessió estratègica →' },

  /* ── KIT / ia-SportCenter ── */
  'kit.badge'              : { es:'Kit IA Deportivo · Pago único', en:'Sports AI Kit · One-time payment', va:'Kit IA Esportiu · Pagament únic' },
  'kit.hero.h1a'           : { es:'TU CENTRO',           en:'YOUR SPORTS',        va:'EL TEU CENTRE'       },
  'kit.hero.h1b'           : { es:'DEPORTIVO',           en:'CENTRE ON',          va:'ESPORTIU EN'         },
  'kit.hero.h1c'           : { es:'EN',                  en:'',                   va:''                    },
  'kit.hero.h1d'           : { es:'PILOTO',              en:'AUTOPILOT.',         va:'PILOT'               },
  'kit.hero.h1e'           : { es:'AUTOMÁTICO.',         en:'',                   va:'AUTOMÀTIC.'          },
  'kit.hero.h1f'           : { es:'EN 48H.',             en:'IN 48H.',            va:'EN 48H.'             },
  'kit.hero.sub'           : { es:'Agente IA configurado a medida, instalado y funcionando desde el primer día.', en:'Custom-configured AI agent, installed and running from day one.', va:'Agent IA configurat a mida, instal·lat i funcionant des del primer dia.' },
  'kit.hero.strong'        : { es:'Sin mensualidades. Sin sorpresas. Sin curva de aprendizaje.', en:'No monthly fees. No surprises. No learning curve.', va:'Sense mensualitats. Sense sorpreses. Sense corba d\'aprenentatge.' },
  'kit.hero.note'          : { es:'Stripe · Bizum disponible · Confirmación en menos de 24h', en:'Stripe · Bizum available · Confirmation in under 24h', va:'Stripe · Bizum disponible · Confirmació en menys de 24h' },
  'kit.hero.cta1'          : { es:'Quiero el Kit →',     en:'I want the Kit →',   va:'Vull el Kit →'       },
  'kit.hero.cta2'          : { es:'¿Qué incluye?',       en:'What\'s included?',  va:'Què inclou?'         },
  'kit.price.label'        : { es:'IVA incluido\npago único', en:'VAT included\none payment', va:'IVA inclòs\npagament únic' },

  /* ── ABOUT ── */
  'about.hero.badge'       : { es:'Fundador · Palferia.me', en:'Founder · Palferia.me', va:'Fundador · Palferia.me' },
  'about.contact.cta'      : { es:'Cuéntame tu proyecto →', en:'Tell me about your project →', va:'Conta\'m el teu projecte →' },

  /* ── VERTICALES (común) ── */
  'lp.header.back'         : { es:'← Volver',           en:'← Back',             va:'← Tornar'            },
  'lp.form.nombre'         : { es:'Nombre',              en:'Name',               va:'Nom'                 },
  'lp.form.email'          : { es:'Email',               en:'Email',              va:'Email'               },
  'lp.form.telefono'       : { es:'WhatsApp',            en:'WhatsApp',           va:'WhatsApp'            },
  'lp.form.submit'         : { es:'Quiero más información →', en:'I want more information →', va:'Vull més informació →' },
};

const translations = { ...global, ...pages };

/* ─────────────────────────────────────────────
   MOTOR
───────────────────────────────────────────── */
function getLang() {
  return localStorage.getItem('pf-lang') || DEFAULT;
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  localStorage.setItem('pf-lang', lang);
  applyLang(lang);
  updateSwitcher(lang);
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const t = translations[key];
    if (!t) return;
    const val = t[lang] || t[DEFAULT];
    if (attr) {
      el.setAttribute(attr, val);
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
  document.documentElement.lang = lang === 'va' ? 'ca' : lang;
}

function updateSwitcher(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function buildSwitcher() {
  const existing = document.querySelector('.lang-switcher');
  if (!existing) return;
  LANGS.forEach(l => {
    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.dataset.lang = l;
    btn.textContent = l.toUpperCase();
    btn.setAttribute('aria-label', 'Change language to ' + l);
    btn.addEventListener('click', () => setLang(l));
    existing.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildSwitcher();
  const lang = getLang();
  applyLang(lang);
  updateSwitcher(lang);
});

window.PfLang = { set: setLang, get: getLang };

})();
