import { MessageEmbed, Message, User } from 'discord.js';

interface optionType {
    title?: string;
    color?: string;
    gameOverTitle?: string;
    timestamp?: boolean;
}
  
export default class SnakeGame {
    gameEmbed: MessageEmbed;
    inGame: boolean;
    score: number;
    snake: any;
    snakeLength: number;
    options: optionType;
    
    public constructor(options: optionType);
    
    public gameBoardToString(): string;
    public isLocInSnake(pos: any): any;
    public newAppleLoc(): void;
    public newGame(msg: Message): void;
    public step(): void;
    public gameOver(): void;
    public filter(reaction: any, user: User): boolean;
    public waitForReaction(): void;
    
    public setTitle(title: string): any;
    public setGameOverTitle(title: string): any;
    public setColor(color: string): any;
    public setTimestamp(): any;
}