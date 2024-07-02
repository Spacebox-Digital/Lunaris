import {
    gapSpacingClass,
    flexDirectionClass,
    alignmentClass,
    flexWrapClass,
} from '~/utils/utils.js';

interface StackProps {
    direction?: string | string;
    align?: string;
    justify?: string;
    wrap?: string;
    gap?: number | string;
}

export function Stack({
    direction = 'row',
    align = 'center',
    justify = 'center',
    wrap = 'wrap',
    gap = 4,
    children,
}: StackProps & {children: React.ReactNode}) {
    const flexDirClass = flexDirectionClass({direction: direction});
    const alignItemsClass = alignmentClass({type: 'items'}, {align: align});
    const justifyContentClass = alignmentClass(
        {type: 'justify'},
        {align: justify},
    );
    const flexWClass = flexWrapClass({wrap: wrap});
    const gapClass = gapSpacingClass({gap: gap});

    // console.log('gap, gapClass', gap, gapClass);

    return (
        <div
            className={`flex ${flexDirClass} ${alignItemsClass} ${justifyContentClass} ${flexWClass} ${gapClass}`}
        >
            {children}
        </div>
    );
}

Stack.displayName = 'Stack';
