import { Message, User, ColorResolvable, EmojiIdentifierResolvable } from 'discord.js';

export interface snakeGameOptions {
    /**
     * The title to display on the game embed.
     */
    title?: string;
    /**
     * The title to display when the game has ended.
     */
    gameOverTitle?: string;
    /**
     * The emoji to use as the background for the game embed.
     */
    backgroundEmoji?: EmojiIdentifierResolvable;
    /**
     * The emoji to use as the fruit for the game embed.
     */
    fruitEmoji?: EmojiIdentifierResolvable;
    /**
     * Whether or not to display the timestamp on the game embed.
     */
    timestamp?: boolean;
    /**
     * The color on the side of the game embed.
     */
    color?: ColorResolvable;
    /**
     * How wide the game board should be (5 ~ 20 units).
     */
    width?: number;
    /**
     * How long the game board should be (5 ~ 20 units).
     */
    length?: number;
}

export interface entityLocation {
    /**
     * The `X` coordinate of the entity.
     */
    x: number;
    /**
     * The `Y` coordinate of the entity.
     */
    y: number;
}

export class SnakeGame {
    // Properties
    public boardWidth: number;
    public boardLength: number;
    public gameBoard: string[];
    public apple: entityLocation;
    public snake: entityLocation[];
    public snakeLength: number;
    public score: number;
    public gameEmbed: Message;
    public inGame: boolean;
    public options: snakeGameOptions;

    // Constructor
    public constructor(options: snakeGameOptions);

    // Methods
    public gameBoardToString(): string;
    public isLocInSnake(pos: entityLocation): boolean;
    public newAppleLoc(): void;
    public newGame(msg: Message): void;
    public step(): void;
    public gameOver(): void;
    public filter(reaction: EmojiIdentifierResolvable, user: User): boolean;
    public waitForReaction(): void;

    // Setters
    public setTitle(title: string): this;
    public setGameOverTitle(title: string): this;
    public setColor(color: ColorResolvable): this;
    public setTimestamp(): this;
}