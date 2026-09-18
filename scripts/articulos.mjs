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
];
