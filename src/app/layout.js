import {Roboto} from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/style/style.scss";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalProvider from "@/providers/GlobalProvider";
import Preloader from "@/components/Preloader/Preloader";

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ['latin'],
    display: 'swap'
});


export const metadata = {
    title: "Висока економска школа струковних студија",
    description: "Zvanični sajt Visoke ekonomske škole strukovnih studija u Zemunu. Nudimo akreditovane osnovne, specijalističke i master strukovne studije iz oblasti ekonomije, marketinga, finansija i poslovnog upravljanja.",
    keywords: ['Visoka ekonomska škola', 'Zemun', 'strukovne studije', 'ekonomija', 'marketing', 'finansije', 'poslovno upravljanje', 'studije', 'upis', 'vesss'],
    authors: [{name: 'Visoka ekonomska škola strukovnih studija'}],
    openGraph: {
        title: 'Visoka ekonomska škola strukovnih studija',
        description: 'Zvanični sajt Visoke ekonomske škole strukovnih studija u Zemunu. Informacije o upisu, studijskim programima, nastavnom osoblju i aktuelnostima.',
        url: 'https://visoka-ekonomska.edu.rs/',
        siteName: 'Visoka ekonomska škola strukovnih studija',
        images: [
            {
                url: 'https://dashboard.visoka-ekonomska.edu.rs/uploads/logo-white.png',
                width: 1200,
                height: 630,
                alt: 'Logo Visoke ekonomske škole strukovnih studija'
            }
        ],
        locale: 'sr_RS',
        type: 'website'
    }


};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${roboto.className}`}>
        <Preloader/>
        <GlobalProvider>
            {children}
            <ToastContainer/>
        </GlobalProvider>
        </body>
        </html>
    );
}
