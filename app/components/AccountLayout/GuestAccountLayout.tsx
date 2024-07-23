export function GuestAccountLayout({children}: {children: React.ReactNode}) {
    return (
        <section className={` `} data-comp={GuestAccountLayout.displayName}>
            {children}
        </section>
    );
}

GuestAccountLayout.displayName = 'AccountLayout.Guest';
