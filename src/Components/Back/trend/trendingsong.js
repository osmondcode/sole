

const Trend = {
    trendingSongs: [
        {
            id: 1,
            artist: "Lil Durk",
            title: "All My Life",
            image: "https://th.bing.com/th/id/OIP.m_FQdC4j8q7z43ckQiiZAAHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://files.ceenaija.com/uploads/music/2023/05/Lil-Durk-feat-J-Cole-All-My-Life-(CeeNaija.com).mp3',
            like: 69.3,
            isLiked: false
        },
        {
            id: 2,
            artist: "Zinoleesky",
            title: "Last Time",
            image: "https://th.bing.com/th/id/OIP.hY1qH71kFah5kpFWZDo1vAHaEK?w=295&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://www.naijamusic.com.ng/wp-content/uploads/2022/12/Zinoleesky_-_Last_Time_ft_Omah_Lay__NaijaMusic.com.ng.mp3?_=1',
            like: 56.5,
            isLiked: false
        },
        {
            id: 3,
            artist: "Joeboy ft Odumodublvck",
            title: "Normally",
            image: "https://th.bing.com/th/id/OIP.9To8LTSHzI_Iq7PJWFj7VQHaJQ?w=133&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://music.audiomack.com/albums/joeboy/body-soul-2/streaming/normally__1684272654.m4a?Expires=1691180751&Signature=V8i2bPK2fmjxPCD~SEdESV809UrIp5sEwE3O1R5qL1c2Ca8q-DdX1Rxd0YdLnsNqswCb4OOdDOsERFaLWdy3DmTMhXafLDmdDfOQ1s1E-wKrkKdiv4pSrHxfHlhxVCx2R49zedw8Q1Kkvb7iordS3qiZIVLAikCGr-Ds2ll3bYc_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA',
            like: 83.9,
            isLiked: false
        },
        {
            id: 4,
            artist: "Davido",
            title: "Feel",
            image: "https://th.bing.com/th/id/OIP.CKnPFTw3IpXkxNsrLMcsMAAAAA?w=308&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://cdn.xclusiveloaded.com/wp-content/uploads/2023/03/Davido_-_Feel.mp3',
            like: 88.2,
            isLiked: false
        },
        {
            id: 5,
            artist: "Asake ft Olamide",
            title: "Amapiano",
            image: "https://th.bing.com/th/id/OIP.nqKzupExVRBbH7Qv--Iy-gHaHa?pid=ImgDet&rs=1",
            song: 'https://cdn.xclusiveloaded.com/wp-content/uploads/2023/05/Asake_Olamide_-_Amapiano.mp3',
            like: 234.5,
            isLiked: false
        },
        {
            id: 6,
            artist: "Odumodublvck",
            title: "Declan Rice",
            image: "https://th.bing.com/th/id/OIF.eqpVhAHT9UcKwtnsSoGT1Q?pid=ImgDet&rs=1",
            song: 'https://cdn.xclusiveloaded.com/wp-content/uploads/2023/03/Odumodublvck_-_Declan_Rice.mp3',
            like: 35,
            isLiked: false
        },
        {
            id: 7,
            artist: "Zinoleesky ft Adekunle",
            title: "Party No Dey Stop",
            image: "https://th.bing.com/th/id/OIP.U0sidjmppsWXNXFktVgk0QFAFe?w=142&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://cdn.xclusiveloaded.com/wp-content/uploads/2023/03/Adekunle_Gold_Ft_Zinoleesky_-_Party_No_Dey_Stop.mp3',
            like: 78.5,
            isLiked: false
        },
        {
            id: 8,
            artist: "Wizkid",
            title: "Bad To Me",
            image: "https://th.bing.com/th/id/OIP.9qd1nl-XR3jnFv66dDNs0QHaHa?w=165&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://cdn3.justnaija.me/uploads/music/2022/11/Wizkid-Bad-To-Me-fixed-1-(JustNaija.com).mp3',
            like: 43.6,
            isLiked: false
        },
        {
            id: 9,
            artist: "Zinoleeky",
            title: "Personal",
            image: "https://th.bing.com/th/id/OIP.noBu1rKx3vain_iiYLeO9wHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://cdn.xclusiveloaded.com/wp-content/uploads/2022/12/Zinoleesky_-_Personal.mp3',
            like: 87.1,
            isLiked: false
        },
        {
            id: 10,
            artist: "Zinoleesky",
            title: "Many Things",
            image: "https://th.bing.com/th/id/OIP.VJeoKrv4CF7tSAYLswGNMgHaHm?w=161&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://cdn.xclusiveloaded.com/wp-content/uploads/2023/04/Zinoleesky_-_Many_Things.mp3',
            like: 113.7,
            isLiked: false
        },
        {
            id: 11,
            artist: "Ice Spice",
            title: "In Ha Mood",
            image: "https://th.bing.com/th/id/OIP.VL3B3C4ZxySaAQKjPYalogAAAA?w=200&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://cdn3.justnaija.me/uploads/music/2023/01/Ice-Spice-In-Ha-Mood-(JustNaija.com).mp3',
            like: 143.5,
            isLiked: false
        },
        {
            id: 12,
            artist: "Lil T-Jay",
            title: "Beat The Odds",
            image: "https://th.bing.com/th/id/OIP.EotH6MYaJA_aMKrWNeYj8AAAAA?w=179&h=180&c=7&r=0&o=5&pid=1.7",
            song: 'https://naijamusics.xyz/wp-content/uploads/2022/10/Lil_Tjay_Beat_the_Odds_(NaijaMusic.NG).mp3',
            like: 24.6,
            isLiked: false
        },
    ]
}


export default Trend;