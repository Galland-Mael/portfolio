export type learnFrom = "Personnel" | "Entreprise" | "BUT";
export class Technologie {
    name: string
    level: "intermédiaire" | "avancé" | "débutant";
    learnFrom: learnFrom[];

    constructor(name: string, level: "intermédiaire" | "avancé" | "débutant", learnFrom: learnFrom[]) {
        this.name = name;
        this.level = level;
        this.learnFrom = learnFrom;
    }
}