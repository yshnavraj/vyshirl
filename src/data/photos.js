// Add photos here; place the corresponding files in public/assets/.
export const photos = [
  {
    "id": "31556f7c7532983e",
    "title": "A little encounter",
    "category": "Nature",
    "postId": "DPFarAJjI-c",
    "alt": "Squirrel perched on a stone ledge",
    "filename": "31556f7c7532983e.jpg"
  },
  {
    "id": "c5d05021766815b4",
    "title": "Still / reflected",
    "category": "Nature",
    "postId": "DJ8FY99ITcS",
    "alt": "Trees reflected in still water beneath a blue sky",
    "filename": "c5d05021766815b4.jpg"
  },
  {
    "id": "521acf6ae2d82b60",
    "title": "A passing silhouette",
    "category": "Skies",
    "postId": "DCdlEarARmp",
    "alt": "Airplane silhouetted against an orange sunset",
    "filename": "521acf6ae2d82b60.jpg"
  },
  {
    "id": "5af7ded984e7593e",
    "title": "Last light",
    "category": "Skies",
    "postId": "DBc9HhfxR_A",
    "alt": "Evening light and dark silhouettes",
    "filename": "5af7ded984e7593e.jpg"
  },
  {
    "id": "309491103f623a8c",
    "title": "The sky unfolds",
    "category": "Skies",
    "postId": "C-RmRqWgO9k",
    "alt": "Dramatic clouds filling the sky",
    "filename": "309491103f623a8c.jpg"
  },
  {
    "id": "812a5dbdc36b2011",
    "title": "Blue, in layers",
    "category": "Skies",
    "postId": "C-Rk1TXgbMv",
    "alt": "Layers of clouds in a blue sky",
    "filename": "812a5dbdc36b2011.jpg"
  },
  {
    "id": "268381cad50c7654",
    "title": "Open air",
    "category": "Skies",
    "postId": "C-Ls38Yx4VZ",
    "alt": "Sky study from the visual journal",
    "filename": "268381cad50c7654.jpg"
  },
  {
    "id": "941778cfa66b8780",
    "title": "Between moments",
    "category": "Nature",
    "postId": "C93BV-txQOZ",
    "alt": "Nature photograph from the visual journal",
    "filename": "941778cfa66b8780.jpg"
  },
  {
    "id": "81b2d82b34ed67c5",
    "title": "A quieter view",
    "category": "Nature",
    "postId": "C6Jx5ItAstJ",
    "alt": "An everyday scene observed through the lens",
    "filename": "81b2d82b34ed67c5.jpg"
  },
  {
    "id": "b8b03b54272703a3",
    "title": "Light study",
    "category": "Skies",
    "postId": "C6IOvYFgr9V",
    "alt": "Light and atmosphere from the visual journal",
    "filename": "b8b03b54272703a3.jpg"
  },
  {
    "id": "0258652da312e442",
    "title": "Found along the way",
    "category": "Nature",
    "postId": "C5P5Z_YAsYO",
    "alt": "An observed moment from the visual journal",
    "filename": "0258652da312e442.jpg"
  },
  {
    "id": "0b65f0a0b6ee4234",
    "title": "Pause / observe",
    "category": "Nature",
    "postId": "C5PuLdgAD_l",
    "alt": "A photograph from the visual journal",
    "filename": "0b65f0a0b6ee4234.jpg"
  }
];

export function photoSrc(photo) {
  return `${import.meta.env.BASE_URL}assets/${photo.filename}`;
}
