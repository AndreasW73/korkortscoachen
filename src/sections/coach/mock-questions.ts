import type { AiCoachResponse } from './mapper';

export const MOCK_QUESTIONS: AiCoachResponse[] = [
  // 1. Utfart
  {
    scenario: {
      title: 'Väjningsplikt vid utfart',
      text: 'Du kör på en huvudled och närmar dig en utfart där ett annat fordon står stilla.',
      tags: ['väjningsplikt', 'utfart', 'huvudled'],
    },
    question: 'Vad gäller när fordonet vid utfarten ska köra ut på huvudleden?',
    options: [
      { id: 'A', text: 'Du måste väja för fordonet' },
      { id: 'B', text: 'Fordonet måste väja för dig' },
      { id: 'C', text: 'Ni ska köra samtidigt' },
      { id: 'D', text: 'Den som blinkar först kör' },
    ],
    correct: 'B',
    explanation: 'Fordon som kör ut från utfart har alltid väjningsplikt.',
    optionExplanations: {
      A: 'Fel. Trafik på huvudled har företräde.',
      B: 'Rätt. Utfart innebär väjningsplikt.',
      C: 'Fel. Regler styr, inte samspel.',
      D: 'Fel. Blinkers ändrar inte väjningsplikt.',
    },
  },

  // 2. Högerregel
  {
    scenario: {
      title: 'Högerregel i korsning',
      text: 'Du närmar dig en obevakad korsning i tätort.',
      tags: ['högerregel', 'korsning'],
    },
    question: 'Vad gäller i korsningen?',
    options: [
      { id: 'A', text: 'Du har företräde' },
      { id: 'B', text: 'Fordon från höger har företräde' },
      { id: 'C', text: 'Störst väg kör först' },
      { id: 'D', text: 'Snabbast kör först' },
    ],
    correct: 'B',
    explanation: 'I obevakade korsningar gäller högerregeln.',
    optionExplanations: {
      A: 'Fel. Högerregeln gäller.',
      B: 'Rätt. Du ska väja för fordon från höger.',
      C: 'Fel. Vägens storlek spelar ingen roll.',
      D: 'Fel. Hastighet ger aldrig företräde.',
    },
  },

  // 3. Övergångsställe
  {
    scenario: {
      title: 'Övergångsställe utan signal',
      text: 'Du närmar dig ett obevakat övergångsställe där en fotgängare är på väg ut.',
      tags: ['övergångsställe', 'fotgängare'],
    },
    question: 'Vad ska du göra?',
    options: [
      { id: 'A', text: 'Fortsätta om fotgängaren inte gått ut' },
      { id: 'B', text: 'Sakta in och vara beredd att stanna' },
      { id: 'C', text: 'Tuta för att varna' },
      { id: 'D', text: 'Öka farten för att passera snabbt' },
    ],
    correct: 'B',
    explanation: 'Du har väjningsplikt mot gående som är på eller på väg ut.',
    optionExplanations: {
      A: 'Fel. Du ska visa hänsyn.',
      B: 'Rätt. Väjningsplikt gäller.',
      C: 'Fel. Tut används bara vid fara.',
      D: 'Fel. Farligt och olagligt.',
    },
  },

  // 4. Hastighet – tätort
  {
    scenario: {
      title: 'Hastighet i tätort',
      text: 'Du kör på en väg i tätort utan skyltad hastighet.',
      tags: ['hastighet', 'tätort'],
    },
    question: 'Vilken är högsta tillåtna hastighet?',
    options: [
      { id: 'A', text: '30 km/h' },
      { id: 'B', text: '40 km/h' },
      { id: 'C', text: '50 km/h' },
      { id: 'D', text: '60 km/h' },
    ],
    correct: 'C',
    explanation: 'I tätort gäller 50 km/h om inget annat anges.',
    optionExplanations: {
      A: 'Fel. Gäller bara i särskilda zoner.',
      B: 'Fel. Inte standard.',
      C: 'Rätt. Tätort = 50 km/h.',
      D: 'Fel. För högt.',
    },
  },

  // 5. Stopplikt
  {
    scenario: {
      title: 'Stopplikt i korsning',
      text: 'Du närmar dig en korsning med stoppskylt.',
      tags: ['stopplikt', 'korsning'],
    },
    question: 'Vad innebär stopplikten?',
    options: [
      { id: 'A', text: 'Sakta in' },
      { id: 'B', text: 'Stanna helt' },
      { id: 'C', text: 'Stanna om det kommer trafik' },
      { id: 'D', text: 'Tuta och köra' },
    ],
    correct: 'B',
    explanation: 'Stopplikt innebär att du måste stanna helt.',
    optionExplanations: {
      A: 'Fel. Det räcker inte.',
      B: 'Rätt. Fullständigt stopp krävs.',
      C: 'Fel. Du ska alltid stanna.',
      D: 'Fel. Farligt och fel.',
    },
  },

  // 6. Motorväg
  {
    scenario: {
      title: 'Påfart till motorväg',
      text: 'Du kör på påfarten till en motorväg.',
      tags: ['motorväg', 'påfart'],
    },
    question: 'Vad gäller?',
    options: [
      { id: 'A', text: 'Trafik på motorvägen ska väja' },
      { id: 'B', text: 'Du ska anpassa hastigheten och väja' },
      { id: 'C', text: 'Du har företräde' },
      { id: 'D', text: 'Du ska stanna' },
    ],
    correct: 'B',
    explanation: 'Du har väjningsplikt när du kör in på motorväg.',
    optionExplanations: {
      A: 'Fel. Trafik på motorväg har företräde.',
      B: 'Rätt. Anpassa hastigheten och väj.',
      C: 'Fel. Påfart ger inte företräde.',
      D: 'Fel. Stopp är ovanligt och farligt.',
    },
  },

  // 7. Cirkulationsplats
  {
    scenario: {
      title: 'Cirkulationsplats',
      text: 'Du närmar dig en cirkulationsplats.',
      tags: ['rondell', 'väjningsplikt'],
    },
    question: 'Vem har företräde?',
    options: [
      { id: 'A', text: 'Den som kör in' },
      { id: 'B', text: 'Den som är i cirkulationen' },
      { id: 'C', text: 'Största fordonet' },
      { id: 'D', text: 'Den som blinkar' },
    ],
    correct: 'B',
    explanation: 'Fordon i cirkulationen har företräde.',
    optionExplanations: {
      A: 'Fel. Du ska väja när du kör in.',
      B: 'Rätt. Väjningsplikt gäller vid infart.',
      C: 'Fel. Storlek spelar ingen roll.',
      D: 'Fel. Blinkers ändrar inte regler.',
    },
  },

  // 8. Järnväg
  {
    scenario: {
      title: 'Järnvägskorsning',
      text: 'Du närmar dig en järnvägskorsning med blinkande rött ljus.',
      tags: ['järnväg', 'varningssignal'],
    },
    question: 'Vad ska du göra?',
    options: [
      { id: 'A', text: 'Sakta in' },
      { id: 'B', text: 'Stanna' },
      { id: 'C', text: 'Köra om snabbt' },
      { id: 'D', text: 'Tuta' },
    ],
    correct: 'B',
    explanation: 'Blinkande rött ljus betyder stopp.',
    optionExplanations: {
      A: 'Fel. Du måste stanna.',
      B: 'Rätt. Stopp krävs.',
      C: 'Fel. Mycket farligt.',
      D: 'Fel. Hjälper inte.',
    },
  },

  // 9. Omkörning
  {
    scenario: {
      title: 'Omkörning på landsväg',
      text: 'Du planerar att köra om på landsväg.',
      tags: ['omkörning', 'landsväg'],
    },
    question: 'När är omkörning tillåten?',
    options: [
      { id: 'A', text: 'När sikten är god' },
      { id: 'B', text: 'När du är stressad' },
      { id: 'C', text: 'När du tutar' },
      { id: 'D', text: 'När det finns heldragen linje' },
    ],
    correct: 'A',
    explanation: 'God sikt och säkerhet krävs vid omkörning.',
    optionExplanations: {
      A: 'Rätt. Säkerhet och sikt är avgörande.',
      B: 'Fel. Stress är farligt.',
      C: 'Fel. Tut ger ingen rätt.',
      D: 'Fel. Heldragen linje förbjuder omkörning.',
    },
  },

  // 10. Alkohol
  {
    scenario: {
      title: 'Alkohol och bilkörning',
      text: 'Du har druckit ett glas vin tidigare på kvällen.',
      tags: ['alkohol', 'trafiksäkerhet'],
    },
    question: 'Vad gäller?',
    options: [
      { id: 'A', text: 'Du kan köra om du känner dig nykter' },
      { id: 'B', text: 'Du får köra under 0,2 promille' },
      { id: 'C', text: 'Alkohol påverkar körförmågan' },
      { id: 'D', text: 'Kaffe gör dig körklar' },
    ],
    correct: 'C',
    explanation: 'Alkohol påverkar omdöme och reaktionsförmåga.',
    optionExplanations: {
      A: 'Fel. Känsla avgör inte.',
      B: 'Fel. Även små mängder påverkar.',
      C: 'Rätt. Alkohol försämrar körförmågan.',
      D: 'Fel. Kaffe neutraliserar inte alkohol.',
    },
  },
];
