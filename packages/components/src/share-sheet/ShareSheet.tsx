import classNames from 'classnames';
import { isArray, isString } from 'lodash';
import React, { memo } from 'react';
import { useConfigContext } from '../config-provider';
import Popup from '../popup';
import ScrollView from '../scroll-view';
import { getDataOrAriaProps, isEmpty } from '../_utils';
import { ShareSheetIconName, ShareSheetOption, ShareSheetProps } from './type';

const iconMap: Record<ShareSheetIconName, string> = {
  [ShareSheetIconName.LINK]: 'https://img.yzcdn.cn/vant/share-sheet-link.png',
  [ShareSheetIconName.POSTER]:
    'https://img.yzcdn.cn/vant/share-sheet-poster.png',
  [ShareSheetIconName.QQ]: 'https://img.yzcdn.cn/vant/share-sheet-qq.png',
  [ShareSheetIconName.QRCODE]:
    'https://img.yzcdn.cn/vant/share-sheet-qrcode.png',
  [ShareSheetIconName.WEAPP_QRCODE]:
    'https://img.yzcdn.cn/vant/share-sheet-weapp-qrcode.png',
  [ShareSheetIconName.WECHAT]:
    'https://img.yzcdn.cn/vant/share-sheet-wechat.png',
  [ShareSheetIconName.WECHAT_MOMENTS]:
    'https://img.yzcdn.cn/vant/share-sheet-wechat-moments.png',
  [ShareSheetIconName.WEIBO]: 'https://img.yzcdn.cn/vant/share-sheet-weibo.png',
};

const ShareSheet: React.FC<ShareSheetProps> = ({
  title,
  description,
  options,
  onSelect,
  onBeforeClose,
  onCancel,
  visible,
  onClose,
  onOverlayClick,
  overlayClassName,
  overlayClosable,
  afterVisibleChange,
  overlayStyle,
  className,
  round = true,
  lazyRender = true,
  overlay = true,
  safeArea = true,
  lockScroll = true,
  cancelText = '取消',
  ...rest
}) => {
  const { getPrefixCls } = useConfigContext();
  const baseCls = getPrefixCls('share-sheet');

  const handleClose = () => {
    onClose?.();
  };

  const handleClick = async (option: ShareSheetOption, index: number) => {
    onSelect?.(option, index);

    const result = await onBeforeClose?.(option);
    if (result !== false) {
      handleClose();
    }
  };

  const renderIcon = (icon: React.ReactNode) => {
    const cls = `${baseCls}-option-icon`;

    if (isString(icon)) {
      if (
        iconMap[icon as unknown as ShareSheetIconName] ||
        /\.(png|jpe?g|gif|svg)/.test(icon)
      ) {
        return (
          <img
            alt=""
            className={cls}
            src={iconMap[icon as unknown as ShareSheetIconName] ?? icon}
          />
        );
      }
    }

    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        className: classNames(icon.props.className, cls),
      });
    }

    return (
      <div className={classNames(cls, `${baseCls}-only-text`)}>{icon}</div>
    );
  };

  const renderOptions = () => {
    if (!options) {
      return null;
    }

    const target = (
      isArray(options[0]) ? options : [options]
    ) as ShareSheetOption[][];

    return target.map((list, index) => (
      <ScrollView
        className={`${baseCls}-option-list`}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        horizontal
        bounces
        decay
      >
        {list.map((item, i) => (
          <button
            className={classNames(`${baseCls}-option`, item.className)}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            type="button"
            onClick={() => handleClick(item, index)}
          >
            {renderIcon(item.icon)}
            <h4 className={`${baseCls}-option-name`}>{item.name}</h4>
            {!isEmpty(item.description) && (
              <p className={`${baseCls}-option-description`}>
                {item.description}
              </p>
            )}
          </button>
        ))}
      </ScrollView>
    ));
  };

  const renderCancelBtn = () => {
    if (cancelText) {
      return (
        <button
          type="button"
          className={`${baseCls}-cancel`}
          onClick={() => {
            onCancel?.();
            handleClose();
          }}
        >
          {cancelText}
        </button>
      );
    }

    return null;
  };

  return (
    <Popup
      visible={visible}
      onClose={onClose}
      overlay={overlay}
      overlayClassName={overlayClassName}
      overlayClosable={overlayClosable}
      overlayStyle={overlayStyle}
      onOverlayClick={onOverlayClick}
      round={round}
      afterVisibileChange={afterVisibleChange}
      lazyRender={lazyRender}
      lockScroll={lockScroll}
      safeArea={safeArea}
      position="bottom"
      className={classNames(baseCls, className)}
      {...getDataOrAriaProps(rest)}
    >
      <div className={`${baseCls}-header`}>
        {!isEmpty(title) && <h3 className={`${baseCls}-title`}>{title}</h3>}
        {!isEmpty(description) && (
          <div className={`${baseCls}-description`}>{description}</div>
        )}
      </div>
      <div className={`${baseCls}-options`}>{renderOptions()}</div>
      {renderCancelBtn()}
    </Popup>
  );
};

export default memo(ShareSheet);