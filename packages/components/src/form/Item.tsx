import classNames from 'classnames';
import React from 'react';
import { Field } from 'rc-field-form';
import type { RuleObject } from 'rc-field-form/es/interface';
import {
  isEmpty,
  isPlainObject,
  isString,
  isNumber,
  isFunction,
} from '@rmc-vant/utils';
import { useConfigContext } from '../config-provider';
import { getDataOrAriaProps } from '../_utils';
import { Cell } from '../cell';
import { useFormContext } from './context';
import type { FormItemProps } from './interface';

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

  return name.map(getFormItemName).join('-');
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
      style,
      label,
      labelAlign,
      children,
      required,
      labelWidth,
      help,
      htmlFor,
      shouldUpdate,
      noStyle,
      trigger = 'onChange',
      valuePropName = 'value',
      ...props
    },
    ref,
  ) => {
    const formCtx = useFormContext();
    const { getPrefixCls } = useConfigContext();

    const cls = getPrefixCls('form-item');
    const fieldId = [formCtx.name, getFormItemName(props.name)]
      .filter(Boolean)
      .join('_');

    const internalRequired = required ?? getFormRequired(props.rules);
    const internalLabelWidth = labelWidth ?? formCtx?.labelWidth;
    const internalLabelAlign = formCtx.labelAlign;

    const renderChild = (style?: boolean) => (
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
                disabled,
                id: fieldId,
              })
            : children;

          if (!style) {
            return content;
          }

          const { errors } = meta;

          return (
            <>
              <div className={`${cls}-control-input`}>{content}</div>
              {!isEmpty(help) ||
                (errors.length > 0 && (
                  <div className={`${cls}-help`}>
                    {isEmpty(help) ? (
                      <>
                        {errors.map((err) => (
                          <div
                            key={err}
                            role="alert"
                            className={`${cls}-help-error`}
                          >
                            {err}
                          </div>
                        ))}
                      </>
                    ) : (
                      help
                    )}
                  </div>
                ))}
            </>
          );
        }}
      </Field>
    );

    if (shouldUpdate) {
      return renderChild();
    }

    return (
      <Cell
        ref={ref}
        style={style}
        className={classNames(cls, className)}
        titleClassName={classNames(`${cls}-label`, {
          [`${cls}-required`]: internalRequired,
          [`${cls}-align-${internalLabelAlign}`]:
            internalLabelAlign === 'center' || internalLabelAlign === 'right',
          [`${cls}-no-required-mark`]: !formCtx?.requiredMark,
        })}
        title={
          !isEmpty(label) &&
          !noStyle && (
            <>
              <label
                htmlFor={htmlFor ?? fieldId}
                title={isString(label) ? label : undefined}
              >
                {label}
              </label>
            </>
          )
        }
        titleStyle={{
          width: internalLabelWidth,
        }}
        {...getDataOrAriaProps(props)}
      >
        <div className={`${cls}-control`}>{renderChild(true)}</div>
      </Cell>
    );
  },
);

export default Item;
