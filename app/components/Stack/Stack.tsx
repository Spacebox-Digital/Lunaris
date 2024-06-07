interface StackProps {
    direction?: string;
    align?: string;
    justify?: string;
    wrap?: string;
    gap?: number;
}

export function Stack({
    direction = 'row',
    align = 'center',
    justify = 'center',
    wrap = 'wrap',
    gap = 4,
    children,
}: StackProps & {children: React.ReactNode}) {
    return (
        <div
            className={`flex flex-${direction} items-${align} justify-${justify} flex-${wrap} gap-${gap}`}
        >
            {children}
        </div>
    );
}

Stack.displayName = 'Stack';
