import {
  isEmpty,
  isFunction,
  isNumber,
  isPlainObject,
  isString,
  toArray,
} from '@rmc-vant/utils';
import clsx from 'clsx';
import { Field } from 'rc-field-form';
import type { RuleObject } from 'rc-field-form/es/interface';
import React from 'react';
import { getDataOrAriaProps } from '../_utils';
import { cellClassNames } from '../cell';
import { composeFormItemSlotClassNames } from './classNames';
import { useFormContext } from './context';
import type { FormItemComponentState, FormItemProps } from './interface';
import {
  FormItemControl,
  FormItemHelp,
  FormItemHelpError,
  FormItemLabel,
  FormItemRoot,
} from './styles';

const getFormRequired = (rules: FormItemProps['rules']) => {
  return rules?.find((item) => {
    if (isPlainObject(item)) {
      return (item as RuleObject).required;
    }

    return false;
  });
};

const getFormItemName = (name: FormItemProps['name']): string => {
  if (!name) {
    return '';
  }

  if (isString(name) || isNumber(name)) {
    return String(name);
  }

  return name.map(getFormItemName).filter(Boolean).join('-');
};

const mergeChildProps = (
  childrenProps: Record<string, any>,
  controlProps: Record<string, any>,
  trigger: string,
  valuePropName: string,
) => {
  const props = { ...controlProps };

  if (valuePropName && valuePropName in childrenProps) {
    props[valuePropName] = childrenProps[valuePropName];
  }

  if (trigger) {
    const originTriggerFunc = props[trigger];
    props[trigger] = (...args: any) => {
      if (isFunction(originTriggerFunc)) {
        originTriggerFunc(...args);
      }

      childrenProps[trigger]?.(...args);
    };
  }

  return props;
};

const Item = React.forwardRef<HTMLDivElement, FormItemProps>(
  (
    {
      className,
      label,
      labelAlign,
      children,
      required,
      help,
      htmlFor,
      shouldUpdate,
      noStyle,
      requiredMark,
      sx,
      extra,
      labelWidth = '6.2rem',
      trigger = 'onChange',
      valuePropName = 'value',
      ...props
    },
    ref,
  ) => {
    const formCtx = useFormContext();

    const fieldId = [formCtx.name, getFormItemName(props.name)]
      .filter(Boolean)
      .join('_');

    const internalRequired = required ?? getFormRequired(props.rules);
    const internalLabelAlign = formCtx?.labelAlign;
    const internalRequiredMark = formCtx?.labelAlign ?? requiredMark;
    const internalLabelWidth = formCtx?.labelWidth ?? labelWidth;

    return (
      <Field {...props} trigger={trigger} shouldUpdate={shouldUpdate}>
        {(controlProps, meta, inst) => {
          if (isFunction(children)) {
            return children(inst);
          }
          const childrenProps = React.isValidElement(children) ? children.props : {};
          const disabled = !!(childrenProps.disabled ?? formCtx.disabled);

          const content = React.isValidElement(children)
            ? React.cloneElement(children, {
              ...mergeChildProps(
                childrenProps,
                controlProps,
                trigger,
                valuePropName,
              ),
              // @ts-ignore
              disabled,
              id: isEmpty(fieldId) ? undefined : fieldId,
            })
            : children;

          if (noStyle) {
            return content;
          }

          const { errors } = meta;
          const componentState: FormItemComponentState = {
            labelAlign: internalLabelAlign ?? 'left',
            required: !!(internalRequired && !!internalRequiredMark),
            status: errors.length > 0 ? 'error' : undefined,
          };
          const slotClassNames = composeFormItemSlotClassNames(componentState);

          return (
            <FormItemRoot
              className={clsx(className, slotClassNames.root)}
              componentState={componentState}
              ref={ref}
              title={(
                <FormItemLabel
                  componentState={componentState}
                  className={slotClassNames.label}
                  htmlFor={htmlFor ?? fieldId}
                  title={isString(label) ? label : undefined}
                >
                  {label}
                </FormItemLabel>
              )}
              sx={[
                ({ theme }) => ({
                  [`.${cellClassNames.title}`]: {
                    flexBasis: internalLabelWidth,
                    flexGrow: 'unset',
                    color: theme.palette.gray700,
                    lineHeight: '32px',
                  },
                }),
                {
                  [`.${cellClassNames.value}`]: {
                    justifyContent: 'start',
                    textAlign: 'left',
                  },
                },
                ...toArray(sx),
              ]}
              {...getDataOrAriaProps(props)}
            >
              <FormItemControl
                componentState={componentState}
                className={slotClassNames.control}
              >
                <div className={slotClassNames.controlInput}>{content}</div>
                {!isEmpty(help)
                || (errors.length > 0 && (
                  <FormItemHelp
                    componentState={componentState}
                    className={slotClassNames.help}
                  >
                    {isEmpty(help)
                      ? (
                          <>
                            {errors.map(err => (
                              <FormItemHelpError
                                key={err}
                                role='alert'
                                componentState={componentState}
                                className={slotClassNames.helpError}
                              >
                                {err}
                              </FormItemHelpError>
                            ))}
                          </>
                        )
                      : (
                          help
                        )}
                  </FormItemHelp>
                ))}
                {extra}
              </FormItemControl>
            </FormItemRoot>
          );
        }}
      </Field>
    );
  },
);

export default Item;
