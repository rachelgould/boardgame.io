import Koa from 'koa';
import * as StorageAPI from './db/base';
import { Server, Game } from '../types';
/**
 * Creates a new game.
 *
 * @param {object} db - The storage API.
 * @param {object} game - The game config object.
 * @param {number} numPlayers - The number of players.
 * @param {object} setupData - User-defined object that's available
 *                             during game setup.
 * @param {object } lobbyConfig - Configuration options for the lobby.
 * @param {boolean} unlisted - Whether the game should be excluded from public listing.
 */
export declare const CreateGame: (db: StorageAPI.Sync | StorageAPI.Async, game: Game<any, import("../types").Ctx>, numPlayers: number, setupData: any, lobbyConfig: Server.LobbyConfig, unlisted: boolean) => Promise<string>;
export declare const createApiServer: ({ db, games, lobbyConfig, generateCredentials, }: {
    db: StorageAPI.Sync | StorageAPI.Async;
    games: Game<any, import("../types").Ctx>[];
    lobbyConfig?: Server.LobbyConfig;
    generateCredentials?: Server.GenerateCredentials;
}) => Koa<Koa.DefaultState, Koa.DefaultContext>;
export declare const addApiToServer: ({ app, db, games, lobbyConfig, generateCredentials, }: {
    app: Koa<Koa.DefaultState, Koa.DefaultContext>;
    games: Game<any, import("../types").Ctx>[];
    lobbyConfig?: Server.LobbyConfig;
    generateCredentials?: Server.GenerateCredentials;
    db: StorageAPI.Sync | StorageAPI.Async;
}) => Koa<Koa.DefaultState, Koa.DefaultContext>;
