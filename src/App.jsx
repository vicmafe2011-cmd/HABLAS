import { useEffect, useMemo, useState } from "react";

const words = [
  {
    letter: "A",
    word: "Altruismo",
    definition: "Actitud de ayudar a los demás de manera desinteresada.",
    icon: "🌟",
    color: "#f28482",
    context: "Hoy hemos visto un ejemplo de altruismo cuando un compañero ayudó a otro sin esperar nada a cambio.",
    synonyms: ["generosidad", "solidaridad", "desprendimiento"],
    antonyms: ["egoísmo", "interés", "avaricia"],
    challenge: {
      question: "¿Qué situación muestra mejor el altruismo?",
      options: [
        "Ayudar a alguien sin esperar recompensa",
        "Quedarse con todo para uno mismo",
        "Ignorar a quien lo necesita",
      ],
      answer: 0,
    },
  },
  {
    letter: "B",
    word: "Benevolencia",
    definition: "Inclinación a hacer el bien y mostrar buena voluntad.",
    icon: "🤝",
    color: "#f6bd60",
    context: "La benevolencia se nota cuando tratamos a los demás con amabilidad y deseo sincero de ayudar.",
    synonyms: ["bondad", "amabilidad", "buena voluntad"],
    antonyms: ["malicia", "crueldad", "hostilidad"],
    challenge: {
      question: "¿Qué palabra se parece más a benevolencia?",
      options: ["hostilidad", "bondad", "desprecio"],
      answer: 1,
    },
  },
  {
    letter: "C",
    word: "Cordialidad",
    definition: "Trato afectuoso, amable y sincero hacia otras personas.",
    icon: "💛",
    color: "#84a59d",
    context: "La cordialidad hace que el ambiente del aula sea más agradable y respetuoso.",
    synonyms: ["amabilidad", "afabilidad", "cercanía"],
    antonyms: ["frialdad", "sequedad", "descortesía"],
    challenge: {
      question: "¿Cuál sería un ejemplo de cordialidad?",
      options: [
        "Saludar con amabilidad al entrar en clase",
        "Responder de forma brusca",
        "Ignorar a los demás",
      ],
      answer: 0,
    },
  },
  {
    letter: "D",
    word: "Diligencia",
    definition: "Cuidado y rapidez al hacer una tarea o cumplir una obligación.",
    icon: "⚡",
    color: "#90be6d",
    context: "Resolver las actividades con atención y a tiempo demuestra diligencia.",
    synonyms: ["esmero", "rapidez", "eficacia"],
    antonyms: ["pereza", "descuido", "negligencia"],
    challenge: {
      question: "¿Qué alumno muestra diligencia?",
      options: [
        "El que deja todo para el último momento",
        "El que trabaja con cuidado y cumple a tiempo",
        "El que nunca termina nada",
      ],
      answer: 1,
    },
  },
  {
    letter: "E",
    word: "Empatía",
    definition: "Capacidad de comprender lo que siente otra persona.",
    icon: "🫶",
    color: "#43aa8b",
    context: "Cuando escuchamos a alguien y tratamos de entender cómo se siente, practicamos la empatía.",
    synonyms: ["comprensión", "sensibilidad", "conexión"],
    antonyms: ["indiferencia", "insensibilidad", "frialdad"],
    challenge: {
      question: "¿Qué acción refleja empatía?",
      options: [
        "Reírse de un compañero triste",
        "Intentar comprender cómo se siente otra persona",
        "No escuchar nunca a nadie",
      ],
      answer: 1,
    },
  },
  {
    letter: "F",
    word: "Fortaleza",
    definition: "Capacidad de resistir dificultades con ánimo y firmeza.",
    icon: "🛡️",
    color: "#577590",
    context: "Mostrar fortaleza no es no sentir miedo, sino seguir adelante a pesar de él.",
    synonyms: ["firmeza", "resistencia", "entereza"],
    antonyms: ["debilidad", "fragilidad", "desánimo"],
    challenge: {
      question: "¿Cuál es el mejor ejemplo de fortaleza?",
      options: [
        "Rendirse ante la primera dificultad",
        "Mantenerse firme y seguir intentándolo",
        "Evitar cualquier reto",
      ],
      answer: 1,
    },
  },
  {
    letter: "G",
    word: "Generosidad",
    definition: "Disposición a compartir y dar sin esperar nada a cambio.",
    icon: "🎁",
    color: "#4d908e",
    context: "Prestar materiales a un compañero es un gesto sencillo de generosidad.",
    synonyms: ["altruismo", "desprendimiento", "bondad"],
    antonyms: ["egoísmo", "mezquindad", "avaricia"],
    challenge: {
      question: "¿Qué acción muestra generosidad?",
      options: [
        "Compartir tus materiales con quien los necesita",
        "Negarte siempre a ayudar",
        "Guardarlo todo para ti",
      ],
      answer: 0,
    },
  },
  {
    letter: "H",
    word: "Honestidad",
    definition: "Cualidad de actuar con verdad, rectitud y sinceridad.",
    icon: "💎",
    color: "#277da1",
    context: "Reconocer un error propio es una muestra de honestidad.",
    synonyms: ["sinceridad", "rectitud", "honradez"],
    antonyms: ["engaño", "mentira", "deshonestidad"],
    challenge: {
      question: "¿Qué comportamiento muestra honestidad?",
      options: [
        "Mentir para evitar problemas",
        "Decir la verdad aunque cueste",
        "Ocultar siempre lo que pasa",
      ],
      answer: 1,
    },
  },
  {
    letter: "I",
    word: "Ingenio",
    definition: "Capacidad para encontrar soluciones creativas e inteligentes.",
    icon: "💡",
    color: "#9d4edd",
    context: "Usar materiales simples de forma original para resolver un problema muestra ingenio.",
    synonyms: ["creatividad", "agudeza", "inventiva"],
    antonyms: ["torpeza", "rigidez", "falta de ideas"],
    challenge: {
      question: "¿Qué se relaciona mejor con el ingenio?",
      options: ["Creatividad", "Pasividad", "Descuido"],
      answer: 0,
    },
  },
  {
    letter: "J",
    word: "Júbilo",
    definition: "Alegría intensa y manifiesta.",
    icon: "🎉",
    color: "#f15bb5",
    context: "La clase mostró júbilo cuando consiguió superar el reto colectivo.",
    synonyms: ["alegría", "entusiasmo", "gozo"],
    antonyms: ["tristeza", "desánimo", "pesar"],
    challenge: {
      question: "¿Qué palabra se parece más a júbilo?",
      options: ["Gozo", "Pesar", "Silencio"],
      answer: 0,
    },
  },
  {
    letter: "K",
    word: "Kilométrico",
    definition: "Muy extenso o de gran longitud.",
    icon: "🛣️",
    color: "#f8961e",
    context: "El profesor bromeó diciendo que el resumen era kilométrico por lo largo que resultó.",
    synonyms: ["larguísimo", "extenso", "interminable"],
    antonyms: ["breve", "corto", "reducido"],
    challenge: {
      question: "Si un texto es kilométrico, significa que es...",
      options: ["Muy corto", "Muy largo", "Muy oscuro"],
      answer: 1,
    },
  },
  {
    letter: "L",
    word: "Lealtad",
    definition: "Fidelidad y compromiso con una persona, grupo o causa.",
    icon: "🏅",
    color: "#577590",
    context: "La lealtad se demuestra cuando apoyamos con sinceridad a quienes confían en nosotros.",
    synonyms: ["fidelidad", "compromiso", "constancia"],
    antonyms: ["traición", "deslealtad", "abandono"],
    challenge: {
      question: "¿Cuál sería una actitud leal?",
      options: [
        "Mantener el compromiso con tu equipo",
        "Traicionar a los demás por interés",
        "Romper siempre la palabra dada",
      ],
      answer: 0,
    },
  },
  {
    letter: "M",
    word: "Mesura",
    definition: "Moderación y equilibrio en la manera de actuar o hablar.",
    icon: "⚖️",
    color: "#4d908e",
    context: "Responder con calma y sin exagerar es una forma de actuar con mesura.",
    synonyms: ["moderación", "equilibrio", "prudencia"],
    antonyms: ["exceso", "desmesura", "impulsividad"],
    challenge: {
      question: "La mesura se relaciona con...",
      options: ["El equilibrio", "El exceso", "La agresividad"],
      answer: 0,
    },
  },
  {
    letter: "N",
    word: "Nobleza",
    definition: "Grandeza de ánimo y dignidad en la conducta.",
    icon: "👑",
    color: "#6d597a",
    context: "Aceptar la derrota con respeto demuestra nobleza.",
    synonyms: ["dignidad", "grandeza", "honor"],
    antonyms: ["bajeza", "mezquindad", "ruindad"],
    challenge: {
      question: "¿Qué ejemplo refleja nobleza?",
      options: [
        "Actuar con dignidad y respeto",
        "Humillar a los demás",
        "Buscar venganza por todo",
      ],
      answer: 0,
    },
  },
  {
    letter: "Ñ",
    word: "Ñoñez",
    definition: "Cualidad de lo excesivamente simple, infantil o poco profundo.",
    icon: "🧸",
    color: "#b56576",
    context: "El comentario sonó a ñoñez porque era demasiado infantil para el debate.",
    synonyms: ["infantilismo", "simpleza", "cursilería"],
    antonyms: ["madurez", "seriedad", "profundidad"],
    challenge: {
      question: "La ñoñez se opone más a...",
      options: ["Madurez", "Juego", "Humor"],
      answer: 0,
    },
  },
  {
    letter: "O",
    word: "Optimismo",
    definition: "Tendencia a ver y esperar el lado favorable de las cosas.",
    icon: "☀️",
    color: "#ffb703",
    context: "El optimismo ayuda a afrontar los retos creyendo que se pueden superar.",
    synonyms: ["esperanza", "confianza", "positividad"],
    antonyms: ["pesimismo", "desaliento", "negatividad"],
    challenge: {
      question: "El optimismo consiste en...",
      options: [
        "Esperar siempre lo peor",
        "Ver posibilidades favorables",
        "No intentar nunca nada",
      ],
      answer: 1,
    },
  },
  {
    letter: "P",
    word: "Prudencia",
    definition: "Capacidad de actuar con cuidado y buen juicio.",
    icon: "🦉",
    color: "#457b9d",
    context: "Pensar antes de hablar es una buena muestra de prudencia.",
    synonyms: ["cautela", "juicio", "sensatez"],
    antonyms: ["imprudencia", "temeridad", "precipitación"],
    challenge: {
      question: "¿Qué actitud muestra prudencia?",
      options: [
        "Actuar sin pensar",
        "Reflexionar antes de decidir",
        "Responder impulsivamente",
      ],
      answer: 1,
    },
  },
  {
    letter: "Q",
    word: "Querencia",
    definition: "Afecto especial por una persona, lugar o cosa.",
    icon: "🏡",
    color: "#e76f51",
    context: "Muchos sienten querencia por los lugares en los que crecieron.",
    synonyms: ["afecto", "apego", "cariño"],
    antonyms: ["rechazo", "desapego", "indiferencia"],
    challenge: {
      question: "Querencia significa sobre todo...",
      options: ["Afecto especial", "Rabia intensa", "Miedo continuo"],
      answer: 0,
    },
  },
  {
    letter: "R",
    word: "Resiliencia",
    definition: "Capacidad de recuperarse y seguir adelante tras una dificultad.",
    icon: "🌱",
    color: "#2a9d8f",
    context: "La resiliencia se ve cuando alguien supera un fracaso y vuelve a intentarlo.",
    synonyms: ["fortaleza", "recuperación", "entereza"],
    antonyms: ["fragilidad", "hundimiento", "desmoronamiento"],
    challenge: {
      question: "¿Qué ejemplo refleja resiliencia?",
      options: [
        "Abandonar tras un error",
        "Volver a intentarlo después de una dificultad",
        "Negarse a aprender",
      ],
      answer: 1,
    },
  },
  {
    letter: "S",
    word: "Solidaridad",
    definition: "Apoyo y compromiso con otras personas, especialmente en dificultades.",
    icon: "🤲",
    color: "#90be6d",
    context: "La solidaridad se demuestra cuando el grupo se une para ayudar a quien lo necesita.",
    synonyms: ["apoyo", "ayuda", "compañerismo"],
    antonyms: ["egoísmo", "abandono", "insolidaridad"],
    challenge: {
      question: "¿Qué se parece más a solidaridad?",
      options: ["Apoyo", "Aislamiento", "Egoísmo"],
      answer: 0,
    },
  },
  {
    letter: "T",
    word: "Templanza",
    definition: "Serenidad, moderación y autocontrol ante situaciones difíciles.",
    icon: "🕊️",
    color: "#577590",
    context: "Responder con calma durante una discusión muestra templanza.",
    synonyms: ["serenidad", "moderación", "autocontrol"],
    antonyms: ["ira", "exceso", "descontrol"],
    challenge: {
      question: "La templanza se relaciona con...",
      options: ["Autocontrol", "Descontrol", "Violencia"],
      answer: 0,
    },
  },
  {
    letter: "U",
    word: "Utopía",
    definition: "Idea de una sociedad ideal, perfecta o muy deseable.",
    icon: "🏙️",
    color: "#3a86ff",
    context: "A veces una utopía sirve para imaginar un mundo mejor, aunque no sea fácil alcanzarlo.",
    synonyms: ["ideal", "sueño", "visión perfecta"],
    antonyms: ["realidad dura", "distopía", "fracaso social"],
    challenge: {
      question: "Una utopía es sobre todo...",
      options: [
        "Una sociedad ideal imaginada",
        "Un problema matemático",
        "Una emoción pasajera",
      ],
      answer: 0,
    },
  },
  {
    letter: "V",
    word: "Vocación",
    definition: "Inclinación o llamado interior hacia una actividad o propósito.",
    icon: "🎯",
    color: "#8338ec",
    context: "La vocación aparece cuando una persona siente que algo encaja profundamente con ella.",
    synonyms: ["llamada", "inclinación", "propósito"],
    antonyms: ["desinterés", "rechazo", "apatía"],
    challenge: {
      question: "La vocación tiene que ver con...",
      options: ["Un llamado interior", "Una casualidad sin interés", "Un olvido"],
      answer: 0,
    },
  },
  {
    letter: "W",
    word: "Web",
    definition: "Conjunto de páginas y recursos conectados a través de internet.",
    icon: "🌐",
    color: "#4361ee",
    context: "La web permite acceder a información, recursos y herramientas desde cualquier lugar.",
    synonyms: ["red", "sitio en internet", "portal"],
    antonyms: ["desconexión", "aislamiento", "fuera de línea"],
    challenge: {
      question: "La web está relacionada con...",
      options: ["Internet", "Un bosque", "Una montaña"],
      answer: 0,
    },
  },
  {
    letter: "X",
    word: "Xenofilia",
    definition: "Aprecio o simpatía por lo extranjero o lo diferente.",
    icon: "🌍",
    color: "#4cc9f0",
    context: "La xenofilia se manifiesta en el interés respetuoso por otras culturas y costumbres.",
    synonyms: ["apertura cultural", "interés por lo diferente", "curiosidad cultural"],
    antonyms: ["xenofobia", "rechazo", "intolerancia"],
    challenge: {
      question: "La xenofilia se opone más a...",
      options: ["Xenofobia", "Curiosidad", "Respeto"],
      answer: 0,
    },
  },
  {
    letter: "Y",
    word: "Yacimiento",
    definition: "Lugar donde se encuentra algo valioso, como minerales o restos históricos.",
    icon: "⛏️",
    color: "#8d99ae",
    context: "Los arqueólogos estudian los yacimientos para conocer mejor el pasado.",
    synonyms: ["depósito", "hallazgo", "lugar de extracción"],
    antonyms: ["superficie vacía", "ausencia", "carencia"],
    challenge: {
      question: "Un yacimiento suele ser...",
      options: [
        "Un lugar donde se hallan materiales o restos valiosos",
        "Un tipo de saludo",
        "Una herramienta escolar",
      ],
      answer: 0,
    },
  },
  {
    letter: "Z",
    word: "Zelo",
    definition: "Interés intenso y cuidadoso por cumplir un deber o propósito.",
    icon: "🔥",
    color: "#ef476f",
    context: "Cuando alguien trabaja con mucho celo, lo hace con cuidado y compromiso.",
    synonyms: ["esmero", "cuidado", "dedicación"],
    antonyms: ["descuido", "apatía", "negligencia"],
    challenge: {
      question: "El celo se parece más a...",
      options: ["Dedicación", "Pasividad", "Desorden"],
      answer: 0,
    },
  },
];

