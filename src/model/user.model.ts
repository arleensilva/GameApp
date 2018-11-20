import { Nintendo } from "./nintendo.model";

export interface User {
    nick: string,
    friendCode: string,
    uid: string,
    games: Array<Nintendo>,
    wishlist: Array<Nintendo>
}