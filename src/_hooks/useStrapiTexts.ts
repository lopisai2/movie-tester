// import { getTextsModulesThunk, emptyTextsModulesThunk } from '../../store/texts/thunks'
// import { useEffect, useState } from 'react'
// import { flattenObjectData } from '@/_helpers/objectHelpers'

// //Por el momento el idioma es fijo, pero deberia de extraerse desde la store cuando se implemente
// const locale = 'es'

// const useStrapiTexts = ({ pages = [], arrays = ['items'], filters, defaultHook = true, localData = [] }) => {

//     const dispatch = useAppDispatch()
//     const { activeTextsModule, globalTexts } = useAppSelector(state => state.texts)
//     const [loadingTexts, setLoadingTexts] = useState(true)
//     const [gettingTexts, setGettingTexts] = useState(true)

//     //Permite obtener los textos desde strapi para un modulo en específico, indicando la o las páginas de ese modulo
//     //un arreglo si tiene más de un arreglo cada págin ("items") o en tal caso pasar un booleano
//     //que indique que se quiera pasar los codigos a buscar en strapi en lugar de todos los del modulo EXPERIMENTAL

//     const getAllModuleTexts = async ({ localData, pages = [], arrays, filters, hasImages }) => {
//         setGettingTexts(true)
//         let codes
//         if (filters) {
//             codes = flattenObjectData({ data: localData.pages.filter(item => pages.includes(item.code)), includeArrays: arrays })
//         }
//         const data = await dispatch(getTextsModulesThunk({ locale, module: localData.module, pages, arrays, filters: codes, hasImages }))
//         setGettingTexts(false)
//         return data
//     }

//     //Permite vaciar en la store de redux el arreglo de los textos actuales de strapi
//     const emptyCurrentModulesTexts = () => {
//         dispatch(emptyTextsModulesThunk())
//     }

//     //Permite retornar el valor a partir de un codigo que está almacenado en la store, este puede ser
//     //desde el arreglo del módulo activo o del arreglo global
//     const getCurrentTextFromStore = ({ code, globalCode, upperCase = false }) => {
//         let text = ''
//         if (globalCode) text = globalTexts?.find(item => item.code === globalCode)?.value || ''
//         else text = activeTextsModule?.find(item => item.code === code)?.value || ''
//         return upperCase ? text.toUpperCase() : text
//     }

//     //Permite ejecutar por defecto al usar el custom hook para obtener los textos de strapi para el modulo o pagina del módulo
//     useEffect(() => {
//         if (!defaultHook || !localData) return
//         if (!activeTextsModule.length && gettingTexts) {
//             getAllModuleTexts({ localData, pages, arrays, filters })
//         }
//         if (activeTextsModule.length && !gettingTexts) {
//             setLoadingTexts(false)
//         }

//         return () => {
//             if (activeTextsModule?.length && !gettingTexts) {
//                 emptyCurrentModulesTexts()
//             }
//         }
//     }, [activeTextsModule, gettingTexts]);


//     return {
//         locale,
//         gettingTexts,
//         loadingTexts,
//         activeTextsModule,
//         getCurrentTextFromStore,
//         getAllModuleTexts,
//         emptyCurrentModulesTexts
//     }
// }

// export default useStrapiTexts
