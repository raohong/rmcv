'use-client';

import { isArray, isEmpty, isString } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import {
  elementBackgroundHapticFeedback,
  elementOpacityHapticFeedback,
} from '../_styles';
import { getDataOrAriaProps } from '../_utils';
import { useThemeProps } from '../config-provider';
import { ShareSheetName, composeShareSheetSlotClassNames } from './classNames';
import type {
  ShareSheetIconName,
  ShareSheetOption,
  ShareSheetProps,
} from './interface';
import {
  ShareSheetCancelButton,
  ShareSheetDescription,
  ShareSheetHeader,
  ShareSheetOptionDescription,
  ShareSheetOptionIcon,
  ShareSheetOptionName,
  ShareSheetOptions,
  ShareSheetRoot,
  ShareSheetTitle,
  StyledShareSheetOption,
} from './styles';

const iconMap: Record<ShareSheetIconName, string> = {
  'link': 'https://img.yzcdn.cn/vant/share-sheet-link.png',
  'poster': 'https://img.yzcdn.cn/vant/share-sheet-poster.png',
  'qq': 'https://img.yzcdn.cn/vant/share-sheet-qq.png',
  'qrcode': 'https://img.yzcdn.cn/vant/share-sheet-qrcode.png',
  'weapp-qrcode': 'https://img.yzcdn.cn/vant/share-sheet-weapp-qrcode.png',
  'wechat': 'https://img.yzcdn.cn/vant/share-sheet-wechat.png',
  'wechat-moments': 'https://img.yzcdn.cn/vant/share-sheet-wechat-moments.png',
  'weibo': 'https://img.yzcdn.cn/vant/share-sheet-weibo.png',
};

const opacityHapticFeedback = elementOpacityHapticFeedback();
const bgHapticFeedback = elementBackgroundHapticFeedback();

const ShareSheet: React.FC<ShareSheetProps> = (props) => {
  const {
    title,
    description,
    options,
    onSelect,
    onBeforeClose,
    onCancel,
    onClose,
    onOverlayClick,
    overlayClosable,
    afterClose,
    className,
    open,
    sx,
    classNames,
    closeOnPopstate = true,
    round = true,
    lazyRender = true,
    overlay = true,
    safeArea = true,
    lockScroll = true,
    cancelText = '取消',
    ...rest
  } = useThemeProps(ShareSheetName, props);

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
    let content: React.ReactNode = icon;

    if (
      isString(icon)
      && (iconMap[icon as unknown as ShareSheetIconName]
      || /\.(?:png|jpe?g|gif|svg)/.test(icon))
    ) {
      content = (
        <img alt='' src={iconMap[icon as unknown as ShareSheetIconName] ?? icon} />
      );
    }

    if (isEmpty(content)) {
      return null;
    }

    return (
      <ShareSheetOptionIcon
        className={slotClassNames.optionIcon}
        componentState={componentState}
      >
        {content}
      </ShareSheetOptionIcon>
    );
  };

  const componentState = useMemo(() => ({}), []);
  const slotClassNames = composeShareSheetSlotClassNames(componentState, classNames);

  const renderOptions = () => {
    if (!options) {
      return null;
    }

    const target = (
      isArray(options[0]) ? options : [options]
    ) as ShareSheetOption[][];

    return target.map((list, index) => (
      <ShareSheetOptions
        className={slotClassNames.options}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        componentState={componentState}
      >
        {list.map((item, i) => (
          <StyledShareSheetOption
            activeStyle={opacityHapticFeedback}
            className={clsx(slotClassNames.option, item.className)}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            onClick={() => handleClick(item, index)}
            componentState={componentState}
            touchAction='pan-x'
          >
            {renderIcon(item.icon)}
            <ShareSheetOptionName
              componentState={componentState}
              className={slotClassNames.optionName}
            >
              {item.name}
            </ShareSheetOptionName>
            {!isEmpty(item.description) && (
              <ShareSheetOptionDescription
                componentState={componentState}
                className={slotClassNames.optionDescription}
              >
                {item.description}
              </ShareSheetOptionDescription>
            )}
          </StyledShareSheetOption>
        ))}
      </ShareSheetOptions>
    ));
  };

  const renderCancelBtn = () => {
    if (cancelText) {
      return (
        <ShareSheetCancelButton
          className={slotClassNames.cancelButton}
          componentState={componentState}
          onClick={() => {
            onCancel?.();
            handleClose();
          }}
          activeStyle={bgHapticFeedback}
        >
          {cancelText}
        </ShareSheetCancelButton>
      );
    }

    return null;
  };

  return (
    <ShareSheetRoot
      componentState={componentState}
      open={open}
      onClose={onClose}
      overlay={overlay}
      overlayClosable={overlayClosable}
      onOverlayClick={onOverlayClick}
      round={round}
      afterClose={afterClose}
      lazyRender={lazyRender}
      lockScroll={lockScroll}
      safeArea={safeArea}
      position='bottom'
      closeOnPopstate={closeOnPopstate}
      className={clsx(className, slotClassNames.root)}
      sx={sx}
      {...getDataOrAriaProps(rest)}
    >
      <ShareSheetHeader
        className={slotClassNames.header}
        componentState={componentState}
      >
        {!isEmpty(title) && (
          <ShareSheetTitle
            className={slotClassNames.title}
            componentState={componentState}
          >
            {title}
          </ShareSheetTitle>
        )}
        {!isEmpty(description) && (
          <ShareSheetDescription
            className={slotClassNames.description}
            componentState={componentState}
          >
            {description}
          </ShareSheetDescription>
        )}
      </ShareSheetHeader>
      {renderOptions()}
      {renderCancelBtn()}
    </ShareSheetRoot>
  );
};

export default ShareSheet;
