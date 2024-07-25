import { GridShowcase } from '@lobehub/ui';
import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flexbox
        align={'center'}
        height={'100%'}
        justify={'center'}
        padding={16}
        style={{ overflow: 'hidden', position: 'relative' }}
        width={'100%'}
      >
        <GridShowcase
          innerProps={{ gap: 24 }}
          style={{ maxHeight: 'calc(100% - 104px)', maxWidth: 1024 }}
          width={'100%'}
        >
          {children}
        </GridShowcase>
      </Flexbox>
      {/* ↓ cloud slot ↓ */}

      {/* ↑ cloud slot ↑ */}
    </>
  );
};

export default DesktopLayout;
