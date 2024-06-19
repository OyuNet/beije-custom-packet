import Link from "next/link";

export default function SocialMediaLink({
    Icon,
    Href,
    Name,
}: {
    Icon: React.FC;
    Href: string;
    Name: string;
}) {
    return (
        <div className="flex gap-2">
            <Icon />
            <Link href={Href} className="text-white">{Name}</Link>
        </div>
    );
}