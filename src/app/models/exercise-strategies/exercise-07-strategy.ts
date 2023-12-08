import { ExerciseStrategy } from "src/app/models/exercise-strategy";

interface Hand {
    bet: number;
    cards: string;
}
export class Exercise07Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;

    /**
     * Prends un jeu de données, et fait la somme des multiplications des paris des mains par rapport à leurs classements
     * @param data Jeu de données à traiter
     * @returns La somme des multiplications des paris des mains par rapport à leurs classements
     */
    public resolve(data: string[]): number {
        const hands = this
            .readHands(data)
            .sort((hand1: Hand, hand2: Hand) => this.compareHands(hand1, hand2));

        return hands
            .reduce((total: number, current: Hand, index: number) => total + current.bet * (hands.length - index), 0);
    }

    /** Méthode temporaire */
    public resolve2(data: string[]): number {
        throw Error('Méthode non implémentée - ' + data.length);
    }

    /**
     * Convertit des Mains du format string au format objet
     * @param data Liste de n Mains
     * @returns des Mains au format objet
     */
    private readHands(data: string[]): Hand[] {
        return data.map((str: string) => {
            const [cards, bet] = str.split(' ');
            return { bet: parseInt(bet, this.BASE_10), cards };
        });
    }

    /**
     * Convertit des cartes en map de chaque clé / sa quantité
     * @param cards cartes à formatter
     * "KK997" +> { "K": 2, "9": 2, "7": 1 }
     * @returns map de chaque clé / sa quantité
     */
    private getMappedCards(cards: string): Record<string, number> {
        const mappedCards: Record<string, number> = {};
        for (let i = 0; i < cards.length; i++) {
            const currentCard = cards[i];

            if (mappedCards[currentCard]) {
                mappedCards[currentCard] += 1;
            } else {
                mappedCards[currentCard] = 1;
            }
        }
        return mappedCards;
    }

    /**
     * Compare 2 mains
     * @param hand1 Première main à comparer
     * @param hand2 Deuxième main à comparer
     * @returns 1 si la première a plus de valeur ; -1 si c'est la seconde ; 0 si elles sont égales
     */
    private compareHands(hand1: Hand, hand2: Hand): number {
        // Vérification par ordre de priorité
        const sortMethods = [
            (mappedCards: Record<string, number>) => this.isFiveOfAKind(mappedCards),
            (mappedCards: Record<string, number>) => this.isFourOfAKind(mappedCards),
            (mappedCards: Record<string, number>) => this.isFullHouse(mappedCards),
            (mappedCards: Record<string, number>) => this.isThreeOfAKind(mappedCards),
            (mappedCards: Record<string, number>) => this.isDoublePair(mappedCards),
            (mappedCards: Record<string, number>) => this.isSinglePair(mappedCards),
        ];

        const mappedCards1 = this.getMappedCards(hand1.cards);
        const mappedCards2 = this.getMappedCards(hand2.cards);

        for (let i = 0; i < sortMethods.length; i++) {
            const resultHand1 = sortMethods[i](mappedCards1);
            const resultHand2 = sortMethods[i](mappedCards2);

            if (resultHand1 && !resultHand2) {
                return -1;
            }
            if (!resultHand1 && resultHand2) {
                return 1;
            }
        }

        // Vérification par défault
        return this.compareDefaultHands(hand1.cards, hand2.cards);
    }

    private isFiveOfAKind(mappedCards: Record<string, number>): boolean {
        return Object.keys(mappedCards).some((key: string) => mappedCards[key] === 5);
    }

    private isFourOfAKind(mappedCards: Record<string, number>): boolean {
        return Object.keys(mappedCards).some((key: string) => mappedCards[key] === 4);
    }

    private isFullHouse(mappedCards: Record<string, number>): boolean {
        return this.isThreeOfAKind(mappedCards) && this.isSinglePair(mappedCards);
    }

    private isThreeOfAKind(mappedCards: Record<string, number>): boolean {
        return Object.keys(mappedCards).some((key: string) => mappedCards[key] === 3);
    }

    private isDoublePair(mappedCards: Record<string, number>): boolean {
        const keys = Object.keys(mappedCards);
        // Au moins une paire, et s'il y a 3 clés, revient à dire :
        // 1 paire, 1 autre paire, et 1 carte qui traîne
        return keys.length === 3 && keys.some((key: string) => mappedCards[key] === 2);
    }

    private isSinglePair(mappedCards: Record<string, number>): boolean {
        return Object.keys(mappedCards).some((key: string) => mappedCards[key] === 2);
    }

    /**
     * Compare 2 mains composées chacune de 5 cartes différentes
     * @param hand1 Première main à comparer
     * @param hand2 Deuxième main à comparer
     * @returns 1 si la première a plus de valeur ; -1 si c'est la seconde ; 0 si elles sont égales
     */
    private compareDefaultHands(cards1: string, cards2: string): number {
        const comparisonTable = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

        for (let i = 0; i < cards1.length; i++) {
            const comparison = comparisonTable.indexOf(cards1[i]) - comparisonTable.indexOf(cards2[i]);
            if (comparison !== 0) {
                return comparison;
            }
        }

        return 0;
    }
}
