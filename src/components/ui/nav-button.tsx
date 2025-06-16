"use client";

import Link from "next/link";
import routes from "@/lib/routes/routes";
import { Button, buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type NavButtonProps = {
    url: typeof routes[keyof typeof routes];
    text: string;
    variant?: VariantProps<typeof buttonVariants>["variant"];
    className?: string;
}

export default function NavButton({ url, text, variant = "default", className }: NavButtonProps) {
    const pathname = usePathname();
    const isActive = pathname === url;
    if (isActive) return null;

    return (
        <Link href={url}>
            <Button variant={variant} className={cn(className, "cursor-pointer")}>{text}</Button>
        </Link>
    )
}