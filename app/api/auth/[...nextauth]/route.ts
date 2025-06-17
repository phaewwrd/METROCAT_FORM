import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import  { PrismaClient}  from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const authOptions = {
    providers:[
        CredentialsProvider({
            name : 'Creaditentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter your username" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" }
            },
            async authorize(credentials, req) {
                if(!credentials) return null;
                const user = await prisma.user.findUnique({
                    where: { username: credentials.username }
                })

                if (!user) {
                    throw new Error('No user found with the given username');
                }
                if(user){
                    const isValidPassword = await bcrypt.compare(credentials.password, user.password);
                    if (!isValidPassword) {
                        throw new Error('Invalid password');
                    }
                    return { id: user.id, username: user.username };
                }else{
                    throw new Error('Invalid Wsername or Password');
                }
            }
        })
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    callbacks:{
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.username = token.username;
            }
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}



// export async function POST(request: Request) {
//     try {
//         const { username, password, confirmPassword } = await request.json();
//         if (!username || !password || !confirmPassword) {
//             return NextResponse.json({ success: false, message: 'All fields are required' },{ status: 400 });
//         }
//         if (password !== confirmPassword) {
//             return NextResponse.json({ success: false, message: 'Passwords do not match' },{ status: 400 });
//         }
//         const existingUser = await prisma.user.findUnique({ where: { username } });
//         if (existingUser) {
//             return NextResponse.json({ success: false, message: 'Username already in use' },{ status: 400 });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = await prisma.user.create({
//             data: {
//                 username,
//                 password: hashedPassword,
//             },
//         });
//         return NextResponse.json({ success: true, message: 'Account created successfully', user: { id: newUser.id, username: newUser.username } }, { status: 201 });
//     } catch (error) {
//         console.error("Error in signup route:", error);
//         return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
        
//     }
// }