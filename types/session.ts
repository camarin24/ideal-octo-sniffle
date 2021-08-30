import { DefaultUser } from "next-auth";

export interface Session extends DefaultUser {
    accessToken?: string
}
