/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        //http://img.ttbaojia.com/emoji/zany_face_3d.png
        // domains:''
        remotePatterns:[{
            protocol:'http',
            hostname:'img.ttbaojia.com',
            port:'',
            pathname:'/emoji/**'
        }]
    }

};

export default nextConfig;
