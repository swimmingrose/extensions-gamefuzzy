import {
  Button,
  NavigationButton,
  SourceStateManager
} from 'paperback-extensions-common'
import { LangCode } from './MangaPlusHelper'

export const getLanguages = async (
  stateManager: SourceStateManager
): Promise<string[]> => {
  return ((await stateManager.retrieve('languages')) as string[]) || ['en']
}

export const getSplitImages = async (
  stateManager: SourceStateManager
): Promise<boolean> => {
  return ((await stateManager.retrieve('splitImages')) as boolean) || true
}

export const getResolution = async (
  stateManager: SourceStateManager
): Promise<string[]> => {
  return (
    ((await stateManager.retrieve('imageResolution')) as string[]) || ['High']
  )
}

export const contentSettings = (
  stateManager: SourceStateManager
): NavigationButton => {
  return createNavigationButton({
    id: 'content_settings',
    value: '',
    label: 'Content Settings',
    form: createForm({
      onSubmit: (values: any) => {
        return Promise.all([
          stateManager.store('languages', values.languages),
          stateManager.store('splitImages', values.splitImages),
          stateManager.store('imageResolution', values.imageResolution)
        ]).then()
      },
      validate: () => {
        return Promise.resolve(true)
      },
      sections: () => {
        return Promise.resolve([
          createSection({
            id: 'content',
            rows: () => {
              return Promise.all([
                getLanguages(stateManager),
                getSplitImages(stateManager),
                getResolution(stateManager)
              ]).then(async (values) => {
                return [
                  createSelect({
                    id: 'languages',
                    label: 'Languages',
                    options: LangCode,
                    displayLabel: (option) => {
                      switch (option) {
                        case 'en':
                          return 'English'

                        case 'es':
                          return 'Español'

                        case 'fr':
                          return 'French'

                        case 'id':
                          return 'Bahasa (IND)'

                        case 'pt':
                          return 'Portugûes (BR)'

                        case 'ru':
                          return 'Русский'

                        case 'th':
                          return 'ภาษาไทย'

                        default:
                          return ''
                      }
                    },
                    value: values[0],
                    allowsMultiselect: true,
                    minimumOptionCount: 1
                  }),
                  createSwitch({
                    id: 'splitImages',
                    label: 'Split double pages',
                    value: values[1]
                  }),
                  createSelect({
                    id: 'imageResolution',
                    label: 'Image resolution',
                    options: ['Low', 'High', 'Super High'],
                    displayLabel: (option) => option,
                    value: values[2]
                  })
                ]
              })
            }
          })
        ])
      }
    })
  })
}

export const resetSettings = (stateManager: SourceStateManager): Button => {
  return createButton({
    id: 'reset',
    label: 'Reset to Default',
    value: '',
    onTap: () => {
      return Promise.all([
        stateManager.store('languages', null),
        stateManager.store('splitImages', null),
        stateManager.store('imageResolution', null)
      ])
    }
  })
}
