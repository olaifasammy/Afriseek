export const entitySchemas = {
  person: {
    required: [
      "birthDate",
      "nationality"
    ],
    optional: [
      "deathDate",
      "occupation",
      "education",
      "knownFor"
    ]
  },

  city: {
    required: [
      "country"
    ],
    optional: [
      "population",
      "coordinates",
      "founded"
    ]
  },

  kingdom: {
    required: [
      "capital"
    ],
    optional: [
      "founder",
      "period",
      "successor"
    ]
  },

  ethnic_group: {
    required: [
      "primaryRegion"
    ],
    optional: [
      "population",
      "language",
      "religion"
    ]
  },

  language: {
    required: [],
    optional: [
      "languageFamily",
      "speakers",
      "writingSystem"
    ]
  },

  university: {
    required: [
      "country"
    ],
    optional: [
      "established",
      "students",
      "website"
    ]
  }
};
