import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Om Oss | Addicted Rehab",
    description: "Möt teamet på Addicted Rehab - diplomerade A-terapeuter med egen erfarenhet av beroendesjukdom.",
};

export default function OmOssLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
