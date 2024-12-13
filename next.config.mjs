/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    NEXTAUTH_URL:process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,
    CONNECTION_STRING:process.env.CONNECTION_STRING,
    EMAIL_FROM:process.env.EMAIL_FROM,
    EMAIL_SERVER_HOST:process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT:process.env.EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER:process.env.EMAIL_SERVER_USER,
    EMIAL_SERVER_PASSWORD:process.env.EMIAL_SERVER_PASSWORD,
    GOOLGE_CLIENT_ID:process.env.GOOLGE_CLIENT_ID,
    GOOGLE_SECRET_ID:process.env.GOOGLE_SECRET_ID


  },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
        ],
      },
};



export default nextConfig;
