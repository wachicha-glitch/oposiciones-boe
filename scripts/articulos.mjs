// scripts/articulos.mjs
//
// Artículos de contenido original y extenso. Es lo que da peso "editorial" al sitio
// frente a los miles de fichas generadas automáticamente, y lo que Google valora
// para aprobar AdSense y para posicionar en búsquedas de cola larga.
//
// Cada artículo: { slug, titulo, descripcion, fecha, cuerpo }
// El cuerpo es HTML (se inserta tal cual dentro de <article class="contenido">).

export const ARTICULOS = [
  {
    slug: "como-empezar-a-opositar",
    titulo: "Cómo empezar a opositar desde cero: guía paso a paso",
    descripcion:
      "Qué decidir antes de comprar un temario, cómo elegir cuerpo, cuánto tiempo hace falta y cómo organizar el estudio si empiezas de cero.",
    fecha: "2026-09-18",
    cuerpo: `
<p>Decidir opositar es relativamente fácil. Lo difícil es el mes siguiente: elegir a qué, con qué material, cuántas horas y con qué expectativas. Esta guía recorre las decisiones que conviene tomar <em>antes</em> de empezar a estudiar, porque equivocarse en ellas cuesta mucho más tiempo que equivocarse en un tema concreto del temario.</p>

<h2>1. Elegir el cuerpo antes que el temario</h2>
<p>El error más común es empezar por el material. Alguien recomienda una academia, se compra un temario y solo después se pregunta si ese cuerpo encaja con su titulación, su situación o sus expectativas de destino. El orden correcto es el inverso.</p>
<p>Para elegir cuerpo, hay tres filtros que conviene aplicar en este orden:</p>
<ul>
  <li><strong>Titulación.</strong> Es un filtro absoluto: si el subgrupo exige un grado universitario y no lo tienes, no puedes presentarte, por bien que te prepares. Los subgrupos C2 suelen pedir ESO o equivalente; C1, Bachillerato o FP de grado medio; A2 y A1, titulación universitaria. Comprueba esto antes que nada.</li>
  <li><strong>Frecuencia de convocatoria.</strong> Hay cuerpos que convocan casi todos los años y otros que pasan varios años sin sacar plazas. Prepararte para algo que se convoca cada cuatro años implica un riesgo de planificación muy distinto al de algo que sale anualmente.</li>
  <li><strong>Destino y movilidad.</strong> Algunos cuerpos estatales implican que tu primer destino puede estar en cualquier punto del país. Otros, sobre todo los de administración local, son de un municipio concreto. Si tienes una situación familiar o laboral que te ata geográficamente, este filtro puede ser más determinante que el temario.</li>
</ul>

<h2>2. Entender qué tipo de proceso te espera</h2>
<p>No todas las oposiciones se ganan de la misma forma. Conviene saber desde el principio si el proceso al que aspiras es:</p>
<ul>
  <li><strong>Oposición pura:</strong> solo cuenta el examen. Es el sistema más "meritocrático" a corto plazo: alguien sin experiencia previa puede sacar plaza el primer año si domina el temario.</li>
  <li><strong>Concurso-oposición:</strong> el examen se combina con una valoración de méritos. Si no tienes experiencia previa en la administración, partes con desventaja en la fase de concurso, y necesitas compensarla con una nota de examen más alta. Es muy habitual en sanidad y educación.</li>
  <li><strong>Concurso:</strong> solo méritos. Prácticamente inaccesible si no vienes ya de dentro.</li>
</ul>
<p>Esta distinción cambia por completo la estrategia. En un concurso-oposición puede tener sentido, por ejemplo, acumular experiencia como interino mientras preparas, porque esa experiencia puntúa. En una oposición pura, ese tiempo no te suma nada en el baremo.</p>

<h2>3. Conseguir el temario oficial, no una versión comercial cualquiera</h2>
<p>El temario oficial figura como anexo en las bases de la convocatoria publicadas en el boletín correspondiente. Es gratuito y público. Las editoriales y academias venden desarrollos de ese temario, que es un servicio legítimo y útil, pero el índice de referencia debe ser siempre el oficial.</p>
<p>Dos comprobaciones importantes antes de comprar material:</p>
<ul>
  <li>Que corresponda a la <strong>última convocatoria</strong> del cuerpo. Los temarios se actualizan y una reforma legislativa puede dejar obsoletos varios temas enteros.</li>
  <li>Que la normativa citada esté <strong>vigente</strong>. En materias como derecho administrativo o seguridad social, un manual de hace tres años puede contener contenido derogado.</li>
</ul>

<h2>4. Calcular el tiempo con realismo</h2>
<p>No existe una cifra universal de "horas necesarias": depende del cuerpo, del temario y de tu punto de partida. Pero sí hay dos patrones bastante constantes entre quienes aprueban.</p>
<p>El primero es que <strong>la constancia gana a la intensidad</strong>. Estudiar tres horas todos los días rinde más que diez horas dos sábados al mes, porque el conocimiento de un temario extenso se sostiene sobre el repaso, y el repaso necesita frecuencia.</p>
<p>El segundo es que hay que <strong>presupuestar el repaso desde el principio</strong>. Un error clásico de planificación es dividir el temario entre los meses disponibles hasta el examen, sin dejar margen: se llega al último tema habiendo olvidado los primeros. Una planificación realista dedica aproximadamente la mitad del tiempo a primera lectura y comprensión, y la otra mitad a repaso y práctica.</p>

<h2>5. Practicar con el formato real del examen</h2>
<p>Saberse el temario y saber examinarse son habilidades distintas. Un test de 100 preguntas con penalización por error premia decisiones que no tienen nada que ver con el conocimiento puro: cuándo arriesgar una respuesta dudosa, cómo administrar el tiempo, cómo no bloquearse en una pregunta.</p>
<p>Por eso conviene hacer exámenes completos, cronometrados y en condiciones parecidas a las reales, desde bastante antes del examen. Los exámenes de convocatorias anteriores del mismo cuerpo, cuando están disponibles públicamente, son el mejor material posible: reflejan el estilo real del tribunal.</p>

<h2>6. Vigilar los plazos administrativos</h2>
<p>Mucha gente que se prepara bien pierde una convocatoria por un asunto puramente administrativo: no presentar la solicitud a tiempo, no pagar la tasa correctamente, o no revisar la lista provisional de admitidos y quedarse excluido sin enterarse.</p>
<p>Tres fechas que conviene tener siempre localizadas:</p>
<ol>
  <li>El <strong>fin del plazo de solicitud</strong>, que se cuenta en días hábiles desde la publicación en el boletín, no desde que te enteras de la noticia.</li>
  <li>El <strong>plazo de subsanación</strong> tras la lista provisional de admitidos, que suele ser corto.</li>
  <li>La <strong>fecha del primer ejercicio</strong>, que a veces se publica con relativamente poca antelación.</li>
</ol>

<h2>7. Aceptar que el primer intento suele ser de aprendizaje</h2>
<p>Presentarse a una convocatoria sin haber terminado el temario no es necesariamente tiempo perdido. Te expone al formato real, al ambiente del examen y al nivel efectivo de exigencia del tribunal, y esa información vale mucho para el siguiente intento. Muchos opositores describen su primera convocatoria como la que les enseñó a preparar la segunda.</p>

<p class="aviso-contenido">Este artículo es orientativo y de carácter general. Las bases de cada convocatoria concreta prevalecen siempre sobre cualquier información general: consúltalas antes de tomar decisiones.</p>`,
  },

  {
    slug: "grupos-clasificacion-empleo-publico",
    titulo: "Grupos A1, A2, C1 y C2: qué significan y qué titulación exige cada uno",
    descripcion:
      "Explicación de los grupos y subgrupos de clasificación del empleo público en España, la titulación mínima de cada uno y cómo afectan al sueldo y a la promoción.",
    fecha: "2026-09-18",
    cuerpo: `
<p>Cuando lees una convocatoria de empleo público, casi siempre aparece una referencia a un grupo o subgrupo de clasificación: A1, A2, B, C1 o C2. No es una etiqueta menor: determina la titulación que necesitas para presentarte, el nivel retributivo de partida y, en buena medida, el tipo de funciones que desempeñarás.</p>

<h2>Por qué existen los grupos de clasificación</h2>
<p>El empleo público español organiza los cuerpos y escalas en grupos según el nivel de titulación exigido para el acceso. La función de este sistema es doble: garantiza que cada puesto se cubre con la cualificación adecuada, y establece una estructura retributiva y de carrera comparable entre administraciones distintas.</p>
<p>Esto significa que un subgrupo C1 en un ayuntamiento y un subgrupo C1 en la administración estatal comparten el mismo nivel de titulación exigida y una banda retributiva base comparable, aunque las funciones concretas y los complementos varíen.</p>

<h2>Los grupos, uno por uno</h2>

<h3>Subgrupo A1</h3>
<p>Exige título universitario de grado (o las antiguas licenciaturas, ingenierías superiores o arquitectura). Corresponde a los cuerpos superiores: puestos con funciones de dirección, planificación, elaboración normativa, inspección de alto nivel o asesoramiento técnico especializado.</p>
<p>Son los procesos selectivos más exigentes en cuanto a extensión de temario y duración de la preparación. Es habitual que los temarios superen los doscientos temas y que la preparación se cuente en años, no en meses.</p>

<h3>Subgrupo A2</h3>
<p>Exige igualmente titulación universitaria de grado, pero corresponde a cuerpos de gestión: puestos técnicos con responsabilidad intermedia, tramitación de expedientes complejos, apoyo a la dirección o funciones técnicas especializadas.</p>
<p>En la práctica, muchos cuerpos A2 son una vía de acceso razonable para titulados universitarios que buscan un equilibrio entre exigencia de preparación y condiciones del puesto, y sirven además como base para promoción interna hacia A1.</p>

<h3>Grupo B</h3>
<p>Exige título de Técnico Superior (formación profesional de grado superior). Es el grupo menos numeroso: bastantes administraciones apenas lo utilizan, y muchos puestos que por titulación encajarían aquí se convocan en realidad como C1 o A2.</p>

<h3>Subgrupo C1</h3>
<p>Exige título de Bachillerato o Técnico (formación profesional de grado medio). Corresponde típicamente a puestos administrativos con cierta autonomía: tramitación de procedimientos, atención especializada al ciudadano, gestión de expedientes.</p>
<p>Es uno de los subgrupos con más volumen de convocatorias y, por tanto, uno de los más demandados. El temario suele combinar organización administrativa, derecho administrativo básico, ofimática y, con frecuencia, pruebas prácticas.</p>

<h3>Subgrupo C2</h3>
<p>Exige título de Graduado en ESO o equivalente. Corresponde a puestos de auxilio administrativo y tareas de apoyo: registro, archivo, atención al público, tramitación de procedimientos sencillos.</p>
<p>Al ser el subgrupo con el requisito de titulación más accesible, suele ser también el que concentra mayor número de aspirantes por plaza, lo que compensa en parte que el temario sea más breve.</p>

<h2>Agrupaciones profesionales sin requisito de titulación</h2>
<p>Además de los grupos anteriores, existen agrupaciones profesionales para puestos que no exigen ninguna titulación académica concreta, como determinados puestos de servicios auxiliares o de mantenimiento. Su régimen es equivalente al de los grupos de clasificación, pero sin el requisito de titulación de acceso.</p>

<h2>Cómo afecta el grupo al sueldo</h2>
<p>El grupo determina el <strong>sueldo base</strong>, que es solo una parte de la retribución total. Sobre él se suman complementos que pueden variar mucho: el complemento de destino (según el nivel del puesto), el complemento específico (según las características concretas del puesto: responsabilidad, peligrosidad, dedicación) y, en su caso, productividad o gratificaciones.</p>
<p>Esto tiene una consecuencia práctica importante: <strong>dos puestos del mismo subgrupo pueden tener retribuciones totales bastante distintas</strong> según el nivel y los complementos asignados. Al comparar convocatorias, el subgrupo es solo un primer indicador; el dato más informativo suele ser el nivel del puesto y su complemento específico, que figuran en la relación de puestos de trabajo de cada administración.</p>

<h2>Promoción interna entre grupos</h2>
<p>El sistema permite ascender de grupo mediante procesos de promoción interna, reservados a quienes ya son personal de esa administración y cumplen una antigüedad mínima. La promoción interna suele tener un proceso selectivo propio, a veces con temario reducido o con exención de determinadas materias ya acreditadas.</p>
<p>Esto abre una estrategia habitual: acceder por un subgrupo con requisitos más asequibles y, una vez dentro, ir promocionando internamente. Tiene la ventaja de empezar a cotizar y a acumular antigüedad antes, aunque exige mantener la preparación durante más tiempo.</p>

<p class="aviso-contenido">Los requisitos concretos de titulación, retribución y promoción los fija cada convocatoria y la normativa aplicable a cada administración. Esta información es orientativa: consulta siempre las bases oficiales del proceso que te interese.</p>`,
  },

  {
    slug: "plazos-y-como-se-cuentan",
    titulo: "Plazos en las oposiciones: cómo se cuentan los días hábiles y por qué importa",
    descripcion:
      "Cómo contar correctamente el plazo de una convocatoria, qué son los días hábiles, cuándo empieza a contar y qué pasa si presentas fuera de plazo.",
    fecha: "2026-09-18",
    cuerpo: `
<p>Perder una convocatoria por haber contado mal un plazo es más frecuente de lo que parece, y especialmente frustrante: no depende del nivel de preparación, sino de un detalle administrativo que se puede controlar por completo. Este artículo explica cómo funcionan los plazos en los procesos selectivos.</p>

<h2>Desde cuándo empieza a contar</h2>
<p>La regla general es que el plazo empieza a contar <strong>desde el día siguiente</strong> a la publicación oficial del anuncio en el boletín correspondiente. No desde el día de la publicación, ni desde que la noticia aparece en un portal de empleo, ni desde que te llega un aviso por correo.</p>
<p>Esto tiene una consecuencia práctica: la fecha que importa es la del boletín oficial. Cuando consultes una convocatoria en cualquier web (incluida esta), la referencia fiable es la fecha de publicación oficial que consta en el propio BOE o boletín autonómico.</p>

<h2>Qué es un día hábil</h2>
<p>La mayoría de los plazos de las convocatorias se expresan en días hábiles. En el procedimiento administrativo, son días hábiles todos los días excepto:</p>
<ul>
  <li>Los <strong>sábados</strong>.</li>
  <li>Los <strong>domingos</strong>.</li>
  <li>Los <strong>festivos</strong>, tanto nacionales como los de la comunidad autónoma y los locales del municipio correspondiente.</li>
</ul>
<p>El detalle de los festivos autonómicos y locales es importante: un plazo que vence en Madrid puede no vencer el mismo día que en Sevilla si hay una fiesta local distinta por medio. Cada administración publica su calendario de días inhábiles.</p>

<h2>Días hábiles frente a días naturales</h2>
<p>Algunas convocatorias, en lugar de días hábiles, fijan plazos en días naturales o en meses. La diferencia es sustancial:</p>
<ul>
  <li><strong>Días naturales:</strong> cuentan todos, incluidos sábados, domingos y festivos.</li>
  <li><strong>Meses:</strong> el plazo vence el mismo día del mes siguiente (por ejemplo, del 10 de marzo al 10 de abril), y si ese día no existe en el mes de vencimiento, vence el último día del mes.</li>
</ul>
<p>Por eso no basta con saber "son veinte días": hay que leer literalmente si las bases dicen hábiles, naturales o meses. Veinte días hábiles y veinte días naturales pueden diferir en más de una semana de calendario.</p>

<h2>Qué pasa si el último día es inhábil</h2>
<p>Si el último día del plazo cae en sábado, domingo o festivo, el plazo se entiende prorrogado al <strong>primer día hábil siguiente</strong>. Es una regla a favor del administrado, pero no conviene usarla como estrategia: apurar hasta el último minuto expone a incidencias técnicas en las sedes electrónicas, que suelen saturarse precisamente los últimos días de plazo.</p>

<h2>El plazo de subsanación</h2>
<p>Presentar la solicitud a tiempo no cierra el asunto. Tras el cierre del plazo se publica la <strong>lista provisional de personas admitidas y excluidas</strong>, y ahí pueden aparecer exclusiones por motivos tan simples como un error en el número de DNI, una tasa mal abonada o un documento que no se adjuntó correctamente.</p>
<p>Para esas situaciones hay un plazo de subsanación, normalmente más breve que el de presentación (a menudo diez días hábiles). Si pasa sin que reacciones, la exclusión se vuelve definitiva. Por eso conviene <strong>anotar también la fecha aproximada en que se espera esa lista</strong>, no solo la del plazo de solicitud.</p>

<h2>Presentación electrónica y presencial</h2>
<p>La mayoría de convocatorias admiten (y cada vez más exigen) la presentación telemática a través de la sede electrónica correspondiente, lo que normalmente requiere certificado digital, DNI electrónico o sistema Cl@ve.</p>
<p>Si vas a presentar por vía electrónica y no tienes todavía certificado digital, tramitarlo lleva su tiempo: implica una solicitud, una acreditación presencial de identidad y una descarga posterior. Conviene tenerlo resuelto antes de que se publique la convocatoria que te interesa, no el último día de plazo.</p>

<h2>Una rutina sencilla para no perder plazos</h2>
<ol>
  <li>Cuando localices una convocatoria que te interese, anota <strong>la fecha de publicación oficial</strong>, no la de la noticia.</li>
  <li>Lee en las bases si el plazo es en <strong>días hábiles, naturales o meses</strong>.</li>
  <li>Calcula la fecha límite y márcala en un calendario con un <strong>recordatorio varios días antes</strong>, no el mismo día.</li>
  <li>Presenta la solicitud con margen y <strong>guarda el justificante</strong> de registro y del pago de la tasa.</li>
  <li>Programa una revisión para <strong>comprobar la lista provisional de admitidos</strong> cuando se publique.</li>
</ol>

<p class="aviso-contenido">Este artículo explica reglas generales del procedimiento administrativo. Cada convocatoria puede establecer plazos y condiciones propios, que prevalecen sobre cualquier explicación general. Consulta siempre el texto oficial.</p>`,
  },

  {
    slug: "donde-se-publican-las-oposiciones",
    titulo: "Dónde se publican las oposiciones en España: BOE, boletines autonómicos y provinciales",
    descripcion:
      "Qué convocatorias salen en el BOE, cuáles solo en boletines autonómicos o provinciales, y cómo no perderte ninguna oferta de empleo público relevante.",
    fecha: "2026-09-18",
    cuerpo: `
<p>Una de las primeras dificultades prácticas al empezar a opositar es simplemente <em>enterarse</em>. No existe un único sitio donde se publique todo el empleo público español: la información está repartida entre varios boletines oficiales según qué administración convoque. Este artículo explica cómo está organizado ese mapa.</p>

<h2>El Boletín Oficial del Estado (BOE)</h2>
<p>El BOE es el diario oficial del Estado español y publica, en su sección de oposiciones y concursos, las convocatorias de:</p>
<ul>
  <li>Cuerpos y escalas de la <strong>Administración General del Estado</strong>: cuerpos generales, Agencia Tributaria, Seguridad Social, ministerios, organismos autónomos.</li>
  <li><strong>Fuerzas y cuerpos de seguridad del Estado</strong> y Fuerzas Armadas.</li>
  <li><strong>Administración de Justicia</strong>.</li>
  <li><strong>Universidades públicas</strong>, en muchos de sus concursos de acceso.</li>
  <li><strong>Extractos de convocatorias de administración local</strong>: ayuntamientos, diputaciones y cabildos publican en el BOE un anuncio resumido de sus procesos.</li>
</ul>
<p>Ese último punto es importante y suele generar confusión, así que merece un apartado propio.</p>

<h2>El caso particular de la administración local</h2>
<p>Cuando un ayuntamiento convoca plazas, lo habitual es que en el BOE aparezca solo un <strong>extracto</strong>: el nombre del organismo, el número de plazas y una referencia genérica del tipo "referente a la convocatoria para proveer varias plazas". El detalle real —el tipo de puesto, los requisitos, el temario, el baremo— está en las bases completas, que se publican en el <strong>boletín oficial de la provincia</strong> y en la web del propio ayuntamiento.</p>
<p>Esto significa que el BOE es un buen sistema de <em>alerta</em> para el empleo local (te enteras de que existe un proceso), pero no una fuente completa: siempre hay que seguir el rastro hasta las bases provinciales para saber realmente a qué te estás presentando.</p>

<h2>Los boletines autonómicos</h2>
<p>Cada comunidad autónoma tiene su propio diario oficial, y ahí es donde se publican las convocatorias de su administración: personal sanitario de su servicio de salud, cuerpos docentes, cuerpos generales autonómicos, policía autonómica donde existe, y el resto de personal a su cargo.</p>
<p>Estos procesos suelen ser, en volumen, mucho mayores que los estatales: los servicios autonómicos de salud y educación concentran una parte enorme del empleo público español. Si te interesa sanidad o docencia, el boletín autonómico es tu fuente principal, no el BOE.</p>
<p>Puedes consultar el acceso directo a cada uno en nuestra página de <a href="boletines.html">boletines oficiales autonómicos</a>.</p>

<h2>Los boletines provinciales</h2>
<p>Cada provincia tiene un boletín oficial (BOP) donde se publican íntegramente las bases de las convocatorias de ayuntamientos y diputaciones de esa provincia. Es el nivel con más dispersión y, por tanto, el más difícil de seguir de forma sistemática, pero también donde hay mucha oferta con menos competencia relativa que en los grandes procesos estatales.</p>

<h2>Una estrategia práctica de seguimiento</h2>
<p>Intentar leer todos los boletines todos los días no es sostenible. Una aproximación más realista combina tres niveles:</p>
<ol>
  <li><strong>Decide primero tu ámbito.</strong> Si buscas empleo público en tu provincia, tu fuente principal es el boletín provincial y el autonómico; el BOE es secundario. Si aspiras a cuerpos estatales, es al revés.</li>
  <li><strong>Usa el BOE como radar general.</strong> Aunque no sea completo para lo local, es el único sitio donde aparece algo de casi todo, y revisar a diario su sección de oposiciones es rápido. Esta web hace exactamente eso de forma automatizada.</li>
  <li><strong>Sigue directamente a los organismos concretos que te interesan.</strong> Si aspiras a un ayuntamiento determinado o a un servicio de salud concreto, su propia web de empleo público suele ser la fuente más rápida y detallada.</li>
</ol>

<h2>Ofertas de Empleo Público: el aviso anticipado</h2>
<p>Antes de que se publique una convocatoria concreta, cada administración aprueba anualmente su <strong>Oferta de Empleo Público (OEP)</strong>, donde figura cuántas plazas va a convocar y de qué cuerpos. La OEP no abre ningún plazo ni permite presentarse a nada, pero es información valiosa: te dice con meses de antelación qué es probable que salga.</p>
<p>Para quien está decidiendo a qué prepararse, revisar las OEP publicadas es una forma razonable de anticiparse, en lugar de esperar a que salga la convocatoria y tener solo veinte días para reaccionar.</p>

<p class="aviso-contenido">Esta información es orientativa. La organización de los boletines oficiales y la distribución de competencias entre administraciones puede cambiar; consulta siempre la fuente oficial correspondiente.</p>`,
  },

  {
    slug: "como-estudiar-un-temario-extenso",
    titulo: "Cómo estudiar un temario extenso sin olvidar lo anterior",
    descripcion:
      "Técnicas de estudio aplicadas a temarios de oposición: repaso espaciado, práctica de evocación, cómo planificar vueltas y qué hacer cuando se te olvida todo.",
    fecha: "2026-09-19",
    cuerpo: `
<p>El problema central de una oposición no es entender el temario. Es <strong>retenerlo</strong>. Casi cualquiera puede comprender un tema de derecho administrativo leyéndolo con atención; lo difícil es recordarlo con precisión ocho meses después, junto con otros ciento cincuenta temas. Este artículo trata de cómo se organiza el estudio para que eso sea posible.</p>

<h2>Por qué se olvida lo estudiado</h2>
<p>La memoria funciona por refuerzo: aquello que no se recupera, se debilita. Un tema leído una vez con mucha atención se olvida casi igual de rápido que uno leído con poca atención, si en ninguno de los dos casos se vuelve a recuperar después.</p>
<p>Esto tiene una consecuencia práctica que mucha gente descubre demasiado tarde: <strong>el tiempo dedicado a primera lectura está sobrevalorado y el dedicado a repaso, infravalorado</strong>. Leer despacio y subrayando mucho da sensación de estar aprendiendo, pero esa sensación no se corresponde con lo que se recordará meses después.</p>

<h2>El repaso espaciado</h2>
<p>La idea es sencilla: en lugar de repasar un tema muchas veces seguidas, se repasa con intervalos crecientes. Por ejemplo, repasar un tema al día siguiente de estudiarlo, luego a la semana, luego al mes, luego a los tres meses.</p>
<p>Cada repaso refuerza la huella de memoria y permite que el siguiente pueda estar más lejos en el tiempo. El resultado es que, con menos horas totales de repaso, se retiene mucho más que repitiendo el mismo tema cinco veces en una tarde.</p>
<p>Llevarlo a la práctica en una oposición implica algo incómodo: <strong>nunca estás estudiando solo temas nuevos</strong>. Cada sesión mezcla material nuevo con repaso de material antiguo. Al principio cuesta, porque avanzas más despacio por el temario, pero es lo que evita llegar al examen habiendo olvidado la primera mitad.</p>

<h2>Recuperar en vez de releer</h2>
<p>Hay una diferencia importante entre volver a leer un tema y tratar de recordarlo sin mirarlo. Releer es cómodo y da sensación de dominio; intentar reproducir el tema de memoria es incómodo y revela lagunas. Precisamente por eso, lo segundo es mucho más eficaz.</p>
<p>Formas concretas de hacerlo:</p>
<ul>
  <li><strong>Cerrar el tema y escribir el esquema de memoria.</strong> Luego comparar con el original y marcar lo que faltaba.</li>
  <li><strong>Explicárselo en voz alta</strong> a alguien, o a nadie. Si no consigues explicarlo con frases completas, no lo tienes.</li>
  <li><strong>Preguntas de autoevaluación</strong> sobre cada epígrafe, formuladas por ti mismo mientras estudias, para responderlas en el repaso siguiente.</li>
</ul>
<p>El objetivo no es sentirse bien durante el estudio, sino descubrir cuanto antes qué no se sabe.</p>

<h2>Las "vueltas" al temario</h2>
<p>Entre opositores es habitual hablar de "vueltas": pasadas completas al temario. Una planificación razonable contempla varias, con objetivos distintos en cada una.</p>
<ol>
  <li><strong>Primera vuelta:</strong> comprender. Leer, entender la lógica de cada tema, hacer un esquema propio. Es la más lenta y la que más desanima, porque parece que no se retiene nada. Es normal.</li>
  <li><strong>Segunda vuelta:</strong> fijar. Repasar sobre el esquema propio, no sobre el texto completo. Empezar a memorizar listas, plazos, artículos concretos.</li>
  <li><strong>Tercera vuelta y siguientes:</strong> consolidar y detectar puntos débiles. Cada vez más rápido, cada vez más apoyada en test y en recuperación activa.</li>
</ol>
<p>Un error frecuente es planificar la primera vuelta ocupando casi todo el tiempo disponible. Si el examen es en diez meses y la primera vuelta te lleva nueve, llegas sin haber consolidado nada.</p>

<h2>Cuánto estudiar al día</h2>
<p>No hay una cifra correcta, pero sí dos principios bastante sólidos.</p>
<p>El primero: <strong>la regularidad importa más que el volumen</strong>. Un patrón de tres horas diarias sostenido durante meses produce mejores resultados que picos de diez horas seguidos de días en blanco, porque el repaso espaciado necesita frecuencia.</p>
<p>El segundo: <strong>las sesiones muy largas rinden cada vez menos</strong>. A partir de cierto punto, la concentración cae y el tiempo adicional produce poco aprendizaje real. Es más productivo dividir el estudio en bloques con descansos breves que encadenar horas seguidas.</p>

<h2>Qué hacer cuando sientes que no avanzas</h2>
<p>Hay una fase, normalmente a mitad de preparación, en la que la sensación es de estancamiento: llevas meses estudiando y te parece que no dominas nada con seguridad. Es extremadamente común y no suele indicar que estés haciendo algo mal.</p>
<p>Lo que ayuda en esa fase:</p>
<ul>
  <li><strong>Medir en vez de intuir.</strong> Haz un test completo de un bloque ya estudiado. La sensación subjetiva de "no sé nada" casi nunca coincide con el resultado objetivo.</li>
  <li><strong>Revisar la planificación, no la capacidad.</strong> Si vas lento, casi siempre es un problema de método o de calendario, no de aptitud.</li>
  <li><strong>Aceptar la incomodidad del repaso.</strong> La sensación de fluidez al releer es engañosa; la dificultad al recuperar es señal de que el aprendizaje está ocurriendo.</li>
</ul>

<h2>Preparar el examen, no solo el temario</h2>
<p>En las semanas finales conviene desplazar el peso del estudio desde el temario hacia la simulación del examen: tests completos, cronometrados, con las mismas reglas de penalización que tendrá la prueba real. Eso entrena decisiones que no se entrenan estudiando (gestión del tiempo, cuándo arriesgar una respuesta dudosa, cómo no bloquearse) y reduce mucho el factor sorpresa del día del examen.</p>

<p class="aviso-contenido">Este artículo recoge principios generales de estudio aplicados a la preparación de oposiciones. Cada persona y cada temario son distintos; conviene adaptar estas ideas a tu situación y, si preparas con academia, contrastarlas con las indicaciones de tu preparador.</p>`,
  },

  {
    slug: "bolsas-de-trabajo-y-interinidad",
    titulo: "Bolsas de trabajo e interinidad en el empleo público: cómo funcionan",
    descripcion:
      "Qué es una bolsa de trabajo, cómo se entra, qué diferencia hay entre funcionario de carrera, interino y personal laboral, y qué implica trabajar como interino.",
    fecha: "2026-09-19",
    cuerpo: `
<p>No todo el empleo público se cubre con plazas fijas. Una parte muy grande del personal de las administraciones españolas trabaja mediante figuras temporales, y la vía de entrada habitual a esas figuras son las <strong>bolsas de trabajo</strong>. Entender cómo funcionan es útil incluso si tu objetivo final es la plaza fija.</p>

<h2>Funcionario de carrera, interino y personal laboral</h2>
<p>Antes de hablar de bolsas conviene distinguir las figuras principales:</p>
<ul>
  <li><strong>Funcionario de carrera:</strong> ha superado un proceso selectivo y tiene una relación estatutaria permanente con la administración. Es la figura con mayor estabilidad.</li>
  <li><strong>Funcionario interino:</strong> ocupa temporalmente una plaza de funcionario por circunstancias tasadas (vacante sin cubrir, sustitución, exceso o acumulación de tareas, programas temporales). Hace el mismo trabajo, pero su vínculo es temporal.</li>
  <li><strong>Personal laboral:</strong> se rige por el Estatuto de los Trabajadores y por el convenio colectivo correspondiente, no por el régimen funcionarial. Puede ser fijo o temporal.</li>
</ul>
<p>Las condiciones de trabajo del interino y del funcionario de carrera suelen ser muy parecidas en el día a día: mismo horario, mismas funciones, retribución equivalente. La diferencia sustancial está en la estabilidad y en algunos derechos de carrera.</p>

<h2>Qué es una bolsa de trabajo</h2>
<p>Una bolsa de trabajo es un listado de personas, ordenado por puntuación, del que la administración va tirando cuando necesita cubrir temporalmente un puesto. Cuando surge una necesidad, se llama a quien esté primero en la lista y que esté disponible.</p>
<p>La utilidad es evidente: permite cubrir una baja por enfermedad o una vacante urgente en días, sin convocar un proceso selectivo completo cada vez.</p>

<h2>Cómo se entra en una bolsa</h2>
<p>Hay varias vías, y conviene conocerlas porque no todas exigen el mismo esfuerzo:</p>
<ul>
  <li><strong>Como resultado de un proceso selectivo.</strong> Es la más común: quienes superan algún ejercicio de una oposición sin llegar a obtener plaza pasan a formar la bolsa, ordenados por la nota obtenida. Esto significa que presentarte a una oposición puede darte trabajo aunque no saques plaza.</li>
  <li><strong>Mediante convocatoria específica de bolsa.</strong> Algunas administraciones convocan bolsas directamente, normalmente por concurso de méritos o con una prueba más sencilla que una oposición completa.</li>
  <li><strong>Por integración de bolsas anteriores</strong> o por acuerdos específicos, según la normativa de cada administración.</li>
</ul>

<h2>Cómo funcionan los llamamientos</h2>
<p>Las bases de cada bolsa regulan este punto, y conviene leerlas con atención porque hay diferencias importantes entre administraciones. Aspectos típicos:</p>
<ul>
  <li><strong>Orden de llamamiento:</strong> normalmente por puntuación, de mayor a menor.</li>
  <li><strong>Forma de contacto:</strong> teléfono, correo electrónico o sede electrónica, con plazos de respuesta muy breves (a veces 24 o 48 horas).</li>
  <li><strong>Consecuencias de rechazar una oferta:</strong> aquí está el detalle crítico. En algunas bolsas, rechazar sin causa justificada te manda al final de la lista o incluso te excluye. En otras, simplemente pasas turno. Las causas justificadas (enfermedad, estar trabajando ya, maternidad) suelen estar tasadas.</li>
  <li><strong>Qué pasa al terminar un contrato:</strong> según la bolsa, puedes volver a tu posición original o pasar al final de la lista.</li>
</ul>
<p>Por eso, cuando entras en una bolsa, merece la pena leer sus bases con el mismo cuidado que una convocatoria: determinan si te conviene aceptar o no una oferta concreta.</p>

<h2>Ventajas de pasar por la interinidad</h2>
<p>Para quien está opositando, trabajar como interino tiene efectos que van más allá del sueldo:</p>
<ul>
  <li><strong>Experiencia que puntúa.</strong> En procesos de concurso-oposición, el tiempo trabajado en la administración suele valorarse en la fase de concurso. Es una de las razones por las que los interinos tienen ventaja en los procesos de estabilización.</li>
  <li><strong>Conocimiento práctico del puesto.</strong> Muchos supuestos prácticos de examen se entienden mucho mejor cuando has tramitado expedientes reales.</li>
  <li><strong>Acceso a promoción interna</strong> en algunos casos, según la normativa aplicable.</li>
</ul>

<h2>Y los inconvenientes</h2>
<p>Conviene ser realista también con el otro lado:</p>
<ul>
  <li><strong>Inestabilidad.</strong> El vínculo puede terminar cuando la plaza se cubre definitivamente o cuando finaliza la causa que justificó el nombramiento.</li>
  <li><strong>Menos tiempo para estudiar.</strong> Es la tensión más habitual: trabajar como interino da experiencia y dinero, pero reduce las horas disponibles para preparar la oposición que te daría la plaza fija.</li>
  <li><strong>Movilidad limitada</strong> respecto al funcionario de carrera en cuanto a concursos de traslados y carrera profesional.</li>
</ul>

<h2>Los procesos de estabilización</h2>
<p>En los últimos años se han desarrollado procesos específicos destinados a reducir la temporalidad en el empleo público, convocando plazas que llevaban mucho tiempo ocupadas de forma temporal. Estos procesos suelen dar un peso considerable a la experiencia previa en la administración convocante, lo que los hace especialmente favorables para el personal interino de larga duración, y correlativamente más difíciles para quien viene de fuera.</p>
<p>Si te encuentras con una convocatoria que menciona "estabilización de empleo temporal", conviene mirar con atención el baremo de méritos antes de decidir si merece la pena presentarse: la proporción entre fase de oposición y fase de concurso puede cambiar mucho tus posibilidades reales.</p>

<p class="aviso-contenido">El régimen concreto de las bolsas de trabajo, los llamamientos y la interinidad lo fija la normativa de cada administración y las bases de cada bolsa. Esta explicación es general y orientativa: consulta siempre las bases oficiales.</p>`,
  },

  {
    slug: "oposiciones-administracion-local-ayuntamientos",
    titulo: "Oposiciones en ayuntamientos y diputaciones: cómo encontrarlas y qué esperar",
    descripcion:
      "Por qué las convocatorias locales son distintas, dónde están las bases completas, qué tipo de plazas se convocan y por qué a veces hay menos competencia.",
    fecha: "2026-09-19",
    cuerpo: `
<p>La administración local emplea a una parte muy considerable del personal público español, y sus convocatorias tienen una lógica distinta a la de los grandes procesos estatales. Para quien busca trabajo público cerca de casa, suelen ser la vía más realista, pero también la más dispersa y difícil de seguir.</p>

<h2>Qué se convoca en el ámbito local</h2>
<p>Ayuntamientos, diputaciones provinciales, cabildos, consejos insulares, mancomunidades y consorcios convocan una variedad enorme de plazas:</p>
<ul>
  <li><strong>Administrativas:</strong> auxiliar administrativo, administrativo, técnico de administración general.</li>
  <li><strong>Policía local</strong> y, en municipios grandes, <strong>bomberos</strong>.</li>
  <li><strong>Técnicas:</strong> arquitecto, ingeniero, técnico de medio ambiente, informático.</li>
  <li><strong>Servicios sociales, cultura y deporte:</strong> trabajador social, educador, técnico de juventud, socorrista, monitor deportivo.</li>
  <li><strong>Servicios y mantenimiento:</strong> operario, conductor, jardinero, peón, conserje.</li>
</ul>
<p>Esta diversidad es una de las razones por las que merece la pena seguir el ámbito local: hay perfiles que prácticamente no existen en la administración estatal.</p>

<h2>El problema de la dispersión</h2>
<p>Hay más de ocho mil municipios en España. Cada uno puede convocar sus propias plazas, con sus propias bases, su propio temario y sus propios plazos. No existe un portal único que lo recoja todo de forma completa.</p>
<p>Lo que sí existe es una regla de publicación que ayuda mucho: <strong>los extractos de las convocatorias locales se publican en el BOE</strong>. Es decir, aunque las bases completas estén en el boletín provincial, en el BOE aparece un anuncio breve indicando qué organismo convoca y cuántas plazas.</p>

<h2>Cómo leer un extracto del BOE</h2>
<p>Un anuncio local típico en el BOE dice algo parecido a: "Resolución de [fecha], del Ayuntamiento de [municipio] ([provincia]), referente a la convocatoria para proveer varias plazas".</p>
<p>Fíjate en lo que <em>no</em> dice: no indica qué plazas, ni los requisitos, ni el temario, ni el plazo. Ese anuncio cumple la función de <strong>avisar de que el proceso existe</strong>, no de detallarlo.</p>
<p>Para conocer el detalle hay que ir a las bases completas, que estarán en:</p>
<ol>
  <li>El <strong>boletín oficial de la provincia</strong> correspondiente, donde se publican íntegras.</li>
  <li>La <strong>web del propio ayuntamiento o diputación</strong>, normalmente en un apartado de "empleo público", "oposiciones" o "recursos humanos".</li>
  <li>En ocasiones, también el <strong>boletín autonómico</strong>.</li>
</ol>
<p>Esta cadena de saltos es tediosa, pero es la única forma de saber realmente a qué te estás presentando.</p>

<h2>Por qué a veces hay menos competencia</h2>
<p>Los grandes procesos estatales atraen a decenas de miles de aspirantes de toda España. Una convocatoria de dos plazas de administrativo en un municipio de diez mil habitantes atrae a un número mucho menor, por razones geográficas evidentes: mucha gente no se presenta a un puesto que implicaría mudarse.</p>
<p>Esto no significa que sean fáciles (la ratio de plazas también es mucho menor), pero sí que las probabilidades pueden ser mejores de lo que sugiere la intuición, especialmente si vives en la zona o estás dispuesto a desplazarte.</p>

<h2>Peculiaridades de los procesos locales</h2>
<p>Algunas diferencias respecto a los procesos estatales que conviene tener en cuenta:</p>
<ul>
  <li><strong>Temario más corto pero más específico.</strong> Suele incluir bloques de normativa local (régimen local, organización municipal) y, con frecuencia, temas sobre el propio municipio: su historia, su organización, su territorio.</li>
  <li><strong>Calendarios menos previsibles.</strong> Un ayuntamiento pequeño puede tardar más en resolver las fases del proceso que un organismo estatal con estructura dedicada a ello.</li>
  <li><strong>Mayor peso de pruebas prácticas</strong> en muchos perfiles: manejo de aplicaciones ofimáticas, redacción de documentos administrativos reales, pruebas de oficio en puestos de mantenimiento.</li>
  <li><strong>Mucha variedad en el peso de los méritos.</strong> Algunos procesos locales valoran de forma notable la experiencia previa en ese mismo ayuntamiento, lo que conviene comprobar en el baremo antes de invertir meses de preparación.</li>
</ul>

<h2>Cómo hacer un seguimiento realista</h2>
<p>Intentar vigilar ocho mil municipios no es viable. Una estrategia manejable:</p>
<ol>
  <li><strong>Define tu radio geográfico.</strong> Decide a qué distancia estás dispuesto a trabajar y quédate con las administraciones dentro de ese radio.</li>
  <li><strong>Sigue el boletín de tu provincia</strong>, que es donde aparecerán íntegras las bases de esas administraciones.</li>
  <li><strong>Usa el BOE como radar general</strong>, que recoge extractos de toda España y permite detectar procesos que se te habrían escapado. Esta web hace ese seguimiento de forma automática y te permite <a href="../comunidades.html">filtrar por comunidad autónoma</a>.</li>
  <li><strong>Revisa las Ofertas de Empleo Público</strong> de los ayuntamientos que te interesen: anticipan con meses de antelación qué plazas van a convocar.</li>
</ol>

<p class="aviso-contenido">Cada administración local tiene su propia normativa y sus propias bases, que prevalecen sobre cualquier información general. Consulta siempre el texto oficial completo de la convocatoria que te interese.</p>`,
  },

  {
    slug: "compaginar-trabajo-y-oposicion",
    titulo: "Compaginar trabajo y oposición: cómo organizarse cuando no tienes todo el día",
    descripcion:
      "Planificación realista para opositar trabajando: cuántas horas hacen falta, cómo aprovechar semanas laborales, y cómo evitar el desgaste en preparaciones largas.",
    fecha: "2026-09-19",
    cuerpo: `
<p>La imagen habitual del opositor es la de alguien que estudia a jornada completa. En la práctica, una parte enorme de quienes se presentan lo hacen compaginando la preparación con un empleo, con cuidados familiares o con ambos. Es más lento, pero perfectamente viable si se planifica de otra manera.</p>

<h2>Lo primero: ajustar el horizonte temporal</h2>
<p>El error más dañino al opositar trabajando es copiar la planificación de alguien que estudia a jornada completa. Si un temario está pensado para cubrirse en nueve meses con seis horas diarias, intentar cubrirlo en nueve meses con dos horas diarias no es ambición: es garantía de frustración.</p>
<p>La adaptación correcta no es estudiar peor, sino <strong>extender el calendario</strong>. Puede significar apuntar a la convocatoria siguiente en vez de a la próxima. Es una decisión estratégica, no una renuncia: presentarse sin el temario cubierto suele producir peores resultados que presentarse un año después con él consolidado.</p>

<h2>Proteger un bloque fijo</h2>
<p>Cuando el tiempo es escaso, el mayor enemigo no es la falta de horas sino la <strong>irregularidad</strong>. Estudiar "cuando pueda" acaba significando estudiar cuando no ha surgido nada más, y siempre surge algo.</p>
<p>Lo que funciona es tratar el estudio como una cita innegociable: un bloque fijo, a la misma hora, los mismos días. Puede ser de hora y media a primera hora de la mañana, o de dos horas al salir del trabajo. El momento concreto importa menos que la constancia.</p>
<p>Dos horas diarias sostenidas cinco días a la semana son unas cuarenta horas al mes. En un año, cerca de quinientas. Es tiempo suficiente para preparar muchas oposiciones, siempre que esas horas se usen bien.</p>

<h2>Aprovechar los fines de semana sin quemarse</h2>
<p>Es tentador concentrar todo el esfuerzo en sábados y domingos, pero conviene tener cuidado con dos cosas.</p>
<p>La primera es que <strong>el aprendizaje necesita frecuencia</strong>: ocho horas de sábado no equivalen a dos horas durante cuatro días, porque el repaso espaciado necesita contacto repetido a lo largo del tiempo.</p>
<p>La segunda es el desgaste. Una preparación larga que elimina por completo el descanso y la vida social termina, en muchos casos, en abandono. Reservar deliberadamente algún tiempo libre no es una debilidad: es lo que hace sostenible una preparación de uno o dos años.</p>
<p>Un reparto más equilibrado suele ser: bloques cortos entre semana para material nuevo y repaso, y una sesión más larga el fin de semana para consolidar, hacer tests completos o cubrir lo que haya quedado pendiente.</p>

<h2>Usar bien los tiempos muertos</h2>
<p>Trabajando, aparecen huecos que no sirven para estudiar en profundidad pero sí para repasar: trayectos, esperas, pausas. Son inútiles para enfrentarse a un tema nuevo, pero muy útiles para:</p>
<ul>
  <li>Repasar esquemas ya elaborados.</li>
  <li>Hacer tandas cortas de test.</li>
  <li>Escuchar un tema grabado por ti mismo.</li>
  <li>Recordar mentalmente la estructura de un tema sin material delante, que es una forma potente de recuperación activa.</li>
</ul>
<p>Conviene no exagerar su importancia (no se prepara una oposición solo en los trayectos), pero sumados a lo largo de meses aportan bastante.</p>

<h2>Priorizar cuando no llega para todo</h2>
<p>Con tiempo limitado hay que aceptar que no todo el temario recibirá la misma atención. Criterios razonables para repartir el esfuerzo:</p>
<ul>
  <li><strong>Peso en el examen.</strong> Si un bloque representa la mitad de las preguntas, merece más de la mitad del esfuerzo.</li>
  <li><strong>Dificultad personal.</strong> Los temas que peor se te dan necesitan más repasos, aunque sea más agradable repasar los que ya dominas.</li>
  <li><strong>Estabilidad del contenido.</strong> Los temas de normativa muy cambiante conviene consolidarlos más cerca del examen; los conceptuales aguantan mejor desde el principio.</li>
</ul>

<h2>El permiso y la conciliación</h2>
<p>Merece la pena comprobar si tu situación laboral permite algún tipo de flexibilidad: en algunos convenios colectivos existen permisos retribuidos para concurrir a exámenes de oposición el día de la prueba, y la normativa laboral contempla determinados derechos en materia de formación. Las condiciones concretas dependen del convenio aplicable y del tipo de contrato, así que conviene consultarlo con tu representación sindical o con recursos humanos con antelación, no la semana del examen.</p>

<h2>Señales de que hay que corregir el rumbo</h2>
<p>Una preparación larga compaginada con trabajo tiene riesgos reales de desgaste. Conviene revisar la planificación si aparecen de forma sostenida:</p>
<ul>
  <li>Sesiones de estudio que se convierten en tiempo delante del temario sin avanzar.</li>
  <li>Abandono completo del descanso, el ejercicio o las relaciones personales.</li>
  <li>Sensación persistente de que nada de lo estudiado se retiene, sin haberlo comprobado con tests objetivos.</li>
</ul>
<p>Ninguna de esas señales significa que no sirvas para opositar. Suelen significar que el calendario es demasiado exigente para el tiempo real disponible, y que conviene ajustarlo antes que forzarlo.</p>

<p class="aviso-contenido">Este artículo ofrece orientaciones generales de organización. Las condiciones laborales, permisos y derechos concretos dependen de tu convenio y contrato: consúltalos por la vía correspondiente.</p>`,
  },

  {
    slug: "que-hacer-si-te-excluyen-de-una-oposicion",
    titulo: "Qué hacer si te excluyen de una oposición: subsanación y recursos",
    descripcion:
      "Motivos habituales de exclusión, cómo subsanar en plazo, qué recursos administrativos existen y cómo actuar ante un error del tribunal.",
    fecha: "2026-09-19",
    cuerpo: `
<p>Aparecer como excluido en la lista de admitidos de una oposición es un susto considerable, sobre todo después de meses de preparación. La buena noticia es que la mayoría de exclusiones son por motivos formales y tienen arreglo, siempre que se actúe dentro del plazo. Este artículo explica el procedimiento.</p>

<h2>Motivos habituales de exclusión</h2>
<p>Las causas más frecuentes son administrativas, no de fondo:</p>
<ul>
  <li><strong>Tasa no abonada o mal abonada:</strong> importe incorrecto, pago fuera de plazo, o justificante no aportado.</li>
  <li><strong>Documentación incompleta:</strong> falta la acreditación de la titulación, del grado de discapacidad si concurres por ese cupo, o de la exención de tasa alegada.</li>
  <li><strong>Errores en los datos:</strong> DNI mal escrito, fecha de nacimiento incorrecta, turno de acceso mal marcado.</li>
  <li><strong>Solicitud presentada fuera de plazo.</strong> Esta es la más grave, porque normalmente no es subsanable.</li>
  <li><strong>No cumplir un requisito de acceso:</strong> titulación insuficiente, edad, u otros requisitos específicos del cuerpo. Tampoco suele ser subsanable si efectivamente no se cumple.</li>
</ul>
<p>En términos prácticos, todo lo que sea un defecto de acreditación suele poder corregirse; lo que sea un incumplimiento real del requisito, no.</p>

<h2>El plazo de subsanación</h2>
<p>Cuando se publica la <strong>lista provisional de admitidos y excluidos</strong>, se abre un plazo para subsanar defectos y presentar alegaciones. Las bases de cada convocatoria fijan su duración (es frecuente un plazo de diez días hábiles, pero varía).</p>
<p>Tres cosas importantes sobre ese plazo:</p>
<ol>
  <li><strong>Empieza a contar desde la publicación</strong>, no desde que te enteras. Nadie te va a avisar personalmente.</li>
  <li><strong>Es corto.</strong> Si el motivo de exclusión requiere conseguir un documento que tarda en emitirse, hay que ponerse el mismo día.</li>
  <li><strong>Si no subsanas, la exclusión se vuelve definitiva</strong> al publicarse la lista definitiva, y a partir de ahí las vías son bastante más complicadas.</li>
</ol>
<p>Por eso conviene, en cuanto presentes una solicitud, anotar en el calendario una revisión para comprobar la lista provisional cuando esté previsto que salga.</p>

<h2>Cómo subsanar</h2>
<p>El procedimiento concreto lo indican las bases, pero el esquema general es:</p>
<ol>
  <li><strong>Identifica el motivo exacto.</strong> Las listas suelen incluir un código de exclusión con su leyenda. Si no lo entiendes, conviene preguntar al órgano convocante antes de enviar nada.</li>
  <li><strong>Prepara la documentación</strong> que acredite lo que falta, o el justificante corregido.</li>
  <li><strong>Presenta un escrito de subsanación</strong> dirigido al órgano convocante, identificando claramente la convocatoria, tu nombre y DNI, el motivo de exclusión y lo que aportas para corregirlo.</li>
  <li><strong>Regístralo por la vía indicada</strong> (habitualmente sede electrónica) y <strong>guarda el justificante de registro</strong>, con su fecha y número.</li>
</ol>
<p>Ese justificante es tu prueba de haber actuado en plazo. Consérvalo hasta el final del proceso.</p>

<h2>Si la exclusión es un error del órgano convocante</h2>
<p>A veces la exclusión no se debe a un fallo tuyo, sino a un error de tramitación: un pago que sí se realizó y no consta, un documento presentado que no se registró correctamente. El procedimiento es el mismo (escrito de alegaciones en el plazo de subsanación), pero aquí es especialmente importante aportar pruebas: justificante bancario, justificante de registro de la solicitud original, capturas del envío telemático.</p>

<h2>Recursos administrativos</h2>
<p>Si la lista definitiva mantiene la exclusión y consideras que es incorrecta, quedan las vías de recurso administrativo. Las principales son:</p>
<ul>
  <li><strong>Recurso de reposición:</strong> se presenta ante el mismo órgano que dictó el acto, cuando este pone fin a la vía administrativa.</li>
  <li><strong>Recurso de alzada:</strong> se presenta ante el órgano superior jerárquico, cuando el acto no pone fin a la vía administrativa.</li>
</ul>
<p>Las propias resoluciones suelen indicar al final qué recurso cabe, ante qué órgano y en qué plazo. Ese pie de recurso es la referencia a seguir. Agotada la vía administrativa, quedaría la vía contencioso-administrativa, que ya implica procedimiento judicial y conviene valorar con asesoramiento jurídico.</p>

<h2>Discrepancias con la calificación o con el tribunal</h2>
<p>Un caso distinto es no estar de acuerdo con una nota, con una pregunta del examen o con la valoración de méritos. Aquí también hay cauces:</p>
<ul>
  <li><strong>Impugnación de preguntas:</strong> muchas convocatorias abren, tras publicar la plantilla provisional de respuestas, un plazo para alegar contra preguntas concretas. Es un trámite habitual y no excepcional: si una pregunta tiene dos respuestas defendibles, alegarlo con fundamento normativo puede prosperar.</li>
  <li><strong>Revisión de examen:</strong> en pruebas no tipo test, suele existir un procedimiento de vista y revisión del ejercicio.</li>
  <li><strong>Alegaciones al baremo de méritos:</strong> cuando la puntuación de la fase de concurso no recoge correctamente algo que acreditaste.</li>
</ul>
<p>En todos los casos, los tribunales tienen un margen de discrecionalidad técnica amplio en la valoración, por lo que las alegaciones que prosperan suelen ser las que señalan errores objetivos y verificables, no las que expresan desacuerdo general con la calificación.</p>

<h2>Recomendaciones prácticas</h2>
<ul>
  <li>Guarda <strong>todo</strong>: solicitud, justificante de registro, justificante de pago, correos recibidos.</li>
  <li>Anota las fechas previsibles de cada publicación y revisa activamente; no esperes avisos.</li>
  <li>Actúa siempre <strong>dentro del plazo</strong>, aunque el escrito no sea perfecto. Un escrito mejorable en plazo vale más que uno impecable fuera de plazo.</li>
  <li>Ante cuestiones complejas o con mucho en juego, considera asesoramiento jurídico especializado en función pública.</li>
</ul>

<p class="aviso-contenido">Este artículo describe el funcionamiento general del procedimiento administrativo en procesos selectivos y no constituye asesoramiento jurídico. Los plazos, requisitos y vías de recurso concretos los determinan las bases de cada convocatoria y la normativa aplicable.</p>`,
  },

  {
    slug: "oferta-de-empleo-publico-que-es",
    titulo: "Oferta de Empleo Público: qué es y por qué conviene seguirla",
    descripcion:
      "Qué es una OEP, en qué se diferencia de una convocatoria, cuándo se publica y cómo usarla para anticiparte y elegir a qué oposición presentarte.",
    fecha: "2026-09-19",
    cuerpo: `
<p>Entre las personas que empiezan a opositar es habitual confundir dos cosas distintas: la <strong>Oferta de Empleo Público</strong> y la <strong>convocatoria</strong>. La diferencia importa, porque cada una sirve para algo distinto y llega en un momento distinto.</p>

<h2>Qué es la Oferta de Empleo Público</h2>
<p>La Oferta de Empleo Público (OEP) es el documento mediante el cual una administración aprueba <strong>cuántas plazas va a convocar</strong> en un periodo determinado y de qué cuerpos, escalas o categorías.</p>
<p>Es, en esencia, una declaración de intenciones con efectos jurídicos: fija el número máximo de plazas que podrán convocarse. Pero <strong>no abre ningún plazo, no permite presentar ninguna solicitud y no contiene ni requisitos ni temario</strong>.</p>

<h2>En qué se diferencia de una convocatoria</h2>
<p>La convocatoria es el acto que pone en marcha el proceso selectivo concreto: establece requisitos, temario, sistema de selección, plazo de presentación y tribunal. Es a lo que te presentas.</p>
<p>La secuencia habitual es:</p>
<ol>
  <li>Se aprueba y publica la <strong>Oferta de Empleo Público</strong>: "esta administración convocará X plazas de tal cuerpo".</li>
  <li>Meses después (a veces bastantes), se publica la <strong>convocatoria</strong> de esas plazas, con todo el detalle.</li>
  <li>Se abre el <strong>plazo de solicitudes</strong>.</li>
  <li>Se desarrolla el <strong>proceso selectivo</strong>.</li>
</ol>
<p>Entre el paso 1 y el paso 2 puede transcurrir mucho tiempo. La normativa establece plazos máximos para ejecutar las ofertas, pero en la práctica es frecuente que pase cerca de un año entre que se aprueba una OEP y que salen las convocatorias correspondientes.</p>

<h2>Por qué merece la pena seguirlas</h2>
<p>Aquí está lo útil: la OEP te da <strong>información con meses de antelación</strong> sobre qué es probable que se convoque. Para alguien que está decidiendo a qué prepararse, eso cambia bastante las cosas.</p>
<p>Si esperas a que salga la convocatoria para empezar, tienes normalmente veinte días hábiles para presentar la solicitud y unos pocos meses hasta el examen, con el temario sin tocar. Si has seguido la OEP, puedes haber empezado a preparar con un año de margen.</p>
<p>Usos concretos:</p>
<ul>
  <li><strong>Elegir cuerpo con criterio.</strong> Si dos cuerpos te encajan y uno tiene ochenta plazas ofertadas y el otro seis, es información relevante.</li>
  <li><strong>Detectar administraciones activas.</strong> Un ayuntamiento que aprueba OEP todos los años es más previsible que uno que lleva cinco sin convocar nada.</li>
  <li><strong>Planificar el calendario de estudio</strong> con una estimación razonable de cuándo llegará el examen.</li>
</ul>

<h2>Dónde se publican</h2>
<p>Cada administración publica su OEP en el boletín que le corresponde:</p>
<ul>
  <li>La <strong>OEP estatal</strong>, en el BOE.</li>
  <li>Las <strong>OEP autonómicas</strong>, en el boletín de cada comunidad.</li>
  <li>Las <strong>OEP locales</strong>, en el boletín provincial y en la web del propio ayuntamiento o diputación.</li>
</ul>
<p>Suelen aprobarse dentro del ejercicio presupuestario correspondiente, por lo que el primer semestre del año concentra buena parte de las publicaciones, aunque hay bastante variación entre administraciones.</p>

<h2>Cómo interpretar las cifras</h2>
<p>Un par de matices que evitan expectativas equivocadas:</p>
<ul>
  <li><strong>Las plazas de la OEP se reparten entre turnos.</strong> Una oferta de cien plazas puede incluir turno libre, promoción interna y cupo de reserva por discapacidad. El número disponible para acceso libre es menor que la cifra total.</li>
  <li><strong>No todas las plazas ofertadas se acaban convocando</strong> en el plazo previsto, ni todas las convocadas se cubren. Conviene tomar la OEP como una buena estimación, no como una garantía.</li>
  <li><strong>Los procesos de estabilización se ofertan aparte</strong> en muchos casos, y tienen reglas propias que pueden dar mucho peso a la experiencia previa. Si ves una oferta grande, merece la pena comprobar de qué tipo de proceso se trata antes de entusiasmarse.</li>
</ul>

<h2>De la OEP a la convocatoria: qué hacer mientras</h2>
<p>Si detectas en una OEP algo que te interesa, el tiempo hasta la convocatoria es valioso:</p>
<ol>
  <li><strong>Consigue el temario de la última convocatoria</strong> de ese mismo cuerpo. Es muy habitual que se mantenga con pocos cambios, así que puedes empezar a estudiar sobre él.</li>
  <li><strong>Comprueba que cumples los requisitos</strong> que se exigieron la vez anterior, y tramita con tiempo lo que falte (titulación homologada, certificados, permisos de conducir).</li>
  <li><strong>Consigue certificado digital</strong> si no lo tienes, porque casi todas las solicitudes son ya telemáticas y tramitarlo lleva su tiempo.</li>
  <li><strong>Localiza exámenes anteriores</strong> del cuerpo, cuando estén disponibles públicamente.</li>
</ol>
<p>Llegar a la publicación de la convocatoria con el temario ya iniciado y el papeleo resuelto es, en la práctica, una de las mayores ventajas competitivas que se pueden conseguir sin estudiar más horas.</p>

<p class="aviso-contenido">El contenido, calendario y ejecución de las ofertas de empleo público dependen de cada administración y de la normativa presupuestaria aplicable. Esta información es orientativa: consulta siempre las publicaciones oficiales.</p>`,
  },
];
