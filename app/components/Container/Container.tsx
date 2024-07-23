import {
    gapSpacingClass,
    flexDirectionClass,
    alignmentClass,
    flexWrapClass,
    gridColumnsClass,
} from '~/utils/utils.js';

import type {ContainerSettings} from '~/settings/container';

export function Container({
    container,
    children,
}: {
    children: React.ReactNode;
    container: ContainerSettings;
}) {
    const {
        bgColor,
        bgColorCustom,
        desktopLayout,
        tabletLayout,
        mobileLayout,
        mobileAlign,
        tabletAlign,
        desktopAlign,
        mobileJustify,
        tabletJustify,
        desktopJustify,
        mobileMargin,
        tabletMargin,
        desktopMargin,
        mobilePadding,
        tabletPadding,
        desktopPadding,
        direction = 'row',
        align = 'center',
        justify = 'center',
        wrap = 'wrap',
        gap = 4,
        mobileGridColumns = 'grid-cols-1',
        tabletGridColumns = 'md:grid-cols-1',
        desktopGridColumns = 'lg:grid-cols-1',
        rows = 1,
    } = {...container};

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
            className={`container max-w-[100vw] ${flexDirClass} ${alignItemsClass} ${justifyContentClass} ${flexWClass} ${gapClass} ${mobileGridColumns} ${tabletGridColumns} ${desktopGridColumns} ${desktopLayout} ${tabletLayout} ${mobileLayout} ${desktopAlign} ${tabletAlign} ${mobileAlign} ${desktopJustify} ${tabletJustify} ${mobileJustify} ${desktopPadding} ${tabletPadding} ${mobilePadding} ${desktopMargin} ${tabletMargin} ${mobileMargin}`}
        >
            {children}
        </div>
    );
}

Container.displayName = 'SectionContainer';
