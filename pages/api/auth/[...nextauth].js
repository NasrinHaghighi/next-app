import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"




export const authOptions = {
  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)


// Client ID
// a2936c688ec9f81b46fb
// GITHUB_SECRET
// 2125a7bc60086dfc8cb32e964adfcd1797ea9957


