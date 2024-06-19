import { Button, ButtonGroup, Divider, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import IconFacebook from "../Icons/Facebook";
import IconInstagram from "../Icons/Instagram";
import IconTwitter from "../Icons/Twitter";
import IconLinkedin from "../Icons/Linkedin";
import IconSpotify from "../Icons/Spotify";
import SocialMediaLink from "./SocialMediaLink";

export default function Footer() {
    return (
        <footer className="bg-[#262626] py-8 mt-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/">
                        <Image
                            src="/beije-logo.png"
                            width={75}
                            height={50} 
                            alt="beije logo"
                            className="md:mr-12"
                        />
                    </Link>
                    <p className="text-[#8e8e8e]">Arayı açmayalım!</p>
                    <p className="text-[#8e8e8e] text-sm">beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazetemiz döngü’ye abone ol!</p>
                    <div className="flex flex-col md:flex-row gap-4 mt-6 items-center">
                        <TextField label="e-mail adresin" sx={{ width: 400, '& fieldset': { borderColor: '#acacac !important' }, '& input': { color: "#acacac" }, '& label': { color: "#acacac" } }} placeholder="halide.edip@adivar.com" />
                        <Button 
                            className="bg-white text-black rounded-full px-4 shadow-xl" 
                            sx={{ 
                                width: 100,
                                height: 45
                            }}
                        >
                                Gönder
                        </Button>
                    </div>
                    <p className="mt-4 text-[#8e8e8e] text-sm">Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve beije'den haber almayı onaylıyorum.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 mt-8 md:mt-0 items-center">
                    <div className="flex flex-col gap-4">
                        <Link href="#" className="text-white">beije Ped</Link>
                        <Link href="#" className="text-white">beije Günlük Ped</Link>
                        <Link href="#" className="text-white">beije Tampon</Link>
                        <Link href="#" className="text-white">beije Store</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link href="#" className="text-white">Blog</Link>
                        <Link href="#" className="text-white">Sıkça Sorulan Sorular</Link>
                        <Link href="#" className="text-white">Biz Kimiz?</Link>
                        <Link href="#" className="text-white">Quiz</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <SocialMediaLink Icon={IconFacebook} Href="#" Name="Facebook" />
                        <SocialMediaLink Icon={IconInstagram} Href="#" Name="Instagram" />
                        <SocialMediaLink Icon={IconTwitter} Href="#" Name="Twitter" />
                        <SocialMediaLink Icon={IconLinkedin} Href="#" Name="Linkedin" />
                        <SocialMediaLink Icon={IconSpotify} Href="#" Name="Spotify" />
                    </div>
                </div>
            </div>

            <Divider className="mt-8 bg-[#8e8e8e] mx-28" />

            <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p className="text-[#8e8e8e] text-sm">2024 beije. Tüm hakları saklıdır.</p>
                <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 items-center">
                    <Link className="text-[#8e8e8e] text-sm" href="#">KVKK</Link>
                    <Link className="text-[#8e8e8e] text-sm" href="#">KVKK Başvuru Formu</Link>
                    <Link className="text-[#8e8e8e] text-sm" href="#">Üyelik Sözleşmesi</Link>
                    <Link className="text-[#8e8e8e] text-sm" href="#">Gizlilik Politikası</Link>
                    <Link className="text-[#8e8e8e] text-sm" href="#">Çerez Politikası</Link>
                    <Link className="text-[#8e8e8e] text-sm" href="#">Test Sonuçları</Link>
                </div>
                <ButtonGroup variant="text" className="text-[#8e8e8e] text-sm flex mt-4 md:mt-0">
                    <Button>EN</Button>
                    <Divider orientation="vertical" flexItem />
                    <Button>TR</Button>
                </ButtonGroup>
            </div>
        </footer>
    );
}
