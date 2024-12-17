declare module "next-auth" {
    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback, when using a database.
     */

    interface User {
        id: string;
        first_name: string;
        last_name: string;
        middle_name?: string | null;
        pan_no: string | null;
        email: string;
        phone_no: string;
        joining_date: string | null;
        gender: Gender;
        address: string;
        citizenship: string;
        date_of_birth: string;
        role: string;
        is_completed_verification: boolean;
    }
    /**
     * The shape of the account object returned in the OAuth providers' `account` callback,
     * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
     */
    interface Account { }

    /**
     * Returned by `useSession`, `auth`, contains information about the active session.
     */
    interface Session {
        user: {
            id: string;
            first_name: string;
            last_name: string;
            middle_name?: string | null;
            pan_no: string | null;
            email: string;
            phone_no: string;
            joining_date: string | null;
            gender: Gender;
            address: string;
            citizenship: string;
            date_of_birth: string;
            role: string;
            is_completed_verification: boolean;
        };
    }
}

import { Gender } from "@prisma/client";
// The `JWT` interface can be found in the `next-auth/jwt` submodule
import "next-auth/jwt";

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        idToken?: string
    }
}