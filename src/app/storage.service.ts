import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Game } from './model/game';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public setGame(key: string, game: Game) {
    return this._storage?.set(key, game);
  }

  public getGame(key: string) {
    return this._storage?.get(key);
  }

  public clearGame() {
    this.storage?.clear();
  }

}