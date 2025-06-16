import { cn } from "@/lib/utils";

type HeaderProps = {
    children: React.ReactNode;
    className?: string;
}

export default function Header({ children, className }: HeaderProps) {
    return (
        <div className={cn("flex justify-between items-center p-4", className)}>
            {children}
        </div>
    )
}