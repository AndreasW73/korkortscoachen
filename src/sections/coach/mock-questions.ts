import type { AiCoachResponse } from './mapper';

export const MOCK_QUESTIONS: AiCoachResponse[] = [
  {
    scenario: {
      title: 'Väjningsplikt vid utfart',
      text: 'Du kör på en huvudled och närmar dig en utfart där ett annat fordon står stilla.',
      tags: ['väjningsplikt', 'utfart', 'huvudled'],
    },
    question: 'Vad gäller när fordonet vid utfarten startar och ska köra ut på huvudleden?',
    options: [
      { id: 'A', text: 'Du måste väja för fordonet vid utfarten' },
      { id: 'B', text: 'Fordonet vid utfarten måste väja för dig' },
      { id: 'C', text: 'Ni ska turas om att köra ut' },
      { id: 'D', text: 'Det beror på vem som blinkar först' },
    ],
    correct: 'B',
    explanation:
      'Fordon som ska köra ut från en utfart har väjningsplikt mot trafik på huvudled, så de måste väja för dig.',
    optionExplanations: {
      A: 'Fel. Trafik på huvudled har företräde mot fordon som kör ut från utfart.',
      B: 'Rätt. Utfart har väjningsplikt mot trafik på huvudled.',
      C: 'Fel. Regler avgör, inte turordning.',
      D: 'Fel. Blinkers ändrar inte väjningsplikten.',
    },
  },

  {
    scenario: {
      title: 'Högerregel i obevakad korsning',
      text: 'Du närmar dig en obevakad korsning i tätort och ser en bil komma från höger.',
      tags: ['högerregel', 'korsning', 'tätort'],
    },
    question: 'Vad gäller i korsningen?',
    options: [
      { id: 'A', text: 'Du har företräde eftersom du kör rakt' },
      { id: 'B', text: 'Bilen från höger har företräde' },
      { id: 'C', text: 'Den som kommer först till korsningen har företräde' },
      { id: 'D', text: 'Du har företräde om du håller högre hastighet' },
    ],
    correct: 'B',
    explanation:
      'I obevakade korsningar gäller högerregeln: du ska lämna företräde åt fordon från höger.',
    optionExplanations: {
      A: 'Fel. Att du kör rakt ger inte automatiskt företräde i obevakad korsning.',
      B: 'Rätt. Högerregeln innebär att du väjer för fordon från höger.',
      C: 'Fel. “Först fram” är inte en trafikregel.',
      D: 'Fel. Hastighet ger aldrig företräde.',
    },
  },
];
