/* ── PALFERIA.ME · SISTEMA DE IDIOMAS ES / EN / VA ── */
(function(){

const LANGS = ['es','en','va'];
const DEFAULT = 'es';

/* ─────────────────────────────────────────────
   TRADUCCIONES GLOBALES (nav, footer, cookie, wa)
───────────────────────────────────────────── */
const global = {
  'nav.agentes'            : { es:'Agentes',                   en:'Agents',                      va:'Agents'                     },
  'nav.como'               : { es:'Cómo funciona',             en:'How it works',                va:'Com funciona'               },
  'nav.sobre'              : { es:'Sobre mí',                   en:'About',                       va:'Sobre mi'                   },
  'nav.blog'               : { es:'Blog',                      en:'Blog',                        va:'Blog'                       },
  'nav.cta'                : { es:'Hablemos →',                en:'Let\'s talk →',               va:'Parlem →'                   },

  'cookie.text'            : { es:'Usamos cookies propias para analizar el tráfico y mejorar tu experiencia.', en:'We use our own cookies to analyse traffic and improve your experience.', va:'Usem cookies pròpies per analitzar el tràfic i millorar la teua experiència.' },
  'cookie.policylink'      : { es:'Política de cookies',       en:'Cookie policy',               va:'Política de cookies'        },
  'cookie.moreinfo'        : { es:'Más info',                  en:'More info',                   va:'Més info'                   },
  'cookie.accept'          : { es:'Aceptar',                   en:'Accept',                      va:'Acceptar'                   },
  'cookie.reject'          : { es:'Rechazar',                  en:'Reject',                      va:'Rebutjar'                   },

  'wa.label'               : { es:'WhatsApp',                  en:'WhatsApp',                    va:'WhatsApp'                   },

  'footer.tagline'         : { es:'IA para el sport business · Valencia, España · 2026', en:'AI for sport business · Valencia, Spain · 2026', va:'IA per al sport business · València, Espanya · 2026' },
  'footer.col1.title'      : { es:'Agentes IA',                en:'AI Agents',                   va:'Agents IA'                  },
  'footer.col2.title'      : { es:'Empresa',                   en:'Company',                     va:'Empresa'                    },
  'footer.col2.about'      : { es:'Sobre mí',                   en:'About',                       va:'Sobre mi'                   },
  'footer.col2.contact'    : { es:'Contacto',                  en:'Contact',                     va:'Contacte'                   },
  'footer.col3.title'      : { es:'Legal',                     en:'Legal',                       va:'Legal'                      },
  'footer.col3.privacy'    : { es:'Política de privacidad',    en:'Privacy policy',              va:'Política de privacitat'     },
  'footer.col3.legal'      : { es:'Aviso legal',               en:'Legal notice',                va:'Avís legal'                 },
  'footer.col3.cookies'    : { es:'Política de cookies',       en:'Cookie policy',               va:'Política de cookies'        },
  'footer.rights'          : { es:'Todos los derechos reservados.', en:'All rights reserved.',   va:'Tots els drets reservats.'  },
  'footer.privacy'         : { es:'Privacidad',                en:'Privacy',                     va:'Privacitat'                 },
  'footer.legal'           : { es:'Aviso legal',               en:'Legal notice',                va:'Avís legal'                 },
  'footer.cookies'         : { es:'Cookies',                   en:'Cookies',                     va:'Cookies'                    },
};

/* ─────────────────────────────────────────────
   TRADUCCIONES — HOME (index.html)
───────────────────────────────────────────── */
const pages = {

  /* ── HERO ── */
  'home.hero.badge'          : { es:'Agentes IA para entidades deportivas',  en:'AI Agents for sports organisations',  va:'Agents IA per a entitats esportives'  },
  'home.hero.h1'             : { es:'El <span class="hl">agente IA</span><br>para tu entidad<br><span class="stroke">deportiva</span>', en:'The <span class="hl">AI agent</span><br>for your<br><span class="stroke">sports club</span>', va:'L\'<span class="hl">agent IA</span><br>per a la teua<br><span class="stroke">entitat</span>' },
  'home.hero.sub'            : { es:'Agentes IA que gestionan leads, responden consultas y automatizan la comunicación de tu centro deportivo — sin perder el toque humano.', en:'AI agents that manage leads, answer queries and automate communication for your sports centre — without losing the human touch.', va:'Agents IA que gestionen leads, responen consultes i automatitzen la comunicació del teu centre esportiu — sense perdre el toc humà.' },
  'home.hero.cta1'           : { es:'Ver agentes →',          en:'See agents →',                va:'Veure agents →'             },
  'home.hero.cta2'           : { es:'Hablar con Ronald',      en:'Talk to Ronald',              va:'Parlar amb Ronald'          },
  'home.hero.stat1'          : { es:'Entidades activas',       en:'Active entities',             va:'Entitats actives'           },
  'home.hero.stat2'          : { es:'Disponibilidad',          en:'Availability',                va:'Disponibilitat'             },
  'home.hero.stat3'          : { es:'Agentes especializados',  en:'Specialised agents',          va:'Agents especialitzats'      },
  'home.hero.stat4'          : { es:'Tiempo en gestión',       en:'Time in management',          va:'Temps en gestió'            },

  /* ── AGENTES (VERTICALES) ── */
  'home.agentes.label'       : { es:'Soluciones por vertical', en:'Solutions by vertical',       va:'Solucions per vertical'     },
  'home.agentes.h2'          : { es:'6 <span class="hl">agentes</span><br>especializados', en:'6 <span class="hl">agents</span><br>specialised', va:'6 <span class="hl">agents</span><br>especialitzats' },
  'home.agentes.sub'         : { es:'Cada agente está entrenado para tu tipo de entidad deportiva. No es un chatbot genérico — es un especialista en tu negocio.', en:'Each agent is trained for your type of sports organisation. Not a generic chatbot — a specialist in your business.', va:'Cada agent està entrenat per al teu tipus d\'entitat esportiva. No és un chatbot genèric — és un especialista en el teu negoci.' },

  'home.vert.academia.name'  : { es:'Academias',              en:'Academies',                   va:'Acadèmies'                  },
  'home.vert.academia.desc'  : { es:'Gestiona inscripciones, horarios, pagos y seguimiento de alumnos de forma autónoma.', en:'Autonomously manage enrolments, schedules, payments and student follow-up.', va:'Gestiona inscripcions, horaris, pagaments i seguiment d\'alumnes de forma autònoma.' },
  'home.vert.academia.tag1'  : { es:'Inscripciones',          en:'Enrolments',                  va:'Inscripcions'               },

  'home.vert.club.name'      : { es:'Clubes',                 en:'Clubs',                       va:'Clubs'                      },
  'home.vert.club.desc'      : { es:'Atención a socios, renovaciones, comunicación interna y captación de nuevos miembros.', en:'Member support, renewals, internal communication and new member acquisition.', va:'Atenció a socis, renovacions, comunicació interna i captació de nous membres.' },
  'home.vert.club.tag1'      : { es:'Socios',                 en:'Members',                     va:'Socis'                      },

  'home.vert.evento.name'    : { es:'Eventos',                en:'Events',                      va:'Esdeveniments'              },
  'home.vert.evento.desc'    : { es:'Inscripciones, acreditaciones, atención a participantes y comunicación pre/post evento.', en:'Registrations, accreditations, participant support and pre/post-event communication.', va:'Inscripcions, acreditacions, atenció a participants i comunicació pre/post-event.' },
  'home.vert.evento.tag1'    : { es:'Registro',               en:'Registration',                va:'Registre'                   },

  'home.vert.fed.name'       : { es:'Federaciones',           en:'Federations',                 va:'Federacions'                },
  'home.vert.fed.desc'       : { es:'Licencias, reglamentos, comunicación con clubs y atención a deportistas federados.', en:'Licences, regulations, club communication and support for registered athletes.', va:'Llicències, reglaments, comunicació amb clubs i atenció a esportistes federats.' },
  'home.vert.fed.tag1'       : { es:'Licencias',              en:'Licences',                    va:'Llicències'                 },
  'home.vert.fed.tag2'       : { es:'Reglamentos',            en:'Regulations',                 va:'Reglaments'                 },
  'home.vert.fed.tag3'       : { es:'Afiliados',              en:'Members',                     va:'Afiliats'                   },

  'home.vert.turismo.name'   : { es:'Turismo deportivo',      en:'Sports tourism',              va:'Turisme esportiu'           },
  'home.vert.turismo.desc'   : { es:'Paquetes de concentración, campus y turismo deportivo. Reservas y atención multiidioma.', en:'Training camps, campus packages and sports tourism. Bookings and multilingual support.', va:'Paquets de concentració, campus i turisme esportiu. Reserves i atenció multiidioma.' },
  'home.vert.turismo.tag1'   : { es:'Reservas',               en:'Bookings',                    va:'Reserves'                   },
  'home.vert.turismo.tag2'   : { es:'Multiidioma',            en:'Multilingual',                va:'Multiidioma'                },

  'home.vert.sponsor.name'   : { es:'Patrocinios',            en:'Sponsorships',                va:'Patrocinis'                 },
  'home.vert.sponsor.desc'   : { es:'Prospecta marcas, gestiona propuestas comerciales y hace seguimiento de sponsors activos.', en:'Prospect brands, manage commercial proposals and track active sponsors.', va:'Prospecta marques, gestiona propostes comercials i fa seguiment de sponsors actius.' },
  'home.vert.sponsor.tag1'   : { es:'Prospección',            en:'Prospecting',                 va:'Prospecció'                 },
  'home.vert.sponsor.tag2'   : { es:'Propuestas',             en:'Proposals',                   va:'Propostes'                  },

  'home.vert.custom.name'    : { es:'Tu vertical',            en:'Your vertical',               va:'El teu vertical'            },
  'home.vert.custom.desc'    : { es:'¿Tienes un caso de uso específico? Construimos el agente a medida para tu operación.', en:'Have a specific use case? We build the agent tailored to your operation.', va:'Tens un cas d\'ús específic? Construïm l\'agent a mida per a la teua operació.' },
  'home.vert.custom.cta'     : { es:'Hablemos →',             en:'Let\'s talk →',               va:'Parlem →'                   },

  /* ── CÓMO FUNCIONA ── */
  'home.how.label'           : { es:'Proceso',                en:'Process',                     va:'Procés'                     },
  'home.how.h2'              : { es:'En <span class="hl">3 pasos</span><br>tu agente está activo', en:'In <span class="hl">3 steps</span><br>your agent is live', va:'En <span class="hl">3 passos</span><br>el teu agent és actiu' },
  'home.how.sub'             : { es:'Sin desarrollos complejos. Sin meses de integración. Tu agente funciona en semanas.', en:'No complex development. No months of integration. Your agent is up and running in weeks.', va:'Sense desenvolupaments complexos. Sense mesos d\'integració. El teu agent funciona en setmanes.' },

  'home.how.s1.name'         : { es:'Auditoría',              en:'Audit',                       va:'Auditoria'                  },
  'home.how.s1.desc'         : { es:'Analizamos tu operación, tus canales y los flujos donde la IA puede impactar más rápido.', en:'We analyse your operation, channels and the flows where AI can make the fastest impact.', va:'Analitzem la teua operació, els teus canals i els fluxos on la IA pot impactar més ràpid.' },
  'home.how.s1.li1'          : { es:'Mapeamos consultas repetitivas',    en:'We map repetitive queries',          va:'Mapegem consultes repetitives'      },
  'home.how.s1.li2'          : { es:'Identificamos cuellos de botella',  en:'We identify bottlenecks',            va:'Identifiquem colls d\'ampolla'      },
  'home.how.s1.li3'          : { es:'Definimos KPIs de éxito',           en:'We define success KPIs',             va:'Definim KPIs d\'èxit'               },

  'home.how.s2.name'         : { es:'Configuración',          en:'Configuration',               va:'Configuració'               },
  'home.how.s2.desc'         : { es:'Entrenamos el agente con tu base de conocimiento, integramos tus herramientas y conectamos tus canales.', en:'We train the agent with your knowledge base, integrate your tools and connect your channels.', va:'Entrenem l\'agent amb la teua base de coneixement, integrem les teues eines i connectem els teus canals.' },
  'home.how.s2.li1'          : { es:'Base de conocimiento personalizada', en:'Custom knowledge base',             va:'Base de coneixement personalitzada' },
  'home.how.s2.li2'          : { es:'Integración WhatsApp / Web / App',  en:'WhatsApp / Web / App integration',  va:'Integració WhatsApp / Web / App'    },
  'home.how.s2.li3'          : { es:'Conexión con tu software actual',   en:'Connection with your current software', va:'Connexió amb el teu programari actual' },

  'home.how.s3.name'         : { es:'Activación',             en:'Activation',                  va:'Activació'                  },
  'home.how.s3.desc'         : { es:'Tu agente sale en vivo. Monitorizamos el rendimiento y optimizamos de forma continua.', en:'Your agent goes live. We monitor performance and optimise continuously.', va:'El teu agent ix en directe. Monitoritzem el rendiment i optimitzem de forma contínua.' },
  'home.how.s3.li1'          : { es:'Go-live en semanas',     en:'Go-live in weeks',            va:'Go-live en setmanes'        },
  'home.how.s3.li2'          : { es:'Dashboard de conversaciones', en:'Conversations dashboard', va:'Dashboard de converses'    },
  'home.how.s3.li3'          : { es:'Mejora continua mensual', en:'Monthly continuous improvement', va:'Millora contínua mensual' },

  'home.how.integ.label'     : { es:'Integraciones nativas',  en:'Native integrations',         va:'Integracions natives'       },
  'home.how.integ.api'       : { es:'API propia',             en:'Custom API',                  va:'API pròpia'                 },

  /* ── NÚMEROS ── */
  'home.num.1'               : { es:'Entidades deportivas activas', en:'Active sports entities', va:'Entitats esportives actives' },
  'home.num.2'               : { es:'Disponibilidad del agente',    en:'Agent availability',     va:'Disponibilitat de l\'agent' },
  'home.num.3'               : { es:'Menos tiempo en gestión',      en:'Less time on management', va:'Menys temps en gestió'    },
  'home.num.4'               : { es:'Time-to-live medio',           en:'Average time-to-live',   va:'Time-to-live mitjà'         },

  /* ── KIT IA DEPORTIVO ── */
  'home.kit.label'           : { es:'Producto · Pago único',  en:'Product · One-time payment',  va:'Producte · Pagament únic'   },
  'home.kit.h2'              : { es:'Kit IA Deportivo<br><span class="hl">Listo en 72h.</span>', en:'Sports AI Kit<br><span class="hl">Ready in 72h.</span>', va:'Kit IA Esportiu<br><span class="hl">Llest en 72h.</span>' },
  'home.kit.sub'             : { es:'Agente IA configurado con los datos de tu centro, instalado y entrenado contigo. Sin mensualidades. Un solo pago, todo incluido.', en:'AI agent configured with your centre\'s data, installed and trained with you. No monthly fees. One payment, everything included.', va:'Agent IA configurat amb les dades del teu centre, instal·lat i entrenat amb tu. Sense mensualitats. Un sol pagament, tot inclòs.' },
  'home.kit.price'           : { es:'IVA incluido<br>Pago único', en:'VAT included<br>One payment', va:'IVA inclòs<br>Pagament únic' },
  'home.kit.cta'             : { es:'Ver el Kit completo →',  en:'See full Kit →',              va:'Veure el Kit complet →'     },

  /* ── BLOG ── */
  'home.blog.label'          : { es:'Conocimiento',           en:'Knowledge',                   va:'Coneixement'                },
  'home.blog.h2'             : { es:'Recursos <span class="hl">sport IA</span>', en:'Resources <span class="hl">sport AI</span>', va:'Recursos <span class="hl">sport IA</span>' },
  'home.blog.cta'            : { es:'Ver todos →',            en:'See all →',                   va:'Veure tots →'               },
  'home.blog.c1.tag'         : { es:'Caso de éxito',          en:'Case study',                  va:'Cas d\'èxit'                },
  'home.blog.c1.title'       : { es:'Cómo Grupo La Cueva redujo un 60% las consultas repetitivas', en:'How Grupo La Cueva reduced repetitive queries by 60%', va:'Com Grupo La Cueva va reduir un 60% les consultes repetitives' },
  'home.blog.c1.excerpt'     : { es:'Implementamos un agente IA para su academia de pádel. Resultado: menos carga para el equipo, más conversiones.', en:'We implemented an AI agent for their padel academy. Result: less load for the team, more conversions.', va:'Vam implementar un agent IA per a la seua acadèmia de pàdel. Resultat: menys càrrega per a l\'equip, més conversions.' },
  'home.blog.c1.read'        : { es:'Leer →',                 en:'Read →',                      va:'Llegir →'                   },
  'home.blog.c2.tag'         : { es:'Estrategia',             en:'Strategy',                    va:'Estratègia'                 },
  'home.blog.c2.title'       : { es:'5 flujos que todo club deportivo debería automatizar ya', en:'5 flows every sports club should automate now', va:'5 fluxos que tot club esportiu hauria d\'automatitzar ja' },
  'home.blog.c2.excerpt'     : { es:'Renovaciones de socios, confirmaciones de clase, recordatorios de pago — todo puede funcionar solo.', en:'Member renewals, class confirmations, payment reminders — everything can run on its own.', va:'Renovacions de socis, confirmacions de classe, recordatoris de pagament — tot pot funcionar sol.' },
  'home.blog.c2.read'        : { es:'Leer →',                 en:'Read →',                      va:'Llegir →'                   },
  'home.blog.c3.tag'         : { es:'IA + Deporte',           en:'AI + Sport',                  va:'IA + Esport'                },
  'home.blog.c3.title'       : { es:'El sport business en 2026: qué entidades ya usan IA y qué resultados tienen', en:'Sport business in 2026: which entities are already using AI and what results they get', va:'El sport business en 2026: quines entitats ja usen IA i quins resultats tenen' },
  'home.blog.c3.excerpt'     : { es:'Un repaso al estado del arte de la IA aplicada al deporte en España y Europa.', en:'A review of the state of the art of AI applied to sport in Spain and Europe.', va:'Un repàs a l\'estat de l\'art de la IA aplicada a l\'esport a Espanya i Europa.' },
  'home.blog.c3.read'        : { es:'Leer →',                 en:'Read →',                      va:'Llegir →'                   },

  /* ── CONTACTO ── */
  'home.contact.label'       : { es:'Contacto',               en:'Contact',                     va:'Contacte'                   },
  'home.contact.h2'          : { es:'Hablemos de<br><span class="hl">tu entidad</span>', en:'Let\'s talk about<br><span class="hl">your entity</span>', va:'Parlem de<br><span class="hl">la teua entitat</span>' },
  'home.contact.sub'         : { es:'Cuéntanos tu entidad y te mostramos qué agente encaja con tu operación.', en:'Tell us about your entity and we\'ll show you which agent fits your operation.', va:'Conta\'ns la teua entitat i et mostrem quin agent encaixa amb la teua operació.' },
  'home.contact.wa'          : { es:'WhatsApp directo',        en:'Direct WhatsApp',             va:'WhatsApp directe'           },
  'home.contact.ci.email.sub'  : { es:'Respuesta en menos de 24h', en:'Response within 24h',    va:'Resposta en menys de 24h'   },
  'home.contact.ci.wa.label'   : { es:'WhatsApp / Teléfono',   en:'WhatsApp / Phone',            va:'WhatsApp / Telèfon'         },
  'home.contact.ci.wa.sub'     : { es:'Ronald Palma · Fundador', en:'Ronald Palma · Founder',   va:'Ronald Palma · Fundador'    },
  'home.contact.ci.loc.label'  : { es:'Ubicación',             en:'Location',                    va:'Ubicació'                   },
  'home.contact.ci.loc.val'    : { es:'Valencia, España',       en:'Valencia, Spain',             va:'València, Espanya'          },
  'home.contact.ci.loc.sub'    : { es:'Clientes en toda España y Latam', en:'Clients across Spain and Latam', va:'Clients per tota Espanya i Latam' },
  'home.contact.lbl.nombre'    : { es:'Nombre',                 en:'Name',                        va:'Nom'                        },
  'home.contact.lbl.email'     : { es:'Email',                  en:'Email',                       va:'Email'                      },
  'home.contact.lbl.wa'        : { es:'WhatsApp (opcional)',     en:'WhatsApp (optional)',          va:'WhatsApp (opcional)'        },
  'home.contact.lbl.sector'    : { es:'Tipo de entidad',         en:'Entity type',                 va:'Tipus d\'entitat'           },
  'home.contact.lbl.mensaje'   : { es:'¿Qué quieres automatizar?', en:'What do you want to automate?', va:'Què vols automatitzar?' },
  'home.contact.nombre'        : { es:'Tu nombre',              en:'Your name',                   va:'El teu nom'                 },
  'home.contact.email'         : { es:'tu@email.com',           en:'you@email.com',               va:'tu@email.com'               },
  'home.contact.whatsapp'      : { es:'+34 600 000 000',        en:'+34 600 000 000',             va:'+34 600 000 000'            },
  'home.contact.ph.sector'     : { es:'Selecciona tu tipo de entidad', en:'Select your entity type', va:'Selecciona el teu tipus d\'entitat' },
  'home.contact.ph.mensaje'    : { es:'Cuéntame brevemente tu situación actual y qué te gustaría mejorar...', en:'Tell me briefly about your current situation and what you\'d like to improve...', va:'Conta\'m breument la teua situació actual i què t\'agradaria millorar...' },
  'home.contact.opt.academia'  : { es:'Academia deportiva',     en:'Sports academy',              va:'Acadèmia esportiva'         },
  'home.contact.opt.club'      : { es:'Club deportivo',         en:'Sports club',                 va:'Club esportiu'              },
  'home.contact.opt.evento'    : { es:'Organizador de eventos', en:'Event organiser',             va:'Organitzador d\'esdeveniments' },
  'home.contact.opt.fed'       : { es:'Federación',             en:'Federation',                  va:'Federació'                  },
  'home.contact.opt.turismo'   : { es:'Turismo deportivo',      en:'Sports tourism',              va:'Turisme esportiu'           },
  'home.contact.opt.sponsor'   : { es:'Gestión de patrocinios', en:'Sponsorship management',     va:'Gestió de patrocinis'       },
  'home.contact.opt.otro'      : { es:'Otro',                   en:'Other',                       va:'Altre'                      },
  'home.contact.submit'        : { es:'Solicitar sesión estratégica →', en:'Request strategy session →', va:'Sol·licitar sessió estratègica →' },
  'home.contact.note'          : { es:'Sin compromiso. Sin costes hasta tener toda la información sobre la mesa.', en:'No commitment. No costs until all information is on the table.', va:'Sense compromís. Sense costos fins a tenir tota la informació sobre la taula.' },
  'home.contact.success.title' : { es:'¡Recibido!',             en:'Received!',                   va:'Rebut!'                     },
  'home.contact.success.text'  : { es:'Te contacto en menos de 24h para coordinar la sesión. Si prefieres más rapidez, escríbeme por <a href="https://wa.me/34643469239" style="color:var(--accent)">WhatsApp</a>.', en:'I\'ll contact you within 24h to schedule the session. If you\'d prefer faster response, write to me on <a href="https://wa.me/34643469239" style="color:var(--accent)">WhatsApp</a>.', va:'Et contacte en menys de 24h per a coordinar la sessió. Si prefereixes més rapidesa, escriu-me per <a href="https://wa.me/34643469239" style="color:var(--accent)">WhatsApp</a>.' },

  /* ── ECOSISTEMA ── */
  'home.eco.label'           : { es:'Ecosistema',             en:'Ecosystem',                   va:'Ecosistema'                 },
  'home.eco.h2'              : { es:'Más allá de<br><span class="hl">palferia.me</span>', en:'Beyond<br><span class="hl">palferia.me</span>', va:'Més enllà de<br><span class="hl">palferia.me</span>' },
  'home.eco.sub'             : { es:'PalferIA Studio desarrolla herramientas y comunidades para el sport business.', en:'PalferIA Studio develops tools and communities for sport business.', va:'PalferIA Studio desenvolupa eines i comunitats per al sport business.' },
  'home.eco.c1.name'         : { es:'Agentes IA',             en:'AI Agents',                   va:'Agents IA'                  },
  'home.eco.c1.desc'         : { es:'Agencia de agentes IA especializados en sport business. Automatización, captación y fidelización para entidades deportivas.', en:'Agency specialising in AI agents for sport business. Automation, acquisition and retention for sports entities.', va:'Agència d\'agents IA especialitzats en sport business. Automatització, captació i fidelització per a entitats esportives.' },
  'home.eco.c1.link'         : { es:'Estás aquí →',           en:'You are here →',              va:'Ets aquí →'                 },
  'home.eco.c2.name'         : { es:'Sport Consulting',       en:'Sport Consulting',            va:'Sport Consulting'           },
  'home.eco.c2.desc'         : { es:'Consultoría estratégica para el sport business: marketing deportivo, ticketing, patrocinios y transformación digital.', en:'Strategic consultancy for sport business: sports marketing, ticketing, sponsorships and digital transformation.', va:'Consultoria estratègica per al sport business: màrqueting esportiu, ticketing, patrocinis i transformació digital.' },
  'home.eco.c2.link'         : { es:'Visitar →',              en:'Visit →',                     va:'Visitar →'                  },
  'home.eco.c3.name'         : { es:'Draft Day',              en:'Draft Day',                   va:'Draft Day'                  },
  'home.eco.c3.desc'         : { es:'Comunidad y plataforma de contenidos para profesionales del sport business en España y Latam.', en:'Community and content platform for sport business professionals in Spain and Latam.', va:'Comunitat i plataforma de continguts per a professionals del sport business a Espanya i Latam.' },
  'home.eco.c3.link'         : { es:'Visitar →',              en:'Visit →',                     va:'Visitar →'                  },

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
