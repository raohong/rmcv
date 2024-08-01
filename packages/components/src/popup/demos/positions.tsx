import { useState } from 'react';
import type { PopupPosition } from 'rmc-vant';
import { Cell, Popup } from 'rmc-vant';

export default () => {
  const [open, set] = useState(false);
  const [pos, setPos] = useState<PopupPosition>('top');
  const positions = ['top', 'left', 'right', 'bottom', 'center'] as const;

  return (
    <>
      {positions.map(item => (
        <Cell
          key={item}
          onClick={() => {
            set(true);
            setPos(item);
          }}
          title={item}
          isLink
          clickable
        />
      ))}
      <Popup open={open} position={pos} closeable onClose={() => set(false)}>
        {'top-bottom'.includes(pos)
          ? (
              <div style={{ height: 200, width: '100vw', padding: 24 }}>内容</div>
            )
          : (
              <div style={{ height: 200, width: '60vw', padding: 24 }}>内容</div>
            )}
      </Popup>
    </>
  );
};