const STORAGE_KEY = "palabra-del-dia-progress-v4";

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDayNumber() {
  const start = new Date(2026, 0, 1);
  const now = new Date();
  const diff = now - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getCurrentIndex() {
  const day = getDayNumber();
  const cycleLength = words.length;
  return ((day % cycleLength) + cycleLength) % cycleLength;
}

function getCompletedCycles() {
  const day = getDayNumber();
  return Math.max(0, Math.floor(day / words.length));
}

function progressPercent(index) {
  return ((index + 1) / words.length) * 100;
}

function badgeName(count) {
  if (count === 0) return "Sin insignias todavía";
  if (count === 1) return "Exploradores del diccionario";
  if (count === 2) return "Guardianes del vocabulario";
  if (count === 3) return "Maestros de las palabras";
  return "Leyendas del diccionario";
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        usedByDate: {},
        points: 0,
        streak: 0,
        lastUsedDate: null,
        history: [],
        challengeSolvedByDate: {},
      };
    }
    const parsed = JSON.parse(raw);
    return {
      usedByDate: parsed.usedByDate || {},
      points: parsed.points || 0,
      streak: parsed.streak || 0,
      lastUsedDate: parsed.lastUsedDate || null,
      history: parsed.history || [],
      challengeSolvedByDate: parsed.challengeSolvedByDate || {},
    };
  } catch {
    return {
      usedByDate: {},
      points: 0,
      streak: 0,
      lastUsedDate: null,
      history: [],
      challengeSolvedByDate: {},
    };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function daysBetween(dateA, dateB) {
  const a = new Date(dateA + "T00:00:00");
  const b = new Date(dateB + "T00:00:00");
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

function glassCard(extra = {}) {
  return {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 24,
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
    ...extra,
  };
}

function SectionTitle({ children, presentationMode = false }) {
  return (
    <h2
      style={{
        marginTop: 0,
        marginBottom: 14,
        fontSize: presentationMode ? 30 : 24,
        letterSpacing: "-0.02em",
      }}
    >
      {children}
    </h2>
  );
}

function StatCard({ title, value, subtitle, accent, presentationMode = false }) {
  return (
    <div
      style={glassCard({
        padding: presentationMode ? 22 : 18,
        background: `linear-gradient(180deg, ${accent || "rgba(255,255,255,0.08)"}, rgba(255,255,255,0.05))`,
      })}
    >
      <div style={{ color: "#d6ddff", fontSize: presentationMode ? 16 : 13, marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ fontSize: presentationMode ? 38 : 30, fontWeight: 900 }}>{value}</div>
      {subtitle && (
        <div style={{ color: "#d6ddff", marginTop: 6, lineHeight: 1.5, fontSize: presentationMode ? 16 : 14 }}>
          {subtitle}
        </div>
      )}
    </div>
  );
}

function InfoBox({ title, children, icon, presentationMode = false }) {
  return (
    <div
      style={glassCard({
        padding: presentationMode ? 20 : 16,
      })}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: presentationMode ? 22 : 18 }}>{icon}</span>
        <div style={{ fontWeight: 800, fontSize: presentationMode ? 20 : 16 }}>{title}</div>
      </div>
      <div style={{ color: "#e8eeff", lineHeight: 1.6, fontSize: presentationMode ? 20 : 16 }}>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [todayKey, setTodayKey] = useState(getTodayKey());
  const [progressState, setProgressState] = useState(loadProgress());
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [challengeFeedback, setChallengeFeedback] = useState("");
  const [presentationMode, setPresentationMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTodayKey(getTodayKey());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setSelectedOption(null);
    setChallengeFeedback("");
  }, [todayKey]);

  const currentIndex = useMemo(() => getCurrentIndex(), [todayKey]);
  const currentWord = words[currentIndex];
  const cycles = useMemo(() => getCompletedCycles(), [todayKey]);
  const progress = progressPercent(currentIndex);
  const usedToday = !!progressState.usedByDate[todayKey];
  const challengeSolvedToday = !!progressState.challengeSolvedByDate[todayKey];

  const upcomingWords = useMemo(() => {
    const next = [];
    for (let i = 1; i <= 4; i++) {
      next.push(words[(currentIndex + i) % words.length]);
    }
    return next;
  }, [currentIndex]);

  const recentHistory = useMemo(() => {
    return [...progressState.history].slice(-5).reverse();
  }, [progressState.history]);

  function updateProgress(updated) {
    setProgressState(updated);
    saveProgress(updated);
  }

  function markWordUsed() {
    if (usedToday) {
      setMessage("La palabra de hoy ya está marcada como trabajada.");
      return;
    }

    const newUsedByDate = {
      ...progressState.usedByDate,
      [todayKey]: {
        word: currentWord.word,
        letter: currentWord.letter,
      },
    };

    let newStreak = 1;
    if (progressState.lastUsedDate) {
      const diff = daysBetween(progressState.lastUsedDate, todayKey);
      if (diff === 1) newStreak = progressState.streak + 1;
      else if (diff === 0) newStreak = progressState.streak;
      else newStreak = 1;
    }

    const newHistory = [
      ...progressState.history,
      {
        date: todayKey,
        word: currentWord.word,
        letter: currentWord.letter,
      },
    ];

    const updated = {
      ...progressState,
      usedByDate: newUsedByDate,
      points: progressState.points + 10,
      streak: newStreak,
      lastUsedDate: todayKey,
      history: newHistory,
    };

    updateProgress(updated);
    setMessage(`¡Perfecto! La clase ha trabajado hoy la palabra "${currentWord.word}".`);
  }

  function checkChallenge() {
    if (selectedOption === null) {
      setChallengeFeedback("Seleccionad una respuesta antes de comprobar.");
      return;
    }

    if (challengeSolvedToday) {
      setChallengeFeedback("El mini reto de hoy ya fue resuelto.");
      return;
    }

    if (selectedOption === currentWord.challenge.answer) {
      const updated = {
        ...progressState,
        points: progressState.points + 5,
        challengeSolvedByDate: {
          ...progressState.challengeSolvedByDate,
          [todayKey]: true,
        },
      };
      updateProgress(updated);
      setChallengeFeedback("✅ ¡Correcto! Habéis ganado 5 puntos extra.");
    } else {
      setChallengeFeedback("❌ No es correcta. Podéis comentarla en clase y volver mañana con más fuerza.");
    }
  }

  function resetClassProgress() {
    const empty = {
      usedByDate: {},
      points: 0,
      streak: 0,
      lastUsedDate: null,
      history: [],
      challengeSolvedByDate: {},
    };
    updateProgress(empty);
    setMessage("Se ha reiniciado el progreso guardado en este navegador.");
    setSelectedOption(null);
    setChallengeFeedback("");
  }

  const wordsWorkedCount = Object.keys(progressState.usedByDate).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #253b56 0%, #17263f 35%, #0c1320 100%)",
        color: "white",
        padding: presentationMode ? 16 : 24,
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ maxWidth: presentationMode ? 1600 : 1440, margin: "0 auto" }}>
        <div
          style={glassCard({
            padding: presentationMode ? 24 : 28,
            marginBottom: 22,
            background: "linear-gradient(135deg, rgba(35,56,88,0.95), rgba(63,94,150,0.75))",
          })}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: presentationMode ? 58 : 46,
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                }}
              >
                HABLAS · Palabra del Día 📚
              </h1>
              <p
                style={{
                  marginTop: 10,
                  marginBottom: 0,
                  color: "#e0e7ff",
                  fontSize: presentationMode ? 24 : 18,
                  maxWidth: 980,
                  lineHeight: 1.6,
                }}
              >
                Una misión diaria para enriquecer el vocabulario de la clase, avanzar por el
                abecedario y ganar insignias colectivas.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.1)",
                  fontWeight: 800,
                  color: "#f7fbff",
                  fontSize: presentationMode ? 20 : 16,
                }}
              >
                Hoy: letra {currentWord.letter}
              </div>

              <button
                onClick={() => setPresentationMode((v) => !v)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 18,
                  background: "linear-gradient(135deg, #7bdff2, #4cc9f0)",
                  color: "#111",
                  border: "none",
                  fontWeight: 900,
                  cursor: "pointer",
                  fontSize: presentationMode ? 18 : 15,
                }}
              >
                {presentationMode ? "Salir de presentación" : "Modo presentación"}
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: presentationMode ? "1fr" : "1.12fr 0.88fr",
            gap: 20,
            marginBottom: 22,
          }}
        >
          <div
            style={{
              borderRadius: 30,
              padding: presentationMode ? 30 : 24,
              background: `linear-gradient(180deg, ${currentWord.color}, #172030)`,
              boxShadow: "0 18px 36px rgba(0,0,0,0.28)",
              border: "2px solid rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: presentationMode ? -10 : -30,
                top: presentationMode ? -20 : -30,
                fontSize: presentationMode ? 200 : 140,
                opacity: 0.12,
                transform: "rotate(-10deg)",
                pointerEvents: "none",
              }}
            >
              {currentWord.icon}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                alignItems: "flex-start",
                marginBottom: 20,
                position: "relative",
                zIndex: 1,
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.18)",
                    padding: "8px 12px",
                    borderRadius: 999,
                    fontWeight: 900,
                    marginBottom: 12,
                    fontSize: presentationMode ? 18 : 13,
                    letterSpacing: "0.04em",
                  }}
                >
                  LETRA {currentWord.letter}
                </div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: presentationMode ? 72 : 46,
                    lineHeight: 1.02,
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {currentWord.word}
                </h2>
              </div>

              <div
                style={{
                  fontSize: presentationMode ? 110 : 76,
                  lineHeight: 1,
                  filter: "drop-shadow(0 0 10px rgba(255,255,255,0.18))",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {currentWord.icon}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 14,
                position: "relative",
                zIndex: 1,
              }}
            >
              <InfoBox title="Definición" icon="📖" presentationMode={presentationMode}>
                {currentWord.definition}
              </InfoBox>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: presentationMode ? "1fr 1fr" : "1fr 1fr",
                  gap: 12,
                }}
              >
                <InfoBox title="Sinónimos" icon="🔁" presentationMode={presentationMode}>
                  {currentWord.synonyms.join(", ")}
                </InfoBox>
                <InfoBox title="Antónimos" icon="↔️" presentationMode={presentationMode}>
                  {currentWord.antonyms.join(", ")}
                </InfoBox>
              </div>

              <InfoBox title="Uso en contexto" icon="💬" presentationMode={presentationMode}>
                {currentWord.context}
              </InfoBox>
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 18,
                marginBottom: 14,
                position: "relative",
                zIndex: 1,
              }}
            >
              <button
                onClick={markWordUsed}
                style={{
                  background: usedToday
                    ? "linear-gradient(135deg, #95d5b2, #74c69d)"
                    : "linear-gradient(135deg, #ffd166, #f4a261)",
                  color: "#171717",
                  border: "none",
                  borderRadius: 16,
                  padding: presentationMode ? "18px 24px" : "14px 18px",
                  fontWeight: 900,
                  fontSize: presentationMode ? 20 : 15,
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                }}
              >
                {usedToday ? "✅ Palabra trabajada hoy" : "Marcar como trabajada hoy"}
              </button>

              <button
                onClick={resetClassProgress}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.22)",
                  borderRadius: 16,
                  padding: presentationMode ? "18px 24px" : "14px 18px",
                  fontWeight: 800,
                  fontSize: presentationMode ? 20 : 15,
                  cursor: "pointer",
                }}
              >
                Reiniciar progreso
              </button>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: 18,
                padding: 14,
                color: "#eef3ff",
                minHeight: 52,
                display: "flex",
                alignItems: "center",
                fontWeight: 700,
                fontSize: presentationMode ? 20 : 16,
                position: "relative",
                zIndex: 1,
              }}
            >
              {message || "Objetivo de hoy: usar la palabra varias veces durante la jornada."}
            </div>
          </div>

          {!presentationMode && (
            <div
              style={{
                display: "grid",
                gap: 14,
              }}
            >
              <StatCard
                title="Progreso del abecedario"
                value={`${currentIndex + 1} / ${words.length}`}
                subtitle={`Vais por la letra ${currentWord.letter}`}
                accent="rgba(87,117,144,0.35)"
              />
              <StatCard
                title="Insignias ganadas"
                value={cycles}
                subtitle={badgeName(cycles)}
                accent="rgba(255,209,102,0.22)"
              />
              <StatCard
                title="Puntos de la clase"
                value={progressState.points}
                subtitle="+10 por palabra usada y +5 por mini reto"
                accent="rgba(76,201,240,0.22)"
              />
              <StatCard
                title="Racha actual"
                value={`${progressState.streak} día${progressState.streak === 1 ? "" : "s"}`}
                subtitle="Días seguidos usando la palabra"
                accent="rgba(67,170,139,0.22)"
              />
            </div>
          )}
        </div>

        <div
          style={glassCard({
            padding: 20,
            marginBottom: 22,
          })}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              alignItems: "center",
              marginBottom: 12,
              flexWrap: "wrap",
            }}
          >
            <SectionTitle presentationMode={presentationMode}>
              Camino hacia la insignia 🏅
            </SectionTitle>
            <div
              style={{
                color: "#d3daf6",
                fontWeight: 800,
                fontSize: presentationMode ? 22 : 16,
              }}
            >
              {Math.round(progress)}% completado en esta vuelta
            </div>
          </div>

          <div
            style={{
              height: presentationMode ? 24 : 20,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 999,
              overflow: "hidden",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #ffd166, #06d6a0)",
                borderRadius: 999,
                boxShadow: "0 0 18px rgba(6,214,160,0.25)",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(92px, 1fr))",
              gap: 10,
            }}
          >
            {words.map((item, index) => {
              const isPast = index < currentIndex;
              const isCurrent = index === currentIndex;
              const worked = Object.values(progressState.usedByDate).some(
                (entry) => entry.letter === item.letter
              );

              return (
                <div
                  key={item.letter}
                  style={{
                    borderRadius: 18,
                    padding: presentationMode ? 16 : 12,
                    textAlign: "center",
                    background: isCurrent
                      ? "linear-gradient(135deg, #ffd166, #f4a261)"
                      : isPast
                      ? "rgba(6,214,160,0.18)"
                      : "rgba(255,255,255,0.05)",
                    color: isCurrent ? "#1b1b1b" : "white",
                    border: isCurrent
                      ? "2px solid rgba(255,255,255,0.55)"
                      : worked
                      ? "2px solid rgba(6,214,160,0.45)"
                      : "1px solid rgba(255,255,255,0.08)",
                    fontWeight: 900,
                    boxShadow: isCurrent ? "0 8px 18px rgba(0,0,0,0.18)" : "none",
                  }}
                >
                  <div style={{ fontSize: presentationMode ? 34 : 24, marginBottom: 6 }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: presentationMode ? 22 : 18 }}>{item.letter}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: presentationMode ? "1fr" : "1fr 1fr",
            gap: 20,
          }}
        >
          <div
            style={glassCard({
              padding: 20,
            })}
          >
            <SectionTitle presentationMode={presentationMode}>
              Mini reto del día 🎯
            </SectionTitle>

            <div
              style={glassCard({
                padding: presentationMode ? 22 : 16,
                background: "rgba(255,255,255,0.05)",
                marginBottom: 14,
              })}
            >
              <div
                style={{
                  fontWeight: 900,
                  marginBottom: 10,
                  fontSize: presentationMode ? 28 : 18,
                  lineHeight: 1.35,
                }}
              >
                {currentWord.challenge.question}
              </div>

              <div style={{ display: "grid", gap: 10 }}>
                {currentWord.challenge.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    style={{
                      textAlign: "left",
                      background:
                        selectedOption === index
                          ? "linear-gradient(135deg, rgba(255,209,102,0.34), rgba(244,162,97,0.26))"
                          : "rgba(255,255,255,0.06)",
                      color: "white",
                      border:
                        selectedOption === index
                          ? "2px solid #ffd166"
                          : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                      padding: presentationMode ? "18px 20px" : "14px 16px",
                      fontWeight: 800,
                      fontSize: presentationMode ? 22 : 16,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <button
                onClick={checkChallenge}
                style={{
                  marginTop: 14,
                  background: challengeSolvedToday
                    ? "linear-gradient(135deg, #95d5b2, #74c69d)"
                    : "linear-gradient(135deg, #7bdff2, #4cc9f0)",
                  color: "#171717",
                  border: "none",
                  borderRadius: 16,
                  padding: presentationMode ? "16px 22px" : "12px 16px",
                  fontWeight: 900,
                  fontSize: presentationMode ? 20 : 15,
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.16)",
                }}
              >
                {challengeSolvedToday ? "✅ Reto ya superado hoy" : "Comprobar respuesta"}
              </button>

              <div
                style={{
                  marginTop: 12,
                  color: "#dce3ff",
                  minHeight: 24,
                  fontWeight: 700,
                  lineHeight: 1.5,
                  fontSize: presentationMode ? 20 : 16,
                }}
              >
                {challengeFeedback}
              </div>
            </div>

            <InfoBox title="Cómo usar este reto" icon="🧩" presentationMode={presentationMode}>
              Leed la palabra, comentad su significado y votad en grupo cuál es la respuesta
              correcta. Si acertáis, sumáis puntos extra para la clase.
            </InfoBox>
          </div>

          {!presentationMode && (
            <div
              style={{
                display: "grid",
                gap: 20,
              }}
            >
              <div
                style={glassCard({
                  padding: 20,
                })}
              >
                <SectionTitle>Próximas palabras</SectionTitle>
                {upcomingWords.map((item) => (
                  <div
                    key={item.letter}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 18,
                      padding: 14,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        display: "grid",
                        placeItems: "center",
                        background: "rgba(255,255,255,0.08)",
                        fontSize: 24,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 900 }}>
                        {item.letter} · {item.word}
                      </div>
                      <div style={{ color: "#d3daf6", fontSize: 14, lineHeight: 1.5 }}>
                        {item.definition}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={glassCard({
                  padding: 20,
                })}
              >
                <SectionTitle>Historial reciente</SectionTitle>

                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 18,
                    padding: 16,
                    marginBottom: 14,
                  }}
                >
                  <div style={{ fontWeight: 900, marginBottom: 8 }}>Palabras trabajadas</div>
                  <div style={{ color: "#dce3ff", lineHeight: 1.6 }}>
                    La clase ha trabajado <strong>{wordsWorkedCount}</strong> palabra
                    {wordsWorkedCount === 1 ? "" : "s"} en este navegador.
                  </div>
                </div>

                {recentHistory.length === 0 ? (
                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 18,
                      padding: 16,
                      color: "#dce3ff",
                    }}
                  >
                    Todavía no hay historial. Marca la palabra de hoy cuando la trabajéis en clase.
                  </div>
                ) : (
                  recentHistory.map((item, index) => (
                    <div
                      key={`${item.date}-${index}`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 18,
                        padding: 14,
                        marginBottom: 10,
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 900 }}>
                          {item.letter} · {item.word}
                        </div>
                        <div style={{ color: "#d3daf6", fontSize: 14 }}>{item.date}</div>
                      </div>
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 12,
                          display: "grid",
                          placeItems: "center",
                          background: "rgba(6,214,160,0.16)",
                          fontSize: 20,
                        }}
                      >
                        ✅
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}