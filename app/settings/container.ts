import {COLORS} from './common';

export interface ContainerSettings {
    bgColor?: string;
    bgColorCustom?: string;
    desktopLayout?: string;
    tabletLayout?: string;
    mobileLayout?: string;
    direction?: string | string;
    wrap?: string;
    gap?: number | string;
    mobileGridColumns?: number | string;
    tabletGridColumns?: number | string;
    desktopGridColumns?: number | string;
    rows?: number | string;
    mobileAlign?: string;
    desktopAlign?: string;
    tabletAlign?: string;
    mobileJustify?: string;
    tabletJustify?: string;
    desktopJustify?: string;
    mobileMargin?: string;
    tabletMargin?: string;
    desktopMargin?: string;
    mobilePadding?: string;
    tabletPadding?: string;
    desktopPadding?: string;
}

export const containerSettings = (defaults?: ContainerSettings) => ({
    label: 'Container Settings',
    name: 'container',
    component: 'group',
    description: 'Background color, padding, margin, stacking, and gap',
    fields: [
        {
            label: 'Background Color (Theme)',
            name: 'bgColor',
            component: 'select',
            options: COLORS,
            defaultValue: defaults?.bgColor || 'var(--background)',
        },
        {
            label: 'Background Color (Custom)',
            name: 'bgColorCustom',
            component: 'color',
            description: 'Overrides the selected theme color',
        },
        {
            label: 'Layout Settings',
            name: 'layoutSettings',
            component: 'group',
            description: 'Controls the layout of the container',
            fields: [
                {
                    label: 'Layout (mobile)',
                    name: 'mobileLayout',
                    component: 'select',
                    description:
                        'Determines the mobile layout of the container',
                    options: [
                        {label: 'Block', value: 'block'},
                        {label: 'Inline', value: 'inline'},
                        {label: 'Inline Block', value: 'inline-block'},
                        {label: 'Flex Row', value: 'flex'},
                        {label: 'Flex Row Reverse', value: 'flex-row-reverse'},
                        {label: 'Flex Column', value: 'flex flex-col'},
                        {
                            label: 'Flex Column Reverse',
                            value: 'flex-col-reverse',
                        },
                        {label: 'Inline Flex', value: 'inline-flex'},
                        {label: 'Grid', value: 'grid'},
                        {label: 'Hidden', value: 'hidden'},
                    ],
                    defaultValue: defaults?.mobileLayout || 'flex',
                },
                {
                    label: 'Layout (tablet)',
                    name: 'tabletLayout',
                    component: 'select',
                    description:
                        'Determines the layout of the container for tablet',
                    options: [
                        {label: 'Block', value: 'md:block'},
                        {label: 'Inline', value: 'md:inline'},
                        {label: 'Inline Block', value: 'md:inline-block'},
                        {label: 'Flex Row', value: 'md:flex'},
                        {
                            label: 'Flex Row Reverse',
                            value: 'md:flex-row-reverse',
                        },
                        {label: 'Flex Column', value: 'md:flex flex-col'},
                        {
                            label: 'Flex Column Reverse',
                            value: 'md:flex-col-reverse',
                        },
                        {label: 'Inline Flex', value: 'md:inline-flex'},
                        {label: 'Grid', value: 'md:grid'},
                        {label: 'Hidden', value: 'md:hidden'},
                    ],
                    defaultValue: defaults?.tabletLayout || 'md:flex',
                },
                {
                    label: 'Layout (desktop)',
                    name: 'desktopLayout',
                    component: 'select',
                    description:
                        'Determines the layout of the container for desktop',
                    options: [
                        {label: 'Block', value: 'lg:block'},
                        {label: 'Inline Block', value: 'lg:inline-block'},
                        {label: 'Flex Row', value: 'md:flex'},
                        {
                            label: 'Flex Row Reverse',
                            value: 'md:flex-row-reverse',
                        },
                        {label: 'Flex Column', value: 'md:flex flex-col'},
                        {
                            label: 'Flex Column Reverse',
                            value: 'md:flex-col-reverse',
                        },
                        {label: 'Inline Flex', value: 'lg:inline-flex'},
                        {label: 'Grid', value: 'lg:grid'},
                        {label: 'Hidden', value: 'lg:hidden'},
                    ],
                    defaultValue: defaults?.desktopLayout || 'lg:flex',
                },
            ],
        },
        {
            label: 'Grid Settings',
            name: 'gridSettings',
            component: 'group',
            description: 'Controls the grid layout of the container',
            fields: [
                {
                    label: 'Grid Columns (mobile)',
                    name: 'mobileGridColumns',
                    component: 'select',
                    description: 'Number of columns in the grid on mobile',
                    options: [
                        {label: 'Auto', value: 'grid-flow-col auto-cols-fr'},
                        {label: '1', value: 'grid-cols-1'},
                        {label: '2', value: 'grid-cols-2'},
                        {label: '3', value: 'grid-cols-3'},
                        {label: '4', value: 'grid-cols-4'},
                        {label: '5', value: 'grid-cols-5'},
                        {label: '6', value: 'grid-cols-6'},
                        {label: '7', value: 'grid-cols-7'},
                        {label: '8', value: 'grid-cols-8'},
                    ],
                    defaultValue: defaults?.mobileGridColumns || '1',
                },
                {
                    label: 'Grid Columns (tablet)',
                    name: 'tabletGridColumns',
                    component: 'select',
                    description: 'Number of columns in the grid on tablet',
                    options: [
                        {
                            label: 'Auto',
                            value: 'md:grid-flow-col md:auto-cols-fr',
                        },
                        {label: '1', value: 'md:grid-cols-1'},
                        {label: '2', value: 'md:grid-cols-2'},
                        {label: '3', value: 'md:grid-cols-3'},
                        {label: '4', value: 'md:grid-cols-4'},
                        {label: '5', value: 'md:grid-cols-5'},
                        {label: '6', value: 'md:grid-cols-6'},
                        {label: '7', value: 'md:grid-cols-7'},
                        {label: '8', value: 'md:grid-cols-8'},
                    ],
                    defaultValue: defaults?.tabletGridColumns || '1',
                },
                {
                    label: 'Grid Columns (desktop)',
                    name: 'desktopGridColumns',
                    component: 'select',
                    description: 'Number of columns in the grid on desktop',
                    options: [
                        {
                            label: 'Auto',
                            value: 'lg:grid-flow-col lg:auto-cols-fr',
                        },
                        {label: '1', value: 'lg:grid-cols-1'},
                        {label: '2', value: 'lg:grid-cols-2'},
                        {label: '3', value: 'lg:grid-cols-3'},
                        {label: '4', value: 'lg:grid-cols-4'},
                        {label: '5', value: 'lg:grid-cols-5'},
                        {label: '6', value: 'lg:grid-cols-6'},
                        {label: '7', value: 'lg:grid-cols-7'},
                        {label: '8', value: 'lg:grid-cols-8'},
                        {label: '9', value: 'lg:grid-cols-9'},
                        {label: '10', value: 'lg:grid-cols-10'},
                        {label: '11', value: 'lg:grid-cols-11'},
                        {label: '12', value: 'lg:grid-cols-12'},
                    ],
                    defaultValue: defaults?.desktopGridColumns || '1',
                },
            ],
        },

        {
            label: 'Justify Settings',
            name: 'justifySettings',
            component: 'group',
            description:
                'Controls how flex and grid items are aligned along the main axis',
            fields: [
                {
                    label: 'Justify (mobile)',
                    name: 'mobileJustify',
                    component: 'select',
                    description:
                        'Controls how flex and grid items are aligned along the main axis on mobile',
                    options: [
                        {label: 'Justify Normal', value: 'justify-normal'},
                        {label: 'Justify Start', value: 'justify-start'},
                        {label: 'Justify End', value: 'justify-end'},
                        {label: 'Justify Center', value: 'justify-center'},
                        {label: 'Justify Between', value: 'justify-between'},
                        {label: 'Justify Around', value: 'justify-around'},
                        {label: 'Justify Evenly', value: 'justify-evenly'},
                        {label: 'Justify Stretch', value: 'justify-stretch'},
                    ],
                    defaultValue: defaults?.mobileJustify || 'justify-start',
                },
                {
                    label: 'Justify (tablet)',
                    name: 'tabletJustify',
                    component: 'select',
                    description:
                        'Controls how flex and grid items are aligned along the main axis on tablet',
                    options: [
                        {label: 'Justify Normal', value: 'md:justify-normal'},
                        {label: 'Justify Start', value: 'md:justify-start'},
                        {label: 'Justify End', value: 'md:justify-end'},
                        {label: 'Justify Center', value: 'md:justify-center'},
                        {label: 'Justify Between', value: 'md:justify-between'},
                        {label: 'Justify Around', value: 'md:justify-around'},
                        {label: 'Justify Evenly', value: 'md:justify-evenly'},
                        {label: 'Justify Stretch', value: 'md:justify-stretch'},
                    ],
                    defaultValue: defaults?.tabletJustify || 'md:justify-start',
                },
                {
                    label: 'Justify (desktop)',
                    name: 'desktopJustify',
                    component: 'select',
                    description:
                        'Controls how flex and grid items are aligned along the main axis on desktop',
                    options: [
                        {label: 'Justify Normal', value: 'lg:justify-normal'},
                        {label: 'Justify Start', value: 'lg:justify-start'},
                        {label: 'Justify End', value: 'lg:justify-end'},
                        {label: 'Justify Center', value: 'lg:justify-center'},
                        {label: 'Justify Between', value: 'lg:justify-between'},
                        {label: 'Justify Around', value: 'lg:justify-around'},
                        {label: 'Justify Evenly', value: 'lg:justify-evenly'},
                        {label: 'Justify Stretch', value: 'lg:justify-stretch'},
                    ],
                    defaultValue:
                        defaults?.desktopJustify || 'lg:justify-start',
                },
            ],
        },
        {
            label: 'Aligment Settings',
            name: 'alignmentSettings',
            component: 'group',
            description:
                'Controls how flex and grid items are aligned along the cross axis',
            fields: [
                {
                    label: 'Alignment (mobile)',
                    name: 'mobileAlign',
                    component: 'select',
                    description:
                        'Controls how flex and grid items are aligned along the cross axis on mobile',
                    options: [
                        {label: 'Align Start', value: 'items-start'},
                        {label: 'Align End', value: 'items-end'},
                        {label: 'Align Center', value: 'items-center'},
                        {label: 'Align Baseline', value: 'items-baseline'},
                        {label: 'Align Stretch', value: 'items-stretch'},
                    ],
                    defaultValue: defaults?.mobileAlign || 'items-start',
                },
                {
                    label: 'Alignment (tablet)',
                    name: 'tabletAlign',
                    component: 'select',
                    description:
                        'Controls how flex and grid items are aligned along the cross axis on tablet',
                    options: [
                        {label: 'Align Start', value: 'md:items-start'},
                        {label: 'Align End', value: 'md:items-end'},
                        {label: 'Align Center', value: 'md:items-center'},
                        {label: 'Align Baseline', value: 'md:items-baseline'},
                        {label: 'Align Stretch', value: 'md:items-stretch'},
                    ],
                    defaultValue: defaults?.tabletAlign || 'md:items-start',
                },
                {
                    label: 'Alignment (desktop)',
                    name: 'desktopAlign',
                    component: 'select',
                    description:
                        'Controls how flex and grid items are aligned along the cross axis on desktop',
                    options: [
                        {label: 'Align Start', value: 'lg:items-start'},
                        {label: 'Align End', value: 'lg:items-end'},
                        {label: 'Align Center', value: 'lg:items-center'},
                        {label: 'Align Baseline', value: 'lg:items-baseline'},
                        {label: 'Align Stretch', value: 'lg:items-stretch'},
                    ],
                    defaultValue: defaults?.desktopAlign || 'lg:items-start',
                },
            ],
        },
        {
            label: 'Margin Settings',
            name: 'marginSettings',
            component: 'group',
            description: 'Controls the outer margin of the container',
            fields: [
                {
                    label: 'Margin (mobile)',
                    name: 'mobileMargin',
                    component: 'select',
                    description: 'Adds margin on all sides on mobile',
                    options: [
                        {label: '0px', value: 'm-0'},
                        {label: '4px', value: 'm-1'},
                        {label: '8px', value: 'm-2'},
                        {label: '16px', value: 'm-4'},
                        {label: '24px', value: 'm-6'},
                        {label: '32px', value: 'm-8'},
                        {label: '40px', value: 'm-10'},
                        {label: '48px', value: 'm-12'},
                        {label: '64px', value: 'm-16'},
                        {label: '80px', value: 'm-20'},
                        {label: '96px', value: 'm-24'},
                        {label: '128px', value: 'm-32'},
                    ],
                    defaultValue: defaults?.mobileMargin || '0px',
                },
                {
                    label: 'Margin (tablet)',
                    name: 'tabletMargin',
                    component: 'select',
                    description: 'Adds margin on all sides on tablet',
                    options: [
                        {label: 'Inherit', value: ''},
                        {label: '0px', value: 'md:m-0'},
                        {label: '4px', value: 'md:m-1'},
                        {label: '8px', value: 'md:m-2'},
                        {label: '16px', value: 'md:m-4'},
                        {label: '24px', value: 'md:m-6'},
                        {label: '32px', value: 'md:m-8'},
                        {label: '40px', value: 'md:m-10'},
                        {label: '48px', value: 'md:m-12'},
                        {label: '64px', value: 'md:m-16'},
                        {label: '80px', value: 'md:m-20'},
                        {label: '96px', value: 'md:m-24'},
                        {label: '128px', value: 'md:m-32'},
                    ],
                    defaultValue: defaults?.tabletMargin || 'Inherit',
                },
                {
                    label: 'Margin (desktop)',
                    name: 'desktopMargin',
                    component: 'select',
                    description: 'Adds margin on all sides on desktop',
                    options: [
                        {label: 'Inherit', value: ''},
                        {label: '0px', value: 'lg:m-0'},
                        {label: '4px', value: 'lg:m-1'},
                        {label: '8px', value: 'lg:m-2'},
                        {label: '16px', value: 'lg:m-4'},
                        {label: '24px', value: 'lg:m-6'},
                        {label: '32px', value: 'lg:m-8'},
                        {label: '40px', value: 'lg:m-10'},
                        {label: '48px', value: 'lg:m-12'},
                        {label: '64px', value: 'lg:m-16'},
                        {label: '80px', value: 'lg:m-20'},
                        {label: '96px', value: 'lg:m-24'},
                        {label: '128px', value: 'lg:m-32'},
                    ],
                    defaultValue: defaults?.desktopMargin || 'Inherit',
                },
            ],
        },
        {
            label: 'Padding Settings',
            name: 'paddingSettings',
            component: 'group',
            description: 'Controls the outer padding of the container',
            fields: [
                {
                    label: 'Padding (mobile)',
                    name: 'mobilePadding',
                    component: 'select',
                    description: 'Adds padding on all sides on mobile',
                    options: [
                        {label: '0px', value: 'p-0'},
                        {label: '4px', value: 'p-1'},
                        {label: '8px', value: 'p-2'},
                        {label: '16px', value: 'p-4'},
                        {label: '24px', value: 'p-6'},
                        {label: '32px', value: 'p-8'},
                        {label: '40px', value: 'p-10'},
                        {label: '48px', value: 'p-12'},
                        {label: '64px', value: 'p-16'},
                        {label: '80px', value: 'p-20'},
                        {label: '96px', value: 'p-24'},
                        {label: '128px', value: 'p-32'},
                    ],
                    defaultValue: defaults?.mobilePadding || '0px',
                },
                {
                    label: 'Padding (tablet)',
                    name: 'tabletPadding',
                    component: 'select',
                    description: 'Adds padding on all sides on tablet',
                    options: [
                        {label: 'Inherit', value: ''},
                        {label: '0px', value: 'md:p-0'},
                        {label: '4px', value: 'md:p-1'},
                        {label: '8px', value: 'md:p-2'},
                        {label: '16px', value: 'md:p-4'},
                        {label: '24px', value: 'md:p-6'},
                        {label: '32px', value: 'md:p-8'},
                        {label: '40px', value: 'md:p-10'},
                        {label: '48px', value: 'md:p-12'},
                        {label: '64px', value: 'md:p-16'},
                        {label: '80px', value: 'md:p-20'},
                        {label: '96px', value: 'md:p-24'},
                        {label: '128px', value: 'md:p-32'},
                    ],
                    defaultValue: defaults?.tabletPadding || 'Inherit',
                },
                {
                    label: 'Padding (desktop)',
                    name: 'desktopPadding',
                    component: 'select',
                    description: 'Adds padding on all sides on desktop',
                    options: [
                        {label: 'Inherit', value: ''},
                        {label: '0px', value: 'lg:p-0'},
                        {label: '4px', value: 'lg:p-1'},
                        {label: '8px', value: 'lg:p-2'},
                        {label: '16px', value: 'lg:p-4'},
                        {label: '24px', value: 'lg:p-6'},
                        {label: '32px', value: 'lg:p-8'},
                        {label: '40px', value: 'lg:p-10'},
                        {label: '48px', value: 'lg:p-12'},
                        {label: '64px', value: 'lg:p-16'},
                        {label: '80px', value: 'lg:p-20'},
                        {label: '96px', value: 'lg:p-24'},
                        {label: '128px', value: 'lg:p-32'},
                    ],
                    defaultValue: defaults?.desktopPadding || 'Inherit',
                },
            ],
        },
    ],
});
