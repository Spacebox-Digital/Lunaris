interface FlexDirections {
    [key: string]: string;
}

export const flexDirections: FlexDirections = {
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    column: 'flex-col',
    'column-reverse': 'flex-col-reverse',
};

export const flexDirectionClass = ({direction}: {direction: string}) => {
    return flexDirections[direction];
};

interface Aligment {
    [key: string]: string;
}

export const alignment: Aligment = {
    start: 'start',
    center: 'center',
    end: 'end',
    stretch: 'stretch',
    baseline: 'baseline',
};

export const alignmentClass = (
    {type}: {type: string},
    {align}: {align: string},
) => {
    return type + '_' + alignment[align];
};

interface FlexWrap {
    [key: string]: string;
}

export const flexWrap: FlexWrap = {
    wrap: 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse',
    nowrap: 'flex-nowrap',
};

export const flexWrapClass = ({wrap}: {wrap: string}) => {
    return flexWrap[wrap];
};

interface GapSpacing {
    [key: string]: string;
    [key: number]: string;
}

export const gapSpacing: GapSpacing = {
    0: 'gap-0',
    px: 'gap-px',
    0.5: 'gap-0.5',
    1: 'gap-1',
    1.5: 'gap-1.5',
    2: 'gap-2',
    2.5: 'gap-2.5',
    3: 'gap-3',
    3.5: 'gap-3.5',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    7: 'gap-7',
    8: 'gap-8',
    9: 'gap-9',
    10: 'gap-10',
    11: 'gap-11',
    12: 'gap-12',
    14: 'gap-14',
    16: 'gap-16',
    20: 'gap-20',
    24: 'gap-24',
    28: 'gap-28',
    32: 'gap-32',
    36: 'gap-36',
    40: 'gap-40',
    44: 'gap-44',
    48: 'gap-48',
    52: 'gap-52',
    56: 'gap-56',
    60: 'gap-60',
    64: 'gap-64',
    72: 'gap-72',
    80: 'gap-80',
    96: 'gap-96',
};

export const gapSpacingClass = ({gap}: {gap: number | string}) => {
    return gapSpacing[gap];
};
