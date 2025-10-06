import { createClient, type RedisClientType } from "redis";
import type { MessageToEngine } from "./types/MessageToEngine.js";
import type { MessageFromEngine } from "./types/MessageFromEngine.js";

export class RedisManager {
private static instance: RedisManager;
private client: RedisClientType;
private publisher: RedisClientType;

private constructor() {
    this.client = createClient();
    this.client.connect();
    this.publisher = createClient();
    this.publisher.connect();
}

public static getInstance(): RedisManager {
    if (!RedisManager.instance) {
        RedisManager.instance = new RedisManager();
    }
    return RedisManager.instance;
}

public sendAndAwait(message: MessageToEngine ) {
    return new Promise<MessageFromEngine>((resolve) => {
        const id = this.getRandomId();
        this.client.subscribe(id, (message) => {        
                this.client.unsubscribe(id);
                resolve(JSON.parse(message))
        })
        this.publisher.publish("messages", JSON.stringify(message))
    })
}

public getRandomId(): string {
    return Math.random().toString(36).substring(2, 9) +  Math.random().toString(36).substring(2, 9);
}

}
