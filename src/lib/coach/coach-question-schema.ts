export const CoachQuestionSchema = {
text: {
  format: {
    type: "json_schema",
    name: "coach_question_step5",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      required: ["scenario", "question", "options", "correct", "explanation"],
      properties: {
        scenario: {
          type: "object",
          additionalProperties: false,
          required: ["title", "text"],
          properties: {
            title: {
              type: "string",
            },
            text: {
              type: "string",
            },
            tags: {
              type: "array",
              items: { type: "string" },
            },
          },
        },

        question: {
          type: "string",
        },

        options: {
          type: "array",
          minItems: 3,
          maxItems: 4,
          items: {
            type: "object",
            additionalProperties: false,
            required: ["id", "text"],
            properties: {
              id: {
                type: "string",
                enum: ["A", "B", "C", "D"],
              },
              text: {
                type: "string",
              },
            },
          },
        },

        correct: {
          type: "string",
          enum: ["A", "B", "C", "D"],
        },

        explanation: {
          type: "string",
        },
      },
    },
  },
},

} as const;
