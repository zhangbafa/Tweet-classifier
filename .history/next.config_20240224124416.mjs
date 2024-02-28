/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        //http://img.ttbaojia.com/emoji/zany_face_3d.png
        remotePatterns:[{
            protocol:'http',
            hostname:'mg.ttbaojia.com',
            port:'',
            pathname:'emoji'
        }]
    }
};

export default nextConfig;
