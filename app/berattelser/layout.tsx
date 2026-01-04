import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Berättelser & Recensioner | Addicted Rehab",
    description: "Läs berättelser från tidigare klienter som har genomgått behandling på Addicted Rehab.",
};

export default function BerattelerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
