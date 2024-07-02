import {Fragment, useState} from 'react';
import {Tab} from '@headlessui/react';

import {Container, Link, ThreeTilesRow} from '~/components';

import {Schema} from './TabbedThreeTiles.schema';
import {TabbedThreeTilesTabs} from './TabbedThreeTilesTabs';
import type {TabbedThreeTilesCms} from './TabbedThreeTiles.types';

export function TabbedThreeTiles({cms}: {cms: TabbedThreeTilesCms}) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const {button, heading, section, tabs} = cms;
    const {aspectRatio, fullWidth, textColor} = {...section};
    const maxWidthClass = fullWidth
        ? 'max-w-none'
        : 'max-w-[var(--content-max-width)]';

    console.log('cms in tabbed three tiles', cms);

    return (
        <Container container={cms.container}>
            <div className={`lg:px-contained py-contained`}>
                {heading && (
                    <h2
                        className={`text-h2 text-center`}
                        style={{color: textColor}}
                    >
                        {heading}
                    </h2>
                )}

                <Tab.Group
                    as="div"
                    className={`mx-auto`}
                    selectedIndex={activeTabIndex}
                    onChange={setActiveTabIndex}
                >
                    <TabbedThreeTilesTabs
                        activeTabIndex={activeTabIndex}
                        maxWidthClass={maxWidthClass}
                        tabs={tabs}
                        textColor={textColor}
                    />

                    <Tab.Panels as={Fragment}>
                        {tabs?.length > 0 &&
                            tabs.map(({tiles}, index) => {
                                return (
                                    <Tab.Panel as={Fragment} key={index}>
                                        <ThreeTilesRow
                                            aspectRatio={aspectRatio}
                                            maxWidthClass={maxWidthClass}
                                            textColor={textColor}
                                            tiles={tiles}
                                        />
                                    </Tab.Panel>
                                );
                            })}
                    </Tab.Panels>
                </Tab.Group>

                {button?.text && (
                    <div className={`mt-10 flex flex-col items-center`}>
                        <Link
                            aria-label={button.text}
                            className={`${section?.buttonStyle || 'btn-primary'}`}
                            to={button.url}
                            newTab={button.newTab}
                            type={button.type}
                        >
                            {button.text}
                        </Link>
                    </div>
                )}
            </div>
        </Container>
    );
}

TabbedThreeTiles.displayName = 'TabbedThreeTiles';
TabbedThreeTiles.Schema = Schema;
