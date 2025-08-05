export const formRuleVueCode = `
import * as yup from 'yup'
import {
  PHONE_REGEX,
  REPLACE_MAX_NUM_REGEX,
  REPLACE_MIN_NUM_REGEX,
  WHITE_SPACE_REGEX
} from '@/common/constant/regex'
import type { FormRule } from '@/components/Control/type'
import useLangStore from '@/stores/LangStore'

const useFormRule = () => {
  const t = useLangStore()

  const rule = t.lang.common.form.rule

  const requiredString = (message?: string): FormRule => yup.string().required(message ?? rule.required)

  const requiredNumber = (message?: string): FormRule => yup.string().required(message ?? rule.required)

  const email = (): FormRule =>
    yup.string().required(rule.required).matches(WHITE_SPACE_REGEX, rule.whiteSpace).email(rule.email)

  const password = (minLength = 6, maxLength = 20): FormRule =>
    yup
      .string()
      .required(rule.required)
      .matches(WHITE_SPACE_REGEX, rule.whiteSpace)
      .min(minLength, rule.minLength.replace(REPLACE_MIN_NUM_REGEX, String(minLength)))
      .max(maxLength, rule.maxLength.replace(REPLACE_MAX_NUM_REGEX, String(maxLength)))

  const phone = (): FormRule =>
    yup
      .string()
      .required(rule.required)
      .matches(WHITE_SPACE_REGEX, rule.whiteSpace)
      .matches(PHONE_REGEX, rule.phone)

  const minNumber = (min: number): FormRule =>
    yup
      .number()
      .typeError(rule.number)
      .required(rule.required)
      .min(min, rule.min.replace(REPLACE_MIN_NUM_REGEX, String(min)))

  const maxNumber = (max: number): FormRule =>
    yup
      .number()
      .typeError(rule.number)
      .required(rule.required)
      .max(max, rule.min.replace(REPLACE_MAX_NUM_REGEX, String(max)))

  const match = (match: string | number, message?: string): FormRule =>
    yup.lazy(() => {
      if (typeof match === 'string')
        return yup
          .string()
          .typeError(rule.match)
          .oneOf([match], message ?? rule.match)
      if (typeof match === 'number')
        return yup
          .number()
          .typeError(rule.match)
          .oneOf([match], message ?? rule.match)
      return yup.mixed().test({
        name: 'match',
        message: rule.match,
        test: () => false
      })
    })

  return { requiredString, requiredNumber, minNumber, maxNumber, email, password, phone, match, yup }
}

export default useFormRule
`

export const formRuleReactCode = `
import { FormRule } from "@/components/Control/type";
import {
  EMAIL_REGEX,
  PHONE_REGEX,
  REPLACE_MAX_NUM_REGEX,
  REPLACE_MIN_NUM_REGEX,
  WHITE_SPACE_REGEX,
} from "@/common/constant/regex";
import { useLang } from "..";

const useFormRule = () => {
  const { lang } = useLang();

  const rule = lang.common.form.rule;

  const required = (): FormRule[] => {
    return [{ required: true, message: rule.required }];
  };

  const minNumber = (min: number): FormRule[] => {
    return [
      { required: true, message: rule.required },
      { min, message: rule.min.replace(REPLACE_MIN_NUM_REGEX, String(min)) },
    ];
  };

  const maxNumber = (max: number): FormRule[] => {
    return [
      { required: true, message: rule.required },
      { max, message: rule.min.replace(REPLACE_MAX_NUM_REGEX, String(max)) },
    ];
  };

  const email = (): FormRule[] => {
    return [
      { required: true, message: rule.required },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: rule.whiteSpace },
      { email: true, pattern: EMAIL_REGEX, message: rule.email },
    ];
  };

  const password = (min = 6, max = 20): FormRule[] => {
    return [
      { required: true, message: rule.required },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: rule.whiteSpace },
      {
        minLength: min,
        message: rule.minLength.replace(REPLACE_MIN_NUM_REGEX, String(min)),
      },
      {
        maxLength: max,
        message: rule.maxLength.replace(REPLACE_MAX_NUM_REGEX, String(max)),
      },
    ];
  };

  const phone = (): FormRule[] => {
    return [
      { required: true, message: rule.required },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: rule.whiteSpace },
      { phone: true, pattern: PHONE_REGEX, message: rule.phone },
    ];
  };

  const match = (match: string): FormRule[] => {
    return [
      { required: true, message: rule.required },
      { validate: (value) => value === match || rule.confirmPassword },
    ];
  };

  return { required, minNumber, maxNumber, email, password, phone, match };
};

export default useFormRule;
`