export class Anime {
    id: number;
    name:string;
    description: string;
    Rating: string;
    episodes: number;
    categorie: string;
    studio: string;
    img: string;
    constructor(id: number, name: string, description: string, Rating: string, episodes: number, categorie: string, studio: string, img: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.Rating = Rating;
        this.episodes = episodes;
        this.categorie = categorie;
        this.studio = studio;
        this.img = img;
    }
}

