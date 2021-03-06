import React from 'react'
import {Header, FormField, TextArea, CheckBoxGroup} from 'grommet'
import {withTranslation} from 'react-i18next'
import {AUTHORIZATIONS} from '../../pdf/pdf-document.js'

const Authorizations = ({fields, t}) => {
  return (
    <>
      <Header level={1}>{t('iOrWeAuthorize')}</Header>
      <FormField name="authorizations" validate={value => true}>
        <CheckBoxGroup
          name="authorizations"
          options={Object.values(AUTHORIZATIONS).map(authorizations => ({
            label: t(authorizations),
            value: authorizations
          }))}
          labelKey="label"
          valueKey="value"
        />
      </FormField>
      {fields.authorizations.includes('additionalPowers') && (
        <>
          <Header level={1}>{t('pleaseDescribe')}</Header>
          <FormField
            name="additionalPowers"
            validate={value =>
              !value && {
                message: t('additionalPowersError'),
                status: 'error'
              }
            }
          >
            <TextArea name="additionalPowers" />
          </FormField>
        </>
      )}
    </>
  )
}

const mapFormStateToFields = ({authorizations, additionalPowers}) => ({
  authorizations,
  additionalPowers
})

const mapFieldsToFormState = ({authorizations, additionalPowers}) => ({
  authorizations,
  additionalPowers
})

export default {
  mapFormStateToFields,
  mapFieldsToFormState,
  component: withTranslation()(Authorizations)
}
