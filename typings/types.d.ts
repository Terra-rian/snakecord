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
     * The emoji to use as the snake head / body for the game.
     */
    snakeEmoji?: EmojiIdentifierResolvable;
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
    // boardWidth?: number;
    /**
     * How long the game board should be (5 ~ 20 units).
     */
    // boardLength?: number;
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
    private boardWidth: number;
    private boardLength: number;
    private gameBoard: string[];
    private apple: entityLocation;
    private snake: entityLocation[];
    private snakeLength: number;
    private score: number;
    private gameEmbed: Message;
    private inGame: boolean;
    private options: snakeGameOptions;

    // Constructor
    public constructor(options: snakeGameOptions);

    // Methods
    private gameBoardToString(): string;
    private isLocationInSnake(pos: entityLocation): boolean;
    private newAppleLocation(): void;
    private newGame(msg: Message): void;
    private step(): void;
    public gameOver(): void;
    private filter(reaction: EmojiIdentifierResolvable, user: User): boolean;
    private waitForReaction(): void;

    // Setters
    private setTitle(title: string): this;
    private setGameOverTitle(title: string): this;
    private setColor(color: ColorResolvable): this;
    private setTimestamp(): this;
}