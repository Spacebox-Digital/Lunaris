import {Container, Link, ThreeTilesRow} from '~/components';

import type {ThreeTilesCms} from './ThreeTiles.types';
import {Schema} from './ThreeTiles.schema';

export function ThreeTiles({cms}: {cms: ThreeTilesCms}) {
  const {button, heading, section, tiles} = cms;
  const {aspectRatio, fullWidth, textColor} = {...section};

  const maxWidthClass = fullWidth
    ? 'max-w-none'
    : 'max-w-[var(--content-max-width)]';

  return (
    <Container container={cms.container}>
      <div className={`lg:px-contained py-contained`}>
        {heading && (
          <h2 className={`text-h2 text-center`} style={{color: textColor}}>
            {heading}
          </h2>
        )}

        <ThreeTilesRow
          aspectRatio={aspectRatio}
          maxWidthClass={maxWidthClass}
          textColor={textColor}
          tiles={tiles}
        />

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

ThreeTiles.displayName = 'ThreeTiles';
ThreeTiles.Schema = Schema;
