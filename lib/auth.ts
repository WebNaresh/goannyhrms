import NextAuth, { User } from "next-auth"
import { AdapterUser } from "next-auth/adapters"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { object, string } from "zod"
import { getUserFromDb } from "./auth-utils"

export const signInSchema = object({
    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),
    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
})

export const authOptions = NextAuth({
    providers: [Google, Credentials({
        credentials: {
            email: {},
            password: {},
        },
        authorize: async (credentials) => {
            try {
                const { email, password } = await signInSchema.parseAsync(credentials);
                console.log(`🚀 ~ file: auth.ts:27 ~ { email, password } :`, { email, password })

                // logic to salt and hash password

                // logic to verify if the user exists
                const user = await getUserFromDb(email, password);

                if (!user) {
                    throw new Error("Invalid credentials.");
                }

                const updated_user: User = {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    middle_name: user.middle_name,
                    pan_no: user.pan_no,
                    phone_no: user.phone_no,
                    joining_date: user.joining_date.toString(),
                    is_completed_verification: user.is_completed_verification,
                    gender: user.gender,
                    address: user?.address,
                    citizenship: user?.citizenship,
                    date_of_birth: user?.date_of_birth.toString(),
                    role: user.role,
                };
                console.log(`🚀 ~ file: auth.ts:52 ~ updated_user:`, updated_user)

                return updated_user;
            } catch (error) {
                console.error(error);
                return null;
            }
        },
    },),],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {

                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as AdapterUser & {
                id: string;
                first_name: string;
                last_name: string;
                middle_name?: string | null;
                pan_no: string | null;
                email: string;
                phone_no: string;
                joining_date: string | null;
                is_completed_verification: boolean;
            };
            return session;
        },
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },
    }
})

export const { handlers, signIn, signOut, auth } = authOptions;

// export async function userAuth() {
//     return await getServerSession(authOptions);
// }
