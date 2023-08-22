import {ApiPagination} from "../../../core/entities/types/pagination";


export interface FunixBotUserExp {
    id: string;
    createdAt: Date;
    updatedAt: Date | null;
    twitchUserId: string;
    xp: number;
    xpNextLevel: number;
    level: number;
    lastMessageDateSeconds: number;
}

export interface ApiFunixBotUserExpResponse extends ApiPagination {
    content: FunixBotUserExp[];
}