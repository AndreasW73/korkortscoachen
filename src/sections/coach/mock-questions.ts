import type { AiCoachResponse } from './mapper';

export const MOCK_QUESTIONS_BY_TOPIC: Record<string, AiCoachResponse[]> = {
  väjningsplikt: [
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
        C: 'Fel. Regler styr.',
        D: 'Fel. Blinkers ändrar inget.',
      },
    },

    {
      scenario: {
        title: 'Cirkulationsplats',
        text: 'Du närmar dig en cirkulationsplats.',
        tags: ['väjningsplikt', 'rondell'],
      },
      question: 'Vem har företräde?',
      options: [
        { id: 'A', text: 'Den som kör in' },
        { id: 'B', text: 'Den som redan är i cirkulationen' },
        { id: 'C', text: 'Största fordonet' },
        { id: 'D', text: 'Den som blinkar' },
      ],
      correct: 'B',
      explanation: 'Fordon i cirkulationen har företräde.',
      optionExplanations: {
        A: 'Fel.',
        B: 'Rätt.',
        C: 'Fel.',
        D: 'Fel.',
      },
    },
  ],

  högerregel: [
    {
      scenario: {
        title: 'Högerregel i korsning',
        text: 'Du närmar dig en obevakad korsning i tätort.',
        tags: ['högerregel', 'korsning'],
      },
      question: 'Vad gäller?',
      options: [
        { id: 'A', text: 'Du har företräde' },
        { id: 'B', text: 'Fordon från höger har företräde' },
        { id: 'C', text: 'Den som är störst kör först' },
        { id: 'D', text: 'Snabbast kör först' },
      ],
      correct: 'B',
      explanation: 'Högerregeln gäller i obevakade korsningar.',
      optionExplanations: {
        A: 'Fel.',
        B: 'Rätt.',
        C: 'Fel.',
        D: 'Fel.',
      },
    },
  ],

  hastighet: [
    {
      scenario: {
        title: 'Hastighet i tätort',
        text: 'Du kör i tätort utan skyltad hastighet.',
        tags: ['hastighet', 'tätort'],
      },
      question: 'Vilken hastighet gäller?',
      options: [
        { id: 'A', text: '30 km/h' },
        { id: 'B', text: '40 km/h' },
        { id: 'C', text: '50 km/h' },
        { id: 'D', text: '60 km/h' },
      ],
      correct: 'C',
      explanation: 'I tätort gäller 50 km/h om inget annat anges.',
      optionExplanations: {
        A: 'Fel.',
        B: 'Fel.',
        C: 'Rätt.',
        D: 'Fel.',
      },
    },
  ],

  alkohol: [
    {
      scenario: {
        title: 'Alkohol och bilkörning',
        text: 'Du har druckit ett glas vin tidigare på kvällen.',
        tags: ['alkohol', 'trafiksäkerhet'],
      },
      question: 'Vad gäller?',
      options: [
        { id: 'A', text: 'Du kan köra om du känner dig nykter' },
        { id: 'B', text: 'Små mängder påverkar inte' },
        { id: 'C', text: 'Alkohol påverkar körförmågan' },
        { id: 'D', text: 'Kaffe gör dig körklar' },
      ],
      correct: 'C',
      explanation: 'Alkohol försämrar reaktionsförmåga och omdöme.',
      optionExplanations: {
        A: 'Fel.',
        B: 'Fel.',
        C: 'Rätt.',
        D: 'Fel.',
      },
    },
  ],
};
