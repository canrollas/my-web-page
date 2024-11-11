/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    }
    ,
    async rewrites() {
        return [
            {
                source: "/canrollasprofile",
                destination: "https://avatars.githubusercontent.com/u/57571385?v=4",
            },
            {
                source: "/github-stats",
                destination: "https://komarev.com/ghpvc/?username=yourusername&color=brightgreen&style=flat-square",
            },
            {
                source: "/rollasback",
                destination: "https://raw.githubusercontent.com/CodeWikiOrg/RollAsBack/refs/heads/main/RollAsBackLogo.png",
            },
            {
                source: "/lpr",
                destination: "https://raw.githubusercontent.com/canrollas/Turkish_LPR/refs/heads/main/yolov5/runs/train/exp4/train_batch2.jpg",
            },
        ]
    }
};

export default nextConfig;
