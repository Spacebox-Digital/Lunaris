import {
    gapSpacingClass,
    flexDirectionClass,
    alignmentClass,
    flexWrapClass,
    gridColumnsClass,
} from '~/utils/utils.js';

interface StackProps {
    bgColor?: string;
    border?: string;
    margin?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    padding?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    display?: string;
    columns?: number | string;
    rows?: number | string;
    direction?: string | string;
    align?: string;
    justify?: string;
    wrap?: string;
    gap?: number | string;
}

const Stack = ({
    bgColor = '',
    border = '',
    margin = '',
    padding = '',
    marginTop = '',
    marginRight = '',
    marginBottom = '',
    marginLeft = '',
    paddingTop = '',
    paddingRight = '',
    paddingBottom = '',
    paddingLeft = '',
    display = 'flex',
    columns = 1,
    rows = 1,
    direction = 'row',
    align = 'center',
    justify = 'center',
    wrap = 'wrap',
    gap = 4,
    children,
}: StackProps & {children: React.ReactNode}) => {
    const displayClass = display ? display : 'flex';
    const flexDirClass = flexDirectionClass({direction: direction});
    const alignItemsClass = alignmentClass({type: 'items'}, {align: align});
    const justifyContentClass = alignmentClass(
        {type: 'justify'},
        {align: justify},
    );
    const flexWClass = flexWrapClass({wrap: wrap});
    const gapClass = gapSpacingClass({gap: gap});

    const columnsClass = gridColumnsClass({columns: columns});

    // console.log('gap, gapClass', gap, gapClass);

    return (
        <div
            className={`${displayClass} ${
                display === 'flex' ? flexDirClass : ''
            } ${alignItemsClass} ${justifyContentClass} ${flexWClass} ${gapClass} ${columnsClass} ${padding} ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft} ${margin} ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} ${border} ${bgColor}`}
        >
            {children}
        </div>
    );
};
export default Stack;
